
import React from 'react';

interface StickmanProps {
  type: 'desk' | 'thinking' | 'signaling';
  className?: string;
}

export const Stickman: React.FC<StickmanProps> = ({ type, className = "" }) => {
  const strokeColor = "#000000";
  const strokeWidth = 3.5;

  if (type === 'desk') {
    return (
      <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 300 H350" stroke={strokeColor} strokeWidth="5" strokeLinecap="round" />
        <path d="M80 300 V380" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <path d="M320 300 V380" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <circle cx="180" cy="180" r="28" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M180 208 V280" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M180 280 L140 330" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M180 280 L220 330" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M180 230 L130 260" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M180 230 L230 260" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M110 260 L140 210 H220 L250 260 Z" stroke={strokeColor} strokeWidth="4" fill="white" />
        <rect x="135" y="220" width="90" height="20" fill="#30e8c9" fillOpacity="0.4" />
        <rect x="300" y="80" width="40" height="70" rx="4" stroke={strokeColor} strokeWidth={strokeWidth} />
        <rect x="305" y="85" width="30" height="50" fill="#ffdb58" />
      </svg>
    );
  }

  if (type === 'thinking') {
    return (
      <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="80" r="30" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M150 110 V180" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M150 180 L130 250" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M150 180 L170 250" stroke={strokeColor} strokeWidth={strokeWidth} />
        <path d="M150 130 L180 150 L160 90" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
        <text x="210" y="60" fontSize="60" fontFamily="Bangers" fill="#ffdb58">?</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="60" r="25" stroke={strokeColor} strokeWidth={strokeWidth} />
      <path d="M100 85 V150" stroke={strokeColor} strokeWidth={strokeWidth} />
      <path d="M100 150 L80 190" stroke={strokeColor} strokeWidth={strokeWidth} />
      <path d="M100 150 L120 190" stroke={strokeColor} strokeWidth={strokeWidth} />
      <path d="M100 100 L70 130" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M100 100 L130 80 L150 50" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M140 40 Q150 30 160 40" stroke={strokeColor} strokeWidth="2" />
      <path d="M155 45 Q165 35 175 45" stroke={strokeColor} strokeWidth="2" />
    </svg>
  );
};
