"use client";

import { useEffect, useRef } from "react";

const clients = [
  { name: "Skilla", logo: "/images/logos/skilla-logo.png" },
  { name: "Campari", logo: "/images/logos/campari-logo.webp" },
  { name: "Ferrero", logo: "/images/logos/ferrero-logo.png" },
  { name: "Duskrise", logo: "/images/logos/duskrise-logo.png" },
  { name: "BNL", logo: "/images/logos/bnl-logo.svg" },
  { name: "MPS", logo: "/images/logos/mps-logo.png" },
  { name: "BMW", logo: "/images/logos/bmw-logo.jpg" },
  { name: "Douglas", logo: "/images/logos/douglas-logo.png" },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = section.querySelectorAll(".fade-in-element");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="clienti" 
      className="relative py-32 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-300 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-300 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary-200 -rotate-12"></div>
      </div>

      {/* Client Logos Background Pattern - Cinematic Map Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: '1000px' }}>
        <div
          className="absolute animate-map-journey"
          style={{
            opacity: 0.2,
            animationDuration: '20s',
            width: '800%', // Even larger grid for more dramatic zoom effects
            height: '800%',
            left: '-350%', // Center the oversized grid
            top: '-350%',
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d',
          }}
        >
          <div 
            className="grid gap-3 md:gap-4 lg:gap-5 w-full h-full items-center justify-items-center"
            style={{
              gridTemplateColumns: 'repeat(50, 1fr)', // Denser grid with closer logos
              gridTemplateRows: 'repeat(40, 1fr)', // 50 * 40 = 2000 cells
              transform: 'rotateX(15deg)', // Add initial 3D perspective
            }}
          >
            {/* Generate many logos for the large grid */}
            {Array.from({ length: 2000 }).map((_, index) => {
              // Create a more random distribution instead of sequential
              const shuffledIndex = (index * 7 + Math.floor(index / 5) * 3 + Math.floor(index / 40) * 11) % clients.length;
              const client = clients[shuffledIndex];
              
              if (!client) return null;
              
              return (
                <div
                  key={index}
                  className="w-8 md:w-12 lg:w-16 h-6 md:h-8 lg:h-12 flex items-center justify-center"
                >
                  <img
                    src={client.logo}
                    alt=""
                    className="w-full h-full object-contain filter grayscale"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        {/* Header */}
        <div className="fade-in-element">
          {/* Hero Typography Section - Brand Consistent */}
          <div className="relative mb-16">
            {/* Main Title - Brand Consistent */}
            <div className="relative">
              <div className="absolute top-0 left-0 text-[10rem] sm:text-[12rem] lg:text-[18rem] font-black text-primary-600/8 leading-none select-none pointer-events-none">
                s.2012
              </div>
              <div className="relative pt-16 lg:pt-24">
                <div className="flex flex-col">
                  {/* Main Heading */}
                  <div>
                    <h1 className="text-7xl lg:text-9xl font-black text-neutral-900 leading-[1.1] tracking-tighter text-right py-2">
                      30+
                      <span className="block text-gradient-red-purple animate-gradient-shift">
                        grandi clienti
                      </span>
                    </h1>
                  </div>
                  <div className="mt-8 relative flex justify-end">
                    <div className="w-24 h-1 gradient-red-purple rounded-full"></div>
                    <div className="w-16 h-1 gradient-purple-red rounded-full mt-2 mr-8 animate-subtle-shift"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptive Paragraphs */}
          <div className="text-right ml-auto max-w-2xl">
            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Durante i nostri anni di attività, abbiamo creato <br /> prodotti digitali per 30+ grandi clienti.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Il nostro team ha lavorato con clienti di successo da PMI<br /> a multinazionali ed enti governativi.
            </p>
          </div>
        </div>

        {/* Clients Grid - Removed */}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes mapJourney {
          0% {
            transform: scale(0.8) translate3d(0%, 0%, 0px) rotateX(35deg) rotateY(0deg);
          }
          20% {
            transform: scale(2.0) translate3d(-5%, -3%, -150px) rotateX(20deg) rotateY(-3deg);
          }
          40% {
            transform: scale(0.6) translate3d(6%, -4%, 80px) rotateX(45deg) rotateY(4deg);
          }
          60% {
            transform: scale(2.5) translate3d(-3%, 5%, -200px) rotateX(15deg) rotateY(-2deg);
          }
          80% {
            transform: scale(1.0) translate3d(4%, -2%, 40px) rotateX(40deg) rotateY(3deg);
          }
          100% {
            transform: scale(0.8) translate3d(0%, 0%, 0px) rotateX(35deg) rotateY(0deg);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-map-journey {
          animation: mapJourney ease-in-out infinite;
        }
        
        .fade-in-element {
          opacity: 0;
          transform: translateY(20px);
        }
      `}</style>
    </section>
  );
} 