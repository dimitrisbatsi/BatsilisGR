import type { APIRoute } from 'astro';
import { getLocalizedCollection, getPublishedPosts } from '../i18n/content';
import { homePath, postPath } from '../i18n/config';
import { UI } from '../i18n/ui';
import { AUTHOR, SITE_URL } from '../lib/seo';

/** Plain-text site summary for LLM agents (https://llmstxt.org), generated from the same content as the pages. */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(SITE_URL);
  const abs = (path: string) => new URL(path, base).href;
  const en = UI.en;

  const projects = (await getLocalizedCollection('projects', 'en')).sort((a, b) => a.entry.data.order - b.entry.data.order);
  const postsEn = await getPublishedPosts('en');
  const postsEl = await getPublishedPosts('el');

  const lines = [
    `# ${AUTHOR.name}`,
    '',
    `> ${en.meta.description} Based in ${AUTHOR.locality}, Greece; works in Greek and English.`,
    '',
    en.profile.join('\n\n'),
    '',
    `Contact: ${AUTHOR.email} · ${AUTHOR.telephone}`,
    '',
    '## Services',
    '',
    ...en.services.map((s) => `- **${s.title}**${s.upcoming ? ' (coming soon)' : ''}: ${s.body}`),
    '',
    '## Products & ventures',
    '',
    ...projects.map(({ entry }) => {
      const link = entry.data.link ? ` (${entry.data.link})` : '';
      return `- **${entry.data.title}**${link}: ${entry.data.role}, ${entry.data.period}.`;
    }),
    '',
    '## Pages',
    '',
    `- [Portfolio (Greek)](${abs(homePath('el'))}): services, products, experience and articles in Greek`,
    `- [Portfolio (English)](${abs(homePath('en'))}): the same content in English`,
    '',
    '## Articles (English)',
    '',
    ...postsEn.map(({ entry, slug }) => `- [${entry.data.title}](${abs(postPath('en', slug))}): ${entry.data.description}`),
    '',
    '## Articles (Greek)',
    '',
    ...postsEl.map(({ entry, slug }) => `- [${entry.data.title}](${abs(postPath('el', slug))}): ${entry.data.description}`),
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
