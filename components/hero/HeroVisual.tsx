'use client';

import * as React from 'react';
import Image from 'next/image';
import { Database, Server, CheckCircle2, Layers } from 'lucide-react';

export function HeroVisual() {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Real Profile Portrait Card */}
        <div className="relative shrink-0">
          <div className="relative w-56 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900">
            {!imageError ? (
              <Image
                src="/images/sibin.png"
                alt="Sibin P - Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 224px, 240px"
                className="object-cover object-top"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl mb-3 shadow-md">
                  SP
                </div>
                <div className="font-semibold text-zinc-900 dark:text-white">SIBIN P</div>
                <div className="text-xs text-zinc-500 font-mono mt-1">Full Stack Developer</div>
              </div>
            )}
          </div>
        </div>

        {/* Minimalist Engineering Terminal Stack */}
        <div className="w-full sm:max-w-xs space-y-3">
          {/* Terminal Window Mock */}
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-white/95 dark:bg-zinc-900/95 shadow-md p-4 backdrop-blur-xs font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-400">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
                developer-env.sh
              </span>
            </div>

            <div className="pt-3 space-y-2 text-[11px]">
              <div className="text-zinc-500 dark:text-zinc-400">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">$</span> python manage.py check
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Django REST Framework ready</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                <Database className="w-3.5 h-3.5" />
                <span>PostgreSQL 17 connection pool: OK</span>
              </div>
              <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                <Server className="w-3.5 h-3.5" />
                <span>React & Next.js client synced</span>
              </div>
            </div>
          </div>

          {/* Quick Stat Pill */}
          <div className="p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                Primary Stack
              </span>
            </div>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              Python · Django · PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
