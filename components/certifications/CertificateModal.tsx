'use client';

import * as React from 'react';
import { CertificationItem } from '@/types';
import { X, Award, CheckCircle2, Calendar, Building2, ShieldCheck, FileCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: CertificateModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-6 sm:p-8 text-left transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Card Header */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="success">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>{cert.status}</span>
          </Badge>
          {cert.credentialId && (
            <Badge variant="neutral">
              <span className="font-mono text-[11px]">ID: {cert.credentialId}</span>
            </Badge>
          )}
        </div>

        {/* Visual Certificate Frame */}
        <div className="rounded-2xl border-2 border-indigo-100 dark:border-indigo-950/80 bg-gradient-to-br from-indigo-50/40 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-indigo-950/20 p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-start justify-between gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                Official Credential
              </span>
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {cert.issueDate}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-1">
            <div className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
              Certificate of Completion
            </div>
            <h3
              id="cert-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white"
            >
              {cert.title}
            </h3>
            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 pt-1">
              Issued to: <span className="text-zinc-950 dark:text-white font-bold">SIBIN P</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{cert.period}</span>
            </div>
          </div>
        </div>

        {/* Certificate Overview */}
        <div className="mt-6">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {cert.description}
          </p>
        </div>

        {/* Topics Documented */}
        <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Verified Topics & Curriculum</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cert.topics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
