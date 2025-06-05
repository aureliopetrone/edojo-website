"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { companyInfo } from "~/config/company-info";
import OrigamiButton from "./origami-button";
import BrandLogo from "./brand-logo";

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
      const headerHeight = 80; // Aumentato da 64 a 80px (h-20)
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
    const baseClasses = "relative px-4 py-2 text-base font-bold transition-all duration-300";
    const activeClasses = "text-white";
    const inactiveClasses = "text-neutral-300 hover:text-white hover:text-secondary-400";
    
    // Only show active state on homepage
    const isActive = isHomePage && activeSection === section;
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getActiveBorder = (section: string) => {
    const isActive = isHomePage && activeSection === section;
    return isActive ? (
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
    ) : null;
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
      <header className="fixed top-0 w-full glassmorphism-dark border-b border-primary-600/30 z-50">
        <nav className="mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <BrandLogo size="md" />
                <span className="text-4xl font-bold text-neutral-50">
                  edojo
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
                  {getActiveBorder("home")}
                </Link>
                <Link
                  href={getNavHref("chi-siamo")}
                  className={getLinkClasses("chi-siamo")}
                >
                  Chi Siamo
                  {getActiveBorder("chi-siamo")}
                </Link>
                <Link
                  href={getNavHref("in-corsa")}
                  className={getLinkClasses("in-corsa")}
                >
                  Cosa Facciamo
                  {getActiveBorder("in-corsa")}
                </Link>
                <Link
                  href={getNavHref("contatti")}
                  className={getLinkClasses("contatti")}
                >
                  Contatti
                  {getActiveBorder("contatti")}
                </Link>
              </div>
              
              {/* LinkedIn Icon */}
              <Link
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-neutral-50 transition-colors duration-200 p-2"
                aria-label="Seguici su LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              
              {/* CTA Button */}
              <OrigamiButton
                href={getNavHref("contatti")}
                variant="red-purple"
                size="md"
              >
                Richiedi Preventivo
              </OrigamiButton>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-neutral-50 hover:bg-primary-600/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-50"
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
        <div className="fixed inset-0 gradient-brand backdrop-blur-md z-[100] flex items-center justify-center md:hidden">
          {/* Close button positioned at top right */}
          <button
            type="button"
            className="absolute top-6 right-6 inline-flex items-center justify-center w-12 h-12 rounded-full text-white hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
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
              className="text-3xl font-bold text-white hover:text-neutral-200 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={getNavHref("chi-siamo")}
              className="text-3xl font-bold text-white hover:text-neutral-200 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href={getNavHref("in-corsa")}
              className="text-3xl font-bold text-white hover:text-neutral-200 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cosa Facciamo
            </Link>
            <Link
              href={getNavHref("contatti")}
              className="text-3xl font-bold text-white hover:text-neutral-200 transition-colors duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contatti
            </Link>
            
            {/* LinkedIn Icon for Mobile */}
            <Link
              href={companyInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-neutral-200 transition-colors duration-300 p-3"
              aria-label="Seguici su LinkedIn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-8" onClick={() => setMobileMenuOpen(false)}>
              <OrigamiButton
                href={getNavHref("contatti")}
                variant="dark"
                size="xl"
              >
                Richiedi Preventivo
              </OrigamiButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 