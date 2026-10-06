export const SITE_URL = 'https://www.batsilis.gr';

export const AUTHOR = {
  name: 'Dimitrios P. Batsilis',
  jobTitle: 'Digital Product & Solutions Architect',
  email: 'hello@chilistudio.gr',
  telephone: '+306947246710',
  locality: 'Thessaloniki',
  country: 'GR',
  /** Profiles of this same person on other platforms. */
  sameAs: ['https://www.linkedin.com/in/dbatsilis/', 'https://github.com/dimitrisbatsi'],
  knowsAbout: [
    'Business process digitalisation',
    'Workflow automation',
    'Internal tools',
    'Data engineering',
    'ETL pipelines',
    'Business intelligence',
    'Power BI',
    'Systems integration',
    'ERP integration',
    'Jira',
    'Solutions architecture',
    'Multi-tenant SaaS',
    '.NET',
    'Astro',
    'AI agents',
  ],
} as const;

export const STUDIO = {
  name: 'Chili Studio',
  url: 'https://www.chilistudio.gr/',
} as const;

/** Bing flags titles above ~70 characters and Google truncates near 60; stay within the stricter bound. */
export const MAX_TITLE_LENGTH = 60;

/** Appends the author name as a brand suffix only when the result still fits MAX_TITLE_LENGTH. */
export function documentTitle(title: string): string {
  const branded = `${title} | ${AUTHOR.name}`;
  return branded.length <= MAX_TITLE_LENGTH ? branded : title;
}

export interface OgImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const DEFAULT_OG_IMAGE: OgImage = {
  src: '/og-default.png',
  alt: `${AUTHOR.name} — ${AUTHOR.jobTitle}`,
  width: 1200,
  height: 630,
};

export type JsonLd = Record<string, unknown>;

const nodeId = (site: URL, fragment: string) => new URL(`/#${fragment}`, site).href;

export function personSchema(site: URL, description?: string): JsonLd {
  return {
    '@type': 'Person',
    '@id': nodeId(site, 'person'),
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    ...(description ? { description } : {}),
    url: new URL('/', site).href,
    email: `mailto:${AUTHOR.email}`,
    telephone: AUTHOR.telephone,
    image: new URL('/batsilis-logo.png', site).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: AUTHOR.locality,
      addressCountry: AUTHOR.country,
    },
    knowsAbout: [...AUTHOR.knowsAbout],
    knowsLanguage: ['el', 'en'],
    worksFor: { '@id': nodeId(site, 'studio') },
    sameAs: [...AUTHOR.sameAs],
  };
}

export function studioSchema(site: URL): JsonLd {
  return {
    '@type': 'Organization',
    '@id': nodeId(site, 'studio'),
    name: STUDIO.name,
    url: STUDIO.url,
    founder: { '@id': nodeId(site, 'person') },
  };
}

export function websiteSchema(site: URL, name: string, languages: readonly string[]): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': nodeId(site, 'website'),
    url: new URL('/', site).href,
    name,
    inLanguage: [...languages],
    publisher: { '@id': nodeId(site, 'person') },
  };
}

export function profilePageSchema(site: URL, pageUrl: string, language: string): JsonLd {
  return {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    inLanguage: language,
    isPartOf: { '@id': nodeId(site, 'website') },
    mainEntity: { '@id': nodeId(site, 'person') },
  };
}

export interface ServiceSummary {
  name: string;
  description: string;
}

/** Services offered by the person, as a service-area business without a storefront. */
export function professionalServiceSchema(
  site: URL,
  pageUrl: string,
  language: string,
  name: string,
  description: string,
  services: ServiceSummary[],
): JsonLd {
  return {
    '@type': 'ProfessionalService',
    '@id': `${pageUrl}#service`,
    name,
    description,
    url: pageUrl,
    inLanguage: language,
    email: AUTHOR.email,
    telephone: AUTHOR.telephone,
    image: new URL(DEFAULT_OG_IMAGE.src, site).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: AUTHOR.locality,
      addressCountry: AUTHOR.country,
    },
    areaServed: { '@type': 'Country', name: 'Greece' },
    founder: { '@id': nodeId(site, 'person') },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.name, description: service.description },
      })),
    },
  };
}

/** Serialises JSON-LD for inline <script> injection; escapes `<` so content cannot close the tag. */
export function serializeJsonLd(nodes: JsonLd[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
