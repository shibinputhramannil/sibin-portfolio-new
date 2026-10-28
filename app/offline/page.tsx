import { WifiOff, FileText, ArrowLeft } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';
import { resume, site } from '@/lib/site';

export const metadata = {
  title: 'Offline Mode | Sibin P - Full Stack Developer',
  description: 'You are currently browsing the portfolio offline. Previously cached content remains available.',
  // A service-worker fallback, not content: keep it out of search results, and
  // do not inherit the home page's canonical (noindex + foreign canonical conflict).
  robots: { index: false, follow: true },
  alternates: { canonical: '/offline' }
};

// Served by public/sw.js when a page cannot be fetched and is not in the cache.
// Links are plain <a> elements so they trigger full navigations, which the
// service worker can answer from its cache while offline.
export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-gutter py-16">
      <div className="w-full max-w-lg">
        <WifiOff className="size-8 text-warning" aria-hidden="true" />
        <p className="mt-6 font-mono text-xs font-medium uppercase tracking-wider text-muted">
          {site.name} · Offline
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
          You&apos;re <span className="font-serif font-normal italic">offline.</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text">
          This page isn&apos;t available without a connection. The portfolio home page and resume are saved on this device the first time the site loads, so they usually still open.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <GradientButton href="/" variant="primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Return to Portfolio</span>
          </GradientButton>
          <GradientButton href={resume.pdfPath} external>
            <FileText className="size-4" aria-hidden="true" />
            <span>Open Resume (PDF)</span>
            <span className="sr-only">(opens in a new tab)</span>
          </GradientButton>
        </div>

        <p className="mt-6 text-sm text-muted">
          Prefer a web page?{' '}
          <a
            href={resume.htmlPath}
            className="text-heading underline decoration-line-strong underline-offset-4 hover:decoration-accent-to"
          >
            Open the HTML resume
          </a>
          .
        </p>

        <p className="mt-10 border-t border-line pt-6 text-xs leading-relaxed text-muted">
          GitHub, LinkedIn, email and phone links need a connection or an app on your device. Reconnect and reload to see the latest version of the portfolio.
        </p>
      </div>
    </main>
  );
}
