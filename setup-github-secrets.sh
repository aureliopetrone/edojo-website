#!/bin/bash

# Script per configurare i GitHub Secrets necessari per il deployment
# Include variabili per autenticazione, database, email e informazioni aziendali

echo "🔐 Configurazione GitHub Secrets per eDojo website..."

# AUTH & DATABASE - richiesti ma non utilizzati per sito di presentazione
gh secret set AUTH_SECRET --body "dummy-auth-secret-for-presentation-site-$(date +%s)"
gh secret set AUTH_DISCORD_ID --body "dummy-discord-id"
gh secret set AUTH_DISCORD_SECRET --body "dummy-discord-secret"
gh secret set DATABASE_URL --body "postgresql://dummy:dummy@localhost:5432/dummy"

# NEXTAUTH - richiesti ma non utilizzati
gh secret set NEXTAUTH_SECRET --body "dummy-nextauth-secret-$(date +%s)"
gh secret set NEXTAUTH_URL --body "https://edojo-7b689.web.app"

# EMAIL - Resend API (sostituire con vera API key)
gh secret set RESEND_API_KEY --body "re_your_api_key_here"

# CONTATTI AZIENDALI
gh secret set CONTACT_EMAIL --body "info@edojo.it"
gh secret set CONTACT_PHONE --body "+393123456789"
gh secret set CONTACT_PHONE_DISPLAY --body "+39 312 345 6789"

# INFORMAZIONI AZIENDA
gh secret set COMPANY_NAME --body "eDojo"
gh secret set COMPANY_ADDRESS_LINE1 --body "Via Roma 123"
gh secret set COMPANY_ADDRESS_LINE2 --body "00100 Roma (RM), Italia"
gh secret set COMPANY_VAT --body "IT12345678901"

# EMAIL CONFIGURATION
gh secret set EMAIL_FROM_NAME --body "eDojo"
gh secret set EMAIL_FROM_ADDRESS --body "noreply@edojo.it"
gh secret set EMAIL_REPLY_TO --body "info@edojo.it"

echo "✅ Tutti i GitHub Secrets sono stati configurati!"
echo ""
echo "📋 Secrets configurati:"
gh secret list

echo ""
echo "⚠️  IMPORTANTE: Sostituisci RESEND_API_KEY con la tua vera API key:"
echo "   gh secret set RESEND_API_KEY --body \"re_la_tua_vera_api_key\""
echo ""
echo "🚀 Ora puoi fare il push per triggerare il deployment automatico!" 