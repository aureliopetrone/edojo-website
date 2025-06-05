"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, Users, Briefcase, Calendar } from "lucide-react";
import { companyInfo } from "~/config/company-info";

export default function ConsulenzaContactSection() {
  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              <span className="text-gradient-red-purple animate-gradient-shift">
                Potenzia il Tuo Team
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Hai bisogno di competenze specializzate per accelerare i tuoi progetti? 
              Contattaci per una consulenza gratuita e scopri come possiamo affiancare il tuo team.
            </p>
            <div className="w-24 h-1 gradient-red-purple mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glassmorphism-brand rounded-xl p-8"
            >
              <h3 className="text-2xl font-black text-white mb-6">
                Richiedi una Consulenza Gratuita
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="Mario Rossi"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="mario@azienda.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Azienda *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="Nome dell&apos;azienda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Ruolo *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="es. CTO, Team Lead, Project Manager"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Tipo di Servizio *
                  </label>
                  <select
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors"
                    required
                  >
                    <option value="">Seleziona il tipo di servizio</option>
                    <option value="team-augmentation">Team Augmentation</option>
                    <option value="outsourcing-progetti">Outsourcing Progetti</option>
                    <option value="consulenza-tecnica">Consulenza Tecnica</option>
                    <option value="modernizzazione-legacy">Modernizzazione Legacy</option>
                    <option value="devops-cloud">DevOps & Cloud</option>
                    <option value="security-assessment">Security Assessment</option>
                    <option value="formazione-team">Formazione Team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Durata Prevista
                  </label>
                  <select
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white focus:outline-none focus:border-primary-400 transition-colors"
                  >
                    <option value="">Seleziona la durata</option>
                    <option value="1-3-mesi">1-3 mesi</option>
                    <option value="3-6-mesi">3-6 mesi</option>
                    <option value="6-12-mesi">6-12 mesi</option>
                    <option value="12+-mesi">12+ mesi</option>
                    <option value="progetto-singolo">Progetto singolo</option>
                    <option value="da-definire">Da definire</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Stack Tecnologico Attuale
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="es. React, Node.js, Python, AWS, Docker..."
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 text-sm font-medium mb-2">
                    Descrizione delle Esigenze *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 glassmorphism-dark border border-primary-400/30 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                    placeholder="Descrivi il progetto, le competenze che cerchi, i challenge tecnici da affrontare, dimensioni del team attuale..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-red-purple hover:shadow-brand-bold text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Richiedi Consulenza Gratuita
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
              <div className="glassmorphism-purple rounded-xl p-6">
                <h3 className="text-xl font-black text-white mb-6">Contattaci Direttamente</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-red-purple rounded-lg flex items-center justify-center shadow-brand">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-neutral-400">{companyInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-purple-red rounded-lg flex items-center justify-center shadow-purple">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefono</p>
                      <p className="text-neutral-400">{companyInfo.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-red-purple rounded-lg flex items-center justify-center shadow-brand">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <p className="text-neutral-400">Contatto immediato</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Benefits */}
              <div className="glassmorphism-brand rounded-xl p-6">
                <h3 className="text-xl font-black text-white mb-6">Il Nostro Processo</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-red-purple rounded-full flex items-center justify-center shadow-brand flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Analisi Gratuita</h4>
                      <p className="text-neutral-400 text-sm">Valutiamo le tue esigenze e proponiamo la soluzione migliore</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-purple-red rounded-full flex items-center justify-center shadow-purple flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Team Matching</h4>
                      <p className="text-neutral-400 text-sm">Selezioniamo i profili più adatti al tuo progetto</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-red-purple rounded-full flex items-center justify-center shadow-brand flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Integrazione Rapida</h4>
                      <p className="text-neutral-400 text-sm">I nostri esperti si integrano subito nel tuo team</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 gradient-purple-red rounded-full flex items-center justify-center shadow-purple flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Monitoraggio Continuo</h4>
                      <p className="text-neutral-400 text-sm">Supporto costante per garantire il successo del progetto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glassmorphism-purple rounded-xl p-6 text-center">
                <Clock className="mx-auto text-secondary-400 mb-4" size={32} />
                <h3 className="text-lg font-black text-white mb-2">Risposta Garantita</h3>
                <p className="text-neutral-400 text-sm">
                  Ti rispondiamo entro <span className="text-primary-400 font-semibold">24 ore</span> dalla tua richiesta
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 