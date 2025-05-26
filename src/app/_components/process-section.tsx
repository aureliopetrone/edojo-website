import ProcessCarousel from "./process-carousel";
import { FadeInUp, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function ProcessSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="constellation" 
        intensity="moderate" 
        colorScheme="blue" 
        darkMode={true}
      />
      
      <section id="processo" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
              <JapaneseText variant="title" brushEffect className="text-neutral-50 mb-6">
                <span className="block text-lg font-normal text-neutral-400 mb-2 font-mono">
                  {/* Come lavoriamo */}
                </span>
                Da Idea a Deploy
                <span className="block text-lg font-normal text-neutral-400 mt-2">
                  (senza perdere la sanità mentale)
                </span>
              </JapaneseText>
              <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
                <span className="font-semibold text-neutral-50">4 step. Zero stress.</span> 
                Il nostro processo è trasparente, orientato ai risultati e ti tiene sempre aggiornato.
              </p>
              <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
            </div>
          </FadeInUp>
          
          <FadeInUp delay={300}>
            <div className="max-w-5xl mx-auto">
              <ProcessCarousel />
            </div>
          </FadeInUp>

          {/* Integrated Process Benefits in Code Block */}
          <FadeInUp delay={500}>
            <div className="mt-16 max-w-4xl mx-auto">
              <JapaneseLine variant="thin" className="max-w-64 mx-auto mb-8" />
              <div className="bg-neutral-900 rounded-lg border border-neutral-700 overflow-hidden shadow-2xl">
                <div className="bg-neutral-800 px-4 py-2 border-b border-neutral-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-400 text-sm ml-4 font-mono">edojo-process.js</span>
                  </div>
                </div>
                <div className="p-8 font-mono text-sm">
                  <div className="text-neutral-300">
                    <span className="text-purple-400">class</span> <span className="text-blue-300">EdojoProcess</span> <span className="text-yellow-300">{`{`}</span>
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="text-green-300">trasparenza</span>() <span className="text-yellow-300">{`{`}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">while</span>(<span className="text-blue-300">developing</span>) <span className="text-yellow-300">{`{`}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">client</span>.<span className="text-yellow-300">sendUpdate</span>(<span className="text-orange-300">&ldquo;progressi in tempo reale&rdquo;</span>);
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">client</span>.<span className="text-yellow-300">requestFeedback</span>();
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">{`}`}</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-yellow-300">{`}`}</span>
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="text-green-300">risultatiMisurabili</span>() <span className="text-yellow-300">{`{`}</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">obiettivi</span> = <span className="text-orange-300">&ldquo;definiti fin dall&apos;inizio&rdquo;</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">metriche</span> = <span className="text-orange-300">&ldquo;ROI concreto e verificabile&rdquo;</span>;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-blue-300">success</span>;
                    <br />
                    &nbsp;&nbsp;<span className="text-yellow-300">{`}`}</span>
                    <br />
                    <br />
                    <span className="text-yellow-300">{`}`}</span>
                  </div>
                  
                  {/* Process Benefits Integrated */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-300 font-sans">
                    <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700/50">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-neutral-50">Processo Trasparente</h4>
                          <p className="text-neutral-400 text-xs">Sempre aggiornato sui progressi</p>
                        </div>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        <span className="font-mono text-primary-300">while(developing)</span> ricevi aggiornamenti costanti. 
                        Vedi il progresso in tempo reale e dai feedback durante lo sviluppo.
                      </p>
                    </div>

                    <div className="bg-neutral-800/50 rounded-lg p-6 border border-neutral-700/50">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-neutral-50">Risultati Misurabili</h4>
                          <p className="text-neutral-400 text-xs">ROI concreto e verificabile</p>
                        </div>
                      </div>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        <span className="font-mono text-primary-300">return success;</span> Ogni progetto ha obiettivi chiari 
                        e metriche di successo definite fin dall&apos;inizio.
                      </p>
                    </div>
                  </div>

                  {/* Output Results */}
                  <div className="mt-8 font-mono text-sm text-neutral-300">
                    <span className="text-gray-500">{/* Output: */}</span>
                    <br />
                    <span className="text-green-400">✓ Software che funziona</span>
                    <br />
                    <span className="text-green-400">✓ Processi ottimizzati</span>
                    <br />
                    <span className="text-green-400">✓ ROI misurabile</span>
                    <br />
                    <span className="text-green-400">✓ Sonni tranquilli</span>
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