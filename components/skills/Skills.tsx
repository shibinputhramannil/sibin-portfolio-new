'use client';

import * as React from 'react';
import { Code, Server, Layout, Database, Brain, Wrench, Binary, Layers } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { Tabs, tabPanelProps, type TabItem } from '@/components/ui/Tabs';
import { Chip } from '@/components/ui/Chip';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, React.ElementType> = {
  programming: Code,
  backend: Server,
  frontend: Layout,
  databases: Database,
  'data-ai': Brain,
  tools: Wrench,
  'core-cs': Binary
};

const TABS_ID = 'skills';

const tabItems: TabItem[] = [
  { value: 'all', label: 'All' },
  ...skillCategories.map((category) => ({ value: category.id, label: category.name.split(' ')[0] }))
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  // Chip entrances play only after the visitor changes tabs, never on first load.
  const [hasSwitched, setHasSwitched] = React.useState(false);

  const handleCategory = (value: string) => {
    setSelectedCategory(value);
    setHasSwitched(true);
  };

  // Stagger index for an item, or no animation before the first tab change.
  const enter = (i: number, className: string) =>
    hasSwitched ? { className, style: { '--i': i } as React.CSSProperties } : {};

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((category) => category.id === selectedCategory);

  return (
    <Section
      id="skills"
      eyebrow="Technical Stack"
      title={
        <>
          Skills, frameworks & <Accent>developer tools.</Accent>
        </>
      }
      description="A comprehensive view of the languages, backend engines, database systems, and applied AI tools I work with."
    >
      <Tabs
        idBase={TABS_ID}
        label="Skill categories"
        items={tabItems}
        value={selectedCategory}
        onValueChange={handleCategory}
      />

      <div
        key={selectedCategory}
        {...tabPanelProps(TABS_ID, selectedCategory)}
        className="mt-8 rounded-lg"
      >
        {selectedCategory === 'all' ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Layers;
              return (
                <div key={category.id}>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-heading">
                    <Icon className="size-4 text-accent-from" aria-hidden="true" />
                    {category.name}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <li key={skill.name} {...enter(i, 'chip-in')}>
                        <Chip size="sm">{skill.name}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div key={category.id}>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-heading">
                  <Icon className="size-5 text-accent-from" aria-hidden="true" />
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{category.description}</p>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {category.skills.map((skill, i) => {
                    const motion = enter(i, 'detail-in');
                    return (
                    <div
                      key={skill.name}
                      style={motion.style}
                      className={cn('grid gap-1 py-3 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6', motion.className)}
                    >
                      <dt className="text-sm font-medium text-heading">{skill.name}</dt>
                      {skill.note && <dd className="text-sm text-muted">{skill.note}</dd>}
                    </div>
                    );
                  })}
                </dl>
              </div>
            );
          })
        )}
      </div>
    </Section>
  );
}
