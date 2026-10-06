import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import { isLocale, type Locale } from './config';

export interface LocalizedEntry<C extends CollectionKey> {
  entry: CollectionEntry<C>;
  /** Entry id without the locale folder, shared by translations of the same item. */
  slug: string;
  locale: Locale;
}

/** Content lives in `<collection>/<locale>/<slug>.md`; the glob loader yields ids like `en/clarif`. */
function splitId(id: string): { locale: Locale; slug: string } {
  const [prefix, ...rest] = id.split('/');
  if (!prefix || !isLocale(prefix) || rest.length === 0) {
    throw new Error(`Content entry "${id}" must live in a locale folder (el/ or en/).`);
  }
  return { locale: prefix, slug: rest.join('/') };
}

export async function getLocalizedCollection<C extends CollectionKey>(
  collection: C,
  locale: Locale,
): Promise<LocalizedEntry<C>[]> {
  const entries = (await getCollection(collection)) as CollectionEntry<C>[];
  return entries
    .map((entry) => ({ entry, ...splitId(entry.id) }))
    .filter((item) => item.locale === locale);
}

export async function getPublishedPosts(locale: Locale): Promise<LocalizedEntry<'posts'>[]> {
  const posts = await getLocalizedCollection('posts', locale);
  return posts
    .filter(({ entry }) => !entry.data.draft)
    .sort((a, b) => b.entry.data.pubDate.getTime() - a.entry.data.pubDate.getTime());
}

/** Locales in which a published translation of the given post exists. */
export async function getPostLocales(slug: string): Promise<Locale[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.map((p) => splitId(p.id)).filter((p) => p.slug === slug).map((p) => p.locale);
}
