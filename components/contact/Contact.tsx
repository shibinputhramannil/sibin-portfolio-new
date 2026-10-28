'use client';

import * as React from 'react';
import { Mail, Phone, MapPin, Copy, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons';
import { Section } from '@/components/ui/Section';
import { Accent } from '@/components/ui/SectionHeading';
import { GradientButton } from '@/components/ui/GradientButton';
import { contact, mailtoHref, site, social, telHref } from '@/lib/site';
import { copyText } from '@/lib/clipboard';
import { ContactForm } from './ContactForm';

const rowLabel = 'font-mono text-xs uppercase tracking-wider text-muted';

export function Contact() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopyEmail = async () => {
    setCopyStatus((await copyText(contact.email)) ? 'copied' : 'error');
    setTimeout(() => setCopyStatus('idle'), 2500);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact & Collaboration"
      title={
        <>
          Let&apos;s build something <Accent>useful.</Accent>
        </>
      }
      description="Whether you have a full stack engineering opportunity, backend project, or technical question, feel free to reach out directly via email or phone."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div>
          <div className="flex flex-wrap gap-3">
            <GradientButton href={mailtoHref} variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              <span>Send Email</span>
            </GradientButton>
            <GradientButton href={telHref}>
              <Phone className="size-4" aria-hidden="true" />
              <span>Call Me</span>
            </GradientButton>
          </div>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            <li className="py-4">
              <p className={rowLabel}>Email</p>
              <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-sm font-medium text-heading underline decoration-line-strong underline-offset-4 hover:decoration-accent-to"
                >
                  {contact.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line px-2.5 py-1 text-xs font-medium text-text transition-colors duration-200 hover:bg-surface hover:text-heading"
                >
                  {copyStatus === 'copied' ? (
                    <Check className="size-3.5 text-success" aria-hidden="true" />
                  ) : copyStatus === 'error' ? (
                    <AlertCircle className="size-3.5 text-danger" aria-hidden="true" />
                  ) : (
                    <Copy className="size-3.5" aria-hidden="true" />
                  )}
                  <span aria-live="polite">
                    {copyStatus === 'copied' ? 'Email copied' : copyStatus === 'error' ? 'Failed to copy' : 'Copy email'}
                  </span>
                </button>
              </div>
            </li>
            <li className="py-4">
              <p className={rowLabel}>Phone</p>
              <a href={telHref} className="mt-1 inline-block text-sm font-medium text-heading underline decoration-line-strong underline-offset-4 hover:decoration-accent-to">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="py-4">
              <p className={rowLabel}>Location</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-heading">
                <MapPin className="size-3.5 text-muted" aria-hidden="true" />
                {site.location.full}
              </p>
            </li>
            {[
              { ...social.github, Icon: GithubIcon },
              { ...social.linkedin, Icon: LinkedinIcon }
            ].map(({ label, handle, href, Icon }) => (
              <li key={href} className="py-4">
                <p className={rowLabel}>{label}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-1 inline-flex items-center gap-2 text-sm font-medium text-heading"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="underline decoration-line-strong underline-offset-4 group-hover:decoration-accent-to">{handle}</span>
                  <ArrowUpRight className="size-3.5 text-muted" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-heading">Direct Email Message</h3>
          <p className="mb-6 mt-2 text-sm text-muted">
            Compose your message below and it will open in your default email app.
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
