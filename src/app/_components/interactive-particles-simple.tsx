"use client";

import { useEffect, useRef, useMemo } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  size: number;
  opacity: number;
  color: string;
}

export default function InteractiveParticlesSimple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const codeSymbols = useMemo(() => ['{', '}', '<', '>', '(', ')', '[', ']', ';', '=', '+', '-', '*', '/', '&', '|'], []);
  const colors = useMemo(() => ['#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444', '#6366f1'], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Initialize particles
      const particleCount = 40;
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)] ?? '{',
        size: Math.random() * 16 + 12,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)] ?? '#10b981',
      }));
      
      console.log(`Canvas initialized: ${canvas.width}x${canvas.height}, ${particleCount} particles`);
    };

    // Mouse move handler - ora ascolta dal window
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Solo se il mouse è dentro l'area del canvas
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y };
        console.log('Mouse in canvas:', x, y);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Add small random movement to keep particles alive
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;
        
        // Update position with basic movement
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Mouse interaction - STRONGER repulsion
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200;
          const repulsionStrength = 8; // Increased force
          
          // Apply repulsion force
          particle.vx -= (dx / distance) * force * repulsionStrength;
          particle.vy -= (dy / distance) * force * repulsionStrength;
          
          // Increase opacity when near mouse
          particle.opacity = Math.min(1, particle.opacity + force * 0.3);
        } else {
          // Return to normal opacity
          particle.opacity = Math.max(0.3, particle.opacity - 0.01);
        }

        // Apply lighter friction to keep movement going
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Limit max velocity
        const maxVel = 10;
        if (Math.abs(particle.vx) > maxVel) particle.vx = Math.sign(particle.vx) * maxVel;
        if (Math.abs(particle.vy) > maxVel) particle.vy = Math.sign(particle.vy) * maxVel;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.font = `${particle.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add shadow for better visibility
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 5;
        
        ctx.fillText(particle.symbol, particle.x, particle.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [codeSymbols, colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
} 