
import React from 'react';

interface ComicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'white' | 'ink';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ComicButton: React.FC<ComicButtonProps> = ({ 
  children, 
  variant = 'accent', 
  size = 'md',
  className = "",
  ...props 
}) => {
  const variants = {
    primary: 'bg-primary text-ink',
    accent: 'bg-accent text-ink',
    white: 'bg-white text-ink',
    ink: 'bg-ink text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-lg',
    md: 'px-6 py-3 text-xl',
    lg: 'px-8 py-4 text-2xl',
    xl: 'px-10 py-5 text-3xl',
  };

  return (
    <button 
      className={`font-comic border-4 border-ink tracking-wide comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-95 transition-all ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
