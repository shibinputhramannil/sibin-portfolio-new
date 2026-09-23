'use client';

import * as React from 'react';
import { ArrowRight, Mail, Download, Eye, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { HeroVisual } from './HeroVisual';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent">
                <Code2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                <span>Full Stack Developer</span>
              </Badge>
              <Badge variant="neutral">
                <span>Malappuram, India</span>
              </Badge>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
                Building reliable,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 dark:from-indigo-400 dark:via-indigo-300 dark:to-blue-400">
                  scalable web applications.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
                Full Stack Developer focused on Python, Django, REST APIs, React, PostgreSQL, and database-driven applications. Experienced in developing ERP/CRM systems, machine learning pipelines, and production web services.
              </p>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                aria-label="Scroll to Contact section"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <a
                href="/resume/sibin-p-full-stack-developer-resume.pdf?v=20260923"
                download="sibin-p-full-stack-developer-resume.pdf"
                aria-label="Download Sibin P resume"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium text-sm transition-colors"
                title="Download verified resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="/resume/sibin-p-full-stack-developer-resume.pdf?v=20260923"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Sibin P resume"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium text-sm transition-colors"
                title="View verified resume PDF in new tab"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="https://github.com/shibinputhramannil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
                aria-label="GitHub Profile of Sibin P"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Key Focus Highlights */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white text-base">Backend & APIs</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  Django REST · Python
                </div>
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white text-base">Database Design</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  PostgreSQL · SQL Relational
                </div>
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white text-base">Frontend & AI</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  React · Next.js · PCA / ANN
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
