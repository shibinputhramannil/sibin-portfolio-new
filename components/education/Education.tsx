import * as React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';

export function Education() {
  return (
    <Section
      id="education"
      layout="split"
      eyebrow="Education"
      title={
        <>
          Academic <Accent>background.</Accent>
        </>
      }
    >
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <GraduationCap className="mt-1 size-6 shrink-0 text-accent-from" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-heading">{education.degree}</h3>
            <p className="mt-1 text-base font-medium text-text">{education.institution}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              {education.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {education.location}
                </span>
              )}
              {education.status && <span>{education.status}</span>}
            </div>
          </div>
        </div>

        {education.details && (
          <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm leading-relaxed text-text">
            {education.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-from" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}
