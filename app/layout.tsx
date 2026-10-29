import type { Metadata, Viewport } from 'next';
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

const title = `${site.name} | ${site.role}`;

export const viewport: Viewport = {
  themeColor: '#0a0a0a'
};

// All absolute URLs (canonical, Open Graph, Twitter) resolve against metadataBase,
// which comes from the single canonical origin in lib/site.ts.
export const metadata: Metadata = {
  title,
  description: site.description,
  keywords: [
    'Sibin P',
    'Python Full Stack Developer',
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
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  metadataBase: new URL(site.url),
  manifest: '/manifest.json',
  alternates: {
    canonical: '/'
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: 'black-translucent'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: `${site.name} - Portfolio`,
    title,
    description: site.description,
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
    title,
    description: site.description,
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
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
