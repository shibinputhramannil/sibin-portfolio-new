'use client';

import * as React from 'react';
import { certifications } from '@/data/certifications';
import { CertificationItem } from '@/types';
import { CertificateModal } from './CertificateModal';
import { Badge } from '@/components/ui/Badge';
import { Award, Calendar, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export function Certifications() {
  const [selectedCert, setSelectedCert] = React.useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 bg-zinc-50/70 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="accent">Certifications</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Verified qualifications & training.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Formal technical certifications validating full stack Python web engineering, CRM system development, and artificial intelligence implementations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between shadow-xs hover:border-indigo-400/80 dark:hover:border-indigo-600/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge variant="success">
                    <span>{cert.status}</span>
                  </Badge>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>

                <div className="mt-2 space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 font-medium text-zinc-700 dark:text-zinc-300">
                    <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-1.5">
                  {cert.topics.slice(0, 3).map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                  {cert.topics.length > 3 && (
                    <div className="text-[11px] text-zinc-400 font-mono">
                      +{cert.topics.length - 3} more topics
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span>View Certificate Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}
