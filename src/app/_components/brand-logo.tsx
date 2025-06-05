"use client";

import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12", 
  lg: "w-16 h-16",
  xl: "w-24 h-24"
};

export default function BrandLogo({ size = "md", className = "" }: BrandLogoProps) {
  return (
    <div className={`${sizeMap[size]} ${className}`}>
      <Image
        src="/images/logos/edojo-logo.svg"
        alt="Edojo Logo"
        width={96}
        height={96}
        className="w-full h-full"
        priority
      />
    </div>
  );
} 