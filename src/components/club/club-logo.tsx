import type { SVGProps } from 'react';

export function ClubLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Club Atlético Libertad Logo"
      {...props}
    >
      <defs>
        <clipPath id="shieldClip">
          <path d="M50 5 C 15 15, 10 50, 50 95 C 90 50, 85 15, 50 5 Z" />
        </clipPath>
      </defs>
      
      {/* Shield Shape with Border */}
      <path d="M50 5 C 15 15, 10 50, 50 95 C 90 50, 85 15, 50 5 Z" fill="hsl(var(--card-foreground))" stroke="hsl(var(--accent))" strokeWidth="3" />

      {/* Striped Background (Clipped) */}
      <g clipPath="url(#shieldClip)">
        {/* Red Stripes */}
        <rect x="0" y="0" width="20" height="100" fill="hsl(var(--primary))" />
        <rect x="40" y="0" width="20" height="100" fill="hsl(var(--primary))" />
        <rect x="80" y="0" width="20" height="100" fill="hsl(var(--primary))" />
        {/* White Stripes */}
        <rect x="20" y="0" width="20" height="100" fill="hsl(var(--primary-foreground))" />
        <rect x="60" y="0" width="20" height="100" fill="hsl(var(--primary-foreground))" />
      </g>

      {/* Text "CAL" */}
      <text
        x="50"
        y="58" // Adjusted for better centering
        fontFamily="var(--font-geist-sans), Arial, sans-serif" // Using Geist Sans from CSS variables
        fontSize="40"
        fontWeight="bold"
        fill="hsl(var(--accent))"
        stroke="hsl(var(--card-foreground))" // Dark outline for better readability on stripes
        strokeWidth="1.5"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        CAL
      </text>
      
      {/* Reinforce shield outline on top of stripes */}
       <path d="M50 5 C 15 15, 10 50, 50 95 C 90 50, 85 15, 50 5 Z" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" />
    </svg>
  );
}
