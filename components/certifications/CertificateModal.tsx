'use client';

import * as React from 'react';
import { Building2, Calendar } from 'lucide-react';
import { CertificationItem } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { Chip } from '@/components/ui/Chip';
import { site } from '@/lib/site';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

// Credential IDs in data/certifications.ts are not displayed until they are
// confirmed against the issuers' records.
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
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">Topics &amp; Curriculum</h3>
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
