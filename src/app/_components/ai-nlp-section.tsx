import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function AiNlpSection() {
  return (
    <div className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
      </div>

      <ModernBackground
        variant="mesh"
        intensity="subtle"
        colorScheme="green"
        darkMode={false}
      />

      <section id="nlp" className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Hero Typography */}
            <div className="relative mb-24 text-center">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-emerald-800/5 leading-none select-none pointer-events-none">
                  NLP
                </div>
                <div className="relative pt-12 lg:pt-16">
                  <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-800 leading-[1.1] tracking-tighter text-center py-2">
                    Natural Language
                    <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Processing
                    </span>
                  </JapaneseText>
                  <div className="mt-6 lg:mt-8 relative flex justify-center">
                    <JapaneseLine variant="thick" className="w-20 bg-gradient-to-r from-emerald-600 to-teal-600" />
                    <JapaneseLine variant="thin" className="w-12 bg-gradient-to-r from-teal-600 to-emerald-400 mt-2 ml-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Analysis Demo */}
              <SlideInLeft delay={300} className="relative">
                <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-emerald-200/50">
                  {/* Text Analysis Demo */}
                  <div className="relative h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 overflow-hidden">
                    {/* Sample Text */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="text-sm text-emerald-600 font-mono mb-2">TESTO DI ESEMPIO:</div>
                      <div className="text-sm text-neutral-700 bg-white/50 p-3 rounded">
                        &quot;L&apos;intelligenza artificiale sta trasformando il modo in cui le aziende...&quot;
                      </div>
                    </div>

                    {/* Analysis Results */}
                    <div className="absolute top-24 left-4 right-4 space-y-2">
                      <div className="flex items-center justify-between bg-emerald-500/10 px-3 py-2 rounded text-xs">
                        <span className="text-emerald-700">Sentiment:</span>
                        <span className="text-emerald-600 font-mono">POSITIVO (85%)</span>
                      </div>
                      <div className="flex items-center justify-between bg-teal-500/10 px-3 py-2 rounded text-xs">
                        <span className="text-teal-700">Entità:</span>
                        <span className="text-teal-600 font-mono">AZIENDE, IA</span>
                      </div>
                      <div className="flex items-center justify-between bg-cyan-500/10 px-3 py-2 rounded text-xs">
                        <span className="text-cyan-700">Lingua:</span>
                        <span className="text-cyan-600 font-mono">ITALIANO (99%)</span>
                      </div>
                    </div>

                    {/* Word Highlighting */}
                    <div className="absolute bottom-16 left-4 right-4">
                      <div className="text-xs text-emerald-600 font-mono mb-2">PAROLE CHIAVE:</div>
                      <div className="flex flex-wrap gap-2">
                        {['intelligenza', 'artificiale', 'trasformando', 'aziende'].map((word, i) => (
                          <span
                            key={word}
                            className="px-2 py-1 bg-emerald-500/20 text-emerald-700 rounded text-xs animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Processing Indicator */}
                    <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-emerald-600 font-mono">PROCESSING...</span>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <JapaneseText variant="body" className="text-lg font-bold text-emerald-800 mb-2">
                      Analisi Semantica Avanzata
                    </JapaneseText>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Comprensione del linguaggio naturale per estrarre significato, 
                      sentiment e informazioni strutturate dal testo.
                    </p>
                  </div>
                </div>
              </SlideInLeft>

              {/* Right Side - Content */}
              <SlideInRight delay={300} className="relative">
                <div className="space-y-8">
                  <div>
                    <JapaneseText variant="title" className="text-3xl font-black text-neutral-900 leading-[1.1] mb-6">
                      <span className="block">Comprensione del</span>
                      <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">
                        Linguaggio
                      </span>
                    </JapaneseText>
                    <p className="text-neutral-600 leading-relaxed text-lg">
                      Il &quot;Natural Language Processing&quot; permette alle macchine di comprendere, interpretare 
                      e generare linguaggio umano con precisione straordinaria.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Chatbot Conversazionali</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Sistemi conversazionali intelligenti che comprendono il contesto e l&apos;intenzione 
                          dell&apos;utente per fornire risposte naturali e precise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Analisi del Sentiment</h4>
                        <p className="text-neutral-600 leading-relaxed">
                          Comprensione delle emozioni e opinioni espresse nel testo 
                          per monitoraggio brand e feedback clienti.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 text-lg mb-2">Generazione Automatica</h4>
                        <p className="text-neutral-600 leading-relaxed">
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
              <JapaneseText variant="title" className="text-3xl font-black text-center text-neutral-900 mb-16">
                <span className="block">Supporto</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">
                  Multilingua
                </span>
              </JapaneseText>

              {/* Infinite Horizontal Slider */}
              <div className="relative overflow-hidden">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrolling container */}
                <div className="flex animate-marquee hover:pause-marquee">
                  {/* First set of languages */}
                  <div className="flex space-x-6 mr-6">
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
                        className="flex-shrink-0 bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center min-w-[140px]"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <span className="text-white font-bold text-sm">{language.lang}</span>
                        </div>
                        <h4 className="font-bold text-neutral-900 text-sm mb-1">{language.name}</h4>
                      </div>
                    ))}
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="flex space-x-6">
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
                        className="flex-shrink-0 bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center min-w-[140px]"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <span className="text-white font-bold text-sm">{language.lang}</span>
                        </div>
                        <h4 className="font-bold text-neutral-900 text-sm mb-1">{language.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 