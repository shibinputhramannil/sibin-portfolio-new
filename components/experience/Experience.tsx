import * as React from 'react';
import { MapPin } from 'lucide-react';
import { experiences } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { Chip } from '@/components/ui/Chip';

export function Experience() {
  return (
    <Section
      id="experience"
      revealContent={false}
      eyebrow="Experience"
      title={
        <>
          Professional engineering <Accent>journey.</Accent>
        </>
      }
      description="Current work and internships across backend development, CRM systems and machine learning."
    >
      <ol className="space-y-12 md:space-y-0">
        {experiences.map((exp, index) => {
          const isLast = index === experiences.length - 1;
          return (
            <li
              key={exp.id}
              data-reveal=""
              style={{ '--i': index } as React.CSSProperties}
              className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-10"
            >
              {/* Meta column: dates, organisation, location */}
              <div className="md:pb-14 md:text-right">
                <p className="font-mono text-xs text-muted">
                  <time dateTime={exp.startDate}>{exp.period.split('–')[0].trim()}</time>
                  {' – '}
                  {/* A current role has no end date, only "Present". */}
                  {exp.endDate ? (
                    <time dateTime={exp.endDate}>{exp.period.split('–')[1]?.trim()}</time>
                  ) : (
                    exp.period.split('–')[1]?.trim()
                  )}
                </p>
                <p className="mt-2 text-base font-semibold text-heading">{exp.company}</p>
                {exp.location && (
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {exp.location}
                  </p>
                )}
                {exp.status && <p className="mt-1 text-sm text-muted">{exp.status}</p>}
              </div>

              {/* Timeline column */}
              <div className="relative pl-8 md:pb-14">
                <span aria-hidden="true" className="timeline-dot absolute left-0 top-1.5 size-3 rounded-full bg-accent-gradient ring-4 ring-background" />
                {!isLast && <span aria-hidden="true" className="timeline-line absolute bottom-0 left-[5px] top-6 w-0.5 bg-[linear-gradient(to_bottom,var(--accent-from),var(--line)_55%)]" />}

                <h3 className="text-xl font-semibold tracking-tight text-heading">{exp.role}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text md:text-base">{exp.description}</p>

                <h4 className="mt-6 font-mono text-xs font-medium uppercase tracking-wider text-muted">
                  Documented Contributions
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-text">
                  {exp.keyDeliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-from" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used at ${exp.company}`}>
                  {exp.technologies.map((tech) => (
                    <li key={tech}>
                      <Chip size="sm">{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
