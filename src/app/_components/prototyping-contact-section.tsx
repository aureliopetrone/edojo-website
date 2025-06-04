"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, Star } from "lucide-react";
import { companyInfo } from "~/config/company-info";

export default function PrototypingContactSection() {
  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Inizia il Tuo Progetto
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hai un&apos;idea che vuoi trasformare in realtà? Contattaci per una consulenza gratuita 
              e scopri come possiamo accelerare il tuo time-to-market.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Richiedi una Consulenza Gratuita
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Mario Rossi"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="mario@azienda.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Azienda
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Nome dell&apos;azienda"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Tipo di Progetto *
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                    required
                  >
                    <option value="">Seleziona il tipo di progetto</option>
                    <option value="mobile-app">App Mobile</option>
                    <option value="web-app">Web Application</option>
                    <option value="ai-integration">Integrazione AI/ML</option>
                    <option value="iot-hardware">IoT & Hardware</option>
                    <option value="backend-api">Backend & API</option>
                    <option value="cloud-native">Soluzione Cloud Native</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Budget Stimato
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="">Seleziona il budget</option>
                    <option value="5k-15k">€5.000 - €15.000</option>
                    <option value="15k-30k">€15.000 - €30.000</option>
                    <option value="30k-50k">€30.000 - €50.000</option>
                    <option value="50k+">€50.000+</option>
                    <option value="da-definire">Da definire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Descrizione del Progetto *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Descrivi la tua idea, gli obiettivi e le funzionalità principali che vorresti nel prototipo..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Invia Richiesta
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contattaci Direttamente</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">{companyInfo.contact.prototypingEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefono</p>
                      <p className="text-gray-400">{companyInfo.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <p className="text-gray-400">{companyInfo.contact.whatsapp}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Tempi di Risposta</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-gray-300">Prima risposta: entro 2 ore</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-gray-300">Consulenza gratuita: 48h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-gray-300">Proposta progetto: 1 settimana</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-2 mb-4">
                  {Array.from({length: 5}).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  &quot;Edojo ha trasformato la nostra idea in un prototipo funzionante in sole 3 settimane. 
                  La qualità e l&apos;attenzione ai dettagli sono eccezionali.&quot;
                </blockquote>
                <cite className="text-white font-medium">
                  — Marco T., CTO di TechStart
                </cite>
              </div>

              {/* Key Benefits */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Perché Scegliere Edojo</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400" size={16} />
                    <span className="text-gray-300">Consultazione gratuita</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400" size={16} />
                    <span className="text-gray-300">Prototipo funzionante in 2-4 settimane</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400" size={16} />
                    <span className="text-gray-300">Codice sorgente incluso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-purple-400" size={16} />
                    <span className="text-gray-300">Supporto post-lancio</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 