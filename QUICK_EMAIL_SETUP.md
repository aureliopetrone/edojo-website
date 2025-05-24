# Setup Email Veloce - 5 minuti

## 🚀 Setup immediato per testare le email

### 1. Registrati su Resend (2 minuti)
1. Vai su [resend.com](https://resend.com)
2. Clicca "Sign Up" 
3. Inserisci email e password
4. Verifica la tua email

### 2. Ottieni l'API Key (1 minuto)
1. Nel dashboard Resend, vai su "API Keys"
2. Clicca "Create API Key"
3. Nome: "eDojo Test"
4. Copia la chiave (inizia con `re_`)

### 3. Configura il progetto (1 minuto)
1. Apri il file `edojo/.env.local`
2. Sostituisci `re_your_api_key_here` con la tua vera API key:
   ```
   RESEND_API_KEY="re_la_tua_chiave_vera_qui"
   ```

### 4. Testa subito (1 minuto)
1. Riavvia il server: `npm run dev`
2. Vai su `http://localhost:3000`
3. Compila il form di contatto
4. Invia il messaggio

### ✅ Cosa aspettarsi:
- **Console del server**: Log dettagliati dell'invio
- **Tua email**: Riceverai il messaggio del form
- **Email del mittente**: Riceverà conferma automatica

### 🔧 Se non funziona:
1. **Controlla la console** per errori
2. **Verifica l'API key** nel file `.env.local`
3. **Controlla spam** nella tua email
4. **Riavvia il server** dopo aver modificato `.env.local`

### 📧 Email di test:
Il sistema usa `onboarding@resend.dev` (dominio di test gratuito di Resend) quindi funziona immediatamente senza configurare DNS.

### 🎯 Prossimo step (opzionale):
Per usare il tuo dominio (`noreply@edojo.it`), segui la guida completa in `EMAIL_SETUP.md`. 