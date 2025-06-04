"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  TestTube,
  Layers,
  Code2,
  Rocket
} from "lucide-react";

export default function PrototypingServicesSection() {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "App Mobile",
      description: "Prototipi iOS e Android nativi con UX ottimizzata",
      features: ["React Native", "Flutter", "SwiftUI", "Kotlin"],
      gradient: "from-pink-500 to-purple-600"
    },
    {
      icon: <Globe size={32} />,
      title: "Web App",
      description: "Applicazioni web progressive e responsive",
      features: ["React/Next.js", "Vue.js", "Progressive PWA", "API Integration"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Brain size={32} />,
      title: "AI/ML Integration",
      description: "Integrazione di intelligenza artificiale e machine learning",
      features: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Database size={32} />,
      title: "Backend & API",
      description: "Architetture scalabili e performanti",
      features: ["Node.js", "Python", "GraphQL", "Microservizi"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Native",
      description: "Soluzioni cloud-first e containerizzate",
      features: ["Docker", "Kubernetes", "AWS/Azure", "Serverless"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <TestTube size={32} />,
      title: "IoT & Hardware",
      description: "Prototipi per Internet of Things e dispositivi smart",
      features: ["Arduino", "Raspberry Pi", "Sensori", "Edge Computing"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const techStack = [
    { name: "React/Next.js", color: "text-blue-400" },
    { name: "TypeScript", color: "text-blue-300" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Node.js", color: "text-green-400" },
    { name: "Docker", color: "text-cyan-400" },
    { name: "AWS", color: "text-orange-400" },
    { name: "TensorFlow", color: "text-purple-400" },
    { name: "React Native", color: "text-pink-400" }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <div className="container mx-auto px-4">
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
              I Nostri Servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dall&apos;idea al codice: sviluppiamo il tuo MVP con tecnologie all&apos;avanguardia 
            e metodologie agili per validare rapidamente il mercato.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Il Nostro Processo
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <TestTube size={24} />, title: "Discovery", desc: "Analisi e validazione dell'idea" },
              { icon: <Code2 size={24} />, title: "Sviluppo", desc: "Prototipazione rapida e iterativa" },
              { icon: <Zap size={24} />, title: "Testing", desc: "Validazione con utenti reali" },
              { icon: <Rocket size={24} />, title: "Launch", desc: "Deploy e scaling" }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{step.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 transform -translate-x-8" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Tecnologie All&apos;Avanguardia
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 ${tech.color} font-medium hover:scale-105 transition-transform duration-200`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 