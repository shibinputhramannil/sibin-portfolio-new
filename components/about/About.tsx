import * as React from 'react';
import { Database, Server, Cpu, ShieldCheck, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export function About() {
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
      description: 'Contributing to ongoing enterprise resource planning modules including company, contact, and lead management.',
      icon: ShieldCheck
    },
    {
      title: 'Applied Machine Learning & AI',
      description: 'Developing mathematical feature extraction pipelines (PCA) and artificial neural network (ANN) classifiers.',
      icon: Cpu
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50/70 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <Badge variant="accent">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Practical engineering grounded in backend fundamentals.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I am a Full Stack Developer with a solid foundation in backend development, relational databases, applied artificial intelligence, and client-side web technologies. My work centers on creating practical, maintainable applications that solve concrete business operational requirements.
          </p>
        </div>

        {/* Two-column detailed summary */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              My hands-on experience includes developing live CRM systems at Upcode Software Labs, where I worked directly with business specifications, implemented Django REST Framework endpoints, managed PostgreSQL database schemas, and interfaced with ReactJS.
            </p>
            <p>
              Currently, I am actively contributing to an ongoing enterprise ERP and CRM platform (<span className="text-zinc-900 dark:text-zinc-200 font-semibold">IcorpERP</span>) focused on company hierarchies, tenant isolation, contacts, and lead progression pipelines, with planned artificial intelligence workflow integrations.
            </p>
            <p>
              In parallel, during my Artificial Intelligence internship at Internship Studio, I engineered machine learning pipelines from fundamental principles—implementing PCA surrogate covariance algorithms for facial feature extraction and training multi-layer neural networks via backpropagation.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <Badge variant="neutral">Python</Badge>
              <Badge variant="neutral">Django REST</Badge>
              <Badge variant="neutral">PostgreSQL</Badge>
              <Badge variant="neutral">React</Badge>
              <Badge variant="neutral">PCA / ANN</Badge>
              <Badge variant="neutral">Postman</Badge>
              <Badge variant="neutral">Git</Badge>
            </div>
          </div>

          {/* Right column: Core technical competencies grid */}
          <div className="lg:col-span-6 space-y-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {area.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
