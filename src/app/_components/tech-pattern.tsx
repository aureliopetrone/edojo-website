"use client";

interface TechPatternProps {
  className?: string;
  variant?: 'dots' | 'grid' | 'circuit';
  opacity?: number;
}

export default function TechPattern({ 
  className = "", 
  variant = 'dots',
  opacity = 0.1 
}: TechPatternProps) {
  
  if (variant === 'dots') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
    );
  }
  
  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    );
  }
  
  if (variant === 'circuit') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="90" cy="10" r="2" fill="currentColor" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="10" cy="90" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
              <path d="M 10 10 L 50 50 M 90 10 L 50 50 M 10 90 L 50 50 M 90 90 L 50 50" 
                    stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
    );
  }
  
  return null;
} 