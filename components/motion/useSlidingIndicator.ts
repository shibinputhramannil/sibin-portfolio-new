'use client';

import * as React from 'react';

/**
 * Positions an absolutely placed indicator over the selected [role=tab] inside
 * `containerRef`, animating only transform. Styles are written directly to the
 * DOM, so selection changes cause no extra React renders.
 *
 * - `mode: 'underline'` places a 2px bar under the tab, scaling a 100px-wide
 *   element horizontally so its gradient scales with it.
 * - `mode: 'frame'` sizes the indicator to the tab and only translates it.
 *
 * The container gets data-indicator-ready once measured; until then (or
 * without JavaScript) the tabs' own static selected styles remain visible.
 *
 * Measured in useEffect (after paint), not useLayoutEffect: reading offsets
 * forces layout, and doing that before the first paint delays it.
 */
export function useSlidingIndicator(
  containerRef: React.RefObject<HTMLElement | null>,
  indicatorRef: React.RefObject<HTMLElement | null>,
  selectedKey: string,
  mode: 'underline' | 'frame'
) {
  React.useEffect(() => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const place = () => {
      const tab = container.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]');
      if (!tab) return;
      const x = tab.offsetLeft;
      if (mode === 'underline') {
        const y = tab.offsetTop + tab.offsetHeight - 2;
        indicator.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${tab.offsetWidth / 100})`;
      } else {
        indicator.style.width = `${tab.offsetWidth}px`;
        indicator.style.height = `${tab.offsetHeight}px`;
        indicator.style.transform = `translate3d(${x}px, ${tab.offsetTop}px, 0)`;
      }
      if (!container.hasAttribute('data-indicator-ready') && !frame) {
        // Enable the transition one frame after the first position has been
        // rendered, so the indicator never slides in from the corner on load
        // (and without forcing a synchronous reflow to commit it).
        frame = requestAnimationFrame(() => container.setAttribute('data-indicator-ready', ''));
      }
    };

    // No measuring here: the ResizeObserver's initial notification (and later
    // ones on resize) runs after layout, so reading offsets forces no extra
    // layout during hydration. Late web-font loads can shift tabs too.
    let frame = 0;
    const resizeObserver = new ResizeObserver(place);
    resizeObserver.observe(container);
    document.fonts?.addEventListener('loadingdone', place);
    return () => {
      resizeObserver.disconnect();
      document.fonts?.removeEventListener('loadingdone', place);
      cancelAnimationFrame(frame);
    };
  }, [containerRef, indicatorRef, selectedKey, mode]);
}
