# 🚀 Edojo CRM

Sistema CRM personalizzato per Edojo Software House, basato su nextcrm-app.

## 📋 Informazioni

Questo progetto è un fork privato di [nextcrm-app](https://github.com/pdovhomilja/nextcrm-app) personalizzato per le esigenze specifiche di Edojo Software House.

## 🛠️ Stack Tecnologico

- **Framework:** Next.js 14 con App Router
- **Linguaggio:** TypeScript  
- **Styling:** Tailwind CSS
- **Database:** MongoDB con Prisma ORM
- **Autenticazione:** NextAuth.js
- **API:** tRPC per type-safe APIs
- **UI Components:** Shadcn/ui
- **Deployment:** Docker ready

## ✨ Funzionalità CRM

- 👥 Gestione Contatti e Lead
- 🏢 Gestione Account Aziendali
- 💼 Gestione Opportunità
- 📋 Sistema Tasks e Progetti
- 📄 Gestione Documenti
- 💰 Gestione Fatture
- 📊 Dashboard e Reportistica
- 🔐 Sistema di Autenticazione
- 👨‍💼 Gestione Utenti e Permessi

## 🚀 Come iniziare

### Prerequisiti

- Node.js 18+
- MongoDB
- pnpm (raccomandato)

### Installazione

1. Clona il repository
```bash
git clone https://github.com/aureliopetrone/edojo-crm.git
cd edojo-crm
```

2. Installa le dipendenze
```bash
pnpm install
```

3. Configura le variabili d'ambiente
```bash
cp .env.example .env
```

Compila il file `.env` con le tue credenziali:
- `DATABASE_URL`: URL di connessione MongoDB
- `NEXTAUTH_SECRET`: Genera con `openssl rand -base64 32`
- `NEXTAUTH_URL`: URL dell'applicazione
- Altri servizi esterni (email, upload, etc.)

### Integrazione CRM (Opzionale)

Per abilitare l'integrazione con il CRM e l'invio automatico dei lead dal form di contatto:

```bash
# URL del CRM (es. http://localhost:3001 per sviluppo locale)
CRM_API_URL="http://localhost:3001"

# API Key generata dal CRM per l'importazione leads
CRM_API_KEY="your_crm_api_key_here"
```

Quando configurate, tutte le richieste di contatto dal sito web verranno automaticamente inviate come lead al CRM.

4. Inizializza il database
```bash
pnpm db:push
```

5. Avvia il server di sviluppo
```bash
pnpm dev
```

Il CRM sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
├── app/                 # Next.js App Router
│   ├── [locale]/       # Internazionalizzazione
│   ├── api/            # API routes
│   └── components/     # Componenti UI
├── actions/            # Server Actions
├── components/         # Componenti riutilizzabili
├── lib/               # Utilities e configurazioni
├── prisma/            # Schema database e migrazioni
├── types/             # Type definitions
└── store/             # State management
```

## 🔄 Sincronizzazione con upstream

Per mantenere il fork aggiornato con il progetto originale:

```bash
# Fetch degli aggiornamenti upstream
git fetch upstream

# Merge degli aggiornamenti nel branch main
git checkout main
git merge upstream/main

# Push degli aggiornamenti
git push origin main
```

## 🐳 Deployment con Docker

```bash
# Build dell'immagine
docker build -t edojo-crm .

# Run del container
docker run -p 3000:3000 --env-file .env edojo-crm
```

## 📊 Moduli Attivi

- ✅ CRM Core (Contatti, Lead, Account)
- ✅ Gestione Progetti
- ✅ Sistema Tasks
- ✅ Gestione Documenti
- ✅ Fatturazione
- ✅ Dashboard
- ✅ Reportistica

## 🔗 Links Utili

- **Repository Upstream:** [nextcrm-app](https://github.com/pdovhomilja/nextcrm-app)
- **Documentazione Prisma:** [prisma.io](https://www.prisma.io/)
- **Next.js Docs:** [nextjs.org](https://nextjs.org/)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com/)

## 📞 Supporto

Per supporto tecnico o personalizzazioni:
- 📧 Email: dev@edojo.it
- 🐛 Issues: [GitHub Issues](https://github.com/aureliopetrone/edojo-crm/issues)

## 📄 Licenza

Questo progetto è un fork privato per uso esclusivo di Edojo Software House.
Il progetto originale nextcrm-app è rilasciato sotto licenza MIT.

---

Fork personalizzato di [nextcrm-app](https://github.com/pdovhomilja/nextcrm-app) per Edojo Software House
