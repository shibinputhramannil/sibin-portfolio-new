import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/']
    },
    sitemap: 'https://portfolio-opal-rho-gohellvu8t.vercel.app/sitemap.xml'
  };
}
