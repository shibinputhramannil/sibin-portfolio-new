'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Reference-counted body scroll lock so stacked or sequential modals never
// leave the page stuck, and the original inline styles are always restored.
let lockCount = 0;
let savedOverflow = '';
let savedPaddingRight = '';

function lockScroll() {
  if (lockCount === 0) {
    const { style } = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    savedOverflow = style.overflow;
    savedPaddingRight = style.paddingRight;
    style.overflow = 'hidden';
    if (scrollbarWidth > 0) style.paddingRight = `${scrollbarWidth}px`;
  }
  lockCount += 1;
}

function unlockScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = savedOverflow;
    document.body.style.paddingRight = savedPaddingRight;
  }
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Visible heading; also the dialog's accessible name. */
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Content rendered above the title, e.g. status badges. */
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /**
   * Element to refocus on close. Pass the trigger explicitly: Safari does not
   * focus buttons on mouse click, so document.activeElement is unreliable.
   */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Accessible modal built on the native <dialog> element. showModal() makes the
 * rest of the page inert, places the dialog in the top layer and handles
 * Escape; this component adds scroll locking, backdrop-click dismissal and
 * focus restoration to the element that opened it.
 */
export function Modal({ open, onClose, title, description, header, children, className, returnFocusRef }: ModalProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  const handleClose = React.useEffectEvent(() => {
    if (open) onClose();
  });

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    const trigger =
      returnFocusRef?.current ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    const onNativeClose = () => handleClose();

    dialog.addEventListener('close', onNativeClose);
    if (!dialog.open) dialog.showModal();
    lockScroll();

    return () => {
      dialog.removeEventListener('close', onNativeClose);
      if (dialog.open) dialog.close();
      unlockScroll();
      if (trigger && trigger.isConnected) trigger.focus();
    };
  }, [open, returnFocusRef]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={cn(
        'm-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-xl border border-line bg-surface p-0 text-text shadow-2xl',
        className
      )}
    >
      {open && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 space-y-3">
              {header}
              <h2 id={titleId} className="text-2xl font-semibold tracking-tight text-heading">
                {title}
              </h2>
              {description && (
                <p id={descriptionId} className="text-sm leading-relaxed text-muted">
                  {description}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="shrink-0 cursor-pointer rounded-lg border border-line p-2 text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-heading"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      )}
    </dialog>
  );
}
