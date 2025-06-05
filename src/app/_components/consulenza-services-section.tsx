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
      icon: <Users className="text-primary-400" size={32} />,
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
      icon: <Code className="text-secondary-400" size={32} />,
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
      icon: <Brain className="text-primary-400" size={32} />,
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
      icon: <Monitor className="text-secondary-400" size={32} />,
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
      icon: <Database className="text-primary-400" size={32} />,
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
      icon: <Shield className="text-secondary-400" size={32} />,
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
      icon: <Zap className="text-primary-400" size={24} />,
      title: "Agile & Scrum",
      description: "Metodologie agili per delivery rapido e qualità."
    },
    {
      icon: <Target className="text-secondary-400" size={24} />,
      title: "Goal-Oriented",
      description: "Focus sui risultati di business, non solo sul codice."
    },
    {
      icon: <Clock className="text-primary-400" size={24} />,
      title: "Time-to-Market",
      description: "Acceleriamo il time-to-market dei tuoi prodotti."
    },
    {
      icon: <Award className="text-secondary-400" size={24} />,
      title: "Quality First",
      description: "Qualità del codice e testing come priorità."
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            <span className="text-gradient-red-purple animate-gradient-shift">
              I Nostri Servizi
            </span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
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
              className="glassmorphism-brand rounded-xl p-6 hover:shadow-brand transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-400 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-neutral-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
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
          <h3 className="text-3xl font-black text-white mb-8">
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
                className="glassmorphism-purple rounded-lg p-6 hover:shadow-purple transition-all duration-300 hover:scale-105"
              >
                <div className="mb-3 flex justify-center">
                  {method.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {method.title}
                </h4>
                <p className="text-neutral-400 text-sm">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glassmorphism-brand rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-4">
              Pronto a potenziare il tuo team?
            </h3>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Contattaci per discutere come possiamo accelerare i tuoi progetti e trasferire competenze avanzate al tuo team.
            </p>
            <button className="gradient-red-purple hover:shadow-brand-bold text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Richiedi Consulenza
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 