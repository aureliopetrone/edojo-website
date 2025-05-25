import Link from "next/link";
import ContactForm from "./contact-form";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function ContactSection() {
  return (
    <div className="py-24 section-white relative">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="floating" 
        intensity="intense" 
        colorScheme="neutral" 
        darkMode={false}
      />
      
      <section id="contatti" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
              <JapaneseText variant="title" brushEffect className="text-neutral-900 mb-6">
                <span className="block text-lg font-normal text-neutral-600 mb-2 font-mono">
                  {/* Iniziamo a lavorare insieme */}
                </span>
                Hai un progetto in mente?
              </JapaneseText>
              <p className="mt-4 text-lg text-neutral-600">
                <span className="font-semibold text-neutral-800">Parliamone</span> di persona o in call. 
                <br />
                Descrivi il tuo progetto e valutiamo insieme la soluzione.
              </p>
              <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft delay={300}>
              <div className="bg-primary-600 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <ContactForm />
              </div>
            </SlideInLeft>
            
            {/* Contact Info */}
            <SlideInRight delay={500}>
              <div className="bg-neutral-50 rounded-lg p-8 border border-neutral-200 transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                  <span className="font-mono text-primary-600 text-sm block mb-1">contact_info = {`{`}</span>
                  Come trovarci
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-600 text-sm font-mono">email:</p>
                      <Link href="mailto:info@edojo.it" className="text-neutral-900 hover:text-primary-600 transition-colors font-semibold">
                        info@edojo.it
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-600 text-sm font-mono">phone:</p>
                      <Link href="tel:+393713028310" className="text-neutral-900 hover:text-primary-600 transition-colors font-semibold">
                        +39 371 302 8310
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-neutral-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-600 text-sm font-mono">location:</p>
                      <p className="text-neutral-900 font-semibold">
                        Via Aldo Moro, 50<br />
                        Solofra (AV) - Campania<br />
                        <span className="text-neutral-600 text-sm font-mono">P.IVA 03030880649</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <p className="text-neutral-700 text-sm">
                    <span className="font-semibold text-primary-700">Info:</span> 
                    Fornisci dettagli sul progetto per un preventivo più preciso.
                  </p>
                </div>

                <div className="mt-6 text-right">
                  <p className="text-neutral-600 text-sm font-mono">
                    <span className="text-primary-600">{`}`}</span>
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Linea decorativa finale */}
          <FadeInUp delay={700}>
            <div className="mt-16 text-center">
              <JapaneseLine variant="thin" className="max-w-64 mx-auto" />
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
} 