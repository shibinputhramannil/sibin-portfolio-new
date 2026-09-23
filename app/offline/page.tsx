import Link from 'next/link';
import { WifiOff, FileText, ArrowLeft, Award, User, Code2 } from 'lucide-react';

export const metadata = {
  title: 'Offline Mode | Sibin P - Full Stack Developer',
  description: 'You are currently browsing the portfolio offline. Previously cached content remains available.'
};

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      <div className="max-w-xl w-full rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-10 shadow-xl text-center space-y-6">
        {/* Offline Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-inner">
          <WifiOff className="w-8 h-8" />
        </div>

        {/* Heading & Text */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Offline Cache Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            You are currently offline.
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Previously cached portfolio content is still available on your device.
          </p>
        </div>

        {/* Available Offline Features */}
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800 text-left space-y-3 text-xs sm:text-sm">
          <div className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center justify-between">
            <span>Cached Resources Available:</span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">100% OFFLINE READY</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-500" />
              <span>Full Portfolio Shell</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>Verified ATS Resume</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-500" />
              <span>Projects & Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-500" />
              <span>Certifications</span>
            </div>
          </div>
          <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400 italic">
            * Note: External links (GitHub, live demos, external email/phone apps) require internet connectivity or device capabilities.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <a
            href="/resume/sibin-p-full-stack-developer-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Open Cached Resume</span>
          </a>
        </div>
      </div>
    </main>
  );
}
