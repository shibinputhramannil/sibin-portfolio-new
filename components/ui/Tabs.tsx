'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { useSlidingIndicator } from '@/components/motion/useSlidingIndicator';

export interface TabItem<T extends string = string> {
  value: T;
  label: React.ReactNode;
}

export const tabId = (idBase: string, value: string) => `${idBase}-tab-${value}`;
export const tabPanelId = (idBase: string) => `${idBase}-panel`;

/**
 * Props for the single panel controlled by a tab list. Pass `focusable: false`
 * when the panel starts with focusable content, so it adds no extra Tab stop.
 */
export function tabPanelProps(idBase: string, value: string, { focusable = true } = {}) {
  return {
    id: tabPanelId(idBase),
    role: 'tabpanel' as const,
    'aria-labelledby': tabId(idBase, value),
    ...(focusable ? { tabIndex: 0 } : null)
  };
}

/**
 * WAI-ARIA tab keyboard model with automatic activation: arrow keys, Home and
 * End move between tabs, and only the selected tab is in the Tab sequence.
 * Returns props to spread on each tab element.
 */
export function useRovingTabs<T extends string>(
  idBase: string,
  values: readonly T[],
  value: T,
  onValueChange: (value: T) => void
) {
  const tabRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number) => {
    const next = (index + values.length) % values.length;
    onValueChange(values[next]);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        select(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        select(index - 1);
        break;
      case 'Home':
        select(0);
        break;
      case 'End':
        select(values.length - 1);
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  return (index: number) => {
    const itemValue = values[index];
    const selected = itemValue === value;
    return {
      ref: (node: HTMLButtonElement | null) => {
        tabRefs.current[index] = node;
      },
      type: 'button' as const,
      role: 'tab' as const,
      id: tabId(idBase, itemValue),
      'aria-selected': selected,
      'aria-controls': tabPanelId(idBase),
      tabIndex: selected ? 0 : -1,
      onClick: () => onValueChange(itemValue),
      onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => handleKeyDown(event, index)
    };
  };
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

/**
 * Text tab list. The selected tab has a static underline (no-JS fallback) that
 * a gradient indicator replaces and slides between tabs once measured.
 */
export function Tabs<T extends string>({
  idBase,
  label,
  items,
  value,
  onValueChange,
  className
}: TabsProps<T>) {
  const values = items.map((item) => item.value);
  const getTabProps = useRovingTabs(idBase, values, value, onValueChange);
  const listRef = React.useRef<HTMLDivElement>(null);
  const indicatorRef = React.useRef<HTMLSpanElement>(null);
  useSlidingIndicator(listRef, indicatorRef, value, 'underline');

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={label}
      className={cn('relative flex flex-wrap gap-x-5 gap-y-1 border-b border-line', className)}
    >
      <span
        ref={indicatorRef}
        aria-hidden="true"
        className="slide-indicator pointer-events-none absolute left-0 top-0 h-0.5 w-[100px] origin-left bg-accent-gradient"
      />
      {items.map((item, index) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            {...getTabProps(index)}
            className={cn(
              '-mb-px cursor-pointer border-b-2 py-2 text-sm font-medium transition-colors duration-(--duration-fast)',
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
