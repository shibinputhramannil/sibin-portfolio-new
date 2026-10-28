import { MetadataRoute } from 'next';
import { resume, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${baseUrl}${resume.htmlPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}${resume.pdfPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];
}
