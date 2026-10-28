import * as React from 'react';
import { ArrowRight, Mail, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { GradientButton } from '@/components/ui/GradientButton';
import { Container } from '@/components/ui/Container';
import { Accent } from '@/components/ui/SectionHeading';
import { HeroVisual } from './HeroVisual';
import { resume, site, social } from '@/lib/site';

const highlights = [
  { title: 'Backend & APIs', detail: 'Django REST · Python' },
  { title: 'Database Design', detail: 'PostgreSQL · SQL Relational' },
  { title: 'Frontend & AI', detail: 'React · Next.js · PCA / ANN' }
];

const quietLink =
  'inline-flex items-center gap-1.5 rounded-md text-text underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-heading hover:decoration-accent-to';

export function Hero() {
  return (
    // overflow-x-clip keeps the portrait's decorative orbit from widening the page.
    <section id="home" aria-labelledby="home-heading" className="relative overflow-x-clip pb-section pt-32 md:pt-40 lg:pb-section-lg">
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted motion-safe:animate-fade-up">
            {site.role} · {site.location.short}
          </p>
          <p className="mt-5 font-serif text-5xl italic text-heading motion-safe:animate-fade-up motion-safe:[animation-delay:60ms] md:text-6xl">
            Hello, I&apos;m Sibin.
          </p>
          <h1
            id="home-heading"
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-heading motion-safe:animate-fade-up motion-safe:[animation-delay:120ms] md:text-5xl md:leading-[1.08]"
          >
            Building reliable,{' '}
            <Accent className="text-accent-gradient pr-1 [box-decoration-break:clone]">
              scalable web applications.
            </Accent>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text motion-safe:animate-fade-up motion-safe:[animation-delay:180ms] md:text-xl">
            Full Stack Developer focused on Python, Django, REST APIs, React, PostgreSQL, and database-driven applications. Experienced in developing ERP/CRM systems, machine learning pipelines, and production web services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
            <GradientButton href="#projects" variant="primary">
              <span>View Projects</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </GradientButton>
            <GradientButton href="#contact">
              <Mail className="size-4" aria-hidden="true" />
              <span>Contact Me</span>
            </GradientButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm motion-safe:animate-fade-up motion-safe:[animation-delay:300ms]">
            <a href={resume.pdfHref} target="_blank" rel="noopener noreferrer" className={quietLink}>
              <FileText className="size-4" aria-hidden="true" />
              <span>View Resume</span>
              <span className="sr-only">(PDF, opens in a new tab)</span>
            </a>
            <a href={resume.pdfHref} download={resume.downloadName} className={quietLink}>
              <Download className="size-4" aria-hidden="true" />
              <span>Download Resume</span>
              <span className="sr-only">(PDF)</span>
            </a>
            <span aria-hidden="true" className="hidden h-4 w-px bg-line-strong sm:block" />
            <div className="flex items-center gap-1">
              <a
                href={social.github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.github.label} profile of ${site.name} (opens in a new tab)`}
                className="rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-surface hover:text-heading"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href={social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.linkedin.label} profile of ${site.name} (opens in a new tab)`}
                className="rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-surface hover:text-heading"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-semibold text-heading">{item.title}</dt>
                <dd className="mt-1 font-mono text-xs text-muted">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
