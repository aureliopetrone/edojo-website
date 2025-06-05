export const companyInfo = {
  name: "edojo",
  baseUrl: "https://edojo.it",
  address: {
    street: "Via Aldo Moro, 50",
    city: "Solofra (AV)",
    country: "Italia"
  },
  vatNumber: "P.IVA 03030880649",
  contact: {
    email: "info@edojo.it",
    phone: "+39 0825 123456",
    prototypingEmail: "prototyping@edojo.it",
    whatsapp: "+39 345 678 9012"
  },
  social: {
    linkedin: "https://www.linkedin.com/company/edojo"
  },
  copyright: `© ${new Date().getFullYear()} edojo. Tutti i diritti riservati.`,
  services: [
    {
      name: "Soluzioni Cloud & AI",
      href: "/#chi-siamo"
    },
    {
      name: "IoT & Sistemi Connessi", 
      href: "/#chi-siamo"
    },
    {
      name: "Robotica & Automazione",
      href: "/#chi-siamo"
    },
    {
      name: "WebApp Moderne",
      href: "/#chi-siamo"
    },
    {
      name: "Gestionali Intelligenti",
      href: "/#chi-siamo"
    },
    {
      name: "Prototipazione Rapida",
      href: "/prototipazione"
    }
  ],
  navigation: {
    // Navigation for header
    header: [
      {
        name: "Home",
        href: "home",
        isSection: true // indicates it's a section on homepage
      },
      {
        name: "Chi Siamo",
        href: "chi-siamo",
        isSection: true
      },
      {
        name: "Cosa Facciamo",
        href: "in-corsa",
        isSection: true
      },
      {
        name: "Contatti",
        href: "contatti",
        isSection: true
      }
    ],
    // Navigation for footer
    footer: [
      {
        name: "Sito Principale",
        href: "/"
      },
      {
        name: "Chi Siamo",
        href: "/#chi-siamo"
      },
      {
        name: "Servizi AI",
        href: "/ai-generativa"
      },
      {
        name: "Prototipazione",
        href: "/prototipazione"
      },
      {
        name: "Consulenza Tecnica",
        href: "/consulenza"
      },
      {
        name: "Rescue Projects",
        href: "/rescue"
      },
      {
        name: "Contatti",
        href: "/#contatti"
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy"
      },
      {
        name: "Cookie Preferences",
        href: "/cookie-preferences"
      }
    ]
  },
  pageMetadata: {
    home: {
      title: "edojo - Tech Lab digitale",
      description: "Accompagniamo le aziende nel percorso di trasformazione digitale con metodologie consolidate e tecnologie innovative. Consulenza, sviluppo e supporto per la crescita digitale.",
      keywords: "trasformazione digitale, consulenza tecnologica, sviluppo software, innovazione aziendale, cultura digitale, metodologie agili, business intelligence"
    },
    prototipazione: {
      title: "Prototipazione Rapida - edojo",
      description: "Servizi di prototipazione rapida per trasformare le tue idee in realtà. Sviluppo MVP, proof of concept e soluzioni personalizzate per il tuo business.",
      keywords: "prototipazione rapida, MVP, proof of concept, sviluppo agile, startup, innovazione, product development"
    },
    aiGenerativa: {
      title: "Intelligenza Artificiale Generativa - edojo",
      description: "Soluzioni di AI generativa per le PMI: chatbot intelligenti, automazione dei processi, analisi dati e machine learning per far crescere il tuo business.",
      keywords: "intelligenza artificiale, AI generativa, chatbot, machine learning, automazione, PMI, business intelligence, NLP"
    },
    rescue: {
      title: "Rescue Projects - Recupero Progetti IT - edojo",
      description: "Recuperiamo progetti IT in difficoltà, risolviamo problemi tecnici complessi e riportiamo in vita software e sistemi abbandonati o mal funzionanti.",
      keywords: "rescue projects, recupero progetti, consulenza IT, debugging, refactoring, legacy systems, problemi software"
    },
    consulenza: {
      title: "Consulenza Tecnica e Team Augmentation - edojo",
      description: "Servizi di consulenza tecnica specializzata e team augmentation. Affianchiamo i tuoi team interni con sviluppatori esperti per accelerare i progetti e trasferire competenze.",
      keywords: "consulenza tecnica, team augmentation, outsourcing, sviluppatori senior, mentoring, affiancamento team, competenze tecniche, progetti aziendali"
    },
    privacyPolicy: {
      title: "Privacy Policy - edojo",
      description: "Informativa sulla privacy di edojo. Scopri come trattiamo i tuoi dati personali e quali diritti hai secondo il GDPR.",
      keywords: "privacy policy, GDPR, protezione dati, informativa privacy, trattamento dati personali"
    },
    cookiePreferences: {
      title: "Cookie Preferences - edojo", 
      description: "Gestisci le tue preferenze sui cookie per il sito edojo. Personalizza l'esperienza di navigazione secondo le tue esigenze.",
      keywords: "cookie preferences, gestione cookie, privacy, personalizzazione, preferenze utente"
    }
  },
  sitePages: [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/prototipazione',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/ai-generativa',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/consulenza',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/rescue',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/privacy-policy',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/cookie-preferences',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
  ]
} as const; 