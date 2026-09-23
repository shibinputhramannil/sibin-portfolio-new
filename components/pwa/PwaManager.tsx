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
      // 1. Register Service Worker
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
              console.log('[PWA] Service Worker registered with scope:', registration.scope);
            })
            .catch((err) => {
              console.warn('[PWA] Service Worker registration failed:', err);
            });
        });
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
    <div
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 pointer-events-auto select-none"
      role="status"
      aria-live="polite"
    >
      {/* Optional Install Portfolio Button (only shown when supported and available) */}
      {installPrompt && !isInstalled && (
        <button
          type="button"
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Install Portfolio as a progressive web application"
          aria-label="Install Portfolio application"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App</span>
        </button>
      )}

      {/* Subtle Online / Offline Status Badge */}
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-full shadow-md backdrop-blur-md border transition-all ${
          isOnline
            ? 'bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800'
            : 'bg-amber-100/90 dark:bg-amber-950/90 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-700'
        }`}
        title={
          isOnline
            ? 'Connected: Online'
            : 'Offline: Browsing cached portfolio and assets'
        }
      >
        {isOnline ? (
          <>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <Wifi className="w-3 h-3 text-emerald-500" />
            <span>Online</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <WifiOff className="w-3 h-3 text-amber-500" />
            <span>Offline</span>
          </>
        )}
      </div>
    </div>
  );
}
