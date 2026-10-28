import * as React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { Chip } from '@/components/ui/Chip';
import { GradientButton } from '@/components/ui/GradientButton';
import { GithubIcon } from '@/components/ui/icons';
import { ProjectThumbnail } from './ProjectThumbnail';
import { formatStatus, githubLinkLabel } from './projectLabels';

interface ProjectDetailProps {
  project: Project;
  /** Position in the full project list, used for the number and artwork. */
  index: number;
  onOpenDetails: (project: Project, trigger: HTMLElement) => void;
}

const subheading = 'font-mono text-xs font-medium uppercase tracking-wider text-muted';

/** Order within the selection transition (.detail-in, replayed because the panel remounts per project). */
const order = (i: number) => ({ '--i': i }) as React.CSSProperties;

export function ProjectDetail({ project, index, onOpenDetails }: ProjectDetailProps) {
  const number = String(index + 1).padStart(2, '0');
  const modules = project.documentedModules ?? [];

  return (
    <article>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10">
        <figure>
          <ProjectThumbnail
            project={project}
            index={index}
            className="image-reveal aspect-[16/10] rounded-xl border border-line"
          />
          {!project.image && (
            <figcaption className="mt-2 font-mono text-[11px] text-muted">
              Illustrative placeholder · screenshot coming soon
            </figcaption>
          )}
        </figure>

        <div className="min-w-0">
          <div className="detail-in flex flex-wrap items-center gap-2" style={order(0)}>
            <span className="font-mono text-sm text-muted">{number}</span>
            <Chip size="sm">{formatStatus(project.status)}</Chip>
            <Chip size="sm">{project.category}</Chip>
          </div>
          <h3 className="detail-in mt-3 text-2xl font-semibold tracking-tight text-heading" style={order(1)}>{project.title}</h3>
          <p className="detail-in mt-1 font-serif text-lg italic text-text" style={order(2)}>{project.tagline}</p>
          <p className="detail-in mt-4 text-sm leading-relaxed text-text md:text-base" style={order(3)}>{project.description}</p>

          <div className="detail-in mt-6 flex flex-wrap gap-3" style={order(4)}>
            {project.githubUrl && (
              <GradientButton href={project.githubUrl} external variant="primary" size="sm">
                <GithubIcon className="size-4" aria-hidden="true" />
                <span>{githubLinkLabel(project)}</span>
                <span className="sr-only">for {project.title} (opens in a new tab)</span>
              </GradientButton>
            )}
            {project.liveUrl && (
              <GradientButton href={project.liveUrl} external size="sm">
                <ExternalLink className="size-4" aria-hidden="true" />
                <span>Live Demo</span>
                <span className="sr-only">(opens in a new tab)</span>
              </GradientButton>
            )}
            <GradientButton
              size="sm"
              onClick={(event) => onOpenDetails(project, event.currentTarget)}
              aria-haspopup="dialog"
            >
              <span>Full Details</span>
              <ArrowRight className="size-4" aria-hidden="true" />
              <span className="sr-only">for {project.title}</span>
            </GradientButton>
          </div>
        </div>
      </div>

      <div className="detail-in mt-10 grid grid-cols-1 gap-10 border-t border-line pt-8 md:grid-cols-2" style={order(5)}>
        {modules.length > 0 && (
          <div>
            <h4 className={subheading}>Documented Functional Modules</h4>
            <ul className="mt-3 space-y-2 text-sm text-text">
              {modules.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-from" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {modules.length > 4 && (
              <p className="mt-3 font-mono text-xs text-muted">+{modules.length - 4} more in full details</p>
            )}
          </div>
        )}

        <div className="space-y-8">
          <div>
            <h4 className={subheading}>Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Chip size="sm">{tech}</Chip>
                </li>
              ))}
            </ul>
          </div>

          {project.specs && (
            <div>
              <h4 className={subheading}>Technical Specifications</h4>
              <dl className="mt-3 divide-y divide-line border-y border-line text-sm">
                {project.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-muted">{spec.label}</dt>
                    <dd className="text-right font-medium text-heading">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              {project.specsNote && <p className="mt-3 text-xs leading-relaxed text-muted">{project.specsNote}</p>}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
