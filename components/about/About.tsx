import * as React from 'react';
import { Database, Server, Cpu, ShieldCheck, GitBranch, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { social } from '@/lib/site';

const focusAreas = [
  {
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications connecting modular client interfaces with robust backend architectures.',
    icon: Server
  },
  {
    title: 'Python & Django REST Framework',
    description: 'Engineering clean API endpoints, serializers, viewsets, and domain business logic with Python.',
    icon: GitBranch
  },
  {
    title: 'Database-Driven Systems',
    description: 'Structuring normalized relational schemas, foreign key relationships, and query routines in PostgreSQL.',
    icon: Database
  },
  {
    title: 'ERP & CRM Platforms',
    description: 'Architecting comprehensive enterprise systems across ERP operations (inventory, sales, finance) and CRM lead management.',
    icon: ShieldCheck
  },
  {
    title: 'Applied Machine Learning & AI',
    description: 'Developing mathematical feature extraction pipelines (PCA) and artificial neural network (ANN) classifiers.',
    icon: Cpu
  }
];

const socialLinks = [
  { ...social.github, Icon: GithubIcon },
  { ...social.linkedin, Icon: LinkedinIcon }
];

export function About() {
  return (
    <Section
      id="about"
      layout="split"
      eyebrow="About Me"
      title={
        <>
          Practical engineering grounded in <Accent>backend fundamentals.</Accent>
        </>
      }
    >
      <div className="space-y-5 text-base leading-relaxed text-text md:text-lg">
        <p className="text-heading">
          I am a Python Full Stack Developer with a solid foundation in backend development, relational databases, applied artificial intelligence, and client-side web technologies. My work centers on creating practical, maintainable applications that solve concrete business operational requirements.
        </p>
        <p>
          I currently work at AX Ventures in Calicut, on the Django REST Framework and PostgreSQL backend of BYCE, a gym membership platform.
        </p>
        <p>
          My hands-on experience includes a Software Developer internship at Upcode Software Labs, where I worked on a live CRM project directly from business specifications, implemented Django REST Framework endpoints, managed PostgreSQL database schemas, and interfaced with ReactJS.
        </p>
        <p>
          I engineered a production-ready enterprise ERP platform (<span className="font-semibold text-heading">IcorpERP</span>) unifying multi-tenant inventory, sales, purchasing, double-entry finance, and AI assistance, and contributed to a team-built <span className="font-semibold text-heading">Enterprise CRM Platform</span> during my Upcode internship, delivering its activities, companies, and support-ticket features.
        </p>
        <p>
          In parallel, during my Artificial Intelligence internship at Internship Studio, I engineered machine learning pipelines from fundamental principles—implementing PCA surrogate covariance algorithms for facial feature extraction and training multi-layer neural networks via backpropagation.
        </p>
      </div>

      <ul className="mt-8 flex flex-wrap gap-3">
        {socialLinks.map(({ label, handle, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-text transition-colors duration-200 hover:border-line-strong hover:text-heading"
            >
              <Icon className="size-4" aria-hidden="true" />
              <span>{label}</span>
              <span className="hidden font-mono text-xs text-muted sm:inline">{handle}</span>
              <ArrowUpRight className="size-3.5 text-muted transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-mono text-xs font-medium uppercase tracking-wider text-muted">Focus areas</h3>
      <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {focusAreas.map(({ title, description, icon: Icon }) => (
          <li key={title} className="flex gap-3">
            <Icon className="mt-0.5 size-4 shrink-0 text-accent-from" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-heading">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
