import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { 
  CONTACT_EMAIL, 
  COMPANY_NAME, 
  EMAIL_FROM_NAME, 
  EMAIL_FROM_ADDRESS, 
  EMAIL_REPLY_TO,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  RESEND_API_KEY,
  CRM_API_URL,
  CRM_API_KEY,
  validateEnv 
} from "~/lib/env";

// Validazione delle variabili d'ambiente all'avvio
validateEnv();

// Inizializza Resend con la tua API key
const resend = new Resend(RESEND_API_KEY);

// Schema per validare i dati del form di contatto
const contactSchema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Seleziona un soggetto"),
  message: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri per essere inviato"),
});

export async function POST(request: NextRequest) {
  try {
    console.log("=== INIZIO RICHIESTA CONTACT API ===");
    
    const body = await request.json() as unknown;
    console.log("Body ricevuto:", JSON.stringify(body, null, 2));
    
    // Validazione dei dati
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.log("❌ Validazione fallita:");
      console.log("Errori di validazione:", JSON.stringify(validationResult.error.errors, null, 2));
      
      // Crea messaggi di errore più user-friendly
      const errorMessages = validationResult.error.errors.map(error => {
        switch (error.path[0]) {
          case 'name':
            return "Nome: " + error.message;
          case 'email':
            return "Email: " + error.message;
          case 'subject':
            return "Soggetto: " + error.message;
          case 'message':
            return "Messaggio: " + error.message;
          default:
            return error.message;
        }
      });
      
      return NextResponse.json(
        { 
          error: "Controlla i seguenti campi:", 
          details: errorMessages,
          userMessage: errorMessages.join(". ")
        },
        { status: 400 }
      );
    }

    console.log("✅ Validazione superata");
    const { name, email, phone, subject, message } = validationResult.data;

    // Log per debug
    console.log("Dati validati:", {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    console.log("🚀 Tentativo di invio email...");
    
    // Invia email usando Resend
    await sendContactEmail({ name, email, phone, subject, message });

    console.log("✅ Email inviate con successo!");

    // Invia lead al CRM se configurato
    try {
      await sendLeadToCRM({ name, email, phone, subject, message });
      console.log("✅ Lead inviato al CRM con successo!");
    } catch (crmError) {
      console.warn("⚠️ Errore nell'invio lead al CRM:", crmError);
      // Non blocchiamo il processo se il CRM fallisce
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Messaggio inviato con successo" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ ERRORE nell'API di contatto:");
    console.error("Tipo errore:", typeof error);
    console.error("Errore completo:", error);
    
    if (error instanceof Error) {
      console.error("Messaggio:", error.message);
      console.error("Stack:", error.stack);
    }
    
    return NextResponse.json(
      { 
        error: "Errore interno del server. Riprova più tardi.",
        details: error instanceof Error ? error.message : "Errore sconosciuto"
      },
      { status: 500 }
    );
  }
}

// Funzione per inviare email con Resend
async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    // Verifica che l'API key sia configurata
    if (!RESEND_API_KEY || RESEND_API_KEY === "re_your_api_key_here") {
      throw new Error("RESEND_API_KEY non configurata. Controlla il file .env.local");
    }

    console.log("Tentativo di invio email con Resend...");

    // Email per te (notifica del nuovo messaggio)
    const emailToYou = await resend.emails.send({
      from: `${EMAIL_FROM_NAME} <${EMAIL_FROM_ADDRESS}>`,
      to: [CONTACT_EMAIL],
      subject: `Nuovo messaggio dal sito: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nuovo messaggio dal sito ${COMPANY_NAME}</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Dettagli del contatto:</h3>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefono:</strong> ${data.phone ?? "Non fornito"}</p>
            <p><strong>Soggetto:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Messaggio:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Messaggio ricevuto il: ${new Date().toLocaleString("it-IT")}</p>
            <p>Puoi rispondere direttamente a: ${data.email}</p>
          </div>
        </div>
      `,
      replyTo: data.email,
    });

    console.log("Email a te inviata:", emailToYou);

    // Email di conferma per il cliente
    const emailToClient = await resend.emails.send({
      from: `${COMPANY_NAME} <${EMAIL_FROM_ADDRESS}>`,
      to: [data.email],
      subject: `Messaggio ricevuto - ${COMPANY_NAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Grazie per averci contattato!</h2>
          
          <p>Ciao <strong>${data.name}</strong>,</p>
          
          <p>Abbiamo ricevuto il tuo messaggio e ti risponderemo il prima possibile.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Riepilogo del tuo messaggio:</h3>
            <p><strong>Soggetto:</strong> ${data.subject}</p>
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap; font-style: italic;">${data.message}</p>
          </div>
          
          <p>Nel frattempo, puoi contattarci anche:</p>
          <ul>
            <li>📧 Email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></li>
            <li>📞 Telefono: <a href="tel:${CONTACT_PHONE}">${CONTACT_PHONE_DISPLAY}</a></li>
          </ul>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>Cordiali saluti,<br>Il team ${COMPANY_NAME}</p>
            <p>${COMPANY_ADDRESS_LINE1} - ${COMPANY_ADDRESS_LINE2}</p>
          </div>
        </div>
      `,
      replyTo: EMAIL_REPLY_TO,
    });

    console.log("Email al cliente inviata:", emailToClient);

    console.log("Email inviate con successo:", { 
      emailToYou: emailToYou.data?.id ?? emailToYou, 
      emailToClient: emailToClient.data?.id ?? emailToClient 
    });
    
  } catch (error) {
    console.error("Errore dettagliato nell'invio email:", error);
    
    // Log più dettagliato per debug
    if (error instanceof Error) {
      console.error("Messaggio errore:", error.message);
      console.error("Stack trace:", error.stack);
    }
    
    throw new Error(`Impossibile inviare l'email: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`);
  }
}

// Funzione per inviare lead al CRM
async function sendLeadToCRM(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  // Verifica se l'integrazione CRM è configurata
  if (!CRM_API_URL || !CRM_API_KEY) {
    console.log("📋 CRM non configurato - skipping");
    return;
  }

  try {
    console.log("🔗 Tentativo di invio lead al CRM...");

    // Estrai nome e cognome dal campo name
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] ?? '';
    const lastName = nameParts.slice(1).join(' ') ?? firstName; // Se non c'è cognome, usa il nome

    // Prepara i dati per il CRM
    const leadData = {
      firstName: firstName,
      lastName: lastName,
      email: data.email,
      phone: data.phone,
      description: `Messaggio dal sito web:\n\nSoggetto: ${data.subject}\n\nMessaggio:\n${data.message}`,
      lead_source: "Website",
      status: "NEW",
      type: "DEMO"
    };

    console.log("Dati lead per CRM:", leadData);

    // Invia al CRM
    const response = await fetch(`${CRM_API_URL}/api/leads/import`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CRM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const errorData: { error: string } = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(`CRM API Error (${response.status}): ${JSON.stringify(errorData)}`);
    }

    const result: { success: boolean; message: string; lead?: unknown } = await response.json() as { success: boolean; message: string; lead?: unknown };
    console.log("CRM Response:", result);

  } catch (error) {
    console.error("Errore dettagliato nell'invio lead al CRM:", error);
    throw new Error(`Impossibile inviare lead al CRM: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`);
  }
} 