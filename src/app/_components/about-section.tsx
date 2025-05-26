import { FadeInUp, SlideInLeft, SlideInRight, StaggeredAnimation, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function AboutSection() {
  const teamMembers = [
    // Developer - Aurelio Petrone
    <div key="aurelio" className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
          AP
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">💻</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-neutral-50 mb-2">Aurelio Petrone</h4>
      <p className="text-primary-300 font-medium mb-3">
        <span className="font-mono text-sm">CEO e tech lead</span>
      </p>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
        Sviluppatore software con 10+ anni di esperienza.
        <br />
        <span className="text-neutral-50 font-semibold">So come trasformare la tecnologia in soluzioni.</span>
      </p>
    </div>,

    // Client Specialist
    <div key="chiara" className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
          CL
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">🤝</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-neutral-50 mb-2">Chiara Leone</h4>
      <p className="text-primary-300 font-medium mb-3">
        <span className="font-mono text-sm">Client Relations</span>
      </p>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
        Fondamentale per assicurare che tu <br />ti senta al centro del tuo progetto.
        <br />
        <span className="text-neutral-50 font-semibold">Assicura che i progetti rispettino tempi e aspettative facendo da ponte tra te e il nostro team.</span>
      </p>
    </div>,

    // UX/UI Designer
    <div key="enzo" className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
          EM
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">🎨</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-neutral-50 mb-2">Enzo Mara</h4>
      <p className="text-primary-300 font-medium mb-3">
        <span className="font-mono text-sm">UX/UI Designer</span>
      </p>
      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
        Design di interfacce e user experience. 
        <br />
        <span className="text-neutral-50 font-semibold">Crea soluzioni intuitive e user-friendly</span>
      </p>
    </div>
  ];

  return (
    <div className="py-24 section-red relative">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="mixed" 
        intensity="intense" 
        colorScheme="green" 
        darkMode={true}
      />
      
      <section id="chi-siamo" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseText variant="title" brushEffect className="text-neutral-50 mb-6">
                <span className="block text-lg font-normal text-neutral-300 mb-2">
                  {/* La nostra evoluzione */}
                </span>
                Chi Siamo
              </JapaneseText>
              <JapaneseLine variant="thick" className="max-w-48 mx-auto mt-4" />
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft delay={200}>
              <div>
                <div className="prose prose-lg">
                  <p className="text-neutral-100 mb-6 text-lg">
                    <span className="text-2xl font-bold text-neutral-50 block mb-2">Sviluppo Software.</span>
                    <span className="text-2xl font-bold text-neutral-50 block mb-2">Automazione Intelligente.</span>
                    <span className="text-2xl font-bold text-neutral-50 block mb-2">Sistemi su Misura.</span>
                    
                    Realizziamo software che risolve problemi concreti. <br />
                    <span className="text-neutral-50 font-semibold">Web app, AI integration, sistemi robotici.</span>
                  </p>
                  <p className="text-neutral-100 mb-6 text-lg">
                    eDojo è un tech lab digitale che si occupa di sviluppo software, automazione e integrazione di AI nei vostri sistemi esistenti. 
                  </p>
                  <p className="text-neutral-100 mb-6 text-lg">
                    Sviluppiamo soluzioni software da <strong>oltre 10 anni</strong> ed il nostro team è composto da esperti in <strong>sviluppo, automazione e integrazione di AI</strong> con esperienze in <strong>aziende leader nel settore</strong> e in <strong>progetti complessi</strong>.
                  </p>
                </div>
              </div>
            </SlideInLeft>
            
            <SlideInRight delay={400}>
              <div className="lg:pl-8">
                <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-8 border border-neutral-50/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-neutral-50 mb-6">
                    <span className="text-primary-300 font-mono text-lg block mb-1">cosa</span>
                    realizziamo
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-neutral-900 font-bold text-xs">⚡</span>
                      </div>
                      <div>
                        <p className="text-neutral-50 font-semibold">Web Application</p>
                        <p className="text-neutral-300 text-sm">Portali aziendali, dashboard, CRM personalizzati, e-commerce avanzati</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-neutral-900 font-bold text-xs">🤖</span>
                      </div>
                      <div>
                        <p className="text-neutral-50 font-semibold">AI Integration</p>
                        <p className="text-neutral-300 text-sm">Chatbot intelligenti, automazione documenti, analisi dati con AI</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-neutral-900 font-bold text-xs">🔧</span>
                      </div>
                      <div>
                        <p className="text-neutral-50 font-semibold">Automazione Processi</p>
                        <p className="text-neutral-300 text-sm">Workflow automatizzati, sistemi di controllo, IoT industriale, AI Agents</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-neutral-900 font-bold text-xs">📱</span>
                      </div>
                      <div>
                        <p className="text-neutral-50 font-semibold">App Mobile</p>
                        <p className="text-neutral-300 text-sm">iOS e Android, controllo remoto macchinari, app aziendali</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                        <span className="text-neutral-900 font-bold text-xs">🛠️</span>
                      </div>
                      <div>
                        <p className="text-neutral-50 font-semibold">Consulenza Tecnica</p>
                        <p className="text-neutral-300 text-sm">Analisi fattibilità, progettazione sistema, team augmentation</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-neutral-900/40 rounded border border-neutral-50/10">
                    <p className="text-neutral-300 text-sm font-mono">
                      <span className="text-emerald-400">risultato</span> = {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-blue-300">tempi</span>: <span className="text-yellow-300">&ldquo;ridotti&rdquo;</span>,
                      <br />
                      &nbsp;&nbsp;<span className="text-blue-300">costi</span>: <span className="text-yellow-300">&ldquo;ottimizzati&rdquo;</span>,
                      <br />
                      &nbsp;&nbsp;<span className="text-blue-300">efficienza</span>: <span className="text-yellow-300">&ldquo;aumentata&rdquo;</span>
                      <br />
                      {"}"}
                    </p>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Team Section */}
          <div className="mt-24">
            <FadeInUp delay={600}>
              <div className="text-center mb-16">
                <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
                <JapaneseText variant="subtitle" brushEffect className="text-neutral-50 mb-4">
                  <span className="text-primary-300 font-mono text-lg block mb-1">il</span>
                  team
                </JapaneseText>
                <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                  <span className="font-semibold">Sviluppo, progetto e design</span> per soluzioni complete.
                </p>
                <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
              </div>
            </FadeInUp>

            <StaggeredAnimation
              staggerDelay={200}
              animation="scale"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {teamMembers}
            </StaggeredAnimation>
          </div>
        </div>
      </section>
    </div>
  );
} 