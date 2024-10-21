import React from 'react';

const AnimatedBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 animate-gradient-x"></div>
    <div className="absolute inset-0 opacity-30">
      <div className="absolute h-56 w-56 rounded-full bg-purple-300 -top-10 -left-10 filter blur-xl animate-blob"></div>
      <div className="absolute h-56 w-56 rounded-full bg-pink-300 -bottom-10 -right-10 filter blur-xl animate-blob animation-delay-2000"></div>
    </div>
  </div>
);

export default AnimatedBackground;