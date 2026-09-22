'use client';

import * as React from 'react';
import { Project } from '@/types';
import { X, ExternalLink, CheckCircle, Terminal } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Badge } from '@/components/ui/Badge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-6 sm:p-8 text-left transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
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
            <span>Status: {project.status}</span>
          </Badge>
          <Badge variant="neutral">{project.category}</Badge>
        </div>

        {/* Project Title & Tagline */}
        <h3
          id="modal-title"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white"
        >
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-1">
          {project.tagline}
        </p>

        {/* Description */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Documented Modules / Functional Areas */}
        {project.documentedModules && project.documentedModules.length > 0 && (
          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Documented Modules & Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.documentedModules.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Technical Architecture Highlights</span>
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 list-disc list-inside">
              {project.architectureHighlights.map((hl, i) => (
                <li key={i} className="leading-normal">
                  {hl}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="neutral">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-medium text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
