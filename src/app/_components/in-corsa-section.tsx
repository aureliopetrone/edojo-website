import OrigamiLink from "./origami-link";

export default function InCorsaSection() {
  return (
    <section id="in-corsa" className="py-24 section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
            <span className="block text-lg font-normal text-neutral-600 mb-2 font-mono">
              {/* Collaborative Innovation */}
            </span>
            Insieme Realizziamo l'Impossibile
            <span className="block text-lg font-normal text-neutral-600 mt-2">
              (quando la collaborazione supera le limitazioni individuali)
            </span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            <span className="font-semibold text-neutral-800">La tua azienda ha un'idea rivoluzionaria ma mancano competenze o risorse?</span> 
            Creiamo ecosistemi collaborativi dove aziende diverse si uniscono per realizzare progetti breakthrough.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Collaboration opportunities */}
          <div>
            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                <span className="text-primary-600 font-mono text-sm block mb-1">{/* Situazioni collaborative */}</span>
                Riconosci il potenziale?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 font-bold text-xs">🤝</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Progetto visionario, risorse limitate</p>
                    <p className="text-neutral-600 text-sm">Hai l'idea ma ti servono competenze tecniche avanzate o co-investitori</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 font-bold text-xs">🚀</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Innovazione cross-industry</p>
                    <p className="text-neutral-600 text-sm">Progetti che richiedono expertise da settori diversi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 font-bold text-xs">🧪</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">R&D condiviso</p>
                    <p className="text-neutral-600 text-sm">Ricerca e sviluppo troppo costoso per una singola azienda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-primary-600 font-bold text-xs">💡</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Tecnologie emergenti</p>
                    <p className="text-neutral-600 text-sm">AI, IoT, robotica: progetti che nessuno osa affrontare da solo</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                <p className="text-primary-800 text-sm font-medium">
                  <span className="font-mono text-primary-600">ecosystem.connect(</span>
                  &ldquo;Le migliori innovazioni nascono dalla collaborazione&rdquo;
                  <span className="font-mono text-primary-600">)</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Our collaborative approach */}
          <div>
            <div className="bg-primary-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">
                <span className="text-primary-200 font-mono text-sm block mb-1">{/* Il nostro approccio */}</span>
                Collaborative Innovation Lab
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Partner Matching</p>
                    <p className="text-primary-100 text-sm">Identifichiamo e connetti amo aziende complementari per il progetto</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Tech Lab Incubation</p>
                    <p className="text-primary-100 text-sm">Incubiamo il progetto nel nostro lab tecnologico</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sviluppo Collaborativo</p>
                    <p className="text-primary-100 text-sm">Gestiamo lo sviluppo con metodologie collaborative</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">4</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Win-Win Launch</p>
                    <p className="text-primary-100 text-sm">Lanciamo il progetto garantendo benefici per tutti i partner</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-primary-100 text-sm font-mono">
                  <span className="text-emerald-300">function</span> <span className="text-blue-200">collaborativeInnovation</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-gray-300">{/* Impossibile + Collaborazione = Possibile */}</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">return</span> {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">partnerships</span>: <span className="text-green-300">&ldquo;strategic&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">innovation</span>: <span className="text-green-300">&ldquo;breakthrough&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">results</span>: <span className="text-green-300">&ldquo;win-win&rdquo;</span>
                  <br />
                  &nbsp;&nbsp;{"}"};
                  <br />
                  {"}"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-neutral-50 to-primary-50 rounded-xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              <span className="font-mono text-primary-600 text-sm block mb-1">{/* Ready to innovate together? */}</span>
              Hai un progetto che considera impossibile?
            </h3>
            <p className="text-neutral-600 text-lg mb-6 max-w-2xl mx-auto">
              Condividi la tua visione con noi. Valutiamo insieme la fattibilità e identifichiamo 
              i partner strategici per trasformare l'impossibile in realtà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OrigamiLink
                href="#contatti"
                variant="primary"
                size="lg"
              >
                <span className="font-mono text-sm mr-2">collaborate(</span>
                Parliamo del Progetto
                <span className="font-mono text-sm ml-2">)</span>
              </OrigamiLink>
              <p className="text-neutral-500 text-sm">
                <span className="font-mono">{/* */} </span>Valutazione gratuita e riservata
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 