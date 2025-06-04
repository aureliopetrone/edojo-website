"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Shield,
  Brain,
  Zap 
} from "lucide-react";

export default function ConsulenzaTeamSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="text-blue-400" size={24} />,
      technologies: ["React", "Next.js", "TypeScript", "Vue.js", "Angular"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Database className="text-green-400" size={24} />,
      technologies: ["Node.js", "Python", "Java", "C#", ".NET"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Mobile",
      icon: <Smartphone className="text-purple-400" size={24} />,
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="text-orange-400" size={24} />,
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "AI & ML",
      icon: <Brain className="text-indigo-400" size={24} />,
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Security",
      icon: <Shield className="text-red-400" size={24} />,
      technologies: ["OWASP", "Penetration Testing", "GDPR", "SOC2"],
      color: "from-red-500 to-pink-500"
    }
  ];

  const teamStats = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      value: "15+",
      label: "Anni di Esperienza",
      description: "Esperienza complessiva del team"
    },
    {
      icon: <Users className="text-blue-400" size={32} />,
      value: "50+",
      label: "Progetti Completati",
      description: "Progetti di successo negli ultimi 5 anni"
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      value: "20+",
      label: "Tecnologie",
      description: "Stack tecnologici padroneggiati"
    },
    {
      icon: <Zap className="text-purple-400" size={32} />,
      value: "100%",
      label: "Success Rate",
      description: "Progetti completati nei tempi"
    }
  ];

  const expertise = [
    {
      title: "Architetture Scalabili",
      description: "Progettiamo sistemi che crescono con il tuo business, utilizzando pattern architetturali moderni e best practices consolidate.",
      highlights: ["Microservizi", "Event-driven", "CQRS", "DDD"]
    },
    {
      title: "Performance Optimization",
      description: "Ottimizziamo le performance delle applicazioni attraverso profiling approfondito e tecniche avanzate di ottimizzazione.",
      highlights: ["Database tuning", "Caching strategies", "CDN", "Load balancing"]
    },
    {
      title: "Security First",
      description: "Implementiamo security by design con audit completi e protezione contro le vulnerabilità più comuni.",
      highlights: ["OWASP Top 10", "Penetration testing", "Secure coding", "Compliance"]
    },
    {
      title: "Modern DevOps",
      description: "Automatizziamo i processi di sviluppo e deployment con pipeline CI/CD e Infrastructure as Code.",
      highlights: ["GitOps", "Kubernetes", "Monitoring", "Auto-scaling"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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
              Il Nostro Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior developer con oltre 15 anni di esperienza in tecnologie enterprise e startup
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competenze Tecniche
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h4 className="text-xl font-semibold text-white ml-3">
                    {skill.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${skill.color} text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Aree di Specializzazione
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl p-6 border border-blue-400/20"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlightIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto a Potenziare il Tuo Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contattaci per discutere come possiamo accelerare i tuoi progetti e trasferire competenze avanzate al tuo team.
            </p>
            <div className="text-lg text-blue-400 font-semibold">
              Consulenza gratuita di 30 minuti per valutare le tue esigenze
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 