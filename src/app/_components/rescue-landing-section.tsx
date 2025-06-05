import OrigamiLink from "./origami-link";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function RescueLandingSection() {
  return (
    <div className="py-32 relative">
      {/* Updated background to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10"></div>
      </div>

      {/* Modern Background Effects */}
      <ModernBackground
        variant="grid"
        intensity="subtle"
        colorScheme="red"
        darkMode={true}
      />

      <section id="rescue-landing" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Updated Hero Typography Section - Matching homepage style */}
            <div className="relative mb-24">
              {/* Main Title - Positioned Artistically */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8rem] sm:text-[10rem] lg:text-[14rem] font-black text-primary-600/8 leading-none select-none pointer-events-none">
                  rescue
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <div className="flex flex-col">
                    {/* Main Heading - Updated to match homepage style */}
                    <div>
                      <div>
                        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                          Progetto
                          <span className="block text-gradient-red-purple animate-gradient-shift">
                            Stagnante?
                          </span>
                        </h1>
                      </div>
                      <div className="mt-6 lg:mt-8 relative flex justify-center">
                        <div className="w-20 h-1 gradient-red-purple rounded-full"></div>
                        <div className="w-12 h-1 gradient-purple-red rounded-full mt-2 ml-3 animate-subtle-shift"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Section Content - Updated styling */}
            <div className="relative min-h-[800px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] gap-8 lg:gap-0">
                {/* LEFT SIDE - Problems */}
                <SlideInLeft delay={300} className="relative">
                  <div className="relative p-8 lg:p-16 h-full flex flex-col justify-center glassmorphism-dark rounded-2xl shadow-elegant mb-8 lg:mb-0 lg:mr-8">
                    {/* Header */}
                    <div className="mb-12">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-8 h-1 bg-amber-500 rounded-full"></div>
                      </div>
                      <h2 className="text-3xl font-black text-white leading-[1.1] py-1">
                        <span className="block">Situazioni che</span>
                        <span className="block text-gradient-red-purple italic">riconosciamo</span>
                      </h2>
                    </div>

                    {/* Problems */}
                    <div className="space-y-8">
                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-amber-600 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-white text-lg mb-2">Sviluppo rallentato</h4>
                          <p className="text-neutral-300 text-sm leading-relaxed">Il team precedente ha lasciato o fatica a fare progressi significativi</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-orange-500 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-white text-lg mb-2">Qualità del codice</h4>
                          <p className="text-neutral-300 text-sm leading-relaxed">Funzionalità instabili e performance non ottimali</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-white text-lg mb-2">Gestione risorse</h4>
                          <p className="text-neutral-300 text-sm leading-relaxed">Budget e tempi che si allungano oltre le previsioni iniziali</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 to-amber-500 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-white text-lg mb-2">Documentazione carente</h4>
                          <p className="text-neutral-300 text-sm leading-relaxed">Mancanza di documentazione tecnica e difficoltà di comprensione del codice</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideInLeft>

                {/* RIGHT SIDE - Solutions */}
                <SlideInRight delay={300} className="relative">
                  <div className="relative p-8 lg:p-16 h-full flex flex-col justify-center gradient-red-purple text-white rounded-2xl shadow-brand lg:ml-8">
                    {/* Header */}
                    <div className="mb-12">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-8 h-1 bg-emerald-400 rounded-full"></div>
                      </div>
                      <h2 className="text-3xl font-black leading-[1.1] py-1">
                        <span className="block">Il nostro</span>
                        <span className="block text-white italic">Approccio</span>
                      </h2>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-8">
                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              <circle cx="11" cy="11" r="3" strokeWidth={1} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-primary-100">ANALIZZA</span>
                              <div className="w-1 h-1 bg-primary-200 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Analisi Tecnica</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Valutiamo la base di codice per identificare criticità e opportunità</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-primary-100">PIANIFICA</span>
                              <div className="w-1 h-1 bg-primary-200 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Strategia di Miglioramento</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Definiamo un piano concreto con priorità e milestone realistiche</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-primary-100">ESEGUI</span>
                              <div className="w-1 h-1 bg-primary-200 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Implementazione Rapida</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Interventi mirati per sbloccare la situazione e riprendere lo sviluppo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideInRight>
              </div>
            </div>
          </FadeInUp>

          {/* CTA Section - Updated styling to match homepage */}
          <div className="mt-28 text-center">
            <div className="relative group">
              {/* Decorative background gradient - Updated */}
              <div className="absolute inset-0 gradient-red-purple rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20"></div>

              <div className="relative glassmorphism-brand rounded-2xl p-16 shadow-brand hover:shadow-brand-bold transition-all duration-500 group-hover:scale-[1.01]">
                <div className="w-32 h-1 gradient-red-purple rounded-full mx-auto mb-8"></div>
                <p className="mt-8 text-lg text-neutral-300">
                  <span className="font-semibold text-white">Progetto che non avanza come previsto?</span><br />
                  Valutiamo insieme la situazione e definiamo il percorso migliore per ottimizzare i risultati.
                </p>
                <p className="mt-4 text-sm text-neutral-400">
                  Analisi tecnica gratuita per progetti che necessitano di una nuova direzione.
                </p>

                <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-center items-center">
                  <OrigamiLink
                    href="#contatti"
                    variant="primary"
                    size="lg"
                    className="gradient-red-purple hover:shadow-brand-bold text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                  >
                    Richiedi Valutazione
                  </OrigamiLink>
                  <p className="text-neutral-400 text-sm">
                    <span className="font-mono">{/* */} </span>Consulenza professionale • Analisi riservata
                  </p>
                </div>

                <div className="w-48 h-1 gradient-purple-red rounded-full mx-auto mt-8"></div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 