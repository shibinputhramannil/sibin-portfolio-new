import { site, social } from '@/lib/site';

/**
 * schema.org graph for the home page: the WebSite, the ProfilePage it
 * represents, and the Person that page is about. All URLs derive from the
 * canonical origin in lib/site.ts.
 */
export function homeJsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.url,
        name: `${site.name} - Portfolio`,
        inLanguage: 'en'
      },
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/#profile`,
        url: site.url,
        name: `${site.name} | ${site.role}`,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId }
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        jobTitle: site.role,
        description: site.description,
        url: site.url,
        image: `${site.url}${site.portrait.src}`,
        homeLocation: { '@type': 'Place', name: site.location.full },
        sameAs: [social.github.href, social.linkedin.href],
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
      }
    ]
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" so content cannot close the tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
