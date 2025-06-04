import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function TeamSection() {
  const teamMembers = [
    // Developer - Aurelio Petrone
    <div key="aurelio" className="group">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform duration-300">
            AP
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
            <span className="text-black text-xs">💻</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Aurelio Petrone</h4>
          <p className="text-cyan-200 font-medium text-sm uppercase tracking-wider mb-3">CEO & Tech Lead</p>
          <p className="text-neutral-100 text-sm leading-relaxed">
            10+ anni di esperienza nel sviluppo software.
            <span className="block text-white font-medium mt-2">Trasforma la tecnologia in soluzioni concrete.</span>
          </p>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="constellation" 
        intensity="moderate" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      {/* Artistic geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neutral-700/8 to-neutral-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-neutral-800/8 to-neutral-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-neutral-700/6 to-neutral-800/8 rounded-full blur-2xl"></div>
      </div>
      
      <section id="team" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* New Hero Typography Section - Artistic Layout */}
            <div className="relative mb-16">
              {/* Main Title - Positioned Artistically */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[18rem] font-black text-white/5 leading-none select-none pointer-events-none">
                  edojo
                </div>
                <div className="relative pt-12 lg:pt-20">
                  <div className="flex flex-col">
                    {/* Main Heading */}
                    <div>
                      <div>
                        <h1 className="text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter py-2">
                          Il nostro
                          <span className="block text-gradient-hero">
                            Team
                          </span>
                        </h1>
                      </div>
                      <div className="mt-6 lg:mt-8 relative flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full mt-2 ml-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive Paragraphs */}
            <div className="text-center mx-auto mb-16">
              <p className="mt-6 text-lg text-neutral-300">
                <span className="font-semibold text-white">Competenza ed esperienza</span> 
                al servizio dei nostri clienti per creare soluzioni complete e di qualità.
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Sviluppo, progetto e design con focus sulla qualità e l&apos;innovazione.
              </p>
            </div>
          </FadeInUp>

          {/* Team Member - Centered */}
          <div className="flex justify-center">
            <div className="max-w-md">
              <FadeInUp delay={400}>
                {teamMembers[0]}
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 