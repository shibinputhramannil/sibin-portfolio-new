import * as React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  id: string;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** `split` puts the heading in a narrow left column from md upward. */
  layout?: 'stack' | 'split';
  containerClassName?: string;
  /**
   * Scroll-reveal the content block as one unit. Turn off when the children
   * reveal their own items (timeline entries, cards) to avoid double motion.
   */
  revealContent?: boolean;
}

const revealStyle = (i: number) => ({ '--i': i }) as React.CSSProperties;

export function Section({
  id,
  eyebrow,
  title,
  description,
  layout = 'stack',
  className,
  containerClassName,
  revealContent = true,
  children,
  ...props
}: SectionProps) {
  const headingId = title ? `${id}-heading` : undefined;
  const contentReveal = revealContent ? { 'data-reveal': '', style: revealStyle(1) } : {};

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('py-section lg:py-section-lg', className)}
      {...props}
    >
      <Container
        className={cn(
          layout === 'split' && 'grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] md:gap-12',
          containerClassName
        )}
      >
        {title && (
          <div data-reveal="" style={revealStyle(0)} className={layout === 'stack' ? 'mb-8 md:mb-12' : undefined}>
            <SectionHeading id={headingId} eyebrow={eyebrow} title={title} description={description} />
          </div>
        )}
        <div className="min-w-0" {...contentReveal}>
          {children}
        </div>
      </Container>
    </section>
  );
}
