import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema di validazione per i dati del form
const projectFormSchema = z.object({
  companyName: z.string().min(1, "Nome azienda è obbligatorio"),
  contactName: z.string().min(1, "Nome referente è obbligatorio"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  projectDescription: z.string().min(10, "Descrizione progetto troppo breve"),
  expectedTimeline: z.string().min(1, "Tempistiche sono obbligatorie"),
  additionalInfo: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    
    // Validazione dei dati
    const validationResult = projectFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          message: "Dati non validi", 
          errors: validationResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Qui potresti implementare l'invio email, salvataggio su database, ecc.
    // Per ora, logghiamo i dati
    console.log("Nuova proposta progetto ricevuta:", {
      timestamp: new Date().toISOString(),
      ...formData,
    });

    // TODO: Implementare invio email reale
    // const emailContent = `
    // Nuova Proposta Progetto Gratuito - eDojo
    // 
    // Azienda: ${formData.companyName}
    // Referente: ${formData.contactName}
    // Email: ${formData.email}
    // Telefono: ${formData.phone ?? "Non fornito"}
    // 
    // Descrizione Progetto:
    // ${formData.projectDescription}
    // 
    // Tempistiche Attese: ${formData.expectedTimeline}
    // 
    // ${formData.additionalInfo ? `Informazioni Aggiuntive:\n${formData.additionalInfo}` : ""}
    // 
    // ---
    // Inviato tramite landing page progetto gratuito
    // Data: ${new Date().toLocaleString('it-IT')}
    // `.trim();

    // await sendEmail({
    //   to: "info@edojo.it",
    //   subject: `Nuova Proposta Progetto - ${formData.companyName}`,
    //   text: emailContent,
    // });

    // TODO: Salvare su database se necessario
    // await db.projectProposal.create({
    //   data: formData,
    // });

    return NextResponse.json(
      { 
        message: "Proposta inviata con successo! Ti contatteremo entro 48 ore.",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Errore nell'invio proposta progetto:", error);
    
    return NextResponse.json(
      { 
        message: "Errore interno del server. Riprova più tardi o contattaci direttamente.",
        success: false 
      },
      { status: 500 }
    );
  }
} 