import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md';
}

export function Chip({ size = 'md', className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center gap-1.5 rounded-lg border border-line bg-surface text-text',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1.5 text-sm',
        className
      )}
      {...props}
    />
  );
}

export interface TechChipProps extends ChipProps {
  name: string;
  /** Optional decorative icon; it is hidden from assistive technology. */
  icon?: React.ReactNode;
}

export function TechChip({ name, icon, ...props }: TechChipProps) {
  return (
    <Chip {...props}>
      {icon && (
        <span aria-hidden="true" className="inline-flex size-4 shrink-0 items-center justify-center text-muted">
          {icon}
        </span>
      )}
      <span className="truncate">{name}</span>
    </Chip>
  );
}
