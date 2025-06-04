import OrigamiLink from "./origami-link";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function InCorsaSection() {
  return (
    <div className="py-32 relative">
      {/* Simple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-200 50% to-neutral-300"></div>
      </div>

      {/* Modern Background Effects */}
      <ModernBackground
        variant="grid"
        intensity="subtle"
        colorScheme="neutral"
        darkMode={false}
      />

      <section id="in-corsa" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* New Hero Typography Section - Artistic Layout */}
            <div className="relative mb-24">
              {/* Main Title - Positioned Artistically */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[18rem] font-black text-neutral-800/5 leading-none select-none pointer-events-none">
                  rescue
                </div>
                <div className="relative pt-16 lg:pt-24">
                  <div className="flex flex-col">
                    {/* Main Heading */}
                    <div>
                      <div className="overflow-hidden">
                        <JapaneseText variant="title" className="text-6xl sm:text-7xl lg:text-9xl font-black text-neutral-800 leading-[0.8] tracking-tighter text-center">
                          Progetto in
                          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Difficoltà?
                          </span>
                        </JapaneseText>
                      </div>
                      <div className="mt-8 lg:mt-12 relative flex justify-center">
                        <JapaneseLine variant="thick" className="w-24 bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <JapaneseLine variant="thin" className="w-16 bg-gradient-to-r from-blue-500 to-cyan-300 mt-2 ml-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Section Content - No Box */}
            <div className="relative min-h-[800px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px] gap-8 lg:gap-0">
                {/* LEFT SIDE - Problems */}
                <SlideInLeft delay={300} className="relative">
                  <div className="relative p-8 lg:p-16 h-full flex flex-col justify-center bg-white rounded-2xl shadow-lg lg:shadow-xl mb-8 lg:mb-0 lg:mr-8">
                    {/* Header */}
                    <div className="mb-12">
                      <div className="flex items-start justify-between mb-6">
                        <JapaneseLine variant="thin" className="w-8 bg-red-500" />
                      </div>
                      <JapaneseText variant="title" className="text-3xl font-black text-neutral-900 leading-tight">
                        <span className="block">Ti riconosci in</span>
                        <span className="block text-red-600 italic">questi problemi?</span>
                      </JapaneseText>
                    </div>

                    {/* Problems */}
                    <div className="space-y-8">
                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-neutral-900 text-lg mb-2">Sviluppo fermo da mesi</h4>
                          <p className="text-neutral-600 text-sm leading-relaxed">Il team precedente ha abbandonato o non riesce più a progredire</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-red-700 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-neutral-900 text-lg mb-2">Software pieno di bug</h4>
                          <p className="text-neutral-600 text-sm leading-relaxed">Funzioni che si rompone continuamente, performance scadenti</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-700 to-red-800 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-neutral-900 text-lg mb-2">Budget sforato, tempi dilatati</h4>
                          <p className="text-neutral-600 text-sm leading-relaxed">Il progetto costa il doppio e non si vede la fine</p>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-800 to-red-600 rounded-r-full"></div>
                        <div className="pl-8 py-4">
                          <h4 className="font-bold text-neutral-900 text-lg mb-2">Codice incomprensibile</h4>
                          <p className="text-neutral-600 text-sm leading-relaxed">Documentazione inesistente, nessuno sa come funziona</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideInLeft>

                {/* RIGHT SIDE - Solutions */}
                <SlideInRight delay={300} className="relative">
                  <div className="relative p-8 lg:p-16 h-full flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-2xl shadow-lg lg:shadow-xl lg:ml-8">
                    {/* Header */}
                    <div className="mb-12">
                      <div className="flex items-start justify-between mb-6">
                        <JapaneseLine variant="thin" className="w-8 bg-emerald-400" />
                      </div>
                      <JapaneseText variant="title" className="text-3xl font-black leading-tight">
                        <span className="block">Come Ti</span>
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Aiutiamo</span>
                      </JapaneseText>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-8">
                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              <circle cx="11" cy="11" r="3" strokeWidth={1} />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-cyan-300">ANALYZE</span>
                              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Analisi del Codice</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Esaminiamo la base di codice per identificare problemi tecnici</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              <circle cx="12" cy="12" r="1" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-blue-300">EVALUATE</span>
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Valutazione Architettura</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Verifichiamo se la struttura è solida o va ripensata</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-cyan-300">RECOVER</span>
                              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Piano di Recupero</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Proponiamo soluzioni concrete con tempi e costi realistici</p>
                          </div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="flex items-center space-x-6">
                          <div className="relative flex-shrink-0">
                            <svg className="w-10 h-10 text-white transition-all duration-500 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-mono text-xs text-blue-300">DEPLOY</span>
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Roadmap Chiara</h4>
                            <p className="text-primary-100 text-sm leading-relaxed">Step by step per rimettere il progetto sui binari</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideInRight>
              </div>
            </div>
          </FadeInUp>

          {/* CTA Section */}
          <div className="mt-28 text-center">
            <div className="relative group">
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-100/50 to-primary-100/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-gradient-to-r from-neutral-50/90 to-primary-50/90 backdrop-blur-lg rounded-2xl p-16 border border-neutral-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
                <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
                <JapaneseText variant="body" className="mt-8 text-lg text-neutral-600">
                  <span className="font-semibold text-neutral-800">Software bloccato, buggy o fuori controllo?</span><br />
                  Analizziamo gratuitamente il codice e ti diciamo cosa si può salvare e quanto costa.
                </JapaneseText>
                <p className="mt-4 text-sm text-neutral-500">
                  Audit tecnico gratuito per progetti in difficoltà.
                </p>

                <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-center items-center">
                  <OrigamiLink
                    href="#contatti"
                    variant="primary"
                    size="lg"
                  >
                    Richiedi Audit Gratuito
                  </OrigamiLink>
                  <p className="text-neutral-500 text-sm">
                    <span className="font-mono">{/* */} </span>Risultati programmabili • Analisi riservata
                  </p>
                </div>

                <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 