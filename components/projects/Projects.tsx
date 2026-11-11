'use client';

import * as React from 'react';
import { projects } from '@/data/projects';
import { Project, ProjectCategory } from '@/types';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { Tabs, tabPanelProps, useRovingTabs } from '@/components/ui/Tabs';
import { cn } from '@/lib/utils';
import { useSlidingIndicator } from '@/components/motion/useSlidingIndicator';
import { ProjectDetail } from './ProjectDetail';
import { ProjectModal } from './ProjectModal';

const FILTER_ID = 'project-filter';
const PICKER_ID = 'project';

// The lineup's own order (data/projects.ts); numbering follows it.
const orderedProjects = projects;

// Only categories that have projects, in order of first appearance.
const categories: ProjectCategory[] = ['All', ...new Set(orderedProjects.map((p) => p.category))];
const filterItems = categories.map((category) => ({ value: category, label: category }));

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

  const pickerRef = React.useRef<HTMLDivElement>(null);
  const pickerIndicatorRef = React.useRef<HTMLSpanElement>(null);
  useSlidingIndicator(pickerRef, pickerIndicatorRef, selected.id + category, 'frame');

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
          Selected Projects &amp; <Accent>Engineering Work</Accent>
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
        <div ref={pickerRef} role="tablist" aria-label="Projects" className="relative grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {/* Gradient frame that slides to the selected project (replaces the static frame once measured). */}
          <span
            ref={pickerIndicatorRef}
            aria-hidden="true"
            className="slide-indicator pointer-events-none absolute left-0 top-0 rounded-lg bg-accent-gradient shadow-[0_8px_24px_-12px_var(--accent-from)]"
          />
          {visible.map((project, i) => {
            const number = orderedProjects.indexOf(project);
            const isSelected = project.id === selected.id;
            return (
              <button
                key={project.id}
                {...getTabProps(i)}
                className={cn(
                  'picker-tab group relative cursor-pointer rounded-lg p-0.5 text-left transition-[transform,background-color] duration-(--duration-base) ease-soft',
                  // Unselected tabs lift on hover; the selected one stays aligned with the sliding frame.
                  isSelected ? 'bg-accent-gradient' : 'bg-line hover:bg-line-strong motion-safe:hover:-translate-y-0.5'
                )}
              >
                {/* The visible number and short name are the tab's accessible name ("01 IcorpERP"). */}
                <span className="flex h-full flex-col gap-1 rounded-[calc(var(--radius-lg)-2px)] bg-background px-3 py-2.5">
                  <span className="font-mono text-[11px] text-muted">{String(number + 1).padStart(2, '0')}</span>
                  <span
                    className={cn(
                      'text-sm font-medium leading-snug transition-colors duration-(--duration-base)',
                      isSelected ? 'text-heading' : 'text-muted group-hover:text-heading'
                    )}
                  >
                    {project.shortTitle ?? project.title}
                  </span>
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
