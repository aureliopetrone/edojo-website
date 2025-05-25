"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  size: number;
  opacity: number;
  color: string;
  originalX: number;
  originalY: number;
}

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const codeSymbols = ['{', '}', '<', '>', '(', ')', '[', ']', ';', '=', '+', '-', '*', '/', '&', '|', '!', '?'];
  const colors = ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444', '#6366f1'];

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)] || '{',
      size: Math.random() * 20 + 16,
      opacity: Math.random() * 0.6 + 0.4,
      color: colors[Math.floor(Math.random() * colors.length)] || '#10b981',
      originalX: 0,
      originalY: 0,
    };
  }, [codeSymbols, colors]);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { width, height } = canvas;
    const particleCount = Math.min(Math.floor((width * height) / 6000), 60);
    
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const particle = createParticle(width, height);
      particle.originalX = particle.x;
      particle.originalY = particle.y;
      return particle;
    });
    
    console.log('Particles initialized:', particlesRef.current.length);
  }, [createParticle]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    console.log('Canvas resized:', rect.width, 'x', rect.height);
    initParticles();
  }, [initParticles]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { width, height } = canvas;
    const mouse = mouseRef.current;

    particlesRef.current.forEach(particle => {
      // Calcola distanza dal mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Effetto repulsione dal mouse
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.02;
        particle.vy -= (dy / distance) * force * 0.02;
        particle.opacity = Math.min(0.8, particle.opacity + force * 0.01);
      } else {
        particle.opacity = Math.max(0.1, particle.opacity - 0.01);
      }

      // Ritorno verso posizione originale
      const returnForceX = (particle.originalX - particle.x) * 0.01;
      const returnForceY = (particle.originalY - particle.y) * 0.01;
      
      particle.vx += returnForceX;
      particle.vy += returnForceY;

      // Attrito
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Aggiorna posizione
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Mantieni le particelle nei bordi
      if (particle.x < 0 || particle.x > width / window.devicePixelRatio) {
        particle.vx *= -0.5;
      }
      if (particle.y < 0 || particle.y > height / window.devicePixelRatio) {
        particle.vy *= -0.5;
      }
    });
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.font = `${particle.size}px Monaco, 'Cascadia Code', 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Aggiungi un leggero glow
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;
      
      ctx.fillText(particle.symbol, particle.x, particle.y);
      ctx.restore();
    });
  }, []);

  const animate = useCallback(() => {
    updateParticles();
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Inizia l'animazione
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
} 