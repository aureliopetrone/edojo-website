import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function AiComputerVisionSection() {
  return (
    <div className="py-32 relative">
      {/* Updated background to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10"></div>
      </div>

      <ModernBackground
        variant="grid"
        intensity="subtle"
        colorScheme="red"
        darkMode={true}
      />

      <section id="computer-vision" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Hero Typography */}
            <div className="relative mb-24 text-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-primary-600/8 leading-none select-none pointer-events-none">
                  CV
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                    Computer
                    <span className="block text-gradient-red-purple animate-gradient-shift">
                      Vision
                    </span>
                  </JapaneseText>
                  <div className="mt-6 lg:mt-8 relative flex justify-center">
                    <JapaneseLine variant="thick" className="w-20 gradient-red-purple" />
                    <JapaneseLine variant="thin" className="w-12 gradient-purple-red mt-2 ml-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <SlideInLeft delay={300} className="relative">
                <div className="space-y-8">
                  <div>
                    <JapaneseText variant="title" className="text-3xl font-black text-white leading-[1.1] mb-6">
                      <span className="block">Visione</span>
                      <span className="block text-gradient-purple-red italic">
                        Artificiale
                      </span>
                    </JapaneseText>
                    <p className="text-neutral-300 leading-relaxed text-lg">
                      La Computer Vision permette alle macchine di interpretare e comprendere 
                      il mondo visivo con precisione superiore all&apos;occhio umano.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-red-purple rounded-xl flex items-center justify-center shadow-brand">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">Riconoscimento Oggetti</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Identificazione e classificazione automatica di oggetti, volti e scene 
                          con accuratezza superiore al 99%.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-purple-red rounded-xl flex items-center justify-center shadow-purple">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">Analisi Video</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Elaborazione in tempo reale di flussi video per sicurezza, 
                          monitoraggio e analisi comportamentale.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-red-purple rounded-xl flex items-center justify-center shadow-brand">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">OCR Intelligente</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Estrazione e interpretazione di testo da immagini e documenti 
                          con comprensione del contesto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              {/* Right Side - Visual Demo */}
              <SlideInRight delay={300} className="relative">
                <div className="glassmorphism-brand rounded-3xl p-8 shadow-brand">
                  {/* Computer Vision Demo */}
                  <div className="relative h-80 glassmorphism-dark rounded-2xl p-6 overflow-hidden">
                    {/* Simulated Camera View */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2 text-primary-400">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-mono">LIVE DETECTION</span>
                    </div>

                    {/* Detection Boxes */}
                    <div className="absolute top-16 left-8 w-20 h-16 border-2 border-primary-500 rounded animate-pulse">
                      <div className="absolute -top-6 left-0 text-xs font-mono text-primary-400 glassmorphism-dark px-2 py-1 rounded">
                        Face: 98%
                      </div>
                    </div>

                    <div className="absolute top-20 right-12 w-16 h-20 border-2 border-secondary-500 rounded animate-pulse delay-300">
                      <div className="absolute -top-6 right-0 text-xs font-mono text-secondary-400 glassmorphism-dark px-2 py-1 rounded">
                        Hand: 95%
                      </div>
                    </div>

                    <div className="absolute bottom-16 left-16 w-24 h-12 border-2 border-primary-500 rounded animate-pulse delay-700">
                      <div className="absolute -bottom-6 left-0 text-xs font-mono text-primary-400 glassmorphism-dark px-2 py-1 rounded">
                        Phone: 92%
                      </div>
                    </div>

                    {/* Neural Network Visualization */}
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-gradient-to-t from-primary-600 to-secondary-400 rounded animate-pulse"
                          style={{ 
                            height: Math.random() * 40 + 20 + 'px',
                            animationDelay: i * 200 + 'ms'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <JapaneseText variant="body" className="text-lg font-bold text-primary-400 mb-2">
                      Riconoscimento in Tempo Reale
                    </JapaneseText>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Algoritmi di deep learning che processano immagini e video 
                      identificando oggetti, persone e azioni istantaneamente.
                    </p>
                  </div>
                </div>
              </SlideInRight>
            </div>

            {/* Applications Section */}
            <div className="mt-24">
              <JapaneseText variant="title" className="text-3xl font-black text-center text-white mb-16">
                <span className="block">Settori di</span>
                <span className="block text-gradient-purple-red italic">
                  Applicazione
                </span>
              </JapaneseText>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glassmorphism-purple rounded-2xl p-8 hover:shadow-purple transition-all duration-300">
                  <div className="w-16 h-16 gradient-red-purple rounded-2xl flex items-center justify-center mb-6 shadow-brand">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3">Sicurezza & Sorveglianza</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    Sistemi di monitoraggio intelligente per rilevamento intrusioni e analisi comportamentale.
                  </p>
                </div>

                <div className="glassmorphism-brand rounded-2xl p-8 hover:shadow-brand transition-all duration-300">
                  <div className="w-16 h-16 gradient-purple-red rounded-2xl flex items-center justify-center mb-6 shadow-purple">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3">Controllo Qualità</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    Ispezione automatica di prodotti manifatturieri per difetti e conformità agli standard.
                  </p>
                </div>

                <div className="glassmorphism-purple rounded-2xl p-8 hover:shadow-purple transition-all duration-300">
                  <div className="w-16 h-16 gradient-red-purple rounded-2xl flex items-center justify-center mb-6 shadow-brand">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3">Diagnosi Medica</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    Analisi di immagini mediche per supportare diagnosi precoci e accurate.
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