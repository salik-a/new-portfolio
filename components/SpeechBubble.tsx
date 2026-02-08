
import React from 'react';

interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
  tailDirection?: 'bottom' | 'top';
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ 
  children, 
  className = "", 
  tailDirection = 'bottom' 
}) => {
  return (
    <div className={`relative bg-white border-[3px] border-ink p-4 rounded-3xl font-hand font-bold text-lg text-center comic-shadow-sm ${className}`}>
      {children}
      <div 
        className={`absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent 
          ${tailDirection === 'bottom' ? 'border-t-[15px] border-t-ink -bottom-[18px]' : 'border-b-[15px] border-b-ink -top-[18px]'} 
          left-1/2 -translate-x-1/2`} 
      />
      <div 
        className={`absolute w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent 
          ${tailDirection === 'bottom' ? 'border-t-[12px] border-t-white -bottom-[11px]' : 'border-b-[12px] border-b-white -top-[11px]'} 
          left-1/2 -translate-x-1/2`} 
      />
    </div>
  );
};
