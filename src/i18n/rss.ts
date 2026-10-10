import rss from '@astrojs/rss';
import { LOCALE_META, postPath, type Locale } from './config';
import { getPublishedPosts } from './content';
import { UI } from './ui';
import { SITE_URL } from '../lib/seo';

export async function buildFeed(locale: Locale, site: URL | undefined): Promise<Response> {
  const t = UI[locale];
  const posts = await getPublishedPosts(locale);
  return rss({
    title: t.blog.rssTitle,
    description: t.blog.rssDescription,
    site: site ?? SITE_URL,
    items: posts.map(({ entry, slug }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: postPath(locale, slug),
    })),
    customData: `<language>${LOCALE_META[locale].htmlLang}</language>`,
  });
}
