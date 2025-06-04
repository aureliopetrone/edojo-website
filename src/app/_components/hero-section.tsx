"use client";

import Link from "next/link";
import OrigamiLink from "./origami-link";
import { FadeInUp, ScaleIn } from "./japanese-animations";
import AccelerationBackground from "./acceleration-background";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Acceleration Background Effect */}
      <AccelerationBackground />
      
      {/* Clean contrast overlay - ridotta opacità per maggiore visibilità dell'effetto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full min-h-screen flex items-center" style={{ zIndex: 2 }}>
        <div className="text-center w-full py-12 sm:py-16">
          
          {/* Artistic Typography with Background "edojo" */}
          <div className="mb-16">
            <div className="relative">
              {/* Background "edojo" text */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-[8rem] sm:text-[12rem] lg:text-[20rem] font-black text-white/3 leading-none select-none pointer-events-none">
                edojo
              </div>
              
              {/* Main Title - Positioned Artistically */}
              <div className="relative pt-8 lg:pt-16">
                <ScaleIn delay={200}>
                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 py-2">
                    <span className="block text-white">
                      AIUTIAMO I
                    </span>
                    <span className="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-black">
                      GIGANTI
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-6xl text-white font-black mt-4">
                      A CORRERE VELOCI
                    </span>
                  </h1>
                  
                  {/* Decorative gradient lines */}
                  <div className="mt-8 relative flex justify-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full mt-2 ml-6"></div>
                  </div>
                </ScaleIn>
              </div>
            </div>
            
            <FadeInUp delay={400}>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mt-12">
                Acceleriamo la trasformazione digitale con AI e tecnologie innovative.
              </p>
            </FadeInUp>
          </div>

          {/* Clean Bold CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <ScaleIn delay={600}>
              <div className="relative group">
                <OrigamiLink
                  href="#contatti"
                  variant="primary"
                  size="lg"
                  className="gradient-primary hover:shadow-lg text-white font-black text-lg px-12 py-4 rounded-xl border-0 transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                >
                  RACCONTACI IL PROGETTO
                </OrigamiLink>
              </div>
            </ScaleIn>
            
            <FadeInUp delay={800}>
              <Link 
                href="#chi-siamo" 
                className="group inline-flex items-center text-xl font-bold text-white hover:text-orange-300 transition-all duration-300"
              >
                <span className="border-b-2 border-white group-hover:border-orange-300 transition-all duration-300 uppercase tracking-wide">SCOPRI DI PIÙ</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
} 