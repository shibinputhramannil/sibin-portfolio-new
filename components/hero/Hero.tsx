import * as React from 'react';
import { ArrowRight, Mail, Download, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { GradientButton } from '@/components/ui/GradientButton';
import { Container } from '@/components/ui/Container';
import { Accent } from '@/components/ui/SectionHeading';
import { Magnetic } from '@/components/motion/Magnetic';
import { HeroVisual } from './HeroVisual';
import { resume, site, social } from '@/lib/site';

const highlights = [
  { title: 'Backend & APIs', detail: 'Django REST · Python' },
  { title: 'Database Design', detail: 'PostgreSQL · SQL Relational' },
  { title: 'Frontend & AI', detail: 'React · Next.js · PCA / ANN' }
];

const quietLink =
  'inline-flex items-center gap-1.5 rounded-md text-text underline decoration-line-strong underline-offset-4 transition-colors duration-(--duration-fast) hover:text-heading hover:decoration-accent-to';

/** Order of an element in the hero entrance (.hero-in fades in, .hero-settle only moves; CSS only, from first paint). */
const step = (i: number) => ({ '--i': i }) as React.CSSProperties;

export function Hero() {
  return (
    // overflow-x-clip keeps the decorative glow and orbit from widening the page;
    // data-ambient lets RevealController pause the decorative loops off-screen.
    <section
      id="home"
      aria-labelledby="home-heading"
      data-ambient=""
      className="relative isolate overflow-x-clip pb-section pt-32 md:pt-40 lg:pb-section-lg"
    >
      {/* Decoration (md and up only): faint dot grid and a slowly drifting accent glow.
          Both are compositor-friendly: the glow animates transform only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[radial-gradient(var(--line-strong)_1px,transparent_1px)] [background-size:28px_28px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_25%,black,transparent)] md:block"
      />
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute left-[-12rem] top-[-8rem] -z-10 hidden size-[38rem] rounded-full bg-[radial-gradient(closest-side,var(--accent-from),transparent)] opacity-(--glow-opacity) md:left-[-6rem] md:block"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <p style={step(0)} className="hero-in font-mono text-xs font-medium uppercase tracking-wider text-muted">
            {/* Keep the location together so a narrow screen breaks at the separator. */}
            {site.role} · <span className="whitespace-nowrap">{site.location.short}</span>
          </p>
          <p style={step(1)} className="hero-settle mt-5 font-serif text-5xl italic text-heading md:text-6xl">
            Hello, I&apos;m Sibin.
          </p>
          <h1
            id="home-heading"
            style={step(2)}
            className="hero-settle mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-heading md:text-5xl md:leading-[1.08]"
          >
            Building reliable,{' '}
            <Accent className="text-accent-gradient pr-1 [box-decoration-break:clone]">
              scalable web applications.
            </Accent>
          </h1>
          <p style={step(3)} className="hero-settle mt-6 max-w-xl text-lg leading-relaxed text-text md:text-xl">
            Python Full Stack Developer focused on Django, REST APIs, React, PostgreSQL, and database-driven applications. Experienced in developing ERP/CRM systems, machine learning pipelines, and production web services.
          </p>

          <div style={step(4)} className="hero-in mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <GradientButton href="#projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight className="size-4 transition-transform duration-(--duration-fast) group-hover:translate-x-0.5" aria-hidden="true" />
              </GradientButton>
            </Magnetic>
            <Magnetic>
              <GradientButton href="#contact">
                <Mail className="size-4" aria-hidden="true" />
                <span>Contact Me</span>
              </GradientButton>
            </Magnetic>
          </div>

          <div style={step(5)} className="hero-in mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
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
                className="rounded-lg p-2 text-muted transition-colors duration-(--duration-fast) hover:bg-surface hover:text-heading"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href={social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.linkedin.label} profile of ${site.name} (opens in a new tab)`}
                className="rounded-lg p-2 text-muted transition-colors duration-(--duration-fast) hover:bg-surface hover:text-heading"
              >
                <LinkedinIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl style={step(6)} className="hero-in mt-12 grid grid-cols-1 gap-5 border-t border-line pt-6 sm:grid-cols-3">
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
