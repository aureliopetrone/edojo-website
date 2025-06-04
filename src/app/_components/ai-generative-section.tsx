import OrigamiLink from "./origami-link";
import { FadeInUp, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";
import AiChatDemo from "./ai-chat-demo";

export default function AiGenerativeSection() {
  return (
    <div className="py-40 relative">
      {/* AI-inspired gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-blue-50 50% to-cyan-50"></div>
      </div>

      {/* Modern Background Effects */}
      <ModernBackground
        variant="grid"
        intensity="subtle"
        colorScheme="neutral"
        darkMode={false}
      />

      <section id="ai-generative" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Expanded Hero Typography Section - AI themed with Interactive Demo */}
            <div className="relative mb-32">
              {/* Main Title - Positioned Artistically */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[16rem] font-black text-purple-800/5 leading-none select-none pointer-events-none">
                  AI
                </div>
                
                {/* Interactive AI Chat Demo Background */}
                <AiChatDemo />
                
                <div className="relative pt-20 lg:pt-24 z-20">
                  <div className="flex flex-col">
                    {/* Main Heading */}
                    <div>
                      <div>
                        <JapaneseText variant="title" className="text-5xl sm:text-6xl lg:text-8xl font-black text-neutral-800 leading-[1.1] tracking-tighter text-center py-4">
                          AI Generativa
                          <span className="block bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                            per il Business
                          </span>
                        </JapaneseText>
                      </div>
                      <div className="mt-8 lg:mt-12 relative flex justify-center">
                        <JapaneseLine variant="thick" className="w-24 bg-gradient-to-r from-purple-500 to-blue-600" />
                        <JapaneseLine variant="thin" className="w-16 bg-gradient-to-r from-blue-600 to-purple-400 mt-3 ml-4" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced subtitle */}
                  <div className="text-center mt-12 mx-auto max-w-3xl">
                    <JapaneseText variant="body" className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                      Trasforma i tuoi processi aziendali con soluzioni AI personalizzate. 
                      <span className="font-semibold text-neutral-800 block mt-2">
                        Dall&apos;automazione intelligente all&apos;analisi predittiva.
                      </span>
                    </JapaneseText>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-28 text-center">
              <div className="relative group">
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-blue-100/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                <div className="relative bg-gradient-to-r from-purple-50/90 to-blue-50/90 backdrop-blur-lg rounded-2xl p-16 border border-purple-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
                  <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8 bg-gradient-to-r from-purple-500 to-blue-600" />
                  <JapaneseText variant="body" className="mt-8 text-lg text-neutral-600">
                    <span className="font-semibold text-neutral-800">Pronto a rivoluzionare il tuo business con l&apos;AI?</span><br />
                    Scopri come le nostre soluzioni possono ottimizzare i tuoi processi e aumentare la produttività.
                  </JapaneseText>
                  <p className="mt-4 text-sm text-neutral-500">
                    Consulenza personalizzata • Implementazione guidata • Supporto continuativo
                  </p>

                  <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-center items-center">
                    <OrigamiLink
                      href="#contatti"
                      variant="primary"
                      size="lg"
                    >
                      Inizia il tuo Progetto AI
                    </OrigamiLink>
                    <p className="text-neutral-500 text-sm">
                      <span className="font-mono">{/* */} </span>Strategia AI • Sviluppo custom • ROI garantito
                    </p>
                  </div>

                  <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8 bg-gradient-to-r from-purple-400 to-blue-500" />
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 