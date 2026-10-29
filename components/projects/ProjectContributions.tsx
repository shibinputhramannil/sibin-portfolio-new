import * as React from 'react';
import { Project } from '@/types';

interface ProjectContributionsProps {
  project: Project;
  /** Heading level that fits the surrounding outline (h4 in the detail panel, h3 in the modal). */
  as: 'h3' | 'h4';
  headingClassName: string;
}

/**
 * "My Contributions" plus any further contribution groups (e.g. post-internship
 * additions), each under its own heading. Renders nothing for projects without them.
 */
export function ProjectContributions({ project, as: Heading, headingClassName }: ProjectContributionsProps) {
  const groups = [
    ...(project.contributions?.length ? [{ heading: 'My Contributions', items: project.contributions }] : []),
    ...(project.additionalContributions ?? []).filter((group) => group.items.length > 0)
  ];
  if (groups.length === 0) return null;

  return (
    <>
      {groups.map((group) => (
        <section key={group.heading}>
          <Heading className={headingClassName}>{group.heading}</Heading>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-to" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
