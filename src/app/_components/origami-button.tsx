import React from 'react';
import Link from 'next/link';
import { cn } from '~/lib/utils';

interface OrigamiButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'brand' | 'tech' | 'dark' | 'brand-bold' | 'purple-red' | 'red-purple';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const OrigamiButton: React.FC<OrigamiButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'brand',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  external = false,
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-500 group";
  
  const variantClasses = {
    brand: "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800",
    'brand-bold': "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800",
    'purple-red': "bg-gradient-to-r from-secondary-600 to-primary-600 text-white hover:from-secondary-700 hover:to-primary-700",
    'red-purple': "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700",
    tech: "bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800",
    dark: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700"
  };
  
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-3.5 text-lg gap-3",
    xl: "px-10 py-4 text-xl gap-3"
  };

  const clipPathStyle = {
    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
  };



  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
    className
  );

  const buttonContent = (
    <>
      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
      {/* Subtle hover effect line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          style={clipPathStyle}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link
        href={href}
        className={combinedClasses}
        style={clipPathStyle}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      style={clipPathStyle}
    >
      {buttonContent}
    </button>
  );
};

export default OrigamiButton; 