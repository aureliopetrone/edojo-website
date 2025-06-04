"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, CheckCircle, Users, Briefcase, Calendar } from "lucide-react";
import { companyInfo } from "~/config/company-info";

export default function ConsulenzaContactSection() {
  return (
    <section id="contatti" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Potenzia il Tuo Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hai bisogno di competenze specializzate per accelerare i tuoi progetti? 
              Contattaci per una consulenza gratuita e scopri come possiamo affiancare il tuo team.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6 rounded-full" />
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="mario@azienda.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Azienda *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Nome dell&apos;azienda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Ruolo *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="es. CTO, Team Lead, Project Manager"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Tipo di Servizio *
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
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
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Durata Prevista
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
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
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Stack Tecnologico Attuale
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="es. React, Node.js, Python, AWS, Docker..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Descrizione delle Esigenze *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Descrivi il progetto, le competenze che cerchi, i challenge tecnici da affrontare, dimensioni del team attuale..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
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
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contattaci Direttamente</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">{companyInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg flex items-center justify-center">
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
                  <h3 className="text-xl font-bold text-white">Processo di Onboarding</h3>
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
                    <span className="text-gray-300">Proposta personalizzata: 1 settimana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-gray-300">Inizio collaborazione: 2 settimane</span>
                  </div>
                </div>
              </div>

              {/* What We Offer */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="text-blue-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Cosa Offriamo</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Briefcase className="text-blue-400 mt-1" size={16} />
                    <span className="text-gray-300">Assessment gratuito delle competenze del team</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="text-blue-400 mt-1" size={16} />
                    <span className="text-gray-300">Integrazione immediata nei vostri processi</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-blue-400 mt-1" size={16} />
                    <span className="text-gray-300">Mentoring e knowledge transfer continuo</span>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-400/30">
                <h3 className="text-lg font-bold text-white mb-3">
                  🎯 Garanzia di Successo
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Se non siete soddisfatti dei risultati nelle prime 2 settimane, 
                  potete interrompere la collaborazione senza costi aggiuntivi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 