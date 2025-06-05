import Link from "next/link";
import ContactForm from "./contact-form";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";
import { companyInfo } from "~/config/company-info";

export default function ContactSection() {
  return (
    <div className="py-32 section-neutral relative overflow-hidden">
      {/* Modern Background Effects - Subtle */}
      <ModernBackground 
        variant="mixed" 
        intensity="subtle" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      {/* Elegant geometric shapes with purple-red theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/3 to-secondary-400/8 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-primary-400/5 to-white/3 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-secondary-600/8 to-primary-600/6 rounded-full blur-2xl animate-elegant-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <section id="contatti" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            {/* Brand Hero Typography Section */}
            <div className="relative mb-16">
              {/* Main Title - Brand Consistent */}
              <div className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[10rem] sm:text-[12rem] lg:text-[18rem] font-black text-white/8 leading-none select-none pointer-events-none">
                  ciao
                </div>
                <div className="relative pt-12 lg:pt-20">
                  <div className="flex flex-col">
                    {/* Main Heading */}
                    <div>
                      <div>
                        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter text-center py-2">
                          Hai qualcosa
                          <span className="block text-gradient-purple-red">
                            in mente?
                          </span>
                        </h1>
                      </div>
                      <div className="mt-6 lg:mt-8 relative flex justify-center">
                        <div className="w-24 h-1 gradient-purple-red rounded-full"></div>
                        <div className="w-16 h-1 gradient-red-purple rounded-full mt-2 ml-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptive Paragraphs */}
            <div className="text-center mx-auto mb-16">
              <p className="mt-6 text-lg text-neutral-300">
                <span className="font-semibold text-white">Parliamone</span> di persona o in call. 
                Descrivi il tuo progetto e valutiamo insieme la soluzione.
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Iniziamo a lavorare insieme sul tuo prossimo successo digitale.
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft delay={300}>
              <div className="glassmorphism-purple rounded-3xl p-8 transform hover:scale-[1.02] transition-all duration-300 shadow-elegant border border-secondary-600/30 hover:border-secondary-500/50">
                <ContactForm />
              </div>
            </SlideInLeft>
            
            {/* Contact Info */}
            <SlideInRight delay={500}>
              <div className="glassmorphism-dark rounded-3xl p-8 border border-neutral-700/50 transform hover:scale-[1.02] transition-all duration-300 shadow-elegant hover:border-secondary-400/30">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Come trovarci
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-red-purple rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm font-mono">email:</p>
                      <Link href={`mailto:${companyInfo.contact.email}`} className="text-white text-lg hover:text-secondary-400 transition-colors font-semibold">
                        {companyInfo.contact.email}
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-red-purple rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm font-mono">phone:</p>
                      <Link href="tel:+393713028310" className="text-white text-lg hover:text-secondary-400 transition-colors font-semibold">
                        +39 371 302 8310
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-red-purple rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm font-mono">location:</p>
                      <p className="text-white text-lg font-semibold">
                        Via Aldo Moro, 50<br />
                        Solofra (AV)<br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 glassmorphism-purple rounded-2xl border border-secondary-400/20">
                  <p className="text-neutral-200 text-sm">
                    <span className="font-semibold text-secondary-400">Info: </span> 
                    Fornisci dettagli sul progetto per un preventivo più preciso.
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>

          {/* Brand decorative line */}
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