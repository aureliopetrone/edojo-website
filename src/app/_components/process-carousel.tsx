"use client";

import { useState } from "react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    subtitle: "analyze()",
    description: "Analizziamo il tuo business, capiamo i problemi reali e identifichiamo le opportunità di automazione. Niente fronzoli, solo fatti concreti.",
    gradient: "from-emerald-400 to-emerald-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    details: [
      "Audit dei processi esistenti",
      "Identificazione dei colli di bottiglia",
      "Analisi ROI potenziale",
      "Definizione obiettivi misurabili"
    ]
  },
  {
    id: 2,
    title: "Design",
    subtitle: "prototype()",
    description: "Progettiamo la soluzione perfetta per le tue esigenze. Wireframe, mockup e architettura tecnica che funziona davvero.",
    gradient: "from-blue-400 to-blue-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    details: [
      "User experience design",
      "Architettura del sistema",
      "Prototipo interattivo",
      "Validazione con stakeholder"
    ]
  },
  {
    id: 3,
    title: "Develop",
    subtitle: "build()",
    description: "Sviluppiamo il software con aggiornamenti costanti. Vedi i progressi in tempo reale e dai feedback durante lo sviluppo.",
    gradient: "from-purple-400 to-purple-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    details: [
      "Sviluppo agile con sprint settimanali",
      "Demo regolari dei progressi",
      "Testing automatizzato",
      "Feedback loop continuo"
    ]
  },
  {
    id: 4,
    title: "Deploy",
    subtitle: "launch()",
    description: "Lanciamo il software e supportiamo la crescita del tuo business. Monitoraggio, ottimizzazioni e nuove feature quando servono.",
    gradient: "from-orange-400 to-orange-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
      </svg>
    ),
    details: [
      "Deploy su infrastruttura scalabile",
      "Formazione del team",
      "Monitoraggio performance",
      "Supporto continuativo"
    ]
  }
];

export default function ProcessCarousel() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = processSteps.length;

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div>
      {/* Carousel Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2 sm:space-x-3">
          {processSteps.map((step, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm ${
                index === currentStep
                  ? "bg-primary-400 text-neutral-900"
                  : "bg-neutral-50/10 text-neutral-300 hover:bg-neutral-50/20 hover:text-neutral-50"
              }`}
            >
              <span className="font-bold">{step.id}</span>
              <span className="font-medium hidden xs:inline">{step.title}</span>
              <span className="font-medium xs:hidden">{step.title.substring(0, 3)}</span>
            </button>
          ))}
        </div>
        <div className="flex space-x-2 justify-center sm:justify-end">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentStep === 0 
                ? "bg-neutral-50/10 text-neutral-500 cursor-not-allowed" 
                : "bg-neutral-50/20 hover:bg-neutral-50/30 text-neutral-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === totalSteps - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              currentStep === totalSteps - 1 
                ? "bg-neutral-50/10 text-neutral-500 cursor-not-allowed" 
                : "bg-neutral-50/20 hover:bg-neutral-50/30 text-neutral-50"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Card Display */}
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-700 ease-out"
            style={{ 
              transform: `translateX(-${currentStep * 100}%)`
            }}
          >
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="w-full flex-shrink-0"
              >
                <div className={`bg-gradient-to-br ${step.gradient} rounded-xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between`}>
                  {/* Background decorations */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-xl">{step.id}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          <p className="text-white/80 font-mono text-sm">{step.subtitle}</p>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-lg leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <span className="text-white/80 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="relative z-10 flex justify-between items-center mt-8">
                    <div className="flex space-x-2">
                      {processSteps.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === index ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-white/60 text-sm font-mono">
                      Step {index + 1}/{totalSteps}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Step Summary */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-3 bg-neutral-50/10 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-50/20">
          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${processSteps[currentStep]?.gradient ?? 'from-primary-400 to-primary-600'}`}></div>
          <p className="text-neutral-300 text-sm font-medium">
            <span className="font-mono text-primary-300">{processSteps[currentStep]?.subtitle ?? ''}</span>
            {" "}→ {processSteps[currentStep]?.title ?? ''}
          </p>
        </div>
      </div>
    </div>
  );
} 