// Configurazione centralizzata delle variabili d'ambiente
// Importa le variabili validate dal sistema standard Next.js

import { env as validatedEnv } from "~/env";

// Re-esporta le variabili validate per comodità
export const env = validatedEnv;

// Validazione delle variabili critiche (ora gestita dal sistema standard)
export function validateEnv() {
  // La validazione è già gestita da ~/env.js
  // Questa funzione è mantenuta per compatibilità
  return true;
}

// Esporta singole variabili per comodità
export const {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  COMPANY_NAME,
  COMPANY_ADDRESS_LINE1,
  COMPANY_ADDRESS_LINE2,
  COMPANY_VAT,
  EMAIL_FROM_NAME,
  EMAIL_FROM_ADDRESS,
  EMAIL_REPLY_TO,
  RESEND_API_KEY,
} = validatedEnv; 