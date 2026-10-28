import * as React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

/*
 * ILLUSTRATIVE PLACEHOLDER ARTWORK — NOT A SCREENSHOT.
 * Until a real capture is added via `project.image`, each project gets abstract,
 * deterministic generated art (gradient, geometric pattern and monogram). It
 * intentionally avoids imitating application UI so it cannot be mistaken for
 * a screenshot. To use a real screenshot, set `image` on the project in
 * data/projects.ts (e.g. '/images/projects/icorp-erp.webp').
 */

const PALETTES: Array<[string, string]> = [
  ['#4f46e5', '#22d3ee'],
  ['#7c3aed', '#6366f1'],
  ['#0891b2', '#10b981'],
  ['#4338ca', '#0ea5e9'],
  ['#6366f1', '#a855f7'],
  ['#0e7490', '#6366f1'],
  ['#1d4ed8', '#22d3ee']
];

function monogram(title: string) {
  return title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

function Pattern({ variant }: { variant: number }) {
  switch (variant % 3) {
    case 0:
      return (
        <g stroke="white" strokeOpacity="0.18">
          {Array.from({ length: 9 }, (_, i) => (
            <path key={i} d={`M${i * 40} 0v250`} />
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <path key={`h${i}`} d={`M0 ${i * 40}h400`} />
          ))}
        </g>
      );
    case 1:
      return (
        <g stroke="white" strokeOpacity="0.2" fill="none">
          {Array.from({ length: 6 }, (_, i) => (
            <circle key={i} cx="330" cy="40" r={30 + i * 34} />
          ))}
        </g>
      );
    default:
      return (
        <g fill="white" fillOpacity="0.12">
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x={20 + i * 46} y={250 - (40 + ((i * 37) % 120))} width="26" height={40 + ((i * 37) % 120)} rx="4" />
          ))}
        </g>
      );
  }
}

interface ProjectThumbnailProps {
  project: Project;
  index: number;
  /** `sm` is decorative (used inside labelled picker tabs); `lg` is announced. */
  size?: 'sm' | 'lg';
  className?: string;
}

export function ProjectThumbnail({ project, index, size = 'lg', className }: ProjectThumbnailProps) {
  const decorative = size === 'sm';

  if (project.image) {
    return (
      <div className={cn('relative overflow-hidden', className)}>
        <Image
          src={project.image}
          alt={decorative ? '' : `Screenshot of ${project.title}`}
          fill
          sizes={decorative ? '140px' : '(min-width: 768px) 480px, 100vw'}
          className="object-cover object-top"
        />
      </div>
    );
  }

  const [from, to] = PALETTES[index % PALETTES.length];
  const gradientId = `thumb-${project.id}-${size}`;

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      data-placeholder="true"
      {...(decorative
        ? { 'aria-hidden': true }
        : { role: 'img', 'aria-label': `Illustrative placeholder artwork for ${project.title}; not a screenshot` })}
    >
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="400" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#${gradientId})`} />
        <Pattern variant={index} />
      </svg>
      <span
        className={cn(
          'absolute inset-0 items-center justify-center font-serif italic text-white/90 [text-shadow:0_2px_12px_rgb(0_0_0/0.25)]',
          // Small picker thumbnails are too short for both the monogram and the number badge on mobile.
          decorative ? 'hidden text-xl md:flex' : 'flex text-6xl md:text-7xl'
        )}
      >
        {monogram(project.title)}
      </span>
    </div>
  );
}
