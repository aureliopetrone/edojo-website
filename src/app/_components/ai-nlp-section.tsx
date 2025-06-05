import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import BrandGeometricBackground from "./brand-geometric-background";

export default function AiNlpSection() {
  return (
    <div className="py-32 relative">
      {/* Updated background to match homepage */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
        {/* Additional gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/10 via-transparent to-primary-500/10"></div>
      </div>

      <BrandGeometricBackground
        variant="particles"
        intensity="subtle"
      />

      <section id="nlp" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Hero Typography */}
            <div className="relative mb-24 text-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-secondary-600/8 leading-none select-none pointer-events-none">
                  NLP
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                    Natural Language
                    <span className="block text-gradient-purple-red animate-gradient-shift">
                      Processing
                    </span>
                  </JapaneseText>
                  <div className="mt-6 lg:mt-8 relative flex justify-center">
                    <JapaneseLine variant="thick" className="w-20 gradient-purple-red" />
                    <JapaneseLine variant="thin" className="w-12 gradient-red-purple mt-2 ml-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Visual Demo */}
              <SlideInLeft delay={300} className="relative">
                <div className="glassmorphism-purple rounded-3xl p-8 shadow-purple">
                  {/* NLP Demo Interface */}
                  <div className="relative h-80 glassmorphism-dark rounded-2xl p-6 overflow-hidden">
                    {/* Chat Interface */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-secondary-400 mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-mono">AI PROCESSING</span>
                      </div>
                      
                      {/* Messages */}
                      <div className="space-y-3">
                        <div className="glassmorphism-brand rounded-lg p-3 max-w-xs">
                          <p className="text-white text-sm">Analizza il sentiment di questo testo...</p>
                        </div>
                        
                        <div className="glassmorphism-purple rounded-lg p-3 max-w-xs ml-8">
                          <p className="text-neutral-300 text-sm">
                            <span className="text-green-400">Sentiment: Positivo (87%)</span><br/>
                            <span className="text-blue-400">Emozioni: Gioia, Soddisfazione</span><br/>
                            <span className="text-purple-400">Entità: Cliente, Prodotto</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Processing Animation */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-xs text-neutral-400">
                        <div className="flex space-x-1">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div 
                              key={i}
                              className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"
                              style={{ animationDelay: i * 200 + 'ms' }}
                            />
                          ))}
                        </div>
                        <span className="font-mono">Elaborando linguaggio naturale...</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <JapaneseText variant="body" className="text-lg font-bold text-secondary-400 mb-2">
                      Comprensione del Linguaggio
                    </JapaneseText>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      AI che comprende, analizza e genera testo umano 
                      con precisione e contesto.
                    </p>
                  </div>
                </div>
              </SlideInLeft>

              {/* Right Side - Content */}
              <SlideInRight delay={300} className="relative">
                <div className="space-y-8">
                  <div>
                    <JapaneseText variant="title" className="text-3xl font-black text-white leading-[1.1] mb-6">
                      <span className="block">Elaborazione</span>
                      <span className="block text-gradient-red-purple italic">
                        Linguaggio Naturale
                      </span>
                    </JapaneseText>
                    <p className="text-neutral-300 leading-relaxed text-lg">
                      Trasformiamo il testo non strutturato in insights azionabili 
                      attraverso algoritmi avanzati di comprensione del linguaggio.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-purple-red rounded-xl flex items-center justify-center shadow-purple">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">Conversational AI</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Chatbot e assistenti virtuali che comprendono il contesto 
                          e forniscono risposte naturali e pertinenti.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-red-purple rounded-xl flex items-center justify-center shadow-brand">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">Analisi del Sentiment</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Comprensione delle emozioni e opinioni espresse nel testo 
                          per monitoraggio brand e feedback clienti.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 gradient-purple-red rounded-xl flex items-center justify-center shadow-purple">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg mb-2">Generazione Automatica</h4>
                        <p className="text-neutral-300 leading-relaxed">
                          Creazione di contenuti testuali originali e coerenti 
                          per marketing, documentazione e comunicazione.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideInRight>
            </div>

            {/* Language Support Section */}
            <div className="mt-24">
              <JapaneseText variant="title" className="text-3xl font-black text-center text-white mb-16">
                <span className="block">Supporto</span>
                <span className="block text-gradient-red-purple italic">
                  Multilingue
                </span>
              </JapaneseText>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Full Width Language Marquee - Outside the container */}
      <div className="w-full overflow-hidden relative py-8">
        <div className="animate-marquee whitespace-nowrap hover:pause-marquee">
          <div className="flex space-x-6">
            {/* First Set of Languages */}
            {[
              { lang: 'IT', name: 'Italiano' },
              { lang: 'EN', name: 'English' },
              { lang: 'ES', name: 'Español' },
              { lang: 'FR', name: 'Français' },
              { lang: 'DE', name: 'Deutsch' },
              { lang: 'PT', name: 'Português' },
              { lang: 'ZH', name: 'Chinese' },
              { lang: 'AR', name: 'Arabic' },
              { lang: 'RU', name: 'Russian' },
              { lang: 'JA', name: 'Japanese' },
              { lang: 'KO', name: 'Korean' },
              { lang: 'TH', name: 'Thai' },
              { lang: 'VI', name: 'Vietnamese' },
              { lang: 'ID', name: 'Indonesian' },
            ].map((language, i) => (
              <div
                key={`first-${language.lang}-${i}`}
                className="flex-shrink-0 glassmorphism-brand rounded-xl p-6 shadow-brand hover:shadow-brand-bold transition-all duration-300 text-center min-w-[140px]"
              >
                <div className="w-12 h-12 gradient-purple-red rounded-xl flex items-center justify-center mx-auto mb-4 shadow-purple">
                  <span className="text-white font-bold text-sm">{language.lang}</span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{language.name}</h4>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {[
              { lang: 'IT', name: 'Italiano' },
              { lang: 'EN', name: 'English' },
              { lang: 'ES', name: 'Español' },
              { lang: 'FR', name: 'Français' },
              { lang: 'DE', name: 'Deutsch' },
              { lang: 'PT', name: 'Português' },
              { lang: 'ZH', name: 'Chinese' },
              { lang: 'AR', name: 'Arabic' },
              { lang: 'RU', name: 'Russian' },
              { lang: 'JA', name: 'Japanese' },
              { lang: 'KO', name: 'Korean' },
              { lang: 'TH', name: 'Thai' },
              { lang: 'VI', name: 'Vietnamese' },
              { lang: 'ID', name: 'Indonesian' },
            ].map((language, i) => (
              <div
                key={`second-${language.lang}-${i}`}
                className="flex-shrink-0 glassmorphism-brand rounded-xl p-6 shadow-brand hover:shadow-brand-bold transition-all duration-300 text-center min-w-[140px]"
              >
                <div className="w-12 h-12 gradient-purple-red rounded-xl flex items-center justify-center mx-auto mb-4 shadow-purple">
                  <span className="text-white font-bold text-sm">{language.lang}</span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{language.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}