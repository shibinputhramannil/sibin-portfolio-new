'use client';

import * as React from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    // This button unmounts near the top, so hand focus to the start of the page.
    document.getElementById('main-content')?.focus({ preventScroll: true });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top of page"
      className="pointer-events-auto inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-line bg-background/90 text-text shadow-lg backdrop-blur-md transition-[color,border-color,transform] duration-200 hover:border-line-strong hover:text-heading motion-safe:hover:-translate-y-0.5"
    >
      <ArrowUp className="size-4" aria-hidden="true" />
    </button>
  );
}
