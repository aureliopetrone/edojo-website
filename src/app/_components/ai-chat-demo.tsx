"use client";

import { useState, useEffect } from "react";

interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  content: string;
  delay: number;
  typing?: boolean;
  position?: { x: number; y: number; rotation?: number };
}

const demoMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'user',
    content: 'Come automatizzare il customer service?',
    delay: 1000,
    position: { x: 85, y: 12, rotation: -2 }
  },
  {
    id: 2,
    type: 'ai',
    content: 'Chatbot intelligente con NLP avanzato per gestire il 90% delle richieste.',
    delay: 2800,
    typing: true,
    position: { x: 8, y: 18, rotation: 1 }
  },
  {
    id: 3,
    type: 'user',
    content: 'E per i dati di vendita?',
    delay: 5500,
    position: { x: 88, y: 35, rotation: 3 }
  },
  {
    id: 4,
    type: 'ai',
    content: 'Sistema predittivo per trend e ottimizzazione ricavi.',
    delay: 7200,
    typing: true,
    position: { x: 5, y: 42, rotation: -1 }
  },
  {
    id: 5,
    type: 'user',
    content: 'Quanto tempo serve?',
    delay: 9500,
    position: { x: 90, y: 58, rotation: -3 }
  },
  {
    id: 6,
    type: 'ai',
    content: 'MVP in 2-4 settimane!',
    delay: 11000,
    typing: true,
    position: { x: 8, y: 65, rotation: 2 }
  }
];

export default function AiChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < demoMessages.length) {
        const currentMessage = demoMessages[currentIndex]!;
        
        if (currentMessage.type === 'ai' && currentMessage.typing) {
          setIsTyping(true);
          
          // Show typing indicator first, then message
          setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(prev => [...prev, currentMessage]);
            setCurrentIndex(prev => prev + 1);
          }, 1500);
        } else {
          setVisibleMessages(prev => [...prev, currentMessage]);
          setCurrentIndex(prev => prev + 1);
        }
      } else {
        // Reset animation after all messages
        setTimeout(() => {
          setVisibleMessages([]);
          setCurrentIndex(0);
          setIsTyping(false);
        }, 4000);
      }
    }, currentIndex === 0 ? 2000 : demoMessages[currentIndex - 1]?.delay ?? 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Neural Network Lines with Curves */}
        <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Curved connecting paths */}
          {Array.from({length: 4}).map((_, i) => (
            <path
              key={i}
              d={`M${100 + i * 200} ${300 + (i % 2) * 100} Q${200 + i * 200} ${250 + (i % 2) * 200} ${300 + i * 200} ${350 + ((i + 1) % 2) * 100}`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              fill="none"
              filter="url(#glow)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: '6s'
              }}
            />
          ))}
          
          {/* Floating Neural nodes with glow */}
          {Array.from({length: 8}).map((_, i) => (
            <circle
              key={i}
              cx={150 + (i % 4) * 200}
              cy={250 + Math.floor(i / 4) * 150}
              r={3 + (i % 2)}
              fill="url(#neuralGradient)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </svg>
        
        {/* Simplified code elements */}
        <div className="absolute inset-0">
          {[
            { code: 'ai.process()', x: 12, y: 25 },
            { code: 'nlp.analyze()', x: 78, y: 45 },
            { code: 'ml.predict()', x: 15, y: 70 },
            { code: 'api.respond()', x: 85, y: 25 }
          ].map((item, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-purple-300/20 select-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `rotate(${(i % 3 - 1) * 3}deg)`,
                animation: `codeFloat ${6 + (i * 0.5)}s ease-in-out infinite ${i * 2}s`
              }}
            >
              {item.code}
            </div>
          ))}
        </div>
      </div>

      {/* Creatively Positioned Chat Bubbles - More contained */}
      <div className="relative w-full h-full">
        {/* Enhanced Typing indicator */}
        {isTyping && (
          <div 
            className="absolute transition-all duration-500 transform hidden lg:block"
            style={{
              left: '12%',
              top: '45%',
              transform: 'translate(-50%, -50%) scale(0.9)'
            }}
          >
            <div className="bg-gradient-to-r from-white/90 to-blue-50/90 backdrop-blur-sm rounded-xl rounded-bl-sm p-3 shadow-lg border border-blue-200/50 max-w-xs">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-neutral-700 font-medium">AI elabora...</span>
              </div>
            </div>
          </div>
        )}

        {visibleMessages.map((message, index) => (
          <div
            key={message.id}
            className="absolute transition-all duration-1000 ease-out hidden lg:block"
            style={{
              left: `${message.position?.x ?? (message.type === 'user' ? 85 : 8)}%`,
              top: `${message.position?.y ?? (15 + index * 10)}%`,
              transform: `translateX(-50%) rotate(${message.position?.rotation ?? 0}deg)`,
              animation: `chatBubbleFloat 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.4}s both`
            }}
          >
            {/* Compact Chat Bubble */}
            <div className={`relative p-3 rounded-xl shadow-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:rotate-0 ${
              message.type === 'user'
                ? 'bg-gradient-to-br from-purple-500/85 via-purple-600/85 to-blue-600/85 text-white border-purple-400/40 rounded-br-sm max-w-48'
                : 'bg-gradient-to-br from-white/85 to-blue-50/85 text-neutral-800 border-blue-200/50 rounded-bl-sm shadow-blue-200/20 max-w-52'
            }`}>
              
              {/* Compact Message Content */}
              <div className="text-xs font-medium leading-snug">
                <TypewriterText text={message.content} speed={message.type === 'ai' ? 25 : 40} />
              </div>
              
              {/* Compact Avatar */}
              <div className={`absolute ${
                message.type === 'user' ? '-right-2 -bottom-2' : '-left-2 -bottom-2'
              } w-6 h-6 rounded-full flex items-center justify-center shadow-md border border-white ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-700'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-500'
              }`}>
                {message.type === 'user' ? (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                )}
              </div>

              {/* Compact Effects */}
              {message.type === 'ai' && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Simplified Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({length: 6}).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                width: `${4 + (i % 2) * 2}px`,
                height: `${4 + (i % 2) * 2}px`,
                background: `linear-gradient(${45 + i * 60}deg, ${
                  i % 3 === 0 ? '#a855f7, #3b82f6' : 
                  i % 3 === 1 ? '#3b82f6, #06b6d4' : 
                  '#06b6d4, #a855f7'
                })`,
                animation: `particleFloat ${4 + (i * 0.3)}s ease-in-out infinite ${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Simplified CSS animations */}
      <style jsx>{`
        @keyframes chatBubbleFloat {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1) rotate(${Math.random() * 4 - 2}deg);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px) scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes codeFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

// Typewriter effect component
function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-3 bg-current animate-pulse ml-0.5">|</span>
      )}
    </span>
  );
} 