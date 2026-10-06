export const SITE_URL = 'https://batsilis.gr';

export const AUTHOR = {
  name: 'Dimitrios P. Batsilis',
  jobTitle: 'Digital Product & Solutions Architect',
  email: 'hello@chilistudio.gr',
  locality: 'Thessaloniki',
  country: 'GR',
  sameAs: ['https://github.com/dimitrisbatsi', 'https://www.chilistudio.gr/'],
} as const;

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

export function personSchema(site: URL): JsonLd {
  return {
    '@type': 'Person',
    '@id': new URL('/#person', site).href,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    url: new URL('/', site).href,
    email: `mailto:${AUTHOR.email}`,
    image: new URL('/batsilis-logo.png', site).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: AUTHOR.locality,
      addressCountry: AUTHOR.country,
    },
    sameAs: [...AUTHOR.sameAs],
  };
}

/** Serialises JSON-LD for inline <script> injection; escapes `<` so content cannot close the tag. */
export function serializeJsonLd(nodes: JsonLd[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
