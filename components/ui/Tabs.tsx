'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TabItem<T extends string = string> {
  value: T;
  label: React.ReactNode;
}

export interface TabsProps<T extends string> {
  /** Shared prefix for tab and panel ids; must be unique on the page. */
  idBase: string;
  /** Accessible name for the tab list. */
  label: string;
  items: readonly TabItem<T>[];
  value: T;
  onValueChange: (value: T) => void;
  className?: string;
}

export const tabId = (idBase: string, value: string) => `${idBase}-tab-${value}`;
export const tabPanelId = (idBase: string) => `${idBase}-panel`;

/** Props for the single panel controlled by a <Tabs> list. */
export function tabPanelProps(idBase: string, value: string) {
  return {
    id: tabPanelId(idBase),
    role: 'tabpanel' as const,
    'aria-labelledby': tabId(idBase, value),
    tabIndex: 0
  };
}

/**
 * WAI-ARIA tab list with automatic activation: arrow keys, Home and End move
 * between tabs, and only the active tab is in the Tab sequence.
 */
export function Tabs<T extends string>({
  idBase,
  label,
  items,
  value,
  onValueChange,
  className
}: TabsProps<T>) {
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + items.length) % items.length;
    onValueChange(items[next].value);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        focusTab(index - 1);
        break;
      case 'Home':
        focusTab(0);
        break;
      case 'End':
        focusTab(items.length - 1);
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn('flex flex-wrap gap-x-6 gap-y-2 border-b border-line', className)}
    >
      {items.map((item, index) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={tabId(idBase, item.value)}
            aria-selected={selected}
            aria-controls={tabPanelId(idBase)}
            tabIndex={selected ? 0 : -1}
            onClick={() => onValueChange(item.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              '-mb-px cursor-pointer border-b-2 pb-2 text-sm font-medium transition-colors duration-200',
              selected
                ? 'border-accent-from text-heading'
                : 'border-transparent text-muted hover:text-heading'
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
