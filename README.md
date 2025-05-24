# 🚀 Edojo Software House Website

Sito web moderno per la software house specializzata in sviluppo fullstack con tecnologie all'avanguardia.

## 🛠️ Stack Tecnologico

- **Framework:** Next.js 14 con App Router
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** SQLite con Prisma ORM
- **Autenticazione:** NextAuth.js
- **API:** tRPC per type-safe APIs
- **Deployment:** Vercel (consigliato)

## ✨ Funzionalità

- 🎨 Design moderno e responsive
- 🚀 Performance ottimizzate con Next.js
- 📱 Mobile-first approach
- 🔒 Sistema di autenticazione integrato
- 🌐 SEO ottimizzato
- ⚡ API type-safe con tRPC

## 🚀 Come iniziare

### Prerequisiti

- Node.js 18+ 
- npm o yarn

### Installazione

1. Clona il repository
```bash
git clone <repository-url>
cd edojo
```

2. Installa le dipendenze
```bash
npm install
```

3. Configura le variabili d'ambiente
```bash
cp .env.example .env
```

Compila il file `.env` con le tue credenziali:
- `AUTH_SECRET`: Genera con `npx auth secret`
- `AUTH_DISCORD_ID`: ID dell'app Discord (opzionale per development)
- `AUTH_DISCORD_SECRET`: Secret dell'app Discord (opzionale per development)

4. Inizializza il database
```bash
npm run db:push
```

5. Avvia il server di sviluppo
```bash
npm run dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
src/
├── app/
│   ├── _components/    # Componenti React riutilizzabili
│   ├── api/           # API routes
│   ├── layout.tsx     # Layout principale
│   └── page.tsx       # Homepage
├── server/            # Configurazione server-side
├── styles/            # Stili globali
└── trpc/             # Configurazione tRPC
```

## 🎨 Sezioni del Sito

- **Hero Section:** Presentazione principale con CTA
- **Tecnologie:** Showcase delle competenze tecniche
- **Chi Siamo:** Informazioni sulla software house
- **Servizi:** Dettagli sui servizi offerti
- **Contatti:** Form di contatto e informazioni

## 🚀 Deployment

### Vercel (Consigliato)

1. Fai push del codice su GitHub
2. Connetti il repository a Vercel
3. Configura le variabili d'ambiente su Vercel
4. Deploy automatico ad ogni push

### Altri Provider

Il progetto può essere deployato su qualsiasi provider che supporta Next.js:
- Netlify
- Railway
- AWS
- Google Cloud

## 📞 Contatti

Per informazioni sui servizi o consulenze:
- 📧 Email: info@edojo.dev
- 💼 LinkedIn: [Profilo LinkedIn]
- 🌐 Portfolio: [Portfolio Website]

## 📄 Licenza

Questo progetto è sviluppato per Edojo Software House.

---

Sviluppato con ❤️ usando il T3 Stack
