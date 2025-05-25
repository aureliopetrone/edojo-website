"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Only run scroll detection on homepage
    if (!isHomePage) return;

    // Improved scroll detection with better section boundary calculation
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      const viewportHeight = window.innerHeight;
      const threshold = headerHeight + 50; // More precise threshold
      
      const homeElement = document.getElementById("home");
      const chiSiamoElement = document.getElementById("chi-siamo");
      const processoElement = document.getElementById("processo");
      const inCorsaElement = document.getElementById("in-corsa");
      const contattiElement = document.getElementById("contatti");
      
      // Build sections array with proper boundaries
      const sections = [];
      
      if (homeElement) {
        sections.push({
          id: "home",
          element: homeElement,
          top: homeElement.offsetTop,
          bottom: homeElement.offsetTop + homeElement.offsetHeight
        });
      }
      
      if (chiSiamoElement) {
        sections.push({
          id: "chi-siamo",
          element: chiSiamoElement,
          top: chiSiamoElement.offsetTop,
          bottom: chiSiamoElement.offsetTop + chiSiamoElement.offsetHeight
        });
      }
      
      if (processoElement) {
        sections.push({
          id: "processo",
          element: processoElement,
          top: processoElement.offsetTop,
          bottom: processoElement.offsetTop + processoElement.offsetHeight
        });
      }
      
      if (inCorsaElement) {
        sections.push({
          id: "in-corsa",
          element: inCorsaElement,
          top: inCorsaElement.offsetTop,
          bottom: inCorsaElement.offsetTop + inCorsaElement.offsetHeight
        });
      }
      
      if (contattiElement) {
        sections.push({
          id: "contatti",
          element: contattiElement,
          top: contattiElement.offsetTop,
          bottom: contattiElement.offsetTop + contattiElement.offsetHeight
        });
      }

      // Find the current section
      let currentSection = "home";
      const currentScrollWithThreshold = scrollPosition + threshold;
      
      // Check each section to see which one is currently in view
      for (const section of sections) {
        if (currentScrollWithThreshold >= section.top && currentScrollWithThreshold < section.bottom) {
          currentSection = section.id;
          break;
        }
      }
      
      // Special case: if we're at the very top, always show home
      if (scrollPosition < 50) {
        currentSection = "home";
      }
      
      // Special case: if we're near the bottom, check if we should show the last section
      if (scrollPosition + viewportHeight >= document.body.scrollHeight - 100) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          currentSection = lastSection.id;
        }
      }
      
      // Only update if the section actually changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Debounce the scroll handler for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeSection, isHomePage]);

  // Disable/enable body scroll when mobile menu is open/closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure body scroll is restored
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const getLinkClasses = (section: string) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-neutral-50 bg-primary-700/40 rounded-md";
    const inactiveClasses = "text-neutral-300 hover:text-neutral-50";
    
    // Only show active state on homepage
    const isActive = isHomePage && activeSection === section;
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Function to get correct href for navigation links
  const getNavHref = (section: string) => {
    if (isHomePage) {
      return `#${section}`;
    } else {
      return `/#${section}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-primary-600/95 backdrop-blur-sm border-b border-primary-700/50 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
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
                  href={getNavHref("home")}
                  className={getLinkClasses("home")}
                >
                  Home
                </Link>
                <Link
                  href={getNavHref("chi-siamo")}
                  className={getLinkClasses("chi-siamo")}
                >
                  Chi Siamo
                </Link>
                <Link
                  href={getNavHref("in-corsa")}
                  className={getLinkClasses("in-corsa")}
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
                  href={getNavHref("contatti")}
                  className={getLinkClasses("contatti")}
                >
                  Contatti
                </Link>
              </div>
              
              {/* CTA Button */}
              <Link
                href={getNavHref("contatti")}
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
        </nav>
      </header>

      {/* Mobile Navigation Overlay - positioned outside header */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-red-600/80 to-red-700/70 backdrop-blur-md z-[100] flex items-center justify-center md:hidden">
          {/* Close button positioned at top right */}
          <button
            type="button"
            className="absolute top-6 right-6 inline-flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-red-700/30 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Chiudi menu</span>
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Centered menu content */}
          <div className="flex flex-col items-center justify-center space-y-12 px-8 w-full">
            <Link
              href={getNavHref("home")}
              className="text-3xl font-bold text-white hover:text-red-100 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={getNavHref("chi-siamo")}
              className="text-3xl font-bold text-white hover:text-red-100 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href={getNavHref("in-corsa")}
              className="text-3xl font-bold text-white hover:text-red-100 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cosa Facciamo
            </Link>
            <Link
              href="/blog"
              className="text-3xl font-bold text-white hover:text-red-100 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href={getNavHref("contatti")}
              className="text-3xl font-bold text-white hover:text-red-100 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-8">
              <Link
                href={getNavHref("contatti")}
                className="inline-block bg-black text-white hover:bg-gray-800 px-10 py-4 text-xl font-semibold rounded-lg transition-all duration-300 shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Richiedi Preventivo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 