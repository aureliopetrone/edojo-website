import OrigamiLink from "./origami-link";

export default function InCorsaSection() {
  return (
    <section id="in-corsa" className="py-24 section-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
            <span className="block text-lg font-normal text-neutral-600 mb-2 font-mono">
              // Progetti esistenti
            </span>
            Prendiamo il testimone
            <span className="block text-lg font-normal text-neutral-600 mt-2">
              (quando il codice diventa un problema)
            </span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            <span className="font-semibold text-neutral-800">Il tuo team ha sviluppato internamente ma ora è in difficoltà?</span> 
            Prendiamo in carico progetti esistenti, li sistemiamo e li manteniamo nel tempo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Problem description */}
          <div>
            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">
                <span className="text-red-600 font-mono text-sm block mb-1">// Situazioni che riconosciamo</span>
                Ti suona familiare?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Il developer se n'è andato</p>
                    <p className="text-neutral-600 text-sm">E nessuno sa più come funziona il sistema</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Costi di manutenzione alle stelle</p>
                    <p className="text-neutral-600 text-sm">Ogni piccola modifica costa una fortuna</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Bug che si moltiplicano</p>
                    <p className="text-neutral-600 text-sm">Ogni fix ne crea altri due</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-red-600 font-bold text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-neutral-800 font-semibold">Tecnologie obsolete</p>
                    <p className="text-neutral-600 text-sm">Il sistema funziona ma è impossibile da evolvere</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-800 text-sm font-medium">
                  <span className="font-mono text-red-600">console.error(</span>
                  "Non possiamo più gestirlo internamente"
                  <span className="font-mono text-red-600">)</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - Our solution */}
          <div>
            <div className="bg-primary-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">
                <span className="text-primary-200 font-mono text-sm block mb-1">// La nostra soluzione</span>
                Rescue & Maintain
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Code Audit completo</p>
                    <p className="text-primary-100 text-sm">Analizziamo tutto il codice e documentiamo lo stato attuale</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Refactoring strategico</p>
                    <p className="text-primary-100 text-sm">Sistemiamo le parti critiche senza riscrivere tutto</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Manutenzione continuativa</p>
                    <p className="text-primary-100 text-sm">Diventiamo il vostro team tecnico di riferimento</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-xs">4</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Evoluzione graduale</p>
                    <p className="text-primary-100 text-sm">Miglioriamo il sistema step by step, senza fermare il business</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <p className="text-primary-100 text-sm font-mono">
                  <span className="text-emerald-300">function</span> <span className="text-blue-200">rescueProject</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-gray-300">// Da caos a sistema stabile</span>
                  <br />
                  &nbsp;&nbsp;<span className="text-emerald-300">return</span> {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">stability</span>: <span className="text-green-300">"✓"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">documentation</span>: <span className="text-green-300">"✓"</span>,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">peace_of_mind</span>: <span className="text-green-300">"✓"</span>
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
              <span className="font-mono text-primary-600 text-sm block mb-1">// Ready to rescue?</span>
              Hai un progetto che ti sta dando problemi?
            </h3>
            <p className="text-neutral-600 text-lg mb-6 max-w-2xl mx-auto">
              Mandiamo un audit gratuito del tuo codice. Nessun impegno, solo una valutazione onesta 
              di cosa si può fare per rimettere tutto in carreggiata.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OrigamiLink
                href="#contatti"
                variant="primary"
                size="lg"
              >
                <span className="font-mono text-sm mr-2">audit(</span>
                Richiedi Code Audit
                <span className="font-mono text-sm ml-2">)</span>
              </OrigamiLink>
              <p className="text-neutral-500 text-sm">
                <span className="font-mono">// </span>Gratuito e senza impegno
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 