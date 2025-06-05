"use client";

import { useState, useEffect } from "react";

export default function ReinforcementLearningAnimation() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [learningPhase, setLearningPhase] = useState(0); // 0=chaotic, 1=learning, 2=balanced
  const [episode, setEpisode] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        const newTime = prev + 0.1;
        
        // Cambia fase di apprendimento ogni 8 secondi
        const currentPhase = Math.floor(newTime / 8) % 3;
        setLearningPhase(currentPhase);
        
        // Incrementa episodio ogni volta che ricomincia il ciclo
        if (Math.floor(newTime / 24) !== Math.floor(prev / 24)) {
          setEpisode(prevEpisode => prevEpisode + 1);
        }
        
        return newTime;
      });
    }, 50); // 20 FPS

    // Attiva l'animazione dopo un delay
    const timer = setTimeout(() => setIsActive(true), 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Calcola angolo e posizione carrello basato sulla fase di apprendimento
  const getAngle = () => {
    switch(learningPhase) {
      case 0: // Fase caotica - pendolo cade spesso, movimenti erratici per ripristinarlo
        return Math.sin(time * 2.5) * 45 + Math.sin(time * 6) * 25 + Math.sin(time * 1.5) * 15;
      case 1: // Fase di apprendimento - oscillazioni attorno alla verticale che si riducono
        const progress = (time % 8) / 8;
        const damping = Math.max(0.2, 1 - progress * 0.8); // riduce oscillazioni più velocemente
        return Math.sin(time * 3) * 20 * damping + Math.sin(time * 7) * 8 * damping;
      case 2: // Fase equilibrata - piccole oscillazioni attorno alla posizione verticale (0°)
        return Math.sin(time * 2) * 2 + Math.sin(time * 5) * 1; // micro-oscillazioni di 1-2 gradi
      default:
        return 0;
    }
  };

  const getCartPosition = () => {
    switch(learningPhase) {
      case 0: // Movimenti casuali del carrello per cercare di recuperare l'equilibrio
        return Math.sin(time * 3) * 25 + Math.sin(time * 8) * 15;
      case 1: // Carrello che impara a controbilanciare le oscillazioni
        const progress = (time % 8) / 8;
        const response = Math.max(0.3, 1 - progress * 0.7);
        return Math.sin(time * 2.8) * 18 * response + Math.sin(time * 6) * 8 * response;
      case 2: // Carrello stabile con piccoli aggiustamenti per mantenere equilibrio
        return Math.sin(time * 2.2) * 4 + Math.sin(time * 4.5) * 2; // micro-aggiustamenti
      default:
        return 0;
    }
  };

  const angle = getAngle();
  const cartPosition = getCartPosition();
  const isStable = learningPhase === 2 && Math.abs(angle) < 3;
  const isLearning = learningPhase === 1;
  // Reward più alto quando il pendolo è vicino alla posizione verticale (0°)
  const reward = Math.max(0, 100 - Math.abs(angle) * 3);

  const getStatusText = () => {
    switch(learningPhase) {
      case 0: return 'EXPLORING';
      case 1: return 'LEARNING';
      case 2: return 'BALANCED';
      default: return 'STARTING';
    }
  };

  const getStatusColor = () => {
    switch(learningPhase) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-yellow-500';
      case 2: return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Container dell'animazione */}
      <div className="relative w-80 h-64">
        {/* Traccia del carrello */}
        <div className="absolute bottom-8 left-4 right-4 h-2 bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-600 rounded-full shadow-inner"></div>
        
        {/* Carrello/Cerchio che si muove - PIVOT POINT */}
        <div 
          className={`absolute w-12 h-12 transition-all duration-100 ease-out ${isActive ? '' : 'opacity-50'}`}
          style={{
            bottom: '24px',
            left: '50%',
            transform: `translateX(calc(-50% + ${cartPosition}px))`,
          }}
        >
          <div className={`w-full h-full rounded-full shadow-xl border-2 border-white flex items-center justify-center transition-colors duration-1000 ${
            isStable ? 'bg-gradient-to-br from-green-400 to-emerald-600' : 
            isLearning ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
            'bg-gradient-to-br from-red-400 to-red-600'
          }`}>
            <div className={`w-3 h-3 bg-white rounded-full ${isStable ? 'animate-pulse' : 'animate-bounce'}`}></div>
          </div>
          
          {/* Bacchetta/Pendolo - INVERTITO: punta verso l'alto */}
          <div
            className={`absolute w-1 shadow-lg transition-colors duration-1000 ${
              isStable ? 'bg-gradient-to-t from-green-600 to-green-800' :
              isLearning ? 'bg-gradient-to-t from-yellow-600 to-orange-800' :
              'bg-gradient-to-t from-red-600 to-red-800'
            }`}
            style={{
              height: '80px',
              left: '50%',
              bottom: '50%',
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${angle}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Peso alla fine della bacchetta (in alto) */}
            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-md border border-white transition-colors duration-1000 ${
              isStable ? 'bg-gradient-to-br from-green-500 to-green-700' :
              isLearning ? 'bg-gradient-to-br from-yellow-500 to-orange-600' :
              'bg-gradient-to-br from-red-500 to-red-600'
            }`}></div>
          </div>
          
          {/* Punto di pivot al centro del cerchio */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-800 rounded-full shadow-lg z-10"></div>
          
          {/* Indicatore forza applicata - animazione visiva */}
          {learningPhase < 2 && (
            <div 
              className={`absolute top-1/2 h-1 rounded-full opacity-60 transition-all duration-200 ${
                isLearning ? 'bg-yellow-400' : 'bg-red-400'
              }`}
              style={{
                left: Math.sin(time * 4) > 0 ? '100%' : '-2rem',
                transform: 'translateY(-50%)',
                width: `${Math.abs(Math.sin(time * 4)) * 20 + 10}px`
              }}
            ></div>
          )}
        </div>

        {/* Effetti particelle di equilibrio */}
        {isActive && isStable && (
          <>
            {Array.from({length: 6}).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60"
                style={{
                  left: `${46 + Math.random() * 8}%`,
                  bottom: `${28 + Math.random() * 12}px`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </>
        )}

        {/* Effetti di apprendimento - onde */}
        {isActive && isLearning && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 border-2 border-yellow-400 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute top-4 left-4 w-24 h-24 border-2 border-orange-400 rounded-full opacity-30 animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
        )}

        {/* Linea di riferimento verticale per equilibrio */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className={`w-1 h-20 transition-colors duration-1000 ${
            isStable ? 'bg-green-400' : isLearning ? 'bg-yellow-400' : 'bg-red-400'
          } opacity-50 rounded-full`}></div>
          <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-mono ${
            isStable ? 'text-green-400' : isLearning ? 'text-yellow-400' : 'text-red-400'
          } opacity-60`}>
            ↑ TARGET
          </div>
        </div>
      </div>

      {/* Indicatori di performance AI */}
      <div className="absolute top-4 right-4 text-xs font-mono text-neutral-500 space-y-1">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${getStatusColor()}`}></div>
          <span>Status: {getStatusText()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>Angle: {Math.round(angle)}°</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span>Reward: {Math.round(reward)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span>Episode: {episode}</span>
        </div>
      </div>

      {/* Progress bar dell'apprendimento */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-xs font-mono text-neutral-400 mb-1">Learning Progress</div>
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ${
              isStable ? 'bg-gradient-to-r from-green-400 to-emerald-500' :
              isLearning ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
              'bg-gradient-to-r from-red-400 to-red-500'
            }`}
            style={{
              width: `${learningPhase === 0 ? 15 : learningPhase === 1 ? 60 : 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* Formula matematica in background */}
      <div className="absolute bottom-2 left-2 text-xs font-mono text-neutral-300/50 select-none">
        Q(s,a) ← Q(s,a) + α[r + γ max Q(s&apos;,a&apos;) - Q(s,a)]
      </div>
    </div>
  );
} 