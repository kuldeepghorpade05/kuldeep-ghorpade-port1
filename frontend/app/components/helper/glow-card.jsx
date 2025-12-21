"use client"

import { useEffect } from 'react';

const GlowCard = ({ children, identifier }) => {
  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#333333] transition-all duration-300 relative bg-[#242424] text-gray-200 rounded-xl w-full shadow-lg`}>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
