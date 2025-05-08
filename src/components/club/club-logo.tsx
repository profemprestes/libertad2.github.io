import React from 'react';

interface ClubLogoProps {
  className?: string;
}

export function ClubLogo({ className }: ClubLogoProps) {
  return (
    <img src="/Logo.svg" alt="Logo del Club Atlético Libertad" className={className}/>
  );
}
