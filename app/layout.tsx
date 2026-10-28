import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { FloatingControls } from '@/components/layout/FloatingControls';
import { site } from '@/lib/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

// Editorial accent face, used in the hero greeting and headline (above the fold).
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif']
});

export const metadata: Metadata = {
  title: 'Sibin P | Full Stack Developer',
  description:
    'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
  keywords: [
    'Sibin P',
    'Full Stack Developer',
    'Python Developer',
    'Django REST Framework',
    'PostgreSQL',
    'React',
    'Next.js',
    'ERP CRM Developer',
    'Machine Learning',
    'AI Engineer',
    'Software Engineer India'
  ],
  authors: [{ name: 'Sibin P', url: 'https://github.com/shibinputhramannil' }],
  creator: 'Sibin P',
  metadataBase: new URL('https://portfolio-opal-rho-gohellvu8t.vercel.app'),
  manifest: '/manifest.json',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-opal-rho-gohellvu8t.vercel.app',
    siteName: 'Sibin P - Portfolio',
    title: 'Sibin P | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
    images: [
      {
        url: site.ogImage.src,
        width: site.ogImage.width,
        height: site.ogImage.height,
        alt: site.ogImage.alt
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sibin P | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
    images: [{ url: site.ogImage.src, alt: site.ogImage.alt }]
  },
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sibin P',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
    url: 'https://portfolio-opal-rho-gohellvu8t.vercel.app',
    sameAs: ['https://github.com/shibinputhramannil'],
    knowsAbout: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'React',
      'Next.js',
      'REST APIs',
      'Machine Learning',
      'Principal Component Analysis',
      'Artificial Neural Networks'
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="theme-color" content="#09090b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingControls />
        </ThemeProvider>
      </body>
    </html>
  );
}
