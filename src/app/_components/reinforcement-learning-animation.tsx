"use client";

import { useState, useEffect } from "react";

export default function ReinforcementLearningAnimation() {
  const [angle, setAngle] = useState(0);
  const [circleX, setCircleX] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => {
        const newAngle = prev + 2; // Velocità di rotazione
        
        // Calcola la posizione del cerchio per mantenere l'equilibrio
        const targetX = Math.sin(newAngle * Math.PI / 180) * 30; // Ampiezza movimento cerchio
        setCircleX(targetX);
        
        return newAngle % 360;
      });
    }, 50); // 20 FPS

    // Attiva l'animazione dopo un delay
    const timer = setTimeout(() => setIsActive(true), 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      {/* Container dell&apos;animazione */}
      <div className="relative w-80 h-64">
        {/* Superficie di base */}
        <div className="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        
        {/* Cerchio che si muove */}
        <div 
          className={`absolute w-12 h-12 transition-all duration-75 ease-out ${isActive ? '' : 'opacity-50'}`}
          style={{
            bottom: '24px',
            left: '50%',
            transform: `translateX(calc(-50% + ${circleX}px))`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          
          {/* Bacchetta/Pendolo */}
          <div
            className="absolute w-1 bg-gradient-to-b from-neutral-600 to-neutral-800 origin-bottom shadow-lg"
            style={{
              height: '80px',
              left: '50%',
              bottom: '100%',
              transform: `translateX(-50%) rotate(${angle}deg)`,
              transition: 'transform 0.05s ease-out'
            }}
          >
            {/* Peso alla fine della bacchetta */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-md border border-white"></div>
          </div>
        </div>

        {/* Effetti particelle di equilibrio */}
        {isActive && (
          <>
            {Array.from({length: 6}).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"
                style={{
                  left: `${45 + Math.random() * 10}%`,
                  bottom: `${20 + Math.random() * 20}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </>
        )}

        {/* Traccia del movimento (opzionale) */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-8 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Indicatori di performance */}
      <div className="absolute top-4 right-4 text-xs font-mono text-neutral-500 space-y-1">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Balance: {Math.abs(angle % 90 - 45) < 15 ? 'STABLE' : 'LEARNING'}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span>Angle: {Math.round(angle % 360)}°</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span>Reward: +{Math.max(0, Math.round((90 - Math.abs(angle % 90 - 45)) * 0.1))}</span>
        </div>
      </div>

      {/* Formula matematica in background */}
      <div className="absolute bottom-2 left-2 text-xs font-mono text-neutral-300/50 select-none">
        Q(s,a) = Q(s,a) + α[r + γ max Q(s&apos;,a&apos;) - Q(s,a)]
      </div>
    </div>
  );
} 