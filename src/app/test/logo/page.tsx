'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function LogoTestPage() {
  const [selectedSize, setSelectedSize] = useState(512);
  const [selectedFormat, setSelectedFormat] = useState('png');
  const [selectedBackground, setSelectedBackground] = useState('transparent');

  // SVG del logo incorporato direttamente
  const edojoLogoSVG = `<svg width="2048" height="2048" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e60012">
        <animate attributeName="stop-color" 
                 values="#e60012;#8b5cf6;#e60012" 
                 dur="4s" 
                 repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#8b5cf6">
        <animate attributeName="stop-color" 
                 values="#8b5cf6;#e60012;#8b5cf6" 
                 dur="4s" 
                 repeatCount="indefinite"/>
      </stop>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="1" dy="2" stdDeviation="2" flood-opacity="0.15"/>
    </filter>
  </defs>
  <g transform="translate(60, 60)">
    <rect x="-28" y="-28" width="24" height="24" rx="2" 
          fill="url(#brandGradient)" filter="url(#softShadow)"/>
    <circle cx="16" cy="-16" r="12" 
            fill="url(#brandGradient)" filter="url(#softShadow)"/>
    <polygon points="-28,4 -4,4 -16,28" 
             fill="url(#brandGradient)" filter="url(#softShadow)"/>
    <circle cx="16" cy="16" r="12" 
            fill="url(#brandGradient)" filter="url(#softShadow)"/>
    <g>
      <path fill="#ffffff" opacity="0.8">
        <animate attributeName="d" 
                 values="M-3,0 C-3,-1.7 -1.7,-3 0,-3 C1.7,-3 3,-1.7 3,0 C3,1.7 1.7,3 0,3 C-1.7,3 -3,1.7 -3,0 Z;M-3.5,0.2 C-3.8,-1.4 -1.8,-3.4 0.2,-3.6 C2.1,-3.2 3.4,-1.3 3.1,0.4 C3.2,2.0 1.5,3.6 -0.2,3.4 C-2.0,3.1 -3.4,1.5 -3.5,0.2 Z;M-2.8,-0.4 C-3.4,-2.0 -1.4,-3.8 0.4,-3.4 C2.0,-2.9 3.8,-1.5 3.4,0.2 C3.1,2.2 1.3,3.4 -0.4,3.1 C-2.2,2.9 -3.1,1.3 -2.8,-0.4 Z;M-3.4,0.4 C-3.2,-1.6 -1.3,-3.6 0.4,-3.2 C1.6,-3.1 3.6,-1.8 3.2,0.1 C3.4,1.8 1.6,3.4 0.1,3.6 C-1.8,3.2 -3.6,1.6 -3.4,0.4 Z;M-3.1,0.1 C-3.6,-1.8 -1.6,-3.2 0.1,-3.4 C1.8,-3.6 3.2,-1.6 3.4,0.2 C3.2,2.0 1.8,3.2 0.2,3.1 C-1.6,3.4 -2.9,1.8 -3.1,0.1 Z;M-2.5,0.3 C-2.9,-1.9 -1.1,-3.5 0.3,-3.1 C1.9,-2.8 3.5,-1.2 3.1,0.4 C2.8,2.1 1.2,3.5 -0.4,3.1 C-2.1,2.8 -2.8,1.2 -2.5,0.3 Z;M-3,0 C-3,-1.7 -1.7,-3 0,-3 C1.7,-3 3,-1.7 3,0 C3,1.7 1.7,3 0,3 C-1.7,3 -3,1.7 -3,0 Z"
                 dur="2.2s" 
                 repeatCount="indefinite"/>
      </path>
      <path fill="#000000" opacity="0.2" transform="translate(0.8,0.8)">
        <animate attributeName="d" 
                 values="M-3,0 C-3,-1.7 -1.7,-3 0,-3 C1.7,-3 3,-1.7 3,0 C3,1.7 1.7,3 0,3 C-1.7,3 -3,1.7 -3,0 Z;M-3.5,0.2 C-3.8,-1.4 -1.8,-3.4 0.2,-3.6 C2.1,-3.2 3.4,-1.3 3.1,0.4 C3.2,2.0 1.5,3.6 -0.2,3.4 C-2.0,3.1 -3.4,1.5 -3.5,0.2 Z;M-2.8,-0.4 C-3.4,-2.0 -1.4,-3.8 0.4,-3.4 C2.0,-2.9 3.8,-1.5 3.4,0.2 C3.1,2.2 1.3,3.4 -0.4,3.1 C-2.2,2.9 -3.1,1.3 -2.8,-0.4 Z;M-3.4,0.4 C-3.2,-1.6 -1.3,-3.6 0.4,-3.2 C1.6,-3.1 3.6,-1.8 3.2,0.1 C3.4,1.8 1.6,3.4 0.1,3.6 C-1.8,3.2 -3.6,1.6 -3.4,0.4 Z;M-3.1,0.1 C-3.6,-1.8 -1.6,-3.2 0.1,-3.4 C1.8,-3.6 3.2,-1.6 3.4,0.2 C3.2,2.0 1.8,3.2 0.2,3.1 C-1.6,3.4 -2.9,1.8 -3.1,0.1 Z;M-2.5,0.3 C-2.9,-1.9 -1.1,-3.5 0.3,-3.1 C1.9,-2.8 3.5,-1.2 3.1,0.4 C2.8,2.1 1.2,3.5 -0.4,3.1 C-2.1,2.8 -2.8,1.2 -2.5,0.3 Z;M-3,0 C-3,-1.7 -1.7,-3 0,-3 C1.7,-3 3,-1.7 3,0 C3,1.7 1.7,3 0,3 C-1.7,3 -3,1.7 -3,0 Z"
                 dur="2.2s" 
                 repeatCount="indefinite"/>
      </path>
    </g>
  </g>
</svg>`;

  const downloadLogo = () => {
    try {
      // Crea un elemento SVG temporaneo
      const svgElement = document.createElement('div');
      svgElement.innerHTML = edojoLogoSVG;
      const svg = svgElement.querySelector('svg') as SVGElement;
      
      // Imposta le dimensioni
      svg.setAttribute('width', selectedSize.toString());
      svg.setAttribute('height', selectedSize.toString());
      
      // Converti SVG in Data URL
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
      const svgUrl = URL.createObjectURL(svgBlob);
      
      // Crea canvas per la conversione
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        alert('Errore: impossibile creare il canvas');
        return;
      }
      
      canvas.width = selectedSize;
      canvas.height = selectedSize;
      
      // Carica l'SVG in un'immagine
      const img = document.createElement('img');
      img.onload = function() {
        // Applica lo sfondo selezionato
        if (selectedBackground === 'white' || (selectedFormat === 'ico' && selectedBackground === 'transparent')) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, selectedSize, selectedSize);
        } else if (selectedBackground === 'black') {
          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, selectedSize, selectedSize);
        }
        // Per 'transparent', non aggiungiamo alcuno sfondo
        
        ctx.drawImage(img, 0, 0, selectedSize, selectedSize);
        
        const backgroundSuffix = selectedBackground !== 'transparent' ? `-${selectedBackground}` : '';
        
        if (selectedFormat === 'ico') {
          // Per ICO, crea un file speciale
          canvas.toBlob(function(blob) {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `edojo-favicon-${selectedSize}x${selectedSize}${backgroundSuffix}.ico`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }
            URL.revokeObjectURL(svgUrl);
          }, 'image/png'); // ICO viene salvato come PNG con estensione ICO
        } else {
          // Converti in PNG e scarica
          canvas.toBlob(function(blob) {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `edojo-logo-${selectedSize}x${selectedSize}${backgroundSuffix}.${selectedFormat}`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }
            URL.revokeObjectURL(svgUrl);
          }, `image/${selectedFormat}`);
        }
      };
      
      img.onerror = function() {
        console.error('Errore nel caricamento dell\'SVG');
        alert('Errore nel caricamento del logo. Riprova più tardi.');
        URL.revokeObjectURL(svgUrl);
      };
      
      img.src = svgUrl;
    } catch (error) {
      console.error('Errore nella conversione:', error);
      alert('Errore nella conversione del logo. Riprova più tardi.');
    }
  };

  const downloadLogoSVG = () => {
    try {
      const blob = new Blob([edojoLogoSVG], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'edojo-logo.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Errore nel download dell\'SVG:', error);
      alert('Errore nel download del logo. Riprova più tardi.');
    }
  };

  const downloadFaviconPack = async () => {
    const sizes = [16, 32, 180, 192, 512];
    const promises = sizes.map(size => {
      return new Promise<{ size: number, blob: Blob }>((resolve, reject) => {
        try {
          const svgElement = document.createElement('div');
          svgElement.innerHTML = edojoLogoSVG;
          const svg = svgElement.querySelector('svg') as SVGElement;
          
          svg.setAttribute('width', size.toString());
          svg.setAttribute('height', size.toString());
          
          const svgData = new XMLSerializer().serializeToString(svg);
          const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
          const svgUrl = URL.createObjectURL(svgBlob);
          
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Cannot create canvas'));
            return;
          }
          
          canvas.width = size;
          canvas.height = size;
          
          const img = document.createElement('img');
          img.onload = function() {
            // Applica lo sfondo selezionato
            if (selectedBackground === 'white' || selectedBackground === 'transparent') {
              ctx.fillStyle = 'white';
              ctx.fillRect(0, 0, size, size);
            } else if (selectedBackground === 'black') {
              ctx.fillStyle = 'black';
              ctx.fillRect(0, 0, size, size);
            }
            ctx.drawImage(img, 0, 0, size, size);
            
            canvas.toBlob(function(blob) {
              if (blob) {
                resolve({ size, blob });
              } else {
                reject(new Error('Failed to create blob'));
              }
              URL.revokeObjectURL(svgUrl);
            }, 'image/png');
          };
          
          img.onerror = () => {
            reject(new Error('Failed to load image'));
            URL.revokeObjectURL(svgUrl);
          };
          
          img.src = svgUrl;
        } catch (error) {
          reject(new Error(String(error)));
        }
      });
    });

    try {
      const results = await Promise.all(promises);
      const backgroundSuffix = selectedBackground !== 'transparent' ? `-${selectedBackground}` : '';
      
      // Scarica ogni file individualmente
      results.forEach(({ size, blob }) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `favicon-${size}x${size}${backgroundSuffix}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);
      });
      
             alert(`✅ Scaricati ${results.length} file favicon (16x16, 32x32, 180x180, 192x192, 512x512)`);
    } catch (error) {
      console.error('Errore nel download del pacchetto favicon:', error);
      alert('Errore nel download del pacchetto favicon. Riprova più tardi.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-red-600 to-purple-500 bg-clip-text text-transparent">
          🎨 Logo Test Preview
        </h1>
        
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-12">
          <h4 className="text-purple-400 font-semibold mb-2">✨ Animazione Gradiente</h4>
          <p className="text-gray-300 text-sm">
            Il gradiente è animato come sul sito web, con transizione fluida tra rosso (#e60012) e viola (#8b5cf6) ogni 4 secondi. 
            Il triangolo è ora orientato correttamente per evitare l&apos;effetto &quot;V&quot;.
          </p>
        </div>

                 {/* Grid di test dimensioni */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {[
             { size: 64, label: 'Small - 64px', desc: 'Icona navbar, favicon' },
             { size: 120, label: 'Medium - 120px', desc: 'Card, componenti' },
             { size: 200, label: 'Large - 200px', desc: 'Header, hero section' },
             { size: 300, label: 'Extra Large - 300px', desc: 'Landing page, stampa' }
           ].map(({ size, label, desc }) => (
             <div key={size} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
               <h3 className="font-semibold mb-4">{label}</h3>
               <div className="flex justify-center items-center min-h-[200px] mb-4">
                 <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
                   <Image 
                     src="/images/logos/edojo-logo.svg" 
                     alt="Edojo Logo" 
                     fill
                     className="object-contain"
                   />
                 </div>
               </div>
               <div className="text-sm text-gray-400">{desc}</div>
             </div>
           ))}
         </div>

                 {/* Test su sfondi diversi */}
         <div className="mb-16">
           <h2 className="text-3xl font-bold text-center mb-8">Test su Sfondi Diversi</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { bg: 'bg-black', name: 'Nero' },
               { bg: 'bg-white', name: 'Bianco' },
               { bg: 'bg-gradient-to-br from-blue-500 to-purple-600', name: 'Gradiente' },
               { bg: 'bg-gradient-to-br from-red-600 to-purple-500', name: 'Brand' }
             ].map(({ bg, name }) => (
               <div key={name} className={`${bg} rounded-xl p-8 flex justify-center items-center min-h-[150px]`}>
                 <div className="relative w-32 h-32">
                   <Image 
                     src="/images/logos/edojo-logo.svg" 
                     alt="Edojo Logo" 
                     fill
                     className="object-contain"
                   />
                 </div>
               </div>
             ))}
           </div>
         </div>

        {/* Esempi di utilizzo */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Esempi di Utilizzo</h2>
          
                     {/* Navbar example */}
           <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 flex items-center gap-4 mb-8">
             <div className="relative w-10 h-10">
               <Image 
                 src="/images/logos/edojo-logo.svg" 
                 alt="Edojo Logo" 
                 fill
                 className="object-contain"
               />
             </div>
             <div className="text-xl font-semibold">edojo</div>
             <div className="ml-auto flex gap-8">
               <span>Home</span>
               <span>Servizi</span>
               <span>Chi Siamo</span>
               <span>Contatti</span>
             </div>
           </div>

                     {/* Hero example */}
           <div className="mb-8">
             <div className="relative w-40 h-40 mx-auto mb-6">
               <Image 
                 src="/images/logos/edojo-logo.svg" 
                 alt="Edojo Logo" 
                 fill
                 className="object-contain"
               />
             </div>
             <h2 className="text-4xl font-black mb-4">edojo</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               Il logo si integra perfettamente con il design del sito, mantenendo la coerenza visiva e l&apos;identità brand.
             </p>
           </div>
        </div>

                 {/* Sezione Download */}
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center mb-16">
           <h3 className="text-2xl font-bold mb-4">📥 Scarica il Logo</h3>
           <p className="text-gray-300 mb-8">Scarica il logo Edojo in diversi formati e dimensioni</p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             <div>
               <label htmlFor="logoSize" className="block text-white mb-2">Dimensioni:</label>
               <select 
                 id="logoSize"
                 value={selectedSize}
                 onChange={(e) => setSelectedSize(parseInt(e.target.value))}
                 className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-md"
               >
                 <option value={16}>16x16px (Favicon piccola)</option>
                 <option value={32}>32x32px (Favicon standard)</option>
                 <option value={180}>180x180px (Apple Touch Icon)</option>
                 <option value={192}>192x192px (App mobile)</option>
                 <option value={256}>256x256px (Icona grande)</option>
                 <option value={512}>512x512px (Standard)</option>
                 <option value={1024}>1024x1024px (Alta qualità)</option>
                 <option value={2048}>2048x2048px (Stampa)</option>
               </select>
             </div>
             
             <div>
               <label htmlFor="logoFormat" className="block text-white mb-2">Formato:</label>
               <select 
                 id="logoFormat"
                 value={selectedFormat}
                 onChange={(e) => setSelectedFormat(e.target.value)}
                 className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-md"
               >
                 <option value="png">PNG</option>
                 <option value="ico">ICO (Favicon)</option>
               </select>
             </div>

             <div>
               <label htmlFor="logoBackground" className="block text-white mb-2">Sfondo:</label>
               <select 
                 id="logoBackground"
                 value={selectedBackground}
                 onChange={(e) => setSelectedBackground(e.target.value)}
                 className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-md"
               >
                 <option value="transparent">🔳 Trasparente</option>
                 <option value="white">⬜ Bianco</option>
                 <option value="black">⬛ Nero</option>
               </select>
             </div>
           </div>
           
           <div className="flex flex-wrap justify-center gap-4">
             <button 
               onClick={downloadLogo}
               className="bg-gradient-to-r from-red-600 to-purple-500 hover:from-red-700 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
             >
               {selectedFormat === 'ico' ? '🔷' : '🎨'} Scarica {selectedFormat.toUpperCase()}
               {selectedBackground !== 'transparent' && (
                 <span className="text-xs ml-1">({selectedBackground})</span>
               )}
             </button>
             <button 
               onClick={downloadLogoSVG}
               className="bg-gradient-to-r from-red-600 to-purple-500 hover:from-red-700 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
             >
               📁 Scarica SVG
             </button>
             <button 
               onClick={downloadFaviconPack}
               className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
             >
               📦 Pacchetto Favicon
             </button>
           </div>
           
           <div className="mt-6 text-sm text-gray-400 space-y-2">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
               <div>
                 <p><strong>🎨 PNG:</strong> Formato versatile per web e app</p>
               </div>
               <div>
                 <p><strong>🔷 ICO:</strong> Formato favicon ottimizzato</p>
               </div>
               <div>
                 <p><strong>🔳 Trasparente:</strong> Perfetto per sovrapposizioni</p>
               </div>
               <div>
                 <p><strong>⬜⬛ Sfondi:</strong> Bianco/nero per contrasto</p>
               </div>
             </div>
             <div className="mt-4 text-center">
               <p><strong>📦 Pacchetto Favicon:</strong> Tutte le dimensioni (16, 32, 180, 192, 512px) con sfondo selezionato</p>
             </div>
           </div>
         </div>

        {/* Specifiche Tecniche */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Specifiche Tecniche</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div><strong>Formato:</strong> SVG vettoriale</div>
            <div><strong>Dimensioni:</strong> 2048x2048px</div>
            <div><strong>Gradiente:</strong> #e60012 → #8b5cf6</div>
            <div><strong>Animazione:</strong> 4s loop infinito</div>
            <div><strong>Elementi:</strong> 4 forme geometriche</div>
            <div><strong>Compatibilità:</strong> Tutti i browser moderni</div>
          </div>
        </div>
      </div>
    </div>
  );
} 