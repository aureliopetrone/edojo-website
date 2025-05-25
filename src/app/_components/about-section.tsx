export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-24 section-red">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl mb-6">
            <span className="block text-lg font-normal text-neutral-300 mb-2">
              {/* Tech Lab & Innovation Incubator */}
            </span>
            Chi Siamo
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-neutral-100 mb-6 text-lg">
                <span className="text-2xl font-bold text-neutral-50 block mb-2">Sviluppo Software.</span>
                <span className="text-2xl font-bold text-neutral-50 block mb-2">Consulenza Tecnica.</span>
                <span className="text-2xl font-bold text-neutral-50 block mb-2">Progetti Collaborativi.</span>
                
                Software house specializzata in sviluppo web, mobile e consulenza tecnologica.{" "}
                <span className="text-neutral-50 font-semibold">Focus su progetti collaborativi e soluzioni innovative.</span>
              </p>
              <p className="text-neutral-100 mb-6 text-lg">
                <span className="font-mono text-primary-300 bg-neutral-900/30 px-2 py-1 rounded text-sm mr-2">
                  Approccio Collaborativo
                </span>
                <br className="mb-2" />
                Lavoriamo con aziende per sviluppare progetti tecnologici complessi. 
                <span className="text-neutral-50 font-semibold">Sviluppo attraverso la collaborazione.</span>
              </p>
              <p className="text-neutral-100 text-lg">
                <span className="text-neutral-50 font-semibold">Progetti complessi?</span> 
                &ldquo;Sviluppiamo insieme.&rdquo;
              </p>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-8 border border-neutral-50/20">
              <h3 className="text-2xl font-bold text-neutral-50 mb-6">
                <span className="text-primary-300 font-mono text-lg block mb-1">function</span>
                ourEcosystem()
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">🤝</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Collaborative Innovation</p>
                    <p className="text-neutral-300 text-sm">Mettiamo in connessione aziende diverse per progetti condivisi e risultati win-win</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">🧪</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Tech Lab Incubation</p>
                    <p className="text-neutral-300 text-sm">Incubiamo progetti breakthrough in AI, IoT, robotica e tecnologie emergenti</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">🚀</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Impossible Projects</p>
                    <p className="text-neutral-300 text-sm">Realizziamo progetti che le aziende considerano "impossibili" da gestire internamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">🔗</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Strategic Partnerships</p>
                    <p className="text-neutral-300 text-sm">Creiamo alleanze tra startup, PMI e grandi aziende per progetti innovativi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-neutral-900 font-bold text-xs">💡</span>
                  </div>
                  <div>
                    <p className="text-neutral-50 font-semibold">Innovation Catalyst</p>
                    <p className="text-neutral-300 text-sm">Trasformiamo idee visionarie in soluzioni concrete attraverso la tecnologia</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-neutral-900/40 rounded border border-neutral-50/10">
                <p className="text-neutral-300 text-sm font-mono">
                  <span className="text-emerald-400">return</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">collaboration</span>: <span className="text-yellow-300">&ldquo;win-win&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">innovation</span>: <span className="text-yellow-300">&ldquo;breakthrough&rdquo;</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-300">impossibile</span>: <span className="text-yellow-300">&ldquo;possibile&rdquo;</span>
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
              innovationCatalysts = [catalyst, collaborator, architect]
            </h3>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              <span className="font-semibold">3 visionari, 1 missione:</span> trasformare progetti impossibili in successi condivisi.
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
                  <span className="text-white text-xs font-bold">💡</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-50 mb-2">Aurelio Petrone</h4>
              <p className="text-primary-300 font-medium mb-3">
                <span className="font-mono text-sm">Innovation Catalyst</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Founder e innovation catalyst. Trasforma visioni impossibili in 
                <span className="text-neutral-50 font-semibold">architetture tecnologiche collaborative</span>.
              </p>
            </div>

            {/* Client Relations */}
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
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
                <span className="font-mono text-sm">Collaboration Expert</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Architetto delle collaborazioni. Crea 
                <span className="text-neutral-50 font-semibold">sinergie tra aziende diverse</span> per progetti win-win.
              </p>
            </div>

            {/* UX/UI Designer */}
            <div className="bg-neutral-50/10 backdrop-blur-sm rounded-lg p-6 border border-neutral-50/20 text-center group hover:bg-neutral-50/15 transition-all duration-300">
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
                <span className="font-mono text-sm">Experience Architect</span>
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Architetto delle esperienze collaborative. 
                <span className="text-neutral-50 font-semibold">Progetta interfacce che abilitano l'innovazione</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 