import React from 'react';

interface FlipEffectProps {
  isFlipped: boolean;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipEffect: React.FC<FlipEffectProps> = ({ isFlipped, frontContent, backContent }) => (
  <div className="perspective">
    <div className={`relative w-full h-72 transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
      <div className="absolute inset-0 w-full h-full backface-hidden">
        {frontContent}
      </div>
      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
        {backContent}
      </div>
    </div>
  </div>
);

export default FlipEffect;