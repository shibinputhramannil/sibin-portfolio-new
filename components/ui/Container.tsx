import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'header' | 'footer' | 'nav';
}

export function Container({ as: Tag = 'div', className, ...props }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full max-w-content px-gutter', className)} {...props} />;
}
