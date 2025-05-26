import OrigamiLink from "./origami-link";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function InCorsaSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-red-50 via-neutral-50 to-amber-50 relative">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="grid" 
        intensity="subtle" 
        colorScheme="neutral" 
        darkMode={false}
      />
      
      <section id="in-corsa" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
              <JapaneseText variant="title" brushEffect className="text-neutral-900 mb-6">
                <span className="block text-lg font-normal text-neutral-600 mb-2 font-mono">
                  {/* Project Rescue */}
                </span>
                Progetto in Difficoltà?
                <span className="block text-lg font-normal text-neutral-600 mt-2">
                  (audit tecnico gratuito)
                </span>
              </JapaneseText>
              <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
                <span className="font-semibold text-neutral-800">Software bloccato, buggy o fuori controllo?</span> 
                Analizziamo gratuitamente il codice e ti diciamo cosa si può salvare e quanto costa.
              </p>
              <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Common project problems */}
            <SlideInLeft delay={300}>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-neutral-200 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">
                  <span className="text-red-600 font-mono text-sm block mb-1">{/* Segnali di allarme */}</span>
                  Ti riconosci in questi problemi?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-xs">⚠️</span>
                    </div>
                    <div>
                      <p className="text-neutral-800 font-semibold">Sviluppo fermo da mesi</p>
                      <p className="text-neutral-600 text-sm">Il team precedente ha abbandonato o non riesce più a progredire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-xs">🐛</span>
                    </div>
                    <div>
                      <p className="text-neutral-800 font-semibold">Software pieno di bug</p>
                      <p className="text-neutral-600 text-sm">Funzioni che si rompono continuamente, performance scadenti</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-xs">💸</span>
                    </div>
                    <div>
                      <p className="text-neutral-800 font-semibold">Budget sforato, tempi dilatatati</p>
                      <p className="text-neutral-600 text-sm">Il progetto costa il doppio e non si vede la fine</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-red-600 font-bold text-xs">📝</span>
                    </div>
                    <div>
                      <p className="text-neutral-800 font-semibold">Codice incomprensibile</p>
                      <p className="text-neutral-600 text-sm">Documentazione inesistente, nessuno sa come funziona</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-amber-800 text-sm font-medium">
                    <span className="font-mono text-amber-600">if(</span>
                    progetto in difficoltà
                    <span className="font-mono text-amber-600">) {`{ auditGratuito() }`}</span>
                  </p>
                </div>
              </div>
            </SlideInLeft>
            
            {/* Right side - Our rescue approach */}
            <SlideInRight delay={300}>
              <div className="bg-primary-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">
                  <span className="text-primary-200 font-mono text-sm block mb-1">{/* Audit gratuito */}</span>
                  Come Ti Aiutiamo
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Analisi del Codice</p>
                      <p className="text-primary-100 text-sm">Esaminiamo la base di codice per identificare problemi tecnici</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Valutazione Architettura</p>
                      <p className="text-primary-100 text-sm">Verifichiamo se la struttura è solida o va ripensata</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Piano di Recupero</p>
                      <p className="text-primary-100 text-sm">Proponiamo soluzioni concrete con tempi e costi realistici</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Roadmap Chiara</p>
                      <p className="text-primary-100 text-sm">Step by step per rimettere il progetto sui binari</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="text-primary-100 text-sm font-mono">
                    <span className="text-emerald-300">function</span> <span className="text-blue-200">projectRescue</span>() {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-gray-300">{/* Audit gratuito in 48h */}</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-emerald-300">return</span> {"{"}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">problemi</span>: <span className="text-green-300">&ldquo;identificati&rdquo;</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">soluzioni</span>: <span className="text-green-300">&ldquo;concrete&rdquo;</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">costo</span>: <span className="text-green-300">&ldquo;gratuito&rdquo;</span>
                    <br />
                    &nbsp;&nbsp;{"}"};
                    <br />
                    {"}"}
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-neutral-50 to-primary-50 rounded-xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                <span className="font-mono text-primary-600 text-sm block mb-1">{/* Free project audit */}</span>
                Vuoi una nostra opinione?
              </h3>
              <p className="text-neutral-600 text-lg mb-6 max-w-2xl mx-auto">
                Inviaci i dettagli del progetto. Ti rispondiamo entro 48h con 
                un&apos;analisi gratuita e preventivo per il recupero.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <OrigamiLink
                  href="#contatti"
                  variant="primary"
                  size="lg"
                >
                  <span className="font-mono text-sm mr-2">rescue(</span>
                  Richiedi Audit Gratuito
                  <span className="font-mono text-sm ml-2">)</span>
                </OrigamiLink>
                <p className="text-neutral-500 text-sm">
                  <span className="font-mono">{/* */} </span>Risposta entro 48h • Analisi riservata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 