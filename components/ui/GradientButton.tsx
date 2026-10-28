import * as React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline';
type Size = 'sm' | 'md' | 'icon';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

type LinkProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    /** Opens in a new tab with safe rel attributes. */
    external?: boolean;
  };

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

export type GradientButtonProps = LinkProps | ButtonProps;

const outerStyles =
  // Hover: slight lift plus a soft accent glow; press: quick scale-down. Transforms only under motion-safe.
  'group inline-flex shrink-0 cursor-pointer select-none rounded-lg bg-accent-gradient p-px transition-[transform,box-shadow] duration-(--duration-base) ease-soft hover:shadow-[0_10px_30px_-14px_var(--accent-from)] motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] motion-safe:active:duration-(--duration-fast) aria-disabled:pointer-events-none aria-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50';

const innerVariants: Record<Variant, string> = {
  primary: 'bg-heading text-background group-hover:bg-heading/90',
  outline: 'bg-background text-heading group-hover:bg-surface'
};

const innerSizes: Record<Size, string> = {
  sm: 'gap-1.5 px-3 py-1.5 text-xs',
  md: 'gap-2 px-4 py-2 text-sm',
  icon: 'p-2'
};

/**
 * Button or link with a 1px indigo-to-cyan border and a solid interior.
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export function GradientButton({
  variant = 'outline',
  size = 'md',
  className,
  innerClassName,
  children,
  ...rest
}: GradientButtonProps) {

  const inner = (
    <span
      className={cn(
        'inline-flex w-full items-center justify-center rounded-[calc(var(--radius-lg)-1px)] font-medium transition-colors duration-(--duration-fast)',
        innerVariants[variant],
        innerSizes[size],
        innerClassName
      )}
    >
      {children}
    </span>
  );

  if (rest.href !== undefined) {
    const { external, ...anchorProps } = rest;
    return (
      <a
        {...anchorProps}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
        className={cn(outerStyles, className)}
      >
        {inner}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = rest;
  return (
    <button {...buttonProps} type={type} className={cn(outerStyles, className)}>
      {inner}
    </button>
  );
}
