const { createClient } = require('@sanity/client')

// Configurazione del client Sanity
const client = createClient({
  projectId: 'm0twh2ky',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-05-25',
  token: process.env.SANITY_API_TOKEN // Assicurati di avere questo token nelle variabili d'ambiente
})

// Dati di esempio per l'autore
const authorData = {
  _type: 'author',
  name: 'Marco Rossi',
  slug: {
    _type: 'slug',
    current: 'marco-rossi'
  },
  bio: [
    {
      _type: 'block',
      _key: 'bio1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'biospan1',
          text: 'Istruttore di arti marziali con oltre 15 anni di esperienza nel Karate e Aikido. Appassionato di cultura giapponese e filosofia orientale, condivide la sua conoscenza attraverso corsi pratici e contenuti educativi.'
        }
      ]
    }
  ]
}

// Dati di esempio per le categorie
const categoriesData = [
  {
    _type: 'category',
    title: 'Tutorial',
    description: 'Guide e tutorial pratici'
  },
  {
    _type: 'category',
    title: 'Filosofia',
    description: 'Articoli sulla filosofia delle arti marziali'
  },
  {
    _type: 'category',
    title: 'Tecniche',
    description: 'Spiegazioni di tecniche specifiche'
  }
]

// Dati di esempio per i post
const postsData = [
  {
    _type: 'post',
    title: 'Introduzione al Karate: La Via della Mano Vuota',
    slug: {
      _type: 'slug',
      current: 'introduzione-karate-via-mano-vuota'
    },
    excerpt: 'Scopri i fondamenti del Karate, dalla storia antica alle tecniche moderne. Una guida completa per chi vuole iniziare questo meraviglioso percorso di crescita personale.',
    publishedAt: new Date().toISOString(),
    body: [
      {
        _type: 'block',
        _key: 'block1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: 'Il Karate, letteralmente "Via della Mano Vuota", è molto più di un semplice sistema di combattimento. È una disciplina che unisce tecnica, filosofia e crescita spirituale.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block2',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'Le Origini Storiche'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span3',
            text: 'Nato nelle isole Ryukyu (attuale Okinawa), il Karate si è sviluppato dalla fusione delle arti marziali locali con le tecniche provenienti dalla Cina. La disciplina si basa su tre pilastri fondamentali:'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block4',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            _key: 'span4',
            text: 'Kihon (基本) - Tecniche fondamentali'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block5',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            _key: 'span5',
            text: 'Kata (形) - Forme e sequenze prestabilite'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block6',
        style: 'normal',
        listItem: 'bullet',
        children: [
          {
            _type: 'span',
            _key: 'span6',
            text: 'Kumite (組手) - Combattimento controllato'
          }
        ]
      }
    ]
  },
  {
    _type: 'post',
    title: 'I Cinque Principi del Dojo Kun',
    slug: {
      _type: 'slug',
      current: 'cinque-principi-dojo-kun'
    },
    excerpt: 'Il Dojo Kun rappresenta i principi etici fondamentali delle arti marziali. Scopri come questi valori possono guidare non solo la pratica, ma tutta la vita quotidiana.',
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // ieri
    body: [
      {
        _type: 'block',
        _key: 'block7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span7',
            text: 'Il Dojo Kun è una serie di principi etici che guidano la pratica delle arti marziali. Questi cinque precetti sono molto più di semplici regole: sono una filosofia di vita.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block8',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span8',
            text: 'I Cinque Principi'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block9',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span9',
            text: '1. Perfezionare il carattere\n2. Essere fedeli\n3. Sforzarsi\n4. Rispettare gli altri\n5. Astenersi dalla violenza'
          }
        ]
      }
    ]
  },
  {
    _type: 'post',
    title: 'La Respirazione nell\'Aikido: Kokyu-ho',
    slug: {
      _type: 'slug',
      current: 'respirazione-aikido-kokyu-ho'
    },
    excerpt: 'La respirazione è l\'anima dell\'Aikido. Impara le tecniche di Kokyu-ho per sviluppare il ki (energia interna) e migliorare la tua pratica quotidiana.',
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 giorni fa
    body: [
      {
        _type: 'block',
        _key: 'block10',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span10',
            text: 'Nell\'Aikido, la respirazione (kokyu) non è solo un processo fisiologico, ma la chiave per sviluppare e dirigere il ki, l\'energia vitale che scorre in tutti noi.'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block11',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'span11',
            text: 'Esercizi Fondamentali'
          }
        ]
      },
      {
        _type: 'block',
        _key: 'block12',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'span12',
            text: 'La pratica del Kokyu-ho inizia con esercizi semplici ma profondi che collegano mente, corpo e spirito attraverso il controllo consapevole del respiro.'
          }
        ]
      }
    ]
  }
]

async function seedContent() {
  try {
    console.log('🌱 Iniziando il seeding dei contenuti del blog...')
    
    // 1. Crea l'autore
    console.log('📝 Creando l\'autore...')
    const author = await client.create(authorData)
    console.log('✅ Autore creato:', author.name)
    
    // 2. Crea le categorie
    console.log('🏷️ Creando le categorie...')
    const categories = []
    for (const categoryData of categoriesData) {
      const category = await client.create(categoryData)
      categories.push(category)
      console.log('✅ Categoria creata:', category.title)
    }
    
    // 3. Crea i post
    console.log('📰 Creando i post...')
    for (let i = 0; i < postsData.length; i++) {
      const postData = {
        ...postsData[i],
        author: {
          _type: 'reference',
          _ref: author._id
        },
        categories: [
          {
            _type: 'reference',
            _ref: categories[i % categories.length]._id
          }
        ]
      }
      
      const post = await client.create(postData)
      console.log('✅ Post creato:', post.title)
    }
    
    console.log('🎉 Seeding completato con successo!')
    console.log('🔗 Visita http://localhost:3000/studio per vedere i contenuti nel CMS')
    console.log('📱 Visita http://localhost:3000/blog per vedere il blog live')
    
  } catch (error) {
    console.error('❌ Errore durante il seeding:', error)
    process.exit(1)
  }
}

// Esegui il seeding
if (require.main === module) {
  seedContent()
}

module.exports = { seedContent } 