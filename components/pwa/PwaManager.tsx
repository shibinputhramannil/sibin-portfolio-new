'use client';

import * as React from 'react';
import { Download, Wifi, WifiOff } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

function subscribeOnline(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

function getServerOnlineSnapshot() {
  return true;
}

export function PwaManager() {
  const isOnline = React.useSyncExternalStore(
    subscribeOnline,
    getOnlineSnapshot,
    getServerOnlineSnapshot
  );
  const [installPrompt, setInstallPrompt] = React.useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // 1. Register Service Worker (after load, or immediately if load already fired)
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker registered with scope:', registration.scope);
          })
          .catch((err) => {
            console.warn('[PWA] Service Worker registration failed:', err);
          });
      };

      if ('serviceWorker' in navigator) {
        if (document.readyState === 'complete') {
          registerServiceWorker();
        } else {
          window.addEventListener('load', registerServiceWorker, { once: true });
        }
      }

      // 2. Listen for BeforeInstallPromptEvent
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setInstallPrompt(e as BeforeInstallPromptEvent);
      };

      const handleAppInstalled = () => {
        setIsInstalled(true);
        setInstallPrompt(null);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);

      return () => {
        window.removeEventListener('load', registerServiceWorker);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  return (
    <div className="pointer-events-auto flex select-none items-center gap-2">
      {/* Optional Install Portfolio Button (only shown when supported and available) */}
      {installPrompt && !isInstalled && (
        <button
          type="button"
          onClick={handleInstallClick}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-heading px-3 py-1.5 text-xs font-semibold text-background shadow-lg transition-[opacity,transform] duration-200 hover:opacity-90 motion-safe:active:scale-95"
          title="Install Portfolio as a progressive web application"
          aria-label="Install Portfolio application"
        >
          <Download className="size-3.5" aria-hidden="true" />
          <span>Install App</span>
        </button>
      )}

      {/* Subtle Online / Offline Status Badge (text collapses to an icon on small screens) */}
      <div
        role="status"
        aria-live="polite"
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium shadow-md backdrop-blur-md transition-colors ${
          isOnline
            ? 'border-line bg-background/80 text-text'
            : 'border-amber-300 bg-amber-100/90 text-amber-900 dark:border-amber-700 dark:bg-amber-950/90 dark:text-amber-300'
        }`}
        title={
          isOnline
            ? 'Connected: Online'
            : 'Offline: Browsing cached portfolio and assets'
        }
      >
        {isOnline ? (
          <>
            <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
            <Wifi className="size-3 text-emerald-500" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Online</span>
          </>
        ) : (
          <>
            <span aria-hidden="true" className="size-2 animate-pulse rounded-full bg-amber-500" />
            <WifiOff className="size-3 text-amber-500" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Offline</span>
          </>
        )}
      </div>
    </div>
  );
}
