import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import BrandGeometricBackground from "./brand-geometric-background";
import ReinforcementLearningAnimation from "./reinforcement-learning-animation";

export default function AiMachineLearningSection() {
  return (
    <div className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50"></div>
      </div>

      <BrandGeometricBackground
        variant="floating"
        intensity="subtle"
      />

      <section id="machine-learning" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Hero Typography */}
            <div className="relative mb-24 text-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-purple-800/5 leading-none select-none pointer-events-none">
                  ML
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-800 leading-[1.1] tracking-tighter text-center py-2">
                    Machine
                    <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Learning
                    </span>
                  </JapaneseText>
                  <div className="mt-6 lg:mt-8 relative flex justify-center">
                    <JapaneseLine variant="thick" className="w-20 bg-gradient-to-r from-purple-600 to-blue-600" />
                    <JapaneseLine variant="thin" className="w-12 bg-gradient-to-r from-blue-600 to-purple-400 mt-2 ml-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Animation */}
              <SlideInLeft delay={300} className="relative">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-200/50">
                  <ReinforcementLearningAnimation />
                  
                  <div className="mt-6 text-center">
                    <JapaneseText variant="body" className="text-lg font-bold text-purple-800 mb-2">
                      Algoritmi di Apprendimento Automatico
                    </JapaneseText>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      I sistemi imparano dai dati per identificare pattern, fare previsioni 
                      e prendere decisioni intelligenti.
                    </p>
                  </div>
                </div>
              </SlideInLeft>

              {/* Right Side - Content */}
              <SlideInRight delay={300} className="relative">
                <div className="space-y-8">
                  <div>
                    <JapaneseText variant="title" className="text-3xl font-black text-neutral-900 leading-[1.1] mb-6">
                      <span className="block">Apprendimento dai</span>
                      <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic">
                        Dati
                      </span>
                    </JapaneseText>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Il Machine Learning permette ai computer di imparare e migliorare automaticamente 
                      attraverso l&apos;esperienza, senza essere esplicitamente programmati per ogni compito.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Analisi Predittiva</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Algoritmi che analizzano dati storici per identificare pattern 
                          e prevedere tendenze future con alta precisione.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Classificazione Intelligente</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Sistemi che categorizzano automaticamente dati complessi, 
                          dal riconoscimento di immagini all&apos;analisi del sentiment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Ottimizzazione Automatica</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Algoritmi che trovano soluzioni ottimali per problemi complessi, 
                          migliorando continuamente le performance del sistema.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>

            {/* Applications Section */}
            <div className="mt-24">
              <JapaneseText variant="title" className="text-3xl font-black text-center text-neutral-900 mb-16">
                <span className="block">Applicazioni</span>
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic">
                  Pratiche
                </span>
              </JapaneseText>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Analisi Dati Aziendali</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Trasformazione di grandi volumi di dati in insights strategici per il business.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Computer Vision</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Riconoscimento e analisi automatica di immagini e video per applicazioni industriali.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Elaborazione Linguaggio</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Comprensione e generazione automatica di testo per chatbot e assistenti virtuali.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 