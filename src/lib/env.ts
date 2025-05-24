// Configurazione centralizzata delle variabili d'ambiente

export const env = {
  // Database
  DATABASE_URL: process.env.DATABASE_URL!,
  
  // Auth
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL!,
  
  // Resend
  RESEND_API_KEY: process.env.RESEND_API_KEY!,
  
  // Contatti
  CONTACT_EMAIL: process.env.CONTACT_EMAIL!,
  CONTACT_PHONE: process.env.CONTACT_PHONE!,
  CONTACT_PHONE_DISPLAY: process.env.CONTACT_PHONE_DISPLAY!,
  
  // Azienda
  COMPANY_NAME: process.env.COMPANY_NAME!,
  COMPANY_ADDRESS_LINE1: process.env.COMPANY_ADDRESS_LINE1!,
  COMPANY_ADDRESS_LINE2: process.env.COMPANY_ADDRESS_LINE2!,
  COMPANY_VAT: process.env.COMPANY_VAT!,
  
  // Email
  EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME!,
  EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS!,
  EMAIL_REPLY_TO: process.env.EMAIL_REPLY_TO!,
} as const;

// Validazione delle variabili critiche
export function validateEnv() {
  const required = [
    'RESEND_API_KEY',
    'CONTACT_EMAIL',
    'COMPANY_NAME',
  ] as const;
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Variabili d'ambiente mancanti: ${missing.join(', ')}`);
  }
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
} = env; 