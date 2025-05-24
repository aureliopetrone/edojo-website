import ProcessCarousel from "./process-carousel";

export default function ProcessSection() {
  return (
    <section id="processo" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl mb-6">
            <span className="block text-lg font-normal text-neutral-400 mb-2 font-mono">
              // Come lavoriamo
            </span>
            Da Idea a Deploy
            <span className="block text-lg font-normal text-neutral-400 mt-2">
              (senza perdere la sanità mentale)
            </span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            <span className="font-semibold text-neutral-50">4 step. Zero stress.</span> 
            Il nostro processo è semplice, trasparente e orientato ai risultati.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <ProcessCarousel />
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-50">Processo Trasparente</h3>
                <p className="text-neutral-300 text-sm">Sempre aggiornato sui progressi</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              <span className="font-mono text-primary-300">while(developing)</span> ricevi aggiornamenti costanti. 
              Vedi il progresso in tempo reale e dai feedback durante lo sviluppo.
            </p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-50">Risultati Misurabili</h3>
                <p className="text-neutral-300 text-sm">ROI concreto e verificabile</p>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              <span className="font-mono text-primary-300">return success;</span> Ogni progetto ha obiettivi chiari 
              e metriche di successo definite fin dall'inizio.
            </p>
          </div>
        </div>

        {/* Code Block */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-neutral-900 rounded-lg border border-neutral-700 overflow-hidden">
            <div className="bg-neutral-800 px-4 py-2 border-b border-neutral-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-neutral-400 text-sm ml-4 font-mono">edojo-process.js</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-neutral-300">
                <span className="text-purple-400">const</span> <span className="text-blue-300">yourProject</span> = <span className="text-yellow-300">{`{`}</span>
                <br />
                &nbsp;&nbsp;<span className="text-green-300">idea</span>: <span className="text-orange-300">"Voglio automatizzare tutto"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-300">budget</span>: <span className="text-orange-300">"Ragionevole"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-green-300">timeline</span>: <span className="text-orange-300">"Ieri"</span>
                <br />
                <span className="text-yellow-300">{`}`}</span>;
                <br />
                <br />
                <span className="text-purple-400">const</span> <span className="text-blue-300">result</span> = <span className="text-blue-300">eDojo</span>.<span className="text-yellow-300">process</span>(<span className="text-blue-300">yourProject</span>);
                <br />
                <br />
                <span className="text-gray-500">// Output:</span>
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
      </div>
    </section>
  );
} 