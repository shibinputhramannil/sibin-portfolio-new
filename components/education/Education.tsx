import * as React from 'react';
import { education } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export function Education() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Education */}
          <div className="lg:col-span-5 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="accent">Academic Background</Badge>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    {education.degree}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
                    {education.institution}
                  </div>
                  {education.location && (
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{education.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {education.details && (
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2">
                  {education.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-normal"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                Verified Academic Record
              </span>
            </div>
          </div>

          {/* Right Column: Professional Focus Statement */}
          <div className="lg:col-span-7 rounded-3xl border border-indigo-200/70 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-900 dark:to-indigo-950/30 p-8 sm:p-10 flex flex-col justify-center shadow-xs">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Professional Focus Statement
              </span>
            </div>

            <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
              &ldquo;Building practical software with Python, Django, REST APIs, databases, ERP/CRM systems, and applied AI.&rdquo;
            </blockquote>

            <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Focusing on clean engineering standards, reproducible data schemas, and production stability rather than superficial complexity. Dedicated to building systems that solve operational realities.
            </p>

            <div className="mt-6 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-wrap gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                Clean Architecture
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                Type Safety
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                Automated Testing
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                Maintainability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
