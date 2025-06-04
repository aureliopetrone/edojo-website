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
      className="relative py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-300 rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary-300 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary-200 -rotate-12"></div>
      </div>

      {/* Client Logos Background Pattern - Cinematic Map Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute animate-map-journey"
          style={{
            opacity: 0.15,
            animationDuration: '35s',
            width: '600%', // Much larger grid for zoom effects
            height: '600%',
            left: '-250%', // Center the oversized grid
            top: '-250%',
            transformOrigin: 'center center',
          }}
        >
          <div 
            className="grid gap-8 md:gap-12 lg:gap-16 w-full h-full items-center justify-items-center"
            style={{
              gridTemplateColumns: 'repeat(40, 1fr)', // Much denser grid for zoom
              gridTemplateRows: 'repeat(30, 1fr)', // 40 * 30 = 1200 cells
            }}
          >
            {/* Generate many logos for the large grid */}
            {Array.from({ length: 1200 }).map((_, index) => {
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
          {/* New Hero Typography Section */}
          <div className="relative mb-12 lg:mb-16">
            {/* Main Title - Positioned Artistically */}
            <div className="relative">
              <div className="absolute top-0 left-0 text-[8rem] sm:text-[10rem] lg:text-[12rem] font-black text-primary-600/10 leading-none select-none pointer-events-none">
                s.2012
              </div>
              <div className="relative pt-12 lg:pt-20">
                <div className="flex flex-col">
                  {/* Main Heading */}
                  <div>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-neutral-900 leading-[1.1] tracking-tighter text-center py-2">
                      Chi ha
                      <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        scelto edojo
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptive Paragraphs */}
          <div className="text-left mx-auto">
            <p className="mt-6 text-lg text-gray-700">
              Ecco alcuni dei clienti che hanno scelto il nostro team per la loro esperienza e competenza 
              per i loro progetti digitali.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Progetti realizzati in collaborazione con i membri del nostro team.
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
            transform: scale(1.2) translate(0%, 0%);
          }
          25% {
            transform: scale(0.8) translate(-5%, -3%);
          }
          50% {
            transform: scale(1.5) translate(-8%, -10%);
          }
          75% {
            transform: scale(0.9) translate(3%, 5%);
          }
          100% {
            transform: scale(1.2) translate(0%, 0%);
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