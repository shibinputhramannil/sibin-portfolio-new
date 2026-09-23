'use client';

import * as React from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from './ContactForm';

export function Contact() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied' | 'error'>('idle');

  const email = 'puthramannilshibin@gmail.com';
  const phone = '+91 8590675644';
  const phoneTel = 'tel:+918590675644';
  const emailMailtoCTA = 'mailto:puthramannilshibin@gmail.com?subject=Portfolio%20Contact';
  const location = 'Malappuram, Perinthalmanna, Kerala, India';
  const github = 'https://github.com/shibinputhramannil';

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 2500);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopyStatus('copied');
          setTimeout(() => setCopyStatus('idle'), 2500);
        } else {
          setCopyStatus('error');
          setTimeout(() => setCopyStatus('idle'), 2500);
        }
      }
    } catch {
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50/70 dark:bg-zinc-900/40 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <Badge variant="accent">Contact & Collaboration</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Let&apos;s build something useful.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Whether you have a full stack engineering opportunity, backend project, or technical question, feel free to reach out directly via email or phone.
          </p>

          {/* Primary Quick Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={emailMailtoCTA}
              aria-label="Send email to Sibin P"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-xs transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <a
              href={phoneTel}
              aria-label="Call Sibin P"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-semibold shadow-xs transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Me</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Send Email and Copy Buttons */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Direct Email
                    </span>
                    <div>
                      <a
                        href={`mailto:${email}`}
                        aria-label="Send email to Sibin P"
                        className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
                <a
                  href={emailMailtoCTA}
                  aria-label="Send email to Sibin P"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  {copyStatus === 'copied' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email copied</span>
                    </>
                  ) : copyStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                      <span className="text-rose-500">Failed to copy</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card with Call Me button */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <div className="flex items-center justify-between gap-2 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Phone Contact
                    </span>
                    <div>
                      <a
                        href={phoneTel}
                        aria-label="Call Sibin P"
                        className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <a
                  href={phoneTel}
                  aria-label="Call Sibin P"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Me</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Location
                  </span>
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {location}
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Profile Link Card */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Sibin P GitHub Profile"
              className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:border-indigo-400/80 dark:hover:border-indigo-600/80 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Open Source Repositories
                  </span>
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    github.com/shibinputhramannil
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right Column: Direct Email Composer (Launches Default Email App with No Fake Form Submission) */}
          <div className="lg:col-span-7 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white mb-2">
              Direct Email Message
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              Compose your message below. Clicking &ldquo;Send Email&rdquo; will open your default email application with <span className="font-mono text-zinc-700 dark:text-zinc-300 font-semibold">{email}</span> pre-filled as recipient.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
