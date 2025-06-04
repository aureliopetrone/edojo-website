import { FadeInUp, SlideInLeft, SlideInRight, StaggeredAnimation, JapaneseLine, JapaneseText } from "./japanese-animations";
import { ModernBackground } from "./modern-background-effects";

export default function AboutSection() {
  return (
    <div className="py-32 bg-primary-600/95 backdrop-blur-sm border-b border-primary-700/50 relative overflow-hidden">
      {/* Modern Background Effects - subtle to maintain color consistency */}
      <ModernBackground 
        variant="mixed" 
        intensity="subtle" 
        colorScheme="red" 
        darkMode={true}
      />
      
      {/* Very subtle overlay to add depth without changing color */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      
      {/* Artistic geometric shapes - adjusted for red primary background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-700/12 to-primary-800/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-primary-800/10 to-primary-900/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-gradient-to-bl from-primary-700/8 to-primary-800/10 rounded-full blur-2xl"></div>
      </div>
      
      <section id="chi-siamo" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Typography Section - Asymmetric Layout */}
          <div className="relative mb-32">
            {/* Main Title - Positioned Artistically */}
            <div className="relative">
              <div className="absolute top-0 left-0 text-[12rem] lg:text-[18rem] font-black text-white/3 leading-none select-none">
                edojo
              </div>
              <div className="relative pt-16 lg:pt-24">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
                  {/* Left Side - Main Heading */}
                  <div className="lg:w-1/2">
                    <div className="overflow-hidden">
                      <h1 className="text-7xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter">
                        Chi
                        <span className="block text-gradient-hero">
                          Siamo
                        </span>
                      </h1>
                    </div>
                    <div className="mt-8 relative">
                      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full mt-2 ml-8"></div>
                    </div>
                  </div>
                  
                  {/* Right Side - Tagline */}
                  <div className="lg:w-1/2 lg:text-right">
                    <div className="space-y-4">
                      <p className="text-white/70 text-lg font-medium tracking-wide uppercase">
                        Tech Lab Digitale
                      </p>
                      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Sviluppo Software
                        <span className="block text-2xl lg:text-3xl text-cyan-200 font-normal mt-2">
                          Automazione Intelligente
                        </span>
                        <span className="block text-2xl lg:text-3xl text-blue-200 font-normal">
                          Sistemi su Misura
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Clean Direct Layout */}
          <div className="relative space-y-32">
            {/* Mission and Services - Side by side with proper spacing */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
              {/* Mission Statement - Left Side */}
              <div className="xl:col-span-5 xl:col-start-1">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                      Realizziamo software che risolve
                      <span className="block text-gradient-hero">
                        problemi concreti
                      </span>
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-neutral-50">
                      <strong className="text-white">edojo</strong> è un tech lab digitale che si occupa di sviluppo software, automazione e integrazione di AI.
                    </p>
                    <p className="text-neutral-100">
                      Sviluppiamo soluzioni software innovative e personalizzate da <strong className="text-cyan-200">oltre 10 anni</strong> con un team di esperti in sviluppo, automazione e integrazione AI.
                    </p>
                    <p>
                      <strong className="text-cyan-200">La nostra missione &egrave; aiutare le aziende nella sperimentazione e nell&apos;implementazione di soluzioni innovative in modo rapido e accessibile.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Grid - Right Side with offset */}
              <div className="xl:col-span-6 xl:col-start-7 xl:mt-16">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                    Cosa Realizziamo
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></div>
                </div>
                
                {/* Horizontal Services Container - Responsive */}
                <div className="space-y-8">
                  {/* First Row - 3 Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Web Application - Liquid Code Flow */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-cyan-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-cyan-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Animated liquid code streams */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                          <div className="absolute top-1 left-1 right-1 h-0.5 bg-cyan-300 rounded-full group-hover:animate-pulse"></div>
                          <div className="absolute top-3 left-2 right-2 h-0.5 bg-blue-300 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="absolute bottom-3 left-1 right-1 h-0.5 bg-cyan-300 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-blue-300 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-cyan-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3m18 0c0-1.66-4.03-3-9-3s-9 1.34-9 3m18 0v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" className="group-hover:animate-pulse" />
                          <ellipse cx="12" cy="12" rx="3" ry="1" className="group-hover:animate-ping" fill="currentColor" opacity="0.3" />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-200 transition-colors duration-300">Web Application</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">Portali aziendali, dashboard real-time, CRM intelligenti</p>
                      </div>
                    </div>
                    
                    {/* AI Integration - Neural Constellation */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-blue-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-blue-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Neural constellation animation */}
                        <div className="absolute inset-0 opacity-25 group-hover:opacity-50 transition-opacity duration-500">
                          <div className="absolute top-2 left-3 w-1 h-1 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                          <div className="absolute top-4 right-2 w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                          <div className="absolute bottom-3 left-2 w-1 h-1 bg-blue-300 rounded-full group-hover:animate-ping" style={{ animationDelay: '0.4s' }}></div>
                          <div className="absolute bottom-4 right-3 w-1 h-1 bg-cyan-300 rounded-full group-hover:animate-ping" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-blue-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3" strokeWidth={2} className="group-hover:animate-spin" style={{ animationDuration: '4s' }} />
                          <circle cx="12" cy="12" r="8" strokeWidth={1.5} strokeDasharray="8 4" className="animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} opacity="0.7" />
                          <circle cx="12" cy="12" r="1" fill="currentColor" className="group-hover:animate-ping" />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-blue-200 transition-colors duration-300">AI Integration</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">Chatbot conversazionali, automazione documenti, ML personalizzato</p>
                      </div>
                    </div>
                    
                    {/* Automazione Processi - Energy Flow */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-emerald-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-emerald-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Energy flow streams */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-45 transition-opacity duration-500">
                          <div className="absolute top-1 left-1 w-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent group-hover:animate-pulse"></div>
                          <div className="absolute top-4 left-0 w-14 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent group-hover:animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <div className="absolute bottom-4 left-0 w-14 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent group-hover:animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                          <div className="absolute bottom-1 left-1 w-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent group-hover:animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-emerald-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" className="group-hover:animate-pulse" />
                          <circle cx="6" cy="10" r="1" strokeWidth={1} className="group-hover:animate-ping" style={{ animationDelay: '0.1s' }} />
                          <circle cx="18" cy="14" r="1" strokeWidth={1} className="group-hover:animate-ping" style={{ animationDelay: '0.3s' }} />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-200 transition-colors duration-300">Automazione Processi</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">Workflow intelligenti, sistemi IoT, AI Agents autonomi</p>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - 3 Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Robotica - Mechanical Innovation */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-orange-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-orange-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Mechanical particles */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-45 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-orange-300 rounded-full group-hover:animate-bounce"></div>
                          <div className="absolute top-4 right-3 w-1 h-1 bg-red-300 rounded-full group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                          <div className="absolute bottom-3 left-3 w-1 h-1 bg-orange-400 rounded-full group-hover:animate-ping" style={{ animationDelay: '0.4s' }}></div>
                          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-red-400 rounded-full group-hover:animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                          {/* Gear rotations */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-orange-300/40 rounded-full group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-orange-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {/* Robot head */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" className="group-hover:animate-pulse" />
                          {/* Robot eyes */}
                          <circle cx="10" cy="11" r="1" fill="currentColor" className="group-hover:animate-ping" style={{ animationDelay: '0.2s' }} />
                          <circle cx="14" cy="11" r="1" fill="currentColor" className="group-hover:animate-ping" style={{ animationDelay: '0.4s' }} />
                          {/* Robot mouth */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 13h4" className="group-hover:animate-pulse" style={{ animationDelay: '0.1s' }} />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-orange-200 transition-colors duration-300">Robotica</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">Automazione industriale, robot collaborativi, sistemi meccatronici</p>
                      </div>
                    </div>

                    {/* App Mobile - Digital Origami */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-purple-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-purple-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Digital origami layers */}
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-purple-300 rounded-full group-hover:animate-pulse"></div>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 border border-purple-300/60 rounded-full group-hover:animate-ping"></div>
                          <div className="absolute top-4 left-1 w-0.5 h-6 bg-purple-400/30 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="absolute top-4 right-1 w-0.5 h-6 bg-purple-400/30 rounded-full group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-purple-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="group-hover:animate-pulse" />
                          <circle cx="12" cy="9" r="1" fill="currentColor" className="group-hover:animate-ping" style={{ animationDelay: '0.2s' }} />
                          <circle cx="10" cy="12" r="0.5" fill="currentColor" className="group-hover:animate-ping" style={{ animationDelay: '0.4s' }} />
                          <circle cx="14" cy="12" r="0.5" fill="currentColor" className="group-hover:animate-ping" style={{ animationDelay: '0.6s' }} />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-purple-200 transition-colors duration-300">App Mobile</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">iOS e Android native, controllo remoto macchinari</p>
                      </div>
                    </div>

                    {/* Consulenza Tecnica - Wisdom Tree */}
                    <div className="group cursor-pointer p-4 rounded-2xl hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-yellow-300/20">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-700 group-hover:scale-110 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-yellow-300/60 group-hover:bg-white/15 relative overflow-hidden">
                        {/* Wisdom particles */}
                        <div className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity duration-500">
                          <div className="absolute top-2 left-2 w-1.5 h-1.5 border border-yellow-300 rounded-full group-hover:animate-spin" style={{ animationDuration: '4s' }}></div>
                          <div className="absolute top-3 right-2 w-1 h-1 bg-yellow-300 rounded-full group-hover:animate-bounce"></div>
                          <div className="absolute bottom-3 left-3 w-1 h-1 bg-yellow-400 rounded-full group-hover:animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                          <div className="absolute bottom-2 right-1 w-1.5 h-1.5 border border-yellow-400 rounded-full group-hover:animate-pulse"></div>
                        </div>
                        <svg className="w-8 h-8 text-white transition-all duration-500 group-hover:text-yellow-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" className="group-hover:animate-pulse" />
                          <circle cx="12" cy="12" r="1" fill="currentColor" className="group-hover:animate-ping" />
                        </svg>
                      </div>
                      <div className="text-center group-hover:translate-y-2 transition-transform duration-500">
                        <h4 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors duration-300">Consulenza Tecnica</h4>
                        <p className="text-neutral-200 text-xs leading-relaxed group-hover:text-white transition-colors duration-300">Analisi architetturali, team augmentation, mentoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 