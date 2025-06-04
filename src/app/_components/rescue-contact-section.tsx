import Link from "next/link";
import ContactForm from "./contact-form";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function RescueContactSection() {
  return (
    <div className="py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="mixed" 
        intensity="moderate" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      {/* Artistic geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-700/8 to-cyan-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-amber-700/8 to-orange-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-neutral-700/6 to-neutral-800/8 rounded-full blur-2xl"></div>
      </div>
      
      <section id="contatti" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            {/* Rescue-themed Hero Typography */}
            <div className="relative mb-16">
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black text-white/5 leading-none select-none pointer-events-none">
                  talk
                </div>
                <div className="relative pt-8 lg:pt-12">
                  <div className="flex flex-col">
                    <div>
                      <div>
                        <JapaneseText variant="title" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                          Valutiamo insieme
                          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            il progetto
                          </span>
                        </JapaneseText>
                      </div>
                      <div className="mt-4 lg:mt-6 relative flex justify-center">
                        <JapaneseLine variant="thick" className="w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <JapaneseLine variant="thin" className="w-12 bg-gradient-to-r from-blue-500 to-cyan-300 mt-2 ml-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rescue-specific description */}
            <div className="text-center mx-auto mb-16">
              <JapaneseText variant="body" className="mt-6 text-lg text-neutral-300">
                <span className="font-semibold text-white">Analisi tecnica gratuita</span> per comprendere lo stato del progetto. 
                Identifichiamo le opportunità e definiamo la strategia migliore.
              </JapaneseText>
              <p className="mt-2 text-sm text-neutral-400">
                Condividi i dettagli del tuo progetto per una consulenza professionale mirata.
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft delay={300}>
              <div className="bg-gradient-to-br from-cyan-600/95 to-blue-600/95 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl border border-cyan-500/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Richiedi Valutazione
                  </h3>
                  <p className="text-cyan-100 text-sm">
                    Descrivi il progetto per ricevere un&apos;analisi tecnica professionale gratuita
                  </p>
                </div>
                <ContactForm />
              </div>
            </SlideInLeft>
            
            {/* Contact Info - Rescue themed */}
            <SlideInRight delay={500}>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 border border-neutral-700 transform hover:scale-[1.02] transition-all duration-300 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Il nostro servizio
                </h3>
                
                {/* Rescue Services Info */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Analisi Rapida</h4>
                      <p className="text-neutral-300 text-sm">Valutazione tecnica completa entro 48h dalla richiesta</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Strategia Personalizzata</h4>
                      <p className="text-neutral-300 text-sm">Roadmap su misura con timeline e milestone concrete</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-1">Massima Riservatezza</h4>
                      <p className="text-neutral-300 text-sm">NDA incluso, il tuo codice e le tue informazioni restano private</p>
                    </div>
                  </div>
                </div>

                {/* Standard Contact Info */}
                <div className="border-t border-neutral-700 pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="mailto:info@edojo.it" className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm">
                        info@edojo.it
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neutral-700 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="tel:+393713028310" className="text-neutral-300 hover:text-cyan-400 transition-colors text-sm">
                        +39 371 302 8310
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-amber-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl border border-amber-500/30">
                  <p className="text-neutral-200 text-sm">
                    <span className="font-semibold text-amber-400">Priorità alta? </span> 
                    Per progetti con tempistiche strette, consulenza immediata via call.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Bottom CTA */}
          <FadeInUp delay={700}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-700">
                <JapaneseText variant="body" className="text-lg text-neutral-300 mb-4">
                  <span className="font-semibold text-white">Ogni progetto ha il suo potenziale</span><br />
                  Il primo passo è capire come sbloccarlo efficacemente.
                </JapaneseText>
                <JapaneseLine variant="thin" className="max-w-32 mx-auto" />
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 