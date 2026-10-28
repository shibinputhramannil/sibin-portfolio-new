'use client';

import * as React from 'react';

/**
 * Progressive scroll reveals and off-screen pausing, with one observer each.
 *
 * Content is never hidden by default: CSS only hides [data-reveal] elements
 * once this component sets html[data-motion="ready"]. Before doing so it marks
 * everything already in view as revealed, so nothing visible flickers. If
 * IntersectionObserver is missing or throws, the attribute is never set (or is
 * removed) and every element simply stays visible. Each element reveals once.
 *
 * Elements marked [data-ambient] get data-paused while off-screen, which
 * pauses their decorative CSS animations.
 */
export function RevealController() {
  React.useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return;

    const reveal = (el: Element) => el.setAttribute('data-revealed', '');
    let revealObserver: IntersectionObserver | undefined;
    let ambientObserver: IntersectionObserver | undefined;
    let safetyTimer: number | undefined;

    try {
      const targets = Array.from(document.querySelectorAll('[data-reveal]:not([data-revealed])'));
      let gatingEnabled = false;

      // The root extends (effectively) infinitely upward, so "intersecting"
      // means "at or above 92% of the viewport height". Content reveals as it
      // scrolls into view, and anything skipped by an instant jump (anchor link,
      // End key, scroll restoration) is revealed rather than left hidden above.
      //
      // No positions are read here: the observer's first notification (computed
      // by the browser after layout, so it forces no extra layout) classifies
      // every target. Gating is switched on only after that batch, so content
      // in view or already scrolled past is never hidden, even for a frame.
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          }
          if (!gatingEnabled) {
            gatingEnabled = true;
            root.dataset.motion = 'ready';
          }
        },
        { rootMargin: '1000000px 0px -8% 0px' }
      );
      targets.forEach((el) => revealObserver?.observe(el));

      // Belt and braces: anything in view or above it that has not revealed
      // shortly after load (e.g. a missed observer callback) is shown.
      safetyTimer = window.setTimeout(() => {
        const pending = Array.from(document.querySelectorAll('[data-reveal]:not([data-revealed])'));
        const pendingTops = pending.map((el) => el.getBoundingClientRect().top);
        pending.forEach((el, i) => {
          if (pendingTops[i] < window.innerHeight) reveal(el);
        });
      }, 3000);

      ambientObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute('data-paused', !entry.isIntersecting);
        }
      });
      document.querySelectorAll('[data-ambient]').forEach((el) => ambientObserver?.observe(el));
    } catch {
      delete root.dataset.motion;
      document.querySelectorAll('[data-reveal]').forEach(reveal);
    }

    // Keyboard focus landing inside unrevealed content shows it at once, so a
    // focused link is never transparent or mid-fade.
    const handleFocusIn = (event: FocusEvent) => {
      const block = (event.target as Element | null)?.closest?.('[data-reveal]:not([data-revealed])');
      if (block) {
        block.setAttribute('data-reveal-instant', '');
        reveal(block);
        revealObserver?.unobserve(block);
      }
    };
    document.addEventListener('focusin', handleFocusIn);

    // If the visitor switches on reduced motion mid-visit, show everything.
    const handleReduce = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.querySelectorAll('[data-reveal]').forEach(reveal);
        delete root.dataset.motion;
      }
    };
    reduceMotion.addEventListener('change', handleReduce);

    return () => {
      revealObserver?.disconnect();
      ambientObserver?.disconnect();
      window.clearTimeout(safetyTimer);
      document.removeEventListener('focusin', handleFocusIn);
      reduceMotion.removeEventListener('change', handleReduce);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
