'use client';

import * as React from 'react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 flex flex-col justify-between shadow-xs hover:border-indigo-400/80 dark:hover:border-indigo-600/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div>
        {/* Status and Category */}
        <div className="flex items-center justify-between gap-2 pb-4">
          <Badge
            variant={
              project.status === 'ONGOING'
                ? 'accent'
                : project.status === 'COMPLETED'
                ? 'success'
                : 'neutral'
            }
          >
            {project.status === 'ONGOING' && (
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            )}
            <span>{project.status}</span>
          </Badge>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            {project.category}
          </span>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-indigo-600/90 dark:text-indigo-400/90 mt-0.5">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Highlight bullets if any */}
        {project.documentedModules && project.documentedModules.length > 0 && (
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
            {project.documentedModules.slice(0, 2).map((mod, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{mod}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500 self-center px-1">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
              title="GitHub repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={`Live demo for ${project.title}`}
              title="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
