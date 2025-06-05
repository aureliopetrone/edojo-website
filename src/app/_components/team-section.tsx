import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function TeamSection() {
  const teamMembers = [
    // Developer - Aurelio Petrone
    <div key="aurelio" className="group w-full max-w-md mx-auto">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
            AP
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
            <span className="text-black text-xs">💻</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Aurelio Petrone</h4>
          <p className="text-secondary-300 font-medium text-sm uppercase tracking-wider mb-3">CEO & Tech Lead</p>
          <p className="text-white/70 text-sm leading-relaxed">
            15+ anni di esperienza nel sviluppo software per PMI e aziende multinazionali.
            <span className="block text-white font-medium mt-2">Trasforma la tecnologia in soluzioni concrete.</span>
          </p>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="constellation" 
        intensity="moderate" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      {/* Brand geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/8 to-secondary-500/10 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-secondary-500/8 to-primary-500/6 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-white/4 to-secondary-400/6 rounded-full blur-2xl animate-elegant-float" style={{ animationDelay: '1s' }}></div>
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
                          <span className="block text-gradient-red-purple animate-gradient-shift">
                            Team
                          </span>
                        </h1>
                      </div>
                      <div className="mt-6 lg:mt-8 relative flex justify-center gap-4">
                        <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                        <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-subtle-shift"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive Paragraphs */}
            <div className="text-center mx-auto mb-16">
              <p className="mt-6 text-lg text-white/70">
                <span className="font-semibold text-white">Competenza ed esperienza</span> al servizio dei nostri clienti per creare soluzioni complete e di qualità.
              </p>
              <p className="mt-2 text-sm text-white/50">
                Sviluppo, progetto e design con focus sulla qualità e l&apos;innovazione.
              </p>
            </div>
          </FadeInUp>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <FadeInUp key={index} delay={400 + index * 100}>
                {member}
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 