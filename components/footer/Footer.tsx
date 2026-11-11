import * as React from 'react';
import { Mail, Phone, ArrowUpRight, Globe } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { Container } from '@/components/ui/Container';
import { contact, navItems, site, social, telHref } from '@/lib/site';

export function Footer() {
  const currentYear = 2026;

  return (
    // Extra bottom padding keeps the floating controls clear of the last row until
    // the viewport is wide enough (xl) for them to sit beside the 64rem container.
    <footer className="border-t border-line pb-28 pt-12 xl:pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-10 md:grid-cols-12 md:gap-8">
          <div className="space-y-3 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex size-7 items-center justify-center rounded-lg bg-heading font-mono text-xs font-bold text-background"
              >
                {site.initials}
              </span>
              <span className="text-base font-semibold tracking-tight text-heading">{site.wordmark}</span>
            </div>
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted">{site.role}</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Python Full Stack Developer specializing in Django REST Framework, React, and PostgreSQL. Building practical, scalable, and maintainable software.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4 lg:col-span-3">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Navigation</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-text transition-colors duration-200 hover:text-heading">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Wide enough from lg for the email to stay on one line. */}
          <div className="md:col-span-3 lg:col-span-4">
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Direct Contact</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-text transition-colors duration-200 hover:text-heading"
                >
                  <Mail className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
                  {/* When the column is narrow, wrap at the @ rather than mid-word. */}
                  <span className="min-w-0 break-words">
                    {contact.email.split('@')[0]}
                    <wbr />@{contact.email.split('@')[1]}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={telHref}
                  className="flex items-center gap-2 text-text transition-colors duration-200 hover:text-heading"
                >
                  <Phone className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
                  <span>{contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={social.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text transition-colors duration-200 hover:text-heading"
                >
                  <GithubIcon className="size-3.5 shrink-0" aria-hidden="true" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="size-3 text-muted" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={social.website.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text transition-colors duration-200 hover:text-heading"
                >
                  <Globe className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
                  <span>Personal Website</span>
                  <ArrowUpRight className="size-3 text-muted" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted sm:flex-row">
          <p>&copy; {currentYear} {site.wordmark}. All rights reserved.</p>
          <p className="flex items-center gap-3 font-mono text-[11px]">
            <span>Next.js App Router</span>
            <span aria-hidden="true">•</span>
            <span>TypeScript</span>
            <span aria-hidden="true">•</span>
            <span>Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
