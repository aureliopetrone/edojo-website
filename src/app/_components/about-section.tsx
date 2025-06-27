'use client';

import BrandGeometricBackground from "./brand-geometric-background";
import { useRef, useState } from "react";

export default function AboutSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!marqueeRef.current) return;
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
    marqueeRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !marqueeRef.current) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll sensitivity
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 1000); // Resume auto-play after 1 second
    if (marqueeRef.current) {
      marqueeRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlaying(true), 1000);
      if (marqueeRef.current) {
        marqueeRef.current.style.cursor = 'grab';
      }
    }
  };

  return (
    <div className="py-32 relative overflow-hidden bg-neutral-950">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"></div>
      
      {/* Brand Geometric Background Effects */}
      <BrandGeometricBackground 
        variant="particles" 
        intensity="subtle"
      />
      
      {/* Elegant geometric elements with purple-red theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large subtle orbs with purple-red gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary-500/10 to-primary-500/15 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-primary-500/12 to-secondary-500/8 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating elements with new colors */}
        <div className="absolute top-1/3 right-2/3 w-32 h-32 bg-gradient-to-r from-white/8 to-secondary-400/12 rounded-full blur-xl animate-elegant-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 left-1/5 w-24 h-24 bg-gradient-to-l from-primary-400/10 to-white/6 rounded-full blur-lg animate-elegant-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <section id="chi-siamo" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Hero Typography Section - Clean Layout */}
          <div className="relative mb-32">
            {/* Main Title - Brand Consistent */}
            <div className="relative">
              <div className="absolute top-0 left-0 text-[12rem] lg:text-[18rem] font-black text-white/8 leading-none select-none">
                edojo
              </div>
              <div className="relative pt-16 lg:pt-24">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
                  {/* Left Side - Main Heading */}
                  <div className="lg:w-1/2">
                    <div>
                      <h1 className="text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter py-2">
                        Siamo un
                        <span className="block text-gradient-purple-red">
                          tech lab digitale
                        </span>
                      </h1>
                    </div>
                    <div className="mt-8 relative">
                      <div className="w-24 h-1 gradient-purple-red rounded-full"></div>
                      <div className="w-16 h-1 bg-white/50 rounded-full mt-2 ml-8"></div>
                      <div className="w-12 h-1 gradient-red-purple rounded-full mt-2 ml-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Clean Direct Layout */}
          <div className="relative space-y-32">
            {/* Mission Statement */}
            <div className="text-center max-w-4xl mx-auto">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] py-1">
                  Realizziamo software che risolve{" "}
                  <span className="inline-block text-gradient-red-purple">
                    problemi concreti
                  </span>
                </h3>
                <div className="w-24 h-1 gradient-red-purple rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Cosa Realizziamo - Full Width Marquee */}
        <div className="mt-32 relative w-full">

          {/* CSS for Interactive Marquee */}
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-container {
              animation: ${isAutoPlaying ? 'marquee 60s linear infinite' : 'none'};
            }
            .marquee-scrollable {
              cursor: grab;
              user-select: none;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              /* Hide scrollbar for Chrome, Safari and Opera */
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* Internet Explorer 10+ */
            }
            .marquee-scrollable::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Edge */
            }
            .marquee-scrollable:active {
              cursor: grabbing;
            }
          `}</style>
          
          {/* Full Width Interactive Marquee Container */}
          <div className="relative py-8 w-full">
       
            
            {/* Interactive Marquee Track */}
            <div 
              ref={marqueeRef}
              className="marquee-scrollable overflow-x-auto scrollbar-hide"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ 
                scrollBehavior: isDragging ? 'auto' : 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
                            <div className={`marquee-container flex gap-4 sm:gap-6 ${!isAutoPlaying ? '' : ''}`}>
                {/* First Set of Services */}
                <div className="flex gap-4 sm:gap-6 min-w-max">
                {/* Web Application */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-cyan-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-cyan-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-cyan-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3m18 0c0-1.66-4.03-3-9-3s-9 1.34-9 3m18 0v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-cyan-200 transition-colors duration-300">Web Application</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Portali aziendali, dashboard CRM</p>
                  </div>
                </div>
                
                {/* AI Integration */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-blue-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-blue-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-blue-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth={2} />
                      <circle cx="12" cy="12" r="8" strokeWidth={1.5} strokeDasharray="8 4" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-300">AI Integration</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Chatbot, automazione ML</p>
                  </div>
                </div>
                
                {/* Automazione Processi */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-emerald-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-emerald-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-emerald-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-emerald-200 transition-colors duration-300">Automazione</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Workflow IoT, AI Agents</p>
                  </div>
                </div>
                
                {/* Robotica */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-orange-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-orange-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-orange-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-orange-200 transition-colors duration-300">Robotica</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Automazione industriale</p>
                  </div>
                </div>

                {/* App Mobile */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-purple-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-purple-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-purple-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors duration-300">App Mobile</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">iOS e Android native</p>
                  </div>
                </div>

                {/* Consulenza Tecnica */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-yellow-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-yellow-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-yellow-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-yellow-200 transition-colors duration-300">Consulenza</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Analisi e mentoring</p>
                  </div>
                </div>
              </div>
              
              {/* Duplicate Set for Seamless Loop */}
              <div className="flex gap-4 sm:gap-6 min-w-max">
                {/* Web Application - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-cyan-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-cyan-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-cyan-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3m18 0c0-1.66-4.03-3-9-3s-9 1.34-9 3m18 0v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-cyan-200 transition-colors duration-300">Web Application</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Portali aziendali, dashboard CRM</p>
                  </div>
                </div>
                
                {/* AI Integration - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-blue-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-blue-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-blue-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" strokeWidth={2} />
                      <circle cx="12" cy="12" r="8" strokeWidth={1.5} strokeDasharray="8 4" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors duration-300">AI Integration</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Chatbot, automazione ML</p>
                  </div>
                </div>
                
                {/* Automazione Processi - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-emerald-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-emerald-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-emerald-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-emerald-200 transition-colors duration-300">Automazione</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Workflow IoT, AI Agents</p>
                  </div>
                </div>
                
                {/* Robotica - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-orange-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-orange-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-orange-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-orange-200 transition-colors duration-300">Robotica</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Automazione industriale</p>
                  </div>
                </div>

                {/* App Mobile - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-purple-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-purple-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-purple-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors duration-300">App Mobile</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">iOS e Android native</p>
                  </div>
                </div>

                {/* Consulenza Tecnica - Duplicate */}
                <div className="group cursor-pointer p-2 sm:p-3 rounded-xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-yellow-300/20 w-[140px] sm:w-[180px] max-w-[200px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-yellow-300/60 group-hover:bg-white/15 relative overflow-hidden">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 group-hover:text-yellow-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-yellow-200 transition-colors duration-300">Consulenza</h4>
                    <p className="text-white/70 text-xs leading-tight group-hover:text-white/90 transition-colors duration-300">Analisi e mentoring</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 