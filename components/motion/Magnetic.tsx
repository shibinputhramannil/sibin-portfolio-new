'use client';

import * as React from 'react';

const MAX_SHIFT = 4; // px

/**
 * Optional, subtle pointer attraction for a single call-to-action. Active only
 * with a fine pointer that can hover and when motion is allowed; on touch
 * screens and with reduced motion it renders a plain wrapper.
 */
export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const capable = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!capable.matches) return;

    let frame = 0;
    const handleMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${dx * MAX_SHIFT}px, ${dy * MAX_SHIFT}px, 0)`;
      });
    };
    const handleLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    };

    el.addEventListener('pointermove', handleMove);
    el.addEventListener('pointerleave', handleLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <span ref={ref} className="inline-flex transition-transform duration-(--duration-slow) ease-soft">
      {children}
    </span>
  );
}
