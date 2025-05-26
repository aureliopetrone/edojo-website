const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const samplePosts = [
  {
    title: 'Introduzione al Karate: La Via della Mano Vuota',
    content: `
# Introduzione al Karate

Il Karate, letteralmente "Via della Mano Vuota", è molto più di un semplice sistema di combattimento. È una disciplina che unisce tecnica, filosofia e crescita spirituale.

## Le Origini Storiche

Nato nelle isole Ryukyu (attuale Okinawa), il Karate si è sviluppato dalla fusione delle arti marziali locali con le tecniche provenienti dalla Cina. La disciplina si basa su tre pilastri fondamentali:

- **Kihon (基本)** - Tecniche fondamentali
- **Kata (形)** - Forme e sequenze prestabilite  
- **Kumite (組手)** - Combattimento controllato

## Filosofia e Valori

Il Karate non è solo una forma di autodifesa, ma un percorso di crescita personale che insegna disciplina, rispetto e autocontrollo.
    `.trim(),
    featured: true
  },
  {
    title: 'I Cinque Principi del Dojo Kun',
    content: `
# I Cinque Principi del Dojo Kun

Il Dojo Kun rappresenta i principi etici fondamentali delle arti marziali. Questi cinque precetti sono molto più di semplici regole: sono una filosofia di vita.

## I Cinque Principi

1. **Perfezionare il carattere**
2. **Essere fedeli**
3. **Sforzarsi**
4. **Rispettare gli altri**
5. **Astenersi dalla violenza**

Ogni principio ha un significato profondo che va oltre la pratica nel dojo e si estende alla vita quotidiana.
    `.trim(),
    featured: false
  },
  {
    title: 'La Respirazione nell\'Aikido: Kokyu-ho',
    content: `
# La Respirazione nell'Aikido

Nell'Aikido, la respirazione (kokyu) non è solo un processo fisiologico, ma la chiave per sviluppare e dirigere il ki, l'energia vitale che scorre in tutti noi.

## Esercizi Fondamentali

La pratica del Kokyu-ho inizia con esercizi semplici ma profondi che collegano mente, corpo e spirito attraverso il controllo consapevole del respiro.

### Tecniche Base

- Respirazione addominale profonda
- Coordinazione respiro-movimento
- Meditazione in movimento

La padronanza della respirazione è essenziale per tutti gli aspetti dell'Aikido.
    `.trim(),
    featured: true
  }
]

async function seedDatabase() {
  try {
    console.log('🌱 Iniziando il seeding del database SQLite...')
    
    // Crea un utente di default se non esiste
    let user = await prisma.user.findFirst()
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: 'Marco Rossi',
          email: 'marco.rossi@edojo.com',
        }
      })
      console.log('✅ Utente creato:', user.name)
    }
    
    // Elimina post esistenti (per reset pulito)
    await prisma.post.deleteMany()
    console.log('🧹 Post esistenti rimossi')
    
    // Crea i post di esempio
    for (const postData of samplePosts) {
      const post = await prisma.post.create({
        data: {
          ...postData,
          slug: generateSlug(postData.title),
          excerpt: generateExcerpt(postData.content),
          createdById: user.id,
        }
      })
      console.log('✅ Post creato:', post.title)
    }
    
    console.log('🎉 Seeding completato con successo!')
    console.log('📱 Visita http://localhost:3000/blog per vedere i post')
    
  } catch (error) {
    console.error('❌ Errore durante il seeding:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Utility functions
function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function generateExcerpt(content, maxLength = 150) {
  const text = content.replace(/[#*_`\[\]()]/g, '').trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// Esegui il seeding
if (require.main === module) {
  seedDatabase()
}

module.exports = { seedDatabase } 