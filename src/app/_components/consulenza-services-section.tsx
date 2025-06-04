"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Code, 
  Zap, 
  Brain, 
  Monitor, 
  Database, 
  Shield,
  Wrench,
  TrendingUp,
  Clock,
  Award,
  Target 
} from "lucide-react";

export default function ConsulenzaServicesSection() {
  const services = [
    {
      icon: <Users className="text-blue-400" size={32} />,
      title: "Team Augmentation",
      description: "Integriamo sviluppatori senior nel tuo team per accelerare i progetti e trasferire competenze.",
      features: [
        "Sviluppatori full-stack senior",
        "Integrazione immediata nel team",
        "Mentoring e knowledge transfer",
        "Contratti flessibili"
      ]
    },
    {
      icon: <Code className="text-cyan-400" size={32} />,
      title: "Outsourcing Progetti",
      description: "Gestiamo l'intero ciclo di sviluppo del progetto dall'analisi al deployment.",
      features: [
        "Analisi e progettazione",
        "Sviluppo agile",
        "Testing e QA",
        "Manutenzione e supporto"
      ]
    },
    {
      icon: <Brain className="text-indigo-400" size={32} />,
      title: "Consulenza Tecnica",
      description: "Offriamo consulenza specializzata per decisioni architetturali e tecnologiche strategiche.",
      features: [
        "Architetture scalabili",
        "Code review e audit",
        "Performance optimization",
        "Best practices"
      ]
    },
    {
      icon: <Monitor className="text-purple-400" size={32} />,
      title: "Modernizzazione Legacy",
      description: "Migriamo e modernizziamo sistemi legacy verso tecnologie moderne e cloud-native.",
      features: [
        "Assessment sistema esistente",
        "Piano di migrazione",
        "Refactoring graduale",
        "Training del team"
      ]
    },
    {
      icon: <Database className="text-emerald-400" size={32} />,
      title: "DevOps & Cloud",
      description: "Implementiamo pipeline CI/CD e soluzioni cloud per ottimizzare il deployment.",
      features: [
        "CI/CD automation",
        "Containerizzazione",
        "Cloud migration",
        "Monitoring e alerting"
      ]
    },
    {
      icon: <Shield className="text-orange-400" size={32} />,
      title: "Security Assessment",
      description: "Conduciamo audit di sicurezza e implementiamo best practices per proteggere i tuoi sistemi.",
      features: [
        "Penetration testing",
        "Code security review",
        "GDPR compliance",
        "Security training"
      ]
    }
  ];

  const methodologies = [
    {
      icon: <Zap className="text-yellow-400" size={24} />,
      title: "Agile & Scrum",
      description: "Metodologie agili per delivery rapido e qualità."
    },
    {
      icon: <Target className="text-red-400" size={24} />,
      title: "Goal-Oriented",
      description: "Focus sui risultati di business, non solo sul codice."
    },
    {
      icon: <Clock className="text-blue-400" size={24} />,
      title: "Time-to-Market",
      description: "Acceleriamo il time-to-market dei tuoi prodotti."
    },
    {
      icon: <Award className="text-green-400" size={24} />,
      title: "Quality First",
      description: "Qualità del codice e testing come priorità."
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              I Nostri Servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluzioni su misura per ogni esigenza di sviluppo e consulenza tecnica
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Methodologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            La Nostra Metodologia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="mb-3 flex justify-center">
                  {method.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {method.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-400/20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Perché Scegliere eDojo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-white font-semibold mb-1">Faster Delivery</div>
              <div className="text-gray-400 text-sm">Accelerazione dei tempi di sviluppo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-white font-semibold mb-1">Years Experience</div>
              <div className="text-gray-400 text-sm">Anni di esperienza nel settore</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">100%</div>
              <div className="text-white font-semibold mb-1">Success Rate</div>
              <div className="text-gray-400 text-sm">Progetti completati con successo</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 