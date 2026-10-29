'use client';

import * as React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Chip } from '@/components/ui/Chip';
import { GradientButton } from '@/components/ui/GradientButton';
import { GithubIcon } from '@/components/ui/icons';
import { formatStatus, githubLinkLabel } from './projectLabels';
import { ProjectContributions } from './ProjectContributions';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

const subheading = 'font-mono text-xs font-medium uppercase tracking-wider text-muted';

export function ProjectModal({ project, onClose, returnFocusRef }: ProjectModalProps) {
  return (
    <Modal
      open={project !== null}
      onClose={onClose}
      returnFocusRef={returnFocusRef}
      title={project?.title}
      description={project?.tagline}
      className="max-w-3xl"
      header={
        project && (
          <div className="flex flex-wrap gap-2">
            <Chip size="sm">{formatStatus(project.status)}</Chip>
            <Chip size="sm">{project.category}</Chip>
            {project.context && <Chip size="sm">{project.context}</Chip>}
          </div>
        )
      }
    >
      {project && (
        <div className="space-y-8">
          <p className="text-base leading-relaxed text-text">{project.longDescription || project.description}</p>

          <ProjectContributions project={project} as="h3" headingClassName={subheading} />

          {project.documentedModules && project.documentedModules.length > 0 && (
            <section>
              <h3 className={subheading}>Documented Modules &amp; Deliverables</h3>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-text sm:grid-cols-2">
                {project.documentedModules.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-from" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <section>
              <h3 className={subheading}>Technical Architecture Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text">
                {project.architectureHighlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-to" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h3 className={subheading}>Technologies Used</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Chip size="sm">{tech}</Chip>
                </li>
              ))}
            </ul>
          </section>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 border-t border-line pt-6">
              {project.githubUrl && (
                <GradientButton href={project.githubUrl} external variant="primary" size="sm">
                  <GithubIcon className="size-4" aria-hidden="true" />
                  <span>{githubLinkLabel(project)}</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </GradientButton>
              )}
              {project.liveUrl && (
                <GradientButton href={project.liveUrl} external size="sm">
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span>Live Demo</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </GradientButton>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
