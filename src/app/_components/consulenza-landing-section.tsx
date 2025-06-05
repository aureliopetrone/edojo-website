"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Code, TrendingUp, Shield, Lightbulb, UserCheck } from "lucide-react";
import OrigamiButton from "./origami-button";

export default function ConsulenzaLandingSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      {/* Background Effects - Updated to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Icons - Updated colors */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 text-primary-400/30"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Users size={48} />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 text-secondary-400/30"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          <Code size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-primary-400/30"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          <TrendingUp size={44} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-secondary-400/30"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        >
          <Shield size={42} />
        </motion.div>
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
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[16rem] font-black text-primary-600/8 leading-none select-none pointer-events-none">
                team
              </div>
              <div className="relative pt-16 lg:pt-24">
                <h1 className="text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter py-2">
                  <span className="text-gradient-red-purple animate-gradient-shift">
                    Team
                  </span>
                  <br />
                  <span className="text-white">
                    Augmentation
                  </span>
                </h1>
                <div className="mt-8 relative flex justify-center">
                  <div className="w-24 h-1 gradient-red-purple rounded-full"></div>
                  <div className="w-16 h-1 gradient-purple-red rounded-full mt-2 ml-8 animate-subtle-shift"></div>
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
            Potenzia il tuo team con sviluppatori senior esperti. Accelera i progetti e trasferisci competenze tecniche avanzate.
          </motion.p>

          {/* Key Features - Updated styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="glassmorphism-brand rounded-xl p-6">
              <div className="w-12 h-12 gradient-red-purple rounded-lg flex items-center justify-center mb-4 mx-auto shadow-brand">
                <UserCheck className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Senior Expert</h3>
              <p className="text-neutral-400 text-sm">
                Sviluppatori con oltre 10 anni di esperienza
              </p>
            </div>

            <div className="glassmorphism-purple rounded-xl p-6">
              <div className="w-12 h-12 gradient-purple-red rounded-lg flex items-center justify-center mb-4 mx-auto shadow-purple">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mentoring</h3>
              <p className="text-neutral-400 text-sm">
                Trasferimento di competenze e best practices
              </p>
            </div>

            <div className="glassmorphism-brand rounded-xl p-6">
              <div className="w-12 h-12 gradient-red-purple rounded-lg flex items-center justify-center mb-4 mx-auto shadow-brand">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Garantito</h3>
              <p className="text-neutral-400 text-sm">
                Accelerazione del 40% dei tempi di sviluppo
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
            <OrigamiButton
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-red-purple hover:shadow-brand-bold text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Richiedi consulenza
            </OrigamiButton>
            <OrigamiButton
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              variant="dark"
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Scopri i servizi
            </OrigamiButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-red-purple mb-2">15+</div>
              <div className="text-neutral-400 text-sm">Anni di esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-purple-red mb-2">50+</div>
              <div className="text-neutral-400 text-sm">Progetti completati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-red-purple mb-2">100%</div>
              <div className="text-neutral-400 text-sm">Clienti soddisfatti</div>
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
        <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400/50 rounded-full mt-2 animate-minimal-pulse" />
        </div>
      </motion.div>
    </section>
  );
} 