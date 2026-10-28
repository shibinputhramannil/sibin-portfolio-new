'use client';

import * as React from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon } from '@/components/ui/icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { GradientButton } from '@/components/ui/GradientButton';
import { Container } from '@/components/ui/Container';
import { navItems, resume, site, social } from '@/lib/site';
import { cn } from '@/lib/utils';

// The wordmark already links to #home, so the desktop bar omits it to fit
// the 64rem container; the menu and footer keep the full list.
const desktopNavItems = navItems.filter((item) => item.href !== '#home');
const DESKTOP_QUERY = '(min-width: 1024px)';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const headerRef = React.useRef<HTMLElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && scrollPosition >= sectionEl.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // While the menu is open: Escape closes it and returns focus to the toggle,
  // clicking outside the header closes it, and widening to desktop closes it.
  React.useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    desktop.addEventListener('change', handleDesktop);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      desktop.removeEventListener('change', handleDesktop);
    };
  }, [menuOpen]);

  const isActive = (href: string) => activeSection === href.substring(1);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,padding] duration-300',
        scrolled || menuOpen
          ? 'border-line bg-background/85 py-3 backdrop-blur-md'
          : 'border-transparent bg-transparent py-5'
      )}
    >
      <a
        href="#main-content"
        className="sr-only rounded-lg bg-heading px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to content
      </a>

      <Container className="flex items-center justify-between gap-4">
        <a
          href="#home"
          aria-label={`${site.name}, back to top`}
          className="group flex shrink-0 items-center gap-2.5 rounded-lg font-semibold tracking-tight text-heading"
        >
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-lg bg-heading font-mono text-sm text-background transition-transform duration-200 motion-safe:group-hover:scale-105"
          >
            {site.initials}
          </span>
          <span className="text-base leading-none">{site.wordmark}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {desktopNavItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive(item.href) ? 'location' : undefined}
                  className={cn(
                    'rounded-lg px-2.5 py-1.5 text-sm transition-colors duration-200',
                    isActive(item.href)
                      ? 'bg-surface-2 text-heading'
                      : 'text-muted hover:bg-surface hover:text-heading'
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={social.github.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.github.label} profile of ${site.name} (opens in a new tab)`}
            className="hidden rounded-lg p-2 text-muted transition-colors duration-200 hover:bg-surface hover:text-heading sm:inline-flex"
          >
            <GithubIcon className="size-4" aria-hidden="true" />
          </a>

          <a
            href={resume.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-medium text-text transition-colors duration-200 hover:border-line-strong hover:text-heading sm:inline-flex"
          >
            <FileText className="size-3.5" aria-hidden="true" />
            <span>Resume</span>
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>

          <ThemeToggle />

          <GradientButton href="#contact" variant="primary" size="sm" className="hidden sm:inline-flex">
            <span>Contact</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </GradientButton>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex cursor-pointer rounded-lg border border-line p-2 text-text transition-colors duration-200 hover:bg-surface hover:text-heading lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div
          id="site-menu"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-background lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Primary">
              <ul className="grid gap-1 sm:grid-cols-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(item.href) ? 'location' : undefined}
                      className={cn(
                        'block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200',
                        isActive(item.href)
                          ? 'bg-surface-2 text-heading'
                          : 'text-text hover:bg-surface hover:text-heading'
                      )}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4 sm:hidden">
              <a
                href={social.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line py-2 text-xs font-medium text-text"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
                <span>{social.github.label}</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href={resume.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-heading py-2 text-xs font-medium text-background"
              >
                <FileText className="size-4" aria-hidden="true" />
                <span>Resume</span>
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
