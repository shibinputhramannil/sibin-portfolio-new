import * as React from 'react';
import { Container } from '@/components/ui/Container';
import { GridMarksDecor } from '@/components/ui/Decor';
import { site } from '@/lib/site';

const principles = ['Clean Architecture', 'Type Safety', 'Automated Testing', 'Maintainability'];

/** Editorial divider carrying Sibin's own professional focus statement. */
export function Quote() {
  return (
    <section aria-label="Professional focus statement" className="relative py-section lg:py-section-lg">
      <Container>
        <div className="relative border-y border-line py-14 md:py-20">
          <GridMarksDecor className="absolute right-0 top-6 hidden h-16 text-muted md:block" />
          <figure className="max-w-4xl">
            <blockquote className="font-serif text-3xl italic leading-tight text-heading md:text-5xl md:leading-[1.1]">
              <p>
                &ldquo;Building practical software with Python, Django, REST APIs, databases,{' '}
                <span className="text-accent-gradient pr-1 [box-decoration-break:clone]">ERP/CRM systems, and applied AI.</span>&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs uppercase tracking-wider text-muted">
              {site.name} · Professional focus statement
            </figcaption>
          </figure>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text">
            Focusing on clean engineering standards, reproducible data schemas, and production stability rather than superficial complexity. Dedicated to building systems that solve operational realities.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
            {principles.map((principle) => (
              <li key={principle} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1 rounded-full bg-accent-to" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
