import * as React from 'react';
import { cn } from '@/lib/utils';

interface DecorProps {
  className?: string;
}

/** Concentric arcs with an accent-gradient stroke. Purely decorative. */
export function OrbitDecor({ className }: DecorProps) {
  const gradientId = React.useId();

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none select-none', className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-from)" />
          <stop offset="1" stopColor="var(--accent-to)" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="64" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M100 8a92 92 0 0 1 92 92" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M36 100a64 64 0 0 1 64-64" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
      <circle cx="192" cy="100" r="4" fill="var(--accent-to)" />
      <circle cx="100" cy="36" r="3" fill="var(--accent-from)" />
    </svg>
  );
}

/** Small plus-mark grid used as a quiet texture behind headings. */
export function GridMarksDecor({ className }: DecorProps) {
  const marks: Array<[number, number]> = [];
  for (let x = 10; x <= 110; x += 25) {
    for (let y = 10; y <= 60; y += 25) marks.push([x, y]);
  }

  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('pointer-events-none select-none', className)}
    >
      {marks.map(([x, y]) => (
        <path
          key={`${x}-${y}`}
          d={`M${x - 3} ${y}h6M${x} ${y - 3}v6`}
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
