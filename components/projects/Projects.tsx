'use client';

import * as React from 'react';
import { projects } from '@/data/projects';
import { Project, ProjectCategory } from '@/types';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { Tabs, tabPanelProps, useRovingTabs } from '@/components/ui/Tabs';
import { cn } from '@/lib/utils';
import { ProjectThumbnail } from './ProjectThumbnail';
import { ProjectDetail } from './ProjectDetail';
import { ProjectModal } from './ProjectModal';

const FILTER_ID = 'project-filter';
const PICKER_ID = 'project';

const categories: ProjectCategory[] = ['All', 'Full Stack', 'Backend', 'AI / ML'];
const filterItems = categories.map((category) => ({ value: category, label: category }));

// The featured project leads the list; numbering follows this order.
const orderedProjects = [
  ...projects.filter((p) => p.id === 'icorp-erp'),
  ...projects.filter((p) => p.id !== 'icorp-erp')
];

export function Projects() {
  const [category, setCategory] = React.useState<ProjectCategory>('All');
  const [selectedId, setSelectedId] = React.useState(orderedProjects[0].id);
  const [modalProject, setModalProject] = React.useState<Project | null>(null);
  const modalTriggerRef = React.useRef<HTMLElement | null>(null);

  const openDetails = (project: Project, trigger: HTMLElement) => {
    modalTriggerRef.current = trigger;
    setModalProject(project);
  };

  const visible = orderedProjects.filter((p) => category === 'All' || p.category === category);
  const selected = visible.find((p) => p.id === selectedId) ?? visible[0];

  const handleCategory = (next: ProjectCategory) => {
    setCategory(next);
    const nextVisible = orderedProjects.filter((p) => next === 'All' || p.category === next);
    if (!nextVisible.some((p) => p.id === selectedId)) setSelectedId(nextVisible[0].id);
  };

  const getTabProps = useRovingTabs(
    PICKER_ID,
    visible.map((p) => p.id),
    selected.id,
    setSelectedId
  );

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={
        <>
          Real projects &amp; <Accent>production architectures.</Accent>
        </>
      }
      description="Engineered systems demonstrating database modeling, REST API design, enterprise ERP/CRM logic, and applied machine learning."
    >
      <Tabs
        idBase={FILTER_ID}
        label="Filter projects by category"
        items={filterItems}
        value={category}
        onValueChange={handleCategory}
      />

      <div {...tabPanelProps(FILTER_ID, category, { focusable: false })} className="mt-6">
        <div role="tablist" aria-label="Projects" className="grid grid-cols-4 gap-2 sm:grid-cols-7">
          {visible.map((project, i) => {
            const number = orderedProjects.indexOf(project);
            const isSelected = project.id === selected.id;
            return (
              <button
                key={project.id}
                {...getTabProps(i)}
                className={cn(
                  'group cursor-pointer rounded-lg p-0.5 text-left transition-transform duration-200 motion-safe:hover:scale-[1.03]',
                  isSelected ? 'bg-accent-gradient' : 'bg-line hover:bg-line-strong'
                )}
              >
                <span className="relative block overflow-hidden rounded-[calc(var(--radius-lg)-2px)]">
                  <ProjectThumbnail
                    project={project}
                    index={number}
                    size="sm"
                    className={cn('h-12 md:h-20', !isSelected && 'opacity-60 transition-opacity group-hover:opacity-100')}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-1 rounded bg-background/85 px-1.5 py-0.5 font-mono text-[11px] text-heading"
                  >
                    {String(number + 1).padStart(2, '0')}
                  </span>
                </span>
                <span className="sr-only">
                  {String(number + 1).padStart(2, '0')}. {project.title}
                </span>
              </button>
            );
          })}
        </div>

        <div {...tabPanelProps(PICKER_ID, selected.id)} className="mt-8 rounded-lg">
          <ProjectDetail
            key={selected.id}
            project={selected}
            index={orderedProjects.indexOf(selected)}
            onOpenDetails={openDetails}
          />
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        returnFocusRef={modalTriggerRef}
      />
    </Section>
  );
}
