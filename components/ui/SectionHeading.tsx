import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

/**
 * Editorial heading block. Wrap a word of `title` in <Accent> for the
 * serif-italic emphasis.
 */
export function SectionHeading({
  id,
  as: Tag = 'h2',
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {eyebrow && (
        <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">{eyebrow}</p>
      )}
      <Tag
        id={id}
        className="text-3xl font-semibold tracking-tight text-heading md:text-4xl"
      >
        {title}
      </Tag>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-text md:text-lg">{description}</p>
      )}
    </div>
  );
}

export function Accent({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('font-serif font-normal italic', className)} {...props} />;
}
