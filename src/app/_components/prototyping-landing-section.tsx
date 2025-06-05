"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, Rocket, Beaker } from "lucide-react";
import OrigamiButton from "./origami-button";

export default function PrototypingLandingSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 text-purple-400/30"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Code size={48} />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 text-blue-400/30"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        >
          <Zap size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-cyan-400/30"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        >
          <Rocket size={44} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 text-purple-400/30"
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        >
          <Beaker size={42} />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Lab
              </span>
              <br />
              <span className="text-white">
                Prototipazione Rapida
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Trasforma la tua idea in un prototipo funzionante. L&apos;innovazione inizia qui.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Velocità</h3>
              <p className="text-gray-400 text-sm">
                Prototipi funzionali in 2-4 settimane
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Beaker className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovazione</h3>
              <p className="text-gray-400 text-sm">
                Tecnologie all&apos;avanguardia e sperimentazione
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scalabilità</h3>
              <p className="text-gray-400 text-sm">
                Architetture pronte per la produzione
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <OrigamiButton
              onClick={() => document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold"
            >
              Inizia il tuo progetto
            </OrigamiButton>
            <OrigamiButton
              onClick={() => document.getElementById('servizi')?.scrollIntoView({ behavior: 'smooth' })}
              variant="dark"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold"
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
              <div className="text-3xl font-bold text-white mb-2">48h</div>
              <div className="text-gray-400 text-sm">Primo prototipo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400 text-sm">Successo dei test</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400 text-sm">Prototipi realizzati</div>
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
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
} 