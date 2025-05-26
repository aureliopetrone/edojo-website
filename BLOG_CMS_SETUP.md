# Blog CMS Setup - eDojo

## 🎉 Sanity CMS è stato integrato con successo!

Il blog di eDojo ora utilizza **Sanity** come CMS headless per gestire i contenuti in modo professionale.

## 🚀 Accesso al CMS

### Sanity Studio
- **URL**: `http://localhost:3000/studio` (in sviluppo)
- **URL Produzione**: `https://tuodominio.com/studio`

### Credenziali
- Usa il tuo account Google per accedere
- Project ID: `m0twh2ky`
- Dataset: `production`

## 📝 Come creare contenuti

### 1. Creare un Autore
1. Vai su `/studio`
2. Clicca su "Author" nel menu laterale
3. Clicca "Create new Author"
4. Compila:
   - **Name**: Nome dell'autore
   - **Slug**: Si genera automaticamente
   - **Image**: Foto profilo (opzionale)
   - **Bio**: Biografia dell'autore

### 2. Creare un Post
1. Vai su `/studio`
2. Clicca su "Post" nel menu laterale
3. Clicca "Create new Post"
4. Compila:
   - **Title**: Titolo del post
   - **Slug**: Si genera automaticamente dal titolo
   - **Author**: Seleziona un autore esistente
   - **Main Image**: Immagine di copertina
   - **Categories**: Aggiungi categorie (es. "Tutorial", "News")
   - **Published at**: Data di pubblicazione
   - **Excerpt**: Riassunto del post (max 300 caratteri)
   - **Body**: Contenuto principale (editor ricco)

### 3. Pubblicare
- Clicca "Publish" per rendere il post visibile sul sito
- Usa "Save as draft" per salvare senza pubblicare

## 🛠️ Funzionalità del CMS

### Editor Ricco
- **Formattazione**: Grassetto, corsivo, codice
- **Titoli**: H1, H2, H3, H4
- **Liste**: Puntate e numerate
- **Link**: Collegamenti esterni
- **Immagini**: Inserimento diretto nel testo
- **Citazioni**: Blockquote

### Gestione Immagini
- Upload automatico su Sanity CDN
- Ottimizzazione automatica
- Supporto hotspot per ritaglio intelligente

### SEO
- Slug automatici SEO-friendly
- Meta description tramite excerpt
- Immagini ottimizzate per social

## 🔧 Configurazione Tecnica

### Variabili d'Ambiente
Il file `.env.local` contiene:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=m0twh2ky
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-05-25
```

### Schema del Database
- **Post**: Articoli del blog
- **Author**: Autori dei post
- **Category**: Categorie per organizzare i contenuti

## 📱 Come appare sul sito

### Pagina Blog
- **URL**: `/blog`
- Mostra tutti i post in ordine cronologico
- Card con immagine, titolo, excerpt, autore, data
- Responsive design

### Pagina Singolo Post
- **URL**: `/blog/[slug]`
- Contenuto completo formattato
- Breadcrumb per tornare al blog
- Meta tags per SEO

## 🎨 Personalizzazioni Future

### Aggiungere Featured Posts
1. Modifica `src/sanity/schemaTypes/postType.ts`
2. Aggiungi campo `featured: boolean`
3. Aggiorna le query in `src/lib/sanity.ts`

### Aggiungere Commenti
1. Crea schema `comment`
2. Integra con servizio esterno (Disqus, etc.)

### Newsletter Integration
1. Aggiungi form di iscrizione
2. Integra con Resend (già configurato)

## 🚀 Deploy in Produzione

### 1. Vercel (Consigliato)
```bash
# Le variabili d'ambiente sono già configurate
vercel --prod
```

### 2. Configurazione Domini
- Aggiungi il dominio di produzione in Sanity Dashboard
- Configura CORS se necessario

## 📞 Supporto

Per problemi o domande:
1. Controlla la [documentazione Sanity](https://www.sanity.io/docs)
2. Usa il Vision tool in `/studio` per testare query
3. Contatta il team di sviluppo

---

**🎯 Il tuo blog è pronto!** Inizia a creare contenuti di qualità per eDojo. 