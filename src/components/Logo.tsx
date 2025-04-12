
import React from 'react';

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const Logo = ({ size = "medium", className = "" }: LogoProps) => {
  const sizeClasses = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/pack-pal-logo.png" 
        alt="Pack-Pal Logo" 
        className={`${sizeClasses[size]}`} 
      />
      <span className="sr-only">Pack-Pal</span>
    </div>
  );
};

export default Logo;
