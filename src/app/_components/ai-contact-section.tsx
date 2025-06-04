import Link from "next/link";
import ContactForm from "./contact-form";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";
import { companyInfo } from "~/config/company-info";

export default function AiContactSection() {
  return (
    <div className="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="mixed" 
        intensity="moderate" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      {/* AI-themed geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-700/8 to-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-700/8 to-cyan-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-indigo-700/6 to-purple-800/8 rounded-full blur-2xl"></div>
      </div>
      
      <section id="contatti" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* AI-themed Hero Typography */}
            <div className="relative mb-16">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black text-white/5 leading-none select-none pointer-events-none">
                  connect
                </div>
                <div className="relative pt-8 lg:pt-12">
                  <div className="flex flex-col">
                    <div>
                      <div>
                        <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                          Iniziamo a progettare
                          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            il tuo futuro AI
                          </span>
                        </JapaneseText>
                      </div>
                      <div className="mt-4 lg:mt-6 relative flex justify-center">
                        <JapaneseLine variant="thick" className="w-20 bg-gradient-to-r from-purple-400 to-cyan-400" />
                        <JapaneseLine variant="thin" className="w-12 bg-gradient-to-r from-cyan-400 to-purple-300 mt-2 ml-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-specific description */}
            <div className="text-center mx-auto mb-16">
              <JapaneseText variant="body" className="mt-6 text-lg text-neutral-300">
                <span className="font-semibold text-white">Consulenza strategica AI gratuita</span> per identificare le opportunità di automazione più promettenti. 
                Scopriamo insieme come l&apos;intelligenza artificiale può trasformare il tuo business.
              </JapaneseText>
              <p className="mt-2 text-sm text-neutral-400">
                Condividi la tua visione per ricevere una roadmap AI personalizzata.
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft delay={300}>
              <div className="bg-gradient-to-br from-purple-600/95 to-blue-600/95 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl border border-purple-500/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Richiedi Consulenza AI
                  </h3>
                  <p className="text-purple-100 text-sm">
                    Raccontaci i tuoi processi aziendali e scopri come l&apos;AI può ottimizzarli
                  </p>
                </div>
                <ContactForm />
              </div>
            </SlideInLeft>
            
            {/* Contact Info - AI themed */}
            <SlideInRight delay={500}>
              <div className="bg-purple-800/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Il nostro approccio AI
                </h3>
                
                {/* AI Services Info */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Assessment AI-Ready</h4>
                      <p className="text-purple-200 text-sm">Analisi dei processi e identificazione opportunità AI entro 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Prototipo Funzionale</h4>
                      <p className="text-purple-200 text-sm">MVP rapido per dimostrare il valore concreto dell&apos;AI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Implementazione Sicura</h4>
                      <p className="text-purple-200 text-sm">Privacy by design e conformità normativa garantita</p>
                    </div>
                  </div>
                </div>

                {/* Standard Contact Info */}
                <div className="border-t border-purple-700 pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <Link href={`mailto:${companyInfo.contact.email}`} className="text-purple-200 hover:text-cyan-400 transition-colors text-sm">
                        {companyInfo.contact.email}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="tel:+393713028310" className="text-purple-200 hover:text-cyan-400 transition-colors text-sm">
                        +39 371 302 8310
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl border border-purple-500/30">
                  <p className="text-purple-100 text-sm">
                    <span className="font-semibold text-cyan-400">Idea innovativa? </span> 
                    Per progetti AI pioneristici, brainstorming strategico immediato.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Bottom CTA */}
          <FadeInUp delay={700}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-800/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-700">
                <JapaneseText variant="body" className="text-lg text-purple-200 mb-4">
                  <span className="font-semibold text-white">L&apos;AI è il futuro del business</span><br />
                  Iniziamo oggi a costruire il vantaggio competitivo di domani.
                </JapaneseText>
                <JapaneseLine variant="thin" className="max-w-32 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400" />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 