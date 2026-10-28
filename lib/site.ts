// Single source of truth for identity, contact details, links and navigation.
// Values mirror what the live components currently render; sections adopt
// these constants as they are rebuilt.

export const site = {
  name: 'Sibin P',
  wordmark: 'SIBIN P',
  initials: 'SP',
  role: 'Full Stack Developer',
  description:
    'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
  url: 'https://sibin-p.vercel.app',
  location: {
    short: 'Malappuram, India',
    full: 'Malappuram, Perinthalmanna, Kerala, India'
  },
  portrait: {
    src: '/images/sibin.png',
    alt: 'Sibin P - Full Stack Developer',
    width: 1254,
    height: 1254
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

const RESUME_VERSION = '20260923';

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
