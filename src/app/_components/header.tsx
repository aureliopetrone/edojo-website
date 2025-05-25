"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Improved scroll detection
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection
      
      const homeElement = document.getElementById("home");
      const chiSiamoElement = document.getElementById("chi-siamo");
      const inCorsaElement = document.getElementById("in-corsa");
      const processoElement = document.getElementById("processo");
      const contattiElement = document.getElementById("contatti");
      
      // Get all sections with their positions
      const sections = [
        { id: "home", element: homeElement, top: 0 },
        ...(chiSiamoElement ? [{ id: "chi-siamo", element: chiSiamoElement, top: chiSiamoElement.offsetTop }] : []),
        ...(processoElement ? [{ id: "processo", element: processoElement, top: processoElement.offsetTop }] : []),
        ...(inCorsaElement ? [{ id: "in-corsa", element: inCorsaElement, top: inCorsaElement.offsetTop }] : []),
        ...(contattiElement ? [{ id: "contatti", element: contattiElement, top: contattiElement.offsetTop }] : []),
      ].filter(section => section.element); // Only include existing sections

      // Find the current section based on scroll position
      let currentSection = "home";
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.top) {
          currentSection = section.id;
          break;
        }
      }
      
      // Only update if the section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const getLinkClasses = (section: string) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-neutral-50 bg-primary-700/40 rounded-md";
    const inactiveClasses = "text-neutral-300 hover:text-neutral-50";
    
    const isActive = activeSection === section;
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getMobileLinkClasses = (section: string) => {
    const baseClasses = "block px-3 py-2 text-base font-medium transition-colors duration-200";
    const activeClasses = "text-neutral-50 bg-primary-800/60 rounded-md";
    const inactiveClasses = "text-neutral-300 hover:text-neutral-50";
    
    const isActive = activeSection === section;
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="fixed top-0 w-full bg-primary-600/95 backdrop-blur-sm border-b border-primary-700/50 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#home" className="flex items-center space-x-3">
              <Image
                src="/logo-nobg.png"
                alt="eDojo Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert opacity-90"
              />
              <span className="text-2xl font-bold text-neutral-50">
                e<span className="text-neutral-200">Dojo</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              <Link
                href="#home"
                className={getLinkClasses("home")}
              >
                Home
              </Link>
              <Link
                href="#chi-siamo"
                className={getLinkClasses("chi-siamo")}
              >
                Chi Siamo
              </Link>
              <Link
                href="#processo"
                className={getLinkClasses("processo")}
              >
                Cosa Facciamo
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="#contatti"
                className={getLinkClasses("contatti")}
              >
                Contatti
              </Link>
            </div>
            
            {/* CTA Button */}
            <Link
              href="#contatti"
              className="relative bg-black text-white hover:bg-neutral-900 px-6 py-2 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl origami-button"
              style={{
                clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                transform: 'perspective(1000px) rotateX(5deg)',
              }}
            >
              <span className="relative z-10">Richiedi Preventivo</span>
              <div 
                className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                }}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-neutral-50 hover:bg-primary-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Apri menu principale</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-700/80 rounded-lg mt-2">
              <Link
                href="#home"
                className={getMobileLinkClasses("home")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#chi-siamo"
                className={getMobileLinkClasses("chi-siamo")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link
                href="#processo"
                className={getMobileLinkClasses("processo")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Cosa Facciamo
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#contatti"
                className={getMobileLinkClasses("contatti")}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contatti
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  href="#contatti"
                  className="relative bg-black text-white hover:bg-neutral-900 px-6 py-2 text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl origami-button"
                  style={{
                    clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                    transform: 'perspective(1000px) rotateX(5deg)',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10 block text-center">Richiedi Preventivo</span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-black opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      clipPath: 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 100%, 12px 100%)',
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 