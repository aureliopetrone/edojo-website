import type { Metadata } from 'next';
import AccelerationBackground from '../_components/acceleration-background';
import SvgBackgroundExporter from '../_components/svg-background-exporter';

export const metadata: Metadata = {
  title: "Copertine Social - edojo",
  description: "Copertine personalizzate per Facebook e LinkedIn di edojo",
  robots: "noindex, nofollow"
};

export default function CopertineFb() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Container principale per la copertina Facebook */}
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Copertine Social - edojo
        </h1>
        
        {/* Area per la copertina Facebook */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <h2 className="text-xl font-semibold p-4 bg-blue-600 text-white">
            📘 Copertina Facebook
          </h2>
          {/* Dimensioni Facebook Cover: 820x461 px */}
          <div 
            className="relative w-full bg-black overflow-hidden"
            style={{ aspectRatio: '820/461' }}
          >
            {/* Acceleration Background Effect */}
            <AccelerationBackground />
            
            {/* Clean contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 pointer-events-none" />
            
            {/* Contenuto della copertina con proporzioni originali dell'hero */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
              <div className="text-center text-white px-4">
                {/* Main Title con proporzioni originali dell'hero */}
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-4">
                    <span className="block text-white">
                      AIUTIAMO I
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 sm:mt-2">
                      <span className="text-gradient-red-purple animate-gradient-shift">GIGANTI</span>
                    </span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-2 sm:mt-3">
                      A CORRERE VELOCI
                    </span>
                  </h1>
                  
                  {/* Bold accent element con proporzioni originali */}
                  <div className="mt-4 sm:mt-6 relative flex justify-center gap-2 sm:gap-3">
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-subtle-shift"></div>
                  </div>
                </div>
                
                {/* Subtitle con proporzioni originali */}
                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
                  Acceleriamo la trasformazione digitale costruendo applicazioni web,<br/>automazioni intelligenti e soluzioni AI personalizzate.
                </p>
              </div>
            </div>
          </div>
          {/* Informazioni dimensioni Facebook */}
          <div className="p-4 bg-gray-50 text-center text-gray-600">
            <p>Dimensioni copertina Facebook: 820x461 pixel</p>
            <p>Rapporto d'aspetto: 1.78:1</p>
          </div>
        </div>

        {/* Area per la copertina LinkedIn */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <h2 className="text-xl font-semibold p-4 bg-blue-700 text-white">
            💼 Copertina LinkedIn
          </h2>
          {/* Dimensioni LinkedIn Cover: 1584x396 px */}
          <div 
            className="relative w-full bg-black overflow-hidden"
            style={{ aspectRatio: '1584/396' }}
          >
            {/* Acceleration Background Effect */}
            <AccelerationBackground />
            
            {/* Clean contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50 pointer-events-none" />
            
            {/* Contenuto della copertina ottimizzato per LinkedIn (più orizzontale) */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
              <div className="text-center text-white px-4">
                {/* Main Title ottimizzato per LinkedIn (più compatto) */}
                <div className="mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[0.9] mb-2">
                    <span className="block text-white">
                      AIUTIAMO I
                    </span>
                    <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1">
                      <span className="text-gradient-red-purple animate-gradient-shift">GIGANTI</span>
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-1">
                      A CORRERE VELOCI
                    </span>
                  </h1>
                  
                  {/* Bold accent element più piccolo per LinkedIn */}
                  <div className="mt-2 sm:mt-3 relative flex justify-center gap-2">
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full animate-subtle-shift"></div>
                  </div>
                </div>
                
                {/* Subtitle ottimizzato per LinkedIn */}
                <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                  Acceleriamo la trasformazione digitale costruendo applicazioni web,<br/>automazioni intelligenti e soluzioni AI personalizzate.
                </p>
              </div>
            </div>
          </div>

          {/* Informazioni dimensioni LinkedIn */}
          <div className="p-4 bg-gray-50 text-center text-gray-600">
            <p>Dimensioni copertina LinkedIn: 1584x396 pixel</p>
            <p>Rapporto d'aspetto: 4:1</p>
          </div>
        </div>

        {/* Area per il Background Box 1000x600 con SVG Canvas */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold p-4 bg-purple-600 text-white">
            🎨 Background Box (SVG Canvas)
          </h2>
          {/* Dimensioni Background Box: 1000x600 px */}
          <div 
            className="relative w-full bg-black overflow-hidden"
            style={{ aspectRatio: '1000/600' }}
          >
            {/* SVG Canvas per renderizzare l'HTML */}
            <svg 
              id="background-svg"
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 600"
              className="absolute inset-0"
              style={{ zIndex: 1 }}
            >
              {/* Background gradient */}
              <defs>
                <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="rgba(76, 76, 76, 0.2)" />
                  <stop offset="30%" stopColor="rgba(40, 40, 40, 0.4)" />
                  <stop offset="70%" stopColor="rgba(20, 20, 20, 0.6)" />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0.95)" />
                </radialGradient>
                
                {/* Brand geometric gradients */}
                <linearGradient id="brandGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(230, 0, 18, 0.8)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.6)" />
                </linearGradient>
                
                <linearGradient id="brandGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
                  <stop offset="100%" stopColor="rgba(230, 0, 18, 0.6)" />
                </linearGradient>
              </defs>
              
              {/* Background */}
              <rect width="1000" height="600" fill="url(#bgGradient)" />
              
                            {/* Brand Geometric Background Effect - SVG version */}
              <g opacity="0.8">
                {/* Geometric shapes simulating BrandGeometricBackground */}
                <g opacity="0.15">
                  {/* Triangles */}
                  <polygon points="150,100 120,150 180,150" fill="url(#brandGradient1)" transform="rotate(15 150 125)" />
                  <polygon points="800,200 770,250 830,250" fill="url(#brandGradient2)" transform="rotate(-30 800 225)" />
                  <polygon points="300,400 270,450 330,450" fill="url(#brandGradient1)" transform="rotate(45 300 425)" />
                  <polygon points="700,500 670,550 730,550" fill="url(#brandGradient2)" transform="rotate(-15 700 525)" />
                  
                  {/* Squares */}
                  <rect x="200" y="150" width="40" height="40" fill="url(#brandGradient2)" transform="rotate(30 220 170)" />
                  <rect x="600" y="300" width="35" height="35" fill="url(#brandGradient1)" transform="rotate(-45 617 317)" />
                  <rect x="100" y="350" width="30" height="30" fill="url(#brandGradient2)" transform="rotate(60 115 365)" />
                  <rect x="850" y="100" width="45" height="45" fill="url(#brandGradient1)" transform="rotate(-20 872 122)" />
                  
                  {/* Circles */}
                  <circle cx="400" cy="120" r="25" fill="url(#brandGradient1)" />
                  <circle cx="750" cy="350" r="30" fill="url(#brandGradient2)" />
                  <circle cx="150" cy="500" r="20" fill="url(#brandGradient1)" />
                  <circle cx="900" cy="450" r="35" fill="url(#brandGradient2)" />
                </g>
                
                {/* Additional floating geometric elements */}
                <g opacity="0.1">
                  {/* Small floating shapes */}
                  <circle cx="250" cy="80" r="15" fill="#e60012" />
                  <rect x="500" y="50" width="20" height="20" fill="#8b5cf6" transform="rotate(45 510 60)" />
                  <polygon points="650,80 635,100 665,100" fill="#e60012" />
                  <circle cx="80" cy="200" r="12" fill="#8b5cf6" />
                  <rect x="920" y="250" width="18" height="18" fill="#e60012" transform="rotate(30 929 259)" />
                  <polygon points="350,550 335,570 365,570" fill="#8b5cf6" />
                  <circle cx="550" cy="580" r="10" fill="#e60012" />
                  <rect x="750" y="50" width="15" height="15" fill="#8b5cf6" transform="rotate(60 757 57)" />
                </g>
              </g>
            </svg>
          </div>

          {/* Informazioni dimensioni Background Box */}
          <div className="p-4 bg-gray-50 text-center text-gray-600">
            <p>Dimensioni background box: 1000x600 pixel</p>
            <p>Rapporto d'aspetto: 5:3 - Renderizzato con SVG Canvas</p>
          </div>

          {/* Export Controls */}
          <SvgBackgroundExporter />
        </div>
      </div>
    </div>
  );
} 