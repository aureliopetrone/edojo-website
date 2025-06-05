"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrototypingLandingSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Background Effects - Updated to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-300 rotate-45 animate-subtle-shift"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary-300 rotate-12 animate-elegant-float"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-primary-200 -rotate-12 animate-gentle-fade"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title - Updated to match homepage style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Large background text like homepage */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[16rem] font-black text-secondary-600/8 leading-none select-none pointer-events-none">
                tech
              </div>
              <div className="relative pt-16 lg:pt-24">
                <h1 className="text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter py-2">
                  <span className="text-gradient-purple-red animate-gradient-shift">
                    Tech Lab
                  </span>
                  <br />
                  <span className="text-white">
                    Prototipazione Rapida
                  </span>
                </h1>
                <div className="mt-8 relative flex justify-center">
                  <div className="w-24 h-1 gradient-purple-red rounded-full"></div>
                  <div className="w-16 h-1 gradient-red-purple rounded-full mt-2 ml-8 animate-subtle-shift"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Trasforma la tua idea in un prototipo funzionante. L&apos;innovazione inizia qui.
          </motion.p>

          {/* Key Features - Updated styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="glassmorphism-purple rounded-xl p-6">
              <div className="w-12 h-12 gradient-purple-red rounded-lg flex items-center justify-center mb-4 mx-auto shadow-purple">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Rapid Development</h3>
              <p className="text-neutral-400 text-sm">
                Prototipo funzionante in 2-4 settimane
              </p>
            </div>

            <div className="glassmorphism-brand rounded-xl p-6">
              <div className="w-12 h-12 gradient-red-purple rounded-lg flex items-center justify-center mb-4 mx-auto shadow-brand">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation Focus</h3>
              <p className="text-neutral-400 text-sm">
                Tecnologie all&apos;avanguardia e soluzioni creative
              </p>
            </div>

            <div className="glassmorphism-purple rounded-xl p-6">
              <div className="w-12 h-12 gradient-purple-red rounded-lg flex items-center justify-center mb-4 mx-auto shadow-purple">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Market Ready</h3>
              <p className="text-neutral-400 text-sm">
                Validazione e test con utenti reali
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons - Updated styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-purple-red hover:shadow-purple-red text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Inizia il prototipo
            </button>
            <button
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-secondary-400 text-secondary-400 hover:bg-secondary-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Scopri il processo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-purple-red mb-2">2-4</div>
              <div className="text-neutral-400 text-sm">Settimane di sviluppo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-red-purple mb-2">100+</div>
              <div className="text-neutral-400 text-sm">Prototipi realizzati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-purple-red mb-2">95%</div>
              <div className="text-neutral-400 text-sm">Successo nel mercato</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-400/50 rounded-full mt-2 animate-minimal-pulse" />
        </div>
      </motion.div>
    </section>
  );
} 