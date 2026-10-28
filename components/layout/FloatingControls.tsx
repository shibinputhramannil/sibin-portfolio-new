import * as React from 'react';
import { BackToTop } from '@/components/ui/BackToTop';
import { PwaManager } from '@/components/pwa/PwaManager';

/**
 * One fixed, stacked dock for every floating control so they can never
 * overlap each other. Offsets respect device safe areas.
 */
export function FloatingControls() {
  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex flex-col items-end gap-2 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))]">
      <BackToTop />
      <PwaManager />
    </div>
  );
}
