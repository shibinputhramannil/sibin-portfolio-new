'use client';

import * as React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { CertificationItem } from '@/types';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { CertificateModal } from './CertificateModal';

export function Certifications() {
  const [selectedCert, setSelectedCert] = React.useState<CertificationItem | null>(null);
  const triggerRef = React.useRef<HTMLElement | null>(null);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={
        <>
          Qualifications &amp; <Accent>training.</Accent>
        </>
      }
      description="Technical certifications covering full stack Python web engineering, CRM system development, and artificial intelligence implementations."
    >
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-line-strong"
          >
            <div className="flex items-center justify-between gap-3">
              <Award className="size-5 text-accent-from" aria-hidden="true" />
              <span className="font-mono text-xs text-muted">{cert.issueDate}</span>
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight text-heading">{cert.title}</h3>
            <p className="mt-1 text-sm font-medium text-text">{cert.issuer}</p>
            <p className="mt-1 font-mono text-xs text-muted">{cert.period}</p>

            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted">{cert.description}</p>

            <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-xs text-text">
              {cert.topics.slice(0, 3).map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-to" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            {cert.topics.length > 3 && (
              <p className="mt-2 font-mono text-[11px] text-muted">+{cert.topics.length - 3} more topics</p>
            )}

            <button
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedCert(cert);
              }}
              aria-haspopup="dialog"
              className="mt-auto inline-flex cursor-pointer items-center gap-1.5 self-start pt-6 text-sm font-medium text-heading underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:decoration-accent-to"
            >
              <span>View details</span>
              <span className="sr-only">for {cert.title}</span>
              <ArrowRight className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} returnFocusRef={triggerRef} />
    </Section>
  );
}
