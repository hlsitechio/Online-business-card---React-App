import React, { useState, useEffect } from 'react';

interface GlitchingTypingTextProps {
  text: string;
  typingSpeed?: number;
  glitchProbability?: number;
}

const GlitchingTypingText: React.FC<GlitchingTypingTextProps> = ({
  text,
  typingSpeed = 50,
  glitchProbability = 0.1,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  const glitchText = (textToGlitch: string) => {
    return textToGlitch
      .split('')
      .map(char => Math.random() < glitchProbability ? possibleChars[Math.floor(Math.random() * possibleChars.length)] : char)
      .join('');
  };

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => {
          const newChar = text[currentIndex];
          const glitchedText = glitchText(prevText + newChar);
          return glitchedText.slice(0, currentIndex + 1);
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed + Math.random() * 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, glitchProbability]);

  return (
    <div className="font-mono text-xs sm:text-sm md:text-base text-gray-200 bg-gray-800 p-2 rounded-lg shadow-inner h-full overflow-hidden">
      <pre className="whitespace-pre-wrap break-words">
        <span className="glitching-animation">{displayText}</span>
      </pre>
    </div>
  );
};

export default GlitchingTypingText;