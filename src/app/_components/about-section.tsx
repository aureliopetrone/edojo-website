export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-24 section-red">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl mb-6">
            <span className="block text-lg font-normal text-neutral-300 mb-2">
              {/* Chi siamo */}
            </span>
            Codice, Logica & Risultati
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-neutral-100 mb-6 text-lg">
                <span className="text-2xl font-bold text-neutral-50 block mb-2">1 CEO/lead dev.</span>
                <span className="text-2xl font-bold text-neutral-50 block mb-2">1 client relations.</span>
                <span className="text-2xl font-bold text-neutral-50 block mb-2">1 UX/UI designer.</span>
                <span className="text-2xl font-bold text-neutral-50 block mb-4">∞ soluzioni.</span>
                
                Siamo una <span className="text-neutral-50 font-semibold">digital agency</span> che 
                sviluppa soluzioni cloud, AI, IoT e robotica per aziende che vogliono innovare.{" "}
                <span className="text-neutral-50 font-semibold">Tecnologie emergenti, risultati concreti.</span>
              </p>
              <p className="text-neutral-100 mb-6 text-lg">
                <span className="font-mono text-primary-300 bg-neutral-900/30 px-2 py-1 rounded text-sm mr-2">
                  Cloud, AI, IoT & Robotica
                </span>
                <br className="mb-2" />
                Lavoriamo con aziende di tutto il mondo che hanno bisogno di 
                integrare intelligenza artificiale, sistemi IoT, automazione robotica o migrare al cloud.
              </p>
              <p className="text-neutral-100 text-lg">
                <span className="text-neutral-50 font-semibold">Il nostro motto?</span> 
                &ldquo;Se non migliora il tuo business, non lo facciamo.&rdquo;
              </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-8 border border-neutral-50/20">
              <h3 className="text-2xl font-bold text-neutral-50 mb-6">
                <span className="text-primary-300 font-mono text-lg block mb-1">function</span>
                whatWeDo()
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">1</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Soluzioni Cloud & AI</p>
                    <p className="text-neutral-300 text-sm">Migrazione cloud, integrazione AI, machine learning e automazione intelligente</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">2</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">IoT & Sistemi Connessi</p>
                    <p className="text-neutral-300 text-sm">Sensori, dispositivi smart, monitoraggio real-time e dashboard IoT</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">3</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Robotica & Automazione</p>
                    <p className="text-neutral-300 text-sm">Controllo robotico, automazione industriale e sistemi di produzione smart</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">4</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">WebApp di Nuova Generazione</p>
                    <p className="text-neutral-300 text-sm">Dashboard moderne, portali intelligenti, SaaS e piattaforme web scalabili</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">5</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Gestionali Intelligenti</p>
                    <p className="text-neutral-300 text-sm">CRM con AI, ERP cloud-native e sistemi di business intelligence</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-neutral-900/40 rounded border border-neutral-50/10">
                <p className="text-neutral-300 text-sm font-mono">
                  <span className="text-emerald-400">return</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">efficiency</span>: <span className="text-yellow-300">&ldquo;+300%&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">costs</span>: <span className="text-yellow-300">&ldquo;-50%&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">headaches</span>: <span className="text-yellow-300">&ldquo;0&rdquo;</span>
                  <br />
                  {"}"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-50 sm:text-3xl mb-4">
              <span className="text-primary-300 font-mono text-lg block mb-1">const</span>
              team = [ceo, client_relations, designer]
            </h3>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              <span className="font-semibold">3 professionisti, 1 obiettivo:</span> far funzionare il tuo business meglio di prima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO/Lead Developer - Aurelio Petrone */}
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-2xl font-bold">
                  AP
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👑</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-50 mb-2">Aurelio Petrone</h4>
              <p className="text-primary-300 font-medium mb-3">
                <span className="font-mono text-sm">CEO & Lead Developer</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Founder e lead developer. Coordina il team e 
                <span className="text-neutral-50 font-semibold">trasforma idee in architetture scalabili</span>.
              </p>
            </div>

            {/* Client Relations */}
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                  CR
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👂</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-50 mb-2">Chiara Leone</h4>
              <p className="text-primary-300 font-medium mb-3">
                <span className="font-mono text-sm">Client Whisperer</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Chi ascolta davvero le tue esigenze e traduce i tuoi bisogni in 
                <span className="text-neutral-50 font-semibold">soluzioni concrete</span>.
              </p>
            </div>

            {/* UX/UI Designer */}
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  UX
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✨</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-50 mb-2">Enzo Mara</h4>
              <p className="text-primary-300 font-medium mb-3">
                <span className="font-mono text-sm">Experience Architect</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Designer che pensa come gli utenti. 
                <span className="text-neutral-50 font-semibold">Crea esperienze che convertono</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 