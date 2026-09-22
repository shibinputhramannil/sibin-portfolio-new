import * as React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

export function Footer() {
  const currentYear = 2026;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-100 dark:border-zinc-800/80">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center font-mono text-xs font-bold">
                SP
              </div>
              <span className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
                SIBIN P
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              Full Stack Developer specializing in Python, Django REST Framework, React, and PostgreSQL. Building practical, scalable, and maintainable software.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Connect
            </div>
            <div className="space-y-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <a
                href="https://github.com/shibinputhramannil/sibin-p"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>
              <a
                href="mailto:puthramannilshibin@gmail.com"
                className="flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Technical Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            &copy; {currentYear} SIBIN P. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
