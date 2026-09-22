'use client';

import * as React from 'react';
import { projects } from '@/data/projects';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = React.useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'Backend', 'AI / ML'];

  const featuredProject = projects.find((p) => p.id === 'icorp-erp') || projects[0];

  const gridProjects = projects.filter((p) => {
    if (selectedCategory === 'All') return p.id !== featuredProject.id;
    return p.category === selectedCategory && p.id !== featuredProject.id;
  });

  return (
    <section id="projects" className="py-20 bg-zinc-50/60 dark:bg-zinc-950/40 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="accent">Featured Work</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Real projects & production architectures.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Engineered systems demonstrating database modeling, REST API design, enterprise ERP/CRM logic, and applied machine learning.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT: ICORP ERP & CRM */}
        <div className="mt-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden transition-all hover:border-indigo-400/80 dark:hover:border-indigo-600/80">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="accent">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping mr-1" />
                  <span>PRIMARY FEATURED PROJECT</span>
                </Badge>
                <Badge variant="accent">
                  <span>Status: ONGOING</span>
                </Badge>
                <Badge variant="neutral">Enterprise ERP & CRM</Badge>
              </div>

              <div className="flex items-center gap-3">
                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all cursor-pointer shadow-xs"
                >
                  <span>Detailed Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {featuredProject.tagline}
                </p>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Documented Modules */}
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                    Documented Functional Modules:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featuredProject.documentedModules?.map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-4 flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Right Column: Architectural Highlights & Specs */}
              <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800 space-y-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-semibold pb-3 border-b border-zinc-200/60 dark:border-zinc-700/60 font-sans text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Technical Specifications</span>
                </div>

                <div className="space-y-3 text-zinc-600 dark:text-zinc-300">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Architecture:</span>
                    <span className="text-right font-medium">Django REST + PostgreSQL</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Multi-Tenancy:</span>
                    <span className="text-right font-medium">Tenant Data Isolation</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Authentication:</span>
                    <span className="text-right font-medium">Token / JWT Based</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">API Testing:</span>
                    <span className="text-right font-medium">Postman Automated Suites</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">Planned Feature:</span>
                    <span className="text-right font-medium text-indigo-600 dark:text-indigo-400">
                      Applied AI Modules
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal border-t border-zinc-200/60 dark:border-zinc-700/60">
                  Actively under development with verified walk-through phases for Inventory, Sales Foundation, and Purchasing.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: ADDITIONAL VERIFIED PROJECTS */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Additional Verified Projects
            </h3>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-3 py-1.5 text-xs font-medium rounded-lg transition-all',
                    selectedCategory === cat
                      ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {gridProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
