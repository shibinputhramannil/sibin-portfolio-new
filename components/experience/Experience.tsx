import * as React from 'react';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="accent">Experience</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Professional engineering journey.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Documented internships demonstrating real software contributions, client requirements, and machine learning development.
          </p>
        </div>

        <div className="mt-12 relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-2.75 top-1.5 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-950 bg-indigo-600 dark:bg-indigo-500 shadow-xs group-hover:scale-110 transition-transform" />

              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                {/* Header: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                    Documented Contributions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {exp.keyDeliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-5 pt-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
