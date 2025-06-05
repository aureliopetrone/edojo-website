import OrigamiLink from "./origami-link";
import { FadeInUp, JapaneseLine, JapaneseText } from "./japanese-animations";
import BrandGeometricBackground from "./brand-geometric-background";

export default function ProjectHeroSection() {
  return (
    <div className="relative overflow-hidden pt-16 bg-gradient-to-br from-green-50 via-neutral-50 to-blue-50">
      {/* Brand Geometric Background Effects */}
      <BrandGeometricBackground 
        variant="particles" 
        intensity="subtle"
      />
      
      <section className="relative">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-24">
          <div className="text-center">
            <FadeInUp>
              {/* Main Title */}
              <div className="mb-8">
                <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
                <JapaneseText variant="title" brushEffect className="text-5xl font-bold tracking-tight sm:text-7xl leading-[1.1] mb-6 py-2">
                  <span className="text-primary-600">Sviluppiamo</span>
                  <br />
                  <span className="text-neutral-900">la tua idea</span>
                  <br />
                  <span className="text-primary-600">gratuitamente</span>
                </JapaneseText>
                <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                  Hai un&apos;idea innovativa per un&apos;applicazione web? Noi la realizziamo gratuitamente. 
                  Tu mantieni la proprietà, noi guadagniamo esperienza e un progetto per il nostro portfolio.
                </p>
                <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
              </div>
            </FadeInUp>

            {/* Value Proposition */}
            <FadeInUp delay={300}>
              <div className="mt-8 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-primary-50/80 backdrop-blur-sm rounded-xl p-6 border border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-primary-600 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Proprietà Garantita</h3>
                    <p className="text-sm text-neutral-600">L&apos;applicazione resta completamente tua, con tutti i diritti di proprietà intellettuale</p>
                  </div>
                  
                  <div className="bg-green-50/80 backdrop-blur-sm rounded-xl p-6 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-green-600 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Completamente Gratuito</h3>
                    <p className="text-sm text-neutral-600">Zero costi per te. Investiamo il nostro tempo per progetti interessanti e innovativi</p>
                  </div>
                  
                  <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-blue-600 mb-3">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Sviluppo Rapido</h3>
                    <p className="text-sm text-neutral-600">Progetti completati in 1-2 settimane utilizzando tecnologie moderne e metodologie agili</p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Requirements */}
            <FadeInUp delay={500}>
              <div className="mt-12 mb-8">
                <JapaneseLine variant="thin" className="max-w-64 mx-auto mb-8" />
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Cosa Cerchiamo</h2>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-neutral-200 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        Idee Innovative
                      </h3>
                      <p className="text-neutral-600 text-sm">Progetti che risolvono problemi reali o introducono nuove funzionalità interessanti</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        Aziende Motivate
                      </h3>
                      <p className="text-neutral-600 text-sm">Team che credono nel progetto e sono disposti a collaborare attivamente</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        Progetti Focalizzati
                      </h3>
                      <p className="text-neutral-600 text-sm">Idee ben definite che possono essere realizzate in 1-2 settimane</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        Potenziale Portfolio
                      </h3>
                      <p className="text-neutral-600 text-sm">Progetti che possiamo utilizzare come case study (con il tuo consenso)</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* CTA */}
            <FadeInUp delay={700}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <OrigamiLink
                  href="#form-progetto"
                  variant="primary"
                  size="lg"
                >
                  Proponi la tua idea
                </OrigamiLink>
                <a href="#come-facciamo" className="text-sm font-semibold leading-6 text-neutral-600 hover:text-neutral-900 transition-colors group flex items-center">
                  Come facciamo?
                  <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
} 