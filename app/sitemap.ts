import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-shibin1.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/resume/sibin-p-resume.html`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
  ];
}
