'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return <div aria-hidden="true" className="size-9 rounded-lg border border-line" />;
  }

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg border border-line text-text transition-colors duration-200 hover:border-line-strong hover:bg-surface hover:text-heading"
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun className="size-4 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="size-4" aria-hidden="true" />
      )}
    </button>
  );
}
