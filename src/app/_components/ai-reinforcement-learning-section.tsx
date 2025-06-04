import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";
import ReinforcementLearningAnimation from "./reinforcement-learning-animation";

export default function AiReinforcementLearningSection() {
  return (
    <div className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50"></div>
      </div>

      <ModernBackground
        variant="grid"
        intensity="subtle"
        colorScheme="purple"
        darkMode={false}
      />

      <section id="reinforcement-learning" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Hero Typography */}
            <div className="relative mb-24 text-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-purple-800/5 leading-none select-none pointer-events-none">
                  RL
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-800 leading-[1.1] tracking-tighter text-center py-2">
                    Reinforcement
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
                      Algoritmo di Equilibrio Dinamico
                    </JapaneseText>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      L&apos;agente impara attraverso tentativi ed errori, ottimizzando le decisioni 
                      per massimizzare la ricompensa nel tempo.
                    </p>
                  </div>
                </div>
              </SlideInLeft>

              {/* Right Side - Content */}
              <SlideInRight delay={300} className="relative">
                <div className="space-y-8">
                  <div>
                    <JapaneseText variant="title" className="text-3xl font-black text-neutral-900 leading-[1.1] mb-6">
                      <span className="block">Apprendimento per</span>
                      <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic">
                        Ricompensa
                      </span>
                    </JapaneseText>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Il Reinforcement Learning permette ai sistemi di imparare comportamenti ottimali 
                      attraverso l&apos;interazione con l&apos;ambiente, senza bisogno di esempi pre-etichettati.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Ottimizzazione Autonoma</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          L&apos;algoritmo trova automaticamente le strategie migliori attraverso l&apos;esplorazione 
                          e lo sfruttamento delle conoscenze acquisite.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Adattamento Continuo</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Il sistema si adatta dinamicamente ai cambiamenti dell&apos;ambiente, 
                          migliorando costantemente le proprie performance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Decisioni in Tempo Reale</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Capacità di prendere decisioni ottimali in scenari complessi e dinamici, 
                          dalla robotica al trading algoritmico.
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
                  Innovative
                </span>
              </JapaneseText>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Trading Algoritmico</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Strategie di trading che si adattano alle condizioni di mercato in tempo reale.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Controllo Robotico</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Robot che imparano movimenti complessi e si adattano a nuovi ambienti.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-cyan-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V5a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-xl mb-3">Ottimizzazione Risorse</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Gestione intelligente di energia, logistica e allocazione di risorse aziendali.
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