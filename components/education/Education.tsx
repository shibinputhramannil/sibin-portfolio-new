import * as React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { education, training } from '@/data/experience';
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
          Education &amp; <Accent>training.</Accent>
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
              {education.year && <span className="font-mono text-xs">{education.year}</span>}
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

        {training.length > 0 && (
          <div className="mt-6 border-t border-line pt-6">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">Training</h3>
            <ul className="mt-3 space-y-4">
              {training.map((item) => (
                <li key={item.title}>
                  <p className="text-base font-semibold text-heading">{item.title}</p>
                  <p className="mt-1 text-sm text-text">
                    {item.provider}
                    {item.location && `, ${item.location}`}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.startDate && item.endDate ? (
                      <>
                        <time dateTime={item.startDate}>{item.period.split('–')[0].trim()}</time>
                        {' – '}
                        <time dateTime={item.endDate}>{item.period.split('–')[1]?.trim()}</time>
                      </>
                    ) : (
                      item.period
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
