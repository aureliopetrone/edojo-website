import OrigamiLink from "./origami-link";
import { FadeInUp, JapaneseLine, JapaneseText } from "./japanese-animations";
import BrandGeometricBackground from "./brand-geometric-background";
import AiChatDemo from "./ai-chat-demo";

export default function AiGenerativeSection() {
  return (
    <div className="py-40 relative">
      {/* Updated background to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10"></div>
      </div>

      {/* Brand Geometric Background Effects */}
      <BrandGeometricBackground
        variant="floating"
        intensity="subtle"
      />

      <section id="ai-generative" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Updated Hero Typography Section - Matching homepage style */}
            <div className="relative mb-32">
              {/* Main Title - Positioned Artistically */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[16rem] font-black text-primary-600/8 leading-none select-none pointer-events-none">
                  AI
                </div>
                
                {/* Interactive AI Chat Demo Background */}
                <AiChatDemo />
                
                <div className="relative pt-20 lg:pt-24 z-20">
                  <div className="flex flex-col">
                    {/* Main Heading - Updated to match homepage style */}
                    <div>
                      <div>
                        <h1 className="text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter text-center py-4">
                          <span className="text-gradient-red-purple animate-gradient-shift">
                            AI Generativa
                          </span>
                          <span className="block text-white">
                            per il Business
                          </span>
                        </h1>
                      </div>
                      <div className="mt-8 lg:mt-12 relative flex justify-center">
                        <div className="w-24 h-1 gradient-red-purple rounded-full"></div>
                        <div className="w-16 h-1 gradient-purple-red rounded-full mt-2 ml-8 animate-subtle-shift"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced subtitle - Updated styling */}
                  <div className="text-center mt-12 mx-auto max-w-3xl">
                    <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed">
                      Trasforma i tuoi processi aziendali con soluzioni AI personalizzate. 
                      <span className="font-semibold text-white block mt-2">
                        Dall&apos;automazione intelligente all&apos;analisi predittiva.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section - Updated styling to match homepage */}
            <div className="mt-28 text-center">
              <div className="relative group">
                {/* Decorative background gradient - Updated */}
                <div className="absolute inset-0 gradient-red-purple rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20"></div>

                <div className="relative glassmorphism-brand rounded-2xl p-16 shadow-brand hover:shadow-brand-bold transition-all duration-500 group-hover:scale-[1.01]">
                  <div className="w-32 h-1 gradient-red-purple rounded-full mx-auto mb-8"></div>
                  <p className="mt-8 text-lg text-neutral-300">
                    <span className="font-semibold text-white">Pronto a rivoluzionare il tuo business con l&apos;AI?</span><br />
                    Scopri come le nostre soluzioni possono ottimizzare i tuoi processi e aumentare la produttività.
                  </p>
                  <p className="mt-4 text-sm text-neutral-400">
                    Consulenza personalizzata • Implementazione guidata • Supporto continuativo
                  </p>

                  <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-center items-center">
                    <OrigamiLink
                      href="#contatti"
                      variant="primary"
                      size="lg"
                      className="gradient-red-purple hover:shadow-brand-bold text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                    >
                      Inizia il tuo Progetto AI
                    </OrigamiLink>
                    <p className="text-neutral-400 text-sm">
                      <span className="font-mono">{/* */} </span>Strategia AI • Sviluppo custom • ROI garantito
                    </p>
                  </div>

                  <div className="w-48 h-1 gradient-purple-red rounded-full mx-auto mt-8"></div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 