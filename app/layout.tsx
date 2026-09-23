import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
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
  metadataBase: new URL('https://sibin-p.vercel.app'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sibin-p.vercel.app',
    siteName: 'Sibin P - Portfolio',
    title: 'Sibin P | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
    images: [
      {
        url: '/images/sibin.png',
        width: 1200,
        height: 1200,
        alt: 'Sibin P - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sibin P | Full Stack Developer',
    description:
      'Full Stack Developer specializing in Python, Django, REST APIs, React, PostgreSQL, ERP/CRM systems and applied AI.',
    images: ['/images/sibin.png']
  },
  icons: {
    icon: '/favicon.ico'
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
    url: 'https://sibin-p.vercel.app',
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
