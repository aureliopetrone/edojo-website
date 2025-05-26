import Link from "next/link";
import OrigamiLink from "./origami-link";
import TypewriterText from "./typewriter-text";
import InteractiveParticlesSimple from "./interactive-particles-simple";
import { FadeInUp, ScaleIn, JapaneseLine } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function HeroSection() {
  const headlines = [
    { first: "from web to", second: "AI revolution", third: "" },
    { first: "build(", second: "intelligent", third: ").systems" },
    { first: "robots.meet(", second: "creativity", third: ")" },
    { first: "ai.generative.", second: "unleashed()" },
    { first: "const future =", second: "autonomous()" },
    { first: "microteam.", second: "megaimpact()" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="mixed" 
        intensity="intense" 
        colorScheme="pink" 
        darkMode={false}
      />
      
      {/* Interactive Particles Background */}
      <InteractiveParticlesSimple />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full min-h-screen flex items-center" style={{ zIndex: 2 }}>
        <div className="text-center w-full py-8 sm:py-12">
          {/* Linea decorativa superiore */}
          <FadeInUp delay={200}>
            <JapaneseLine variant="thin" className="max-w-24 sm:max-w-32 mx-auto mb-6 sm:mb-8" />
          </FadeInUp>

          {/* Main Title */}
          <div className="mb-6">
            <ScaleIn delay={400}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl leading-tight mb-4 min-h-[100px] sm:min-h-[120px] lg:min-h-[160px] flex items-center justify-center">
                <TypewriterText 
                  phrases={headlines}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                />
              </h1>
            </ScaleIn>
            <FadeInUp delay={600}>
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
                Dal web development all&apos;AI generativa e robotica. 
                <span className="block mt-2 text-base sm:text-lg text-neutral-500">
                  Costruiamo soluzioni intelligenti.
                </span>
              </p>
            </FadeInUp>
          </div>

          {/* Value Proposition */}
          <FadeInUp delay={800}>
            <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
              <div className="inline-flex items-center bg-primary-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-primary-200 shadow-sm hover:shadow-md transition-shadow duration-300 mx-4">
                <span className="text-primary-700 font-medium text-sm sm:text-base">
                  <span className="font-mono text-xs sm:text-sm mr-2">🤖</span>
                  <span className="hidden sm:inline">AI Generativa • Robotica • Sviluppo Software</span>
                  <span className="sm:hidden">AI • Robotica • Software</span>
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Linea decorativa centrale */}
          <FadeInUp delay={1000}>
            <JapaneseLine variant="double" className="max-w-36 sm:max-w-48 mx-auto mb-6 sm:mb-8" />
          </FadeInUp>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <ScaleIn delay={1200}>
              <OrigamiLink
                href="#contatti"
                variant="primary"
                size="lg"
              >
                Parliamone
              </OrigamiLink>
            </ScaleIn>
            <FadeInUp delay={1400}>
              <Link href="#chi-siamo" className="text-sm font-semibold leading-6 text-neutral-600 hover:text-neutral-900 transition-colors group flex items-center">
                La nostra evoluzione
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
              </Link>
            </FadeInUp>
          </div>

          {/* Linea decorativa inferiore */}
          <FadeInUp delay={1600}>
            <JapaneseLine variant="thin" className="max-w-24 sm:max-w-32 mx-auto mt-8 sm:mt-12" />
          </FadeInUp>
        </div>
      </div>
    </section>
  );
} 