'use client';

import * as React from 'react';
import Image from 'next/image';
import { Building2, Calendar, FileText } from 'lucide-react';
import { CertificationItem } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Chip } from '@/components/ui/Chip';
import { GradientButton } from '@/components/ui/GradientButton';
import { site } from '@/lib/site';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

// No credential IDs are stored or shown: none could be confirmed against an
// issued certificate. Add one only from the certificate itself. Likewise only a
// scan of the issued certificate is shown, never the illustrative `image`.
export function CertificateModal({ cert, onClose, returnFocusRef }: CertificateModalProps) {
  return (
    <Modal
      open={cert !== null}
      onClose={onClose}
      returnFocusRef={returnFocusRef}
      title={cert?.title}
      header={
        cert && (
          <div className="flex flex-wrap gap-2">
            <Chip size="sm">{cert.status}</Chip>
            <Chip size="sm">Issued {cert.issueDate}</Chip>
          </div>
        )
      }
    >
      {cert && (
        <div className="space-y-8">
          {cert.scan && (
            <figure className="space-y-4">
              <Image
                src={cert.scan.src}
                alt={cert.scan.alt}
                width={cert.scan.width}
                height={cert.scan.height}
                sizes="(min-width: 672px) 622px, calc(100vw - 4rem)"
                className="h-auto w-full rounded-lg border border-line"
              />
              {cert.pdf && (
                <figcaption>
                  <GradientButton href={cert.pdf} external size="sm">
                    <FileText className="size-4" aria-hidden="true" />
                    <span>Original certificate (PDF)</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </GradientButton>
                </figcaption>
              )}
            </figure>
          )}

          <dl className="grid grid-cols-1 gap-4 rounded-lg border border-line bg-background p-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">Awarded to</dt>
              <dd className="mt-1 font-medium text-heading">{site.wordmark}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted">
                <Building2 className="size-3.5" aria-hidden="true" />
                Issuer
              </dt>
              <dd className="mt-1 font-medium text-heading">{cert.issuer}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted">
                <Calendar className="size-3.5" aria-hidden="true" />
                Period
              </dt>
              <dd className="mt-1 font-medium text-heading">{cert.period}</dd>
            </div>
          </dl>

          <p className="text-base leading-relaxed text-text">{cert.description}</p>

          <section>
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">Topics &amp; Technologies</h3>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-text sm:grid-cols-2">
              {cert.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-from" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </Modal>
  );
}
