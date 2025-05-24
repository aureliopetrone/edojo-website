# Configurazione Email con Resend

## 1. Registrazione su Resend

1. Vai su [resend.com](https://resend.com)
2. Crea un account gratuito
3. Verifica la tua email

## 2. Configurazione del dominio

### Opzione A: Dominio personalizzato (Consigliato)
1. Nel dashboard Resend, vai su "Domains"
2. Clicca "Add Domain"
3. Inserisci il tuo dominio (es. `edojo.it`)
4. Aggiungi i record DNS forniti da Resend al tuo provider DNS
5. Attendi la verifica (può richiedere fino a 24 ore)

### Opzione B: Dominio Resend (Per test)
- Puoi usare temporaneamente `onboarding@resend.dev` per i test
- Modifica il campo `from` nell'API da `noreply@edojo.it` a `onboarding@resend.dev`

## 3. Ottenere l'API Key

1. Nel dashboard Resend, vai su "API Keys"
2. Clicca "Create API Key"
3. Dai un nome (es. "eDojo Website")
4. Seleziona il dominio
5. Copia la chiave generata (inizia con `re_`)

## 4. Configurazione del progetto

1. Copia il file `.env.example` in `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Aggiungi la tua API key in `.env.local`:
   ```
   RESEND_API_KEY="re_la_tua_chiave_api_qui"
   ```

## 5. Test del sistema

1. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

2. Vai su `http://localhost:3000`
3. Compila e invia il form di contatto
4. Controlla:
   - La console del server per eventuali errori
   - La tua email per il messaggio ricevuto
   - L'email del mittente per la conferma

## 6. Personalizzazione

### Modificare l'email di destinazione
Nel file `src/app/api/contact/route.ts`, cambia:
```typescript
to: ['info@edojo.it'], // Sostituisci con la tua email
```

### Modificare il dominio di invio
Nel file `src/app/api/contact/route.ts`, cambia:
```typescript
from: 'eDojo Website <noreply@tuodominio.it>',
```

## 7. Limiti del piano gratuito

- **3.000 email al mese**
- **100 email al giorno**
- Perfetto per un sito aziendale

## 8. Risoluzione problemi

### Errore "Domain not verified"
- Controlla che i record DNS siano configurati correttamente
- Attendi fino a 24 ore per la propagazione DNS

### Errore "API key invalid"
- Verifica che l'API key sia corretta nel file `.env.local`
- Assicurati che il file `.env.local` sia nella root del progetto

### Email non arrivano
- Controlla la cartella spam
- Verifica che l'indirizzo email di destinazione sia corretto
- Controlla i log del server per errori

## Alternative a Resend

Se preferisci altri servizi:

### SendGrid
```bash
npm install @sendgrid/mail
```

### Nodemailer + Gmail
```bash
npm install nodemailer
```

### EmailJS (client-side)
```bash
npm install @emailjs/browser
``` 