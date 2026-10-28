'use client';

import * as React from 'react';
import Image from 'next/image';
import { OrbitDecor } from '@/components/ui/Decor';
import { site } from '@/lib/site';

export function HeroVisual() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="relative w-56 justify-self-start sm:w-64 lg:justify-self-end">
      {/* Entrance fade on the wrapper; slow rotation (ambient, paused off-screen) on the SVG. */}
      <div className="hero-in absolute -right-12 -top-12" style={{ '--i': 5 } as React.CSSProperties}>
        <OrbitDecor className="ambient-orbit size-48 text-muted sm:size-56" />
      </div>
      <div className="hero-portrait relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20">
        {!imageError ? (
          // Likely LCP on desktop. Next 16 deprecates `priority`; the docs
          // recommend loading="eager" with fetchPriority="high" instead.
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 640px) 256px, 224px"
            className="object-cover object-top"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center p-6 text-center">
            <div className="mb-3 flex size-16 items-center justify-center rounded-2xl bg-accent-gradient text-2xl font-bold text-white">
              {site.initials}
            </div>
            <div className="font-semibold text-heading">{site.wordmark}</div>
            <div className="mt-1 font-mono text-xs text-muted">{site.role}</div>
          </div>
        )}
      </div>
    </div>
  );
}
