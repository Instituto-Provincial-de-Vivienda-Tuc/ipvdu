'use client';

import React from 'react';

interface ScrollIndicatorProps {
  targetId: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ targetId }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="animate-bounce flex flex-col items-center cursor-pointer" 
      onClick={() => scrollToSection(targetId)}
    >
      <p className="text-gray-600 mb-2 font-medium">Desliza para ver más</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#FFB81A]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
};