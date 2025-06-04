import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function ProjectAiSection() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="constellation" 
        intensity="moderate" 
        colorScheme="blue" 
        darkMode={true}
      />
      
      <section id="come-facciamo" className="relative">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
              <JapaneseText variant="title" brushEffect className="text-4xl font-bold text-neutral-50 mb-6">
                Come facciamo?
              </JapaneseText>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
                La nostra capacità di offrire sviluppo gratuito è resa possibile dall&apos;utilizzo strategico 
                di strumenti di intelligenza artificiale che rivoluzionano il nostro processo di sviluppo.
              </p>
              <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenuto testuale */}
            <SlideInLeft delay={300}>
              <div className="space-y-8">
                <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-50 mb-3">
                        Sviluppo Accelerato
                      </h3>
                      <p className="text-neutral-300">
                        Gli strumenti AI ci permettono di generare codice di alta qualità, 
                        automatizzare task ripetitivi e ridurre drasticamente i tempi di sviluppo 
                        da mesi a settimane.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-50 mb-3">
                        Qualità Garantita
                      </h3>
                      <p className="text-neutral-300">
                        L&apos;AI ci assiste nella scrittura di codice pulito, nel testing automatico 
                        e nell&apos;identificazione di potenziali problemi, garantendo standard 
                        professionali elevati.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-50 mb-3">
                        Costi Ottimizzati
                      </h3>
                      <p className="text-neutral-300">
                        Riducendo il tempo necessario per lo sviluppo, possiamo permetterci 
                        di investire il nostro tempo in progetti interessanti senza costi 
                        per il cliente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            {/* Visualizzazione del processo */}
            <SlideInRight delay={300}>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Il Nostro Processo AI-Powered</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Analisi Intelligente</h4>
                        <p className="text-primary-100 text-sm">L&apos;AI analizza i requisiti e genera l&apos;architettura ottimale</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Generazione Automatica</h4>
                        <p className="text-primary-100 text-sm">Codice base, componenti e logica business generati automaticamente</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Ottimizzazione Umana</h4>
                        <p className="text-primary-100 text-sm">I nostri sviluppatori perfezionano e personalizzano il risultato</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold">Testing & Deploy</h4>
                        <p className="text-primary-100 text-sm">Test automatizzati e deployment in produzione</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-xl">
                    <p className="text-sm text-center">
                      <strong>Risultato:</strong> Tempi ridotti del 70%, qualità mantenuta al 100%
                    </p>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Statistiche */}
          <FadeInUp delay={600}>
            <div className="mt-16">
              <JapaneseLine variant="thin" className="max-w-64 mx-auto mb-8" />
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-neutral-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-400 mb-2">70%</div>
                    <div className="text-neutral-300">Riduzione tempi di sviluppo</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-neutral-300">Standard di qualità mantenuti</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">1-2</div>
                    <div className="text-neutral-300">Settimane per progetto completo</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 