import ProjectForm from "./project-form";
import { FadeInUp, SlideInLeft, SlideInRight, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function ProjectFormSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 relative">
      {/* Modern Background Effects */}
      <ModernBackground 
        variant="grid" 
        intensity="subtle" 
        colorScheme="neutral" 
        darkMode={true}
      />
      
      <section id="form-progetto" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <FadeInUp>
            <div className="text-center mb-16">
              <JapaneseLine variant="thin" className="max-w-32 mx-auto mb-8" />
              <JapaneseText variant="title" brushEffect className="text-3xl font-bold text-neutral-50 mb-6">
                Proponi la Tua Idea
              </JapaneseText>
              <JapaneseLine variant="double" className="max-w-48 mx-auto mt-8" />
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <SlideInLeft delay={300}>
              <div>
                <p className="text-lg text-neutral-100 mb-8">
                  Compila il form con i dettagli del tuo progetto. Più informazioni fornisci, 
                  meglio potremo valutare la fattibilità e l&apos;interesse del progetto.
                </p>

                {/* Process Steps */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-neutral-50 mb-4">Come Funziona</h3>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 mb-1">Invii la Proposta</h4>
                      <p className="text-neutral-300 text-sm">Compili il form con tutti i dettagli del progetto</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 mb-1">Valutiamo Insieme</h4>
                      <p className="text-neutral-300 text-sm">Analizziamo la fattibilità e organizziamo una call di approfondimento</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 mb-1">Definiamo i Dettagli</h4>
                      <p className="text-neutral-300 text-sm">Stabiliamo timeline, funzionalità e modalità di collaborazione</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 mb-1">Iniziamo lo Sviluppo</h4>
                      <p className="text-neutral-300 text-sm">Partiamo con lo sviluppo mantenendo comunicazione costante</p>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700 shadow-lg">
                  <h4 className="font-semibold text-neutral-100 mb-3">Tempi di Risposta</h4>
                  <p className="text-neutral-300 text-sm mb-3">
                    Ci impegniamo a rispondere entro <strong>48 ore</strong> dalla ricezione della proposta.
                  </p>
                  <p className="text-neutral-400 text-xs">
                    Le proposte più dettagliate e innovative hanno priorità nella valutazione.
                  </p>
                </div>
              </div>
            </SlideInLeft>

            {/* Right Column - Form */}
            <SlideInRight delay={300}>
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-700 shadow-lg">
                <ProjectForm />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </div>
  );
} 