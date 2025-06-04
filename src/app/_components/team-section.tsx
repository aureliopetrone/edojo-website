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
    </div>,

    // Client Specialist
    <div key="chiara" className="group">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform duration-300">
            CL
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-black text-xs">🤝</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Chiara Leone</h4>
          <p className="text-emerald-200 font-medium text-sm uppercase tracking-wider mb-3">Client Relations</p>
          <p className="text-neutral-100 text-sm leading-relaxed">
            Ponte tra cliente e team tecnico.
            <span className="block text-white font-medium mt-2">Garantisce tempi e qualità del progetto.</span>
          </p>
        </div>
      </div>
    </div>,

    // UX/UI Designer
    <div key="enzo" className="group">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform duration-300">
            EM
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black text-xs">🎨</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">Enzo Mara</h4>
          <p className="text-blue-200 font-medium text-sm uppercase tracking-wider mb-3">UX/UI Designer</p>
          <p className="text-neutral-100 text-sm leading-relaxed">
            Design di interfacce e user experience.
            <span className="block text-white font-medium mt-2">Crea soluzioni intuitive e user-friendly.</span>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      <div className="overflow-hidden">
                        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter text-center">
                          Il Nostro
                          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
                <span className="font-semibold text-white">Competenze diverse, obiettivo comune:</span> 
                creare soluzioni complete e di qualità per i nostri clienti.
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Sviluppo, progetto e design in un unico team affiatato.
              </p>
            </div>
          </FadeInUp>

          {/* Team Grid - Asymmetric but controlled layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:transform lg:translate-y-8">
              <SlideInLeft delay={200}>
                {teamMembers[0]}
              </SlideInLeft>
            </div>
            <div className="lg:transform lg:-translate-y-4">
              <FadeInUp delay={400}>
                {teamMembers[1]}
              </FadeInUp>
            </div>
            <div className="lg:transform lg:translate-y-12">
              <SlideInRight delay={600}>
                {teamMembers[2]}
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 