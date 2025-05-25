"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BlogHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
                href="/"
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 text-sm font-medium text-neutral-50 bg-primary-700/40 rounded-md transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/#chi-siamo"
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
              >
                Chi Siamo
              </Link>
              <Link
                href="/#processo"
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
              >
                Cosa Facciamo
              </Link>
              <Link
                href="/#contatti"
                className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
              >
                Contatti
              </Link>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/#contatti"
              className="bg-neutral-50 text-primary-600 hover:bg-neutral-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Richiedi Preventivo
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
                href="/"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-neutral-50 bg-primary-800/60 rounded-md transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/#chi-siamo"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link
                href="/#processo"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cosa Facciamo
              </Link>
              <Link
                href="/#contatti"
                className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contatti
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link
                  href="/#contatti"
                  className="bg-neutral-50 text-primary-600 hover:bg-neutral-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 