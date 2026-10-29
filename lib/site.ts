// Single source of truth for identity, contact details, links and navigation.
// Values mirror what the live components currently render; sections adopt
// these constants as they are rebuilt.

export const site = {
  name: 'Sibin P',
  wordmark: 'SIBIN P',
  initials: 'SP',
  // Title and location follow the CV.
  role: 'Python Full Stack Developer',
  description:
    'Python Full Stack Developer specializing in Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
  url: 'https://sibin-p.vercel.app',
  location: {
    short: 'Calicut, India',
    full: 'Calicut, Kerala, India'
  },
  // 1000px WebP (q90, ~67 KB) derived from the untouched original /images/sibin.png (1254px, ~1.7 MB).
  portrait: {
    src: '/images/sibin.webp',
    original: '/images/sibin.png',
    alt: 'Sibin P, Python Full Stack Developer',
    width: 1000,
    height: 1000
  },
  ogImage: {
    src: '/images/og-image.png',
    alt: 'Sibin P, Python Full Stack Developer, Calicut: Python, Django REST Framework, PostgreSQL and React',
    width: 1200,
    height: 630
  }
} as const;

export const contact = {
  email: 'puthramannilshibin@gmail.com',
  emailSubject: 'Portfolio Contact',
  phoneDisplay: '+91 8590675644',
  phoneE164: '+918590675644'
} as const;

export const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`;
export const telHref = `tel:${contact.phoneE164}`;

export const social = {
  github: {
    label: 'GitHub',
    handle: 'github.com/shibinputhramannil',
    href: 'https://github.com/shibinputhramannil'
  },
  // Same profile URL as the published resume (public/resume/sibin-p-resume.html).
  linkedin: {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/shibi-ii-a23366437',
    href: 'https://www.linkedin.com/in/shibi-ii-a23366437/'
  }
} as const;

const RESUME_VERSION = '20261028-2';

export const resume = {
  pdfPath: '/resume/sibin-p-full-stack-developer-resume.pdf',
  pdfHref: `/resume/sibin-p-full-stack-developer-resume.pdf?v=${RESUME_VERSION}`,
  downloadName: 'sibin-p-full-stack-developer-resume.pdf',
  htmlPath: '/resume/sibin-p-resume.html'
} as const;

export interface NavItem {
  name: string;
  href: `#${string}`;
}

export const navItems: readonly NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];
