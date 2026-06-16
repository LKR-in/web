'use client';

import type { HTMLAttributes } from 'react';
import React from 'react';

interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function GradientButton({
  children,
  width = 'auto', 
  height = '48px', 
  className = '',
  onClick,
  disabled = false,
  ...props
}: GradientButtonProps) {
  const commonGradientStyles = `
    relative rounded-full cursor-pointer overflow-hidden bg-zinc-300 dark:bg-zinc-800
    before:content-[""] before:absolute before:inset-[-100%] 
    before:bg-[conic-gradient(from_0deg,transparent_0_280deg,black_320deg,transparent_360deg)]
    dark:before:bg-[conic-gradient(from_0deg,transparent_0_280deg,white_320deg,transparent_360deg)]
    before:animate-[spin_3s_linear_infinite]
    after:content-[""] after:block after:absolute after:bg-white dark:after:bg-[#1a1b1e]
    after:inset-[1.5px] after:rounded-full after:z-[1]
    after:transition-colors after:duration-300 after:ease-linear
    flex items-center justify-center shadow-md
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={`
        ${commonGradientStyles}
        hover:scale-105 active:scale-100 transition-transform duration-300
        ${className}
      `}
      style={{
        minWidth: width,
        height: height
      } as React.CSSProperties}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      <span className="relative z-10 dark:text-sky-100 text-slate-800 font-medium px-8 flex items-center justify-center transition-colors duration-300">
        {children}
      </span>
    </div>
  );
}
