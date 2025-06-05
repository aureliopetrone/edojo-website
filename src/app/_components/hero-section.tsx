"use client";

import Link from "next/link";
import OrigamiButton from "./origami-button";
import { FadeInUp, ScaleIn } from "./japanese-animations";
import AccelerationBackground from "./acceleration-background";

export default function HeroSection() {
  return (
    <section id="home" className="section-hero relative min-h-screen flex items-center overflow-hidden">
      {/* Acceleration Background Effect */}
      <AccelerationBackground />
      
      {/* Clean contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full min-h-screen flex items-center" style={{ zIndex: 2 }}>
        <div className="text-center w-full py-16 sm:py-20">
          
            {/* Brand Typography with Refined Design */}
            <div className="mb-12 sm:mb-16">
              <div className="relative">
                
                {/* Main Title - Responsive Typography */}
                <div className="relative pt-4 sm:pt-8 lg:pt-16">
                  <ScaleIn delay={200}>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6 sm:mb-8">
                      <span className="block text-white">
                        AIUTIAMO I
                      </span>
                      <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] mt-2 sm:mt-4">
                        <span className="text-gradient-red-purple animate-gradient-shift">GIGANTI</span>
                      </span>
                      <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mt-4 sm:mt-6">
                        A CORRERE VELOCI
                      </span>
                    </h1>
                    
                    {/* Bold accent element */}
                    <div className="mt-8 sm:mt-12 relative flex justify-center gap-3 sm:gap-4">
                      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-subtle-shift"></div>
                    </div>
                  </ScaleIn>
                </div>
              </div>
            </div>
            
            <FadeInUp delay={400}>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mt-8 sm:mt-12">
                Acceleriamo la trasformazione digitale con AI e tecnologie innovative.
              </p>
            </FadeInUp>

          {/* Clean Bold CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <ScaleIn delay={600}>
              <div className="relative group">
                <OrigamiButton
                  href="#contatti"
                  variant="purple-red"
                  size="lg"
                >
                  RACCONTACI IL PROGETTO
                </OrigamiButton>
              </div>
            </ScaleIn>
            
            <FadeInUp delay={800}>
              <Link 
                href="#chi-siamo" 
                className="group inline-flex items-center text-lg sm:text-xl font-bold text-white hover:text-secondary-400 transition-all duration-300"
              >
                <span className="border-b-2 border-white group-hover:border-secondary-400 transition-all duration-300 uppercase tracking-wide">SCOPRI DI PIÙ</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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