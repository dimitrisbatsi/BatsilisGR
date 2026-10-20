import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content';
import { LOCALES, isLocale, isPostLocale, type Locale, type PostLocale } from './config';

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
    throw new Error(`Content entry "${id}" must live in a locale folder (${LOCALES.map((l) => `${l}/`).join(', ')}).`);
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

/** Most recent of publication and revision date; drives ordering and listings. */
export function lastModified(post: CollectionEntry<'posts'>): Date {
  return post.data.updatedDate ?? post.data.pubDate;
}

export async function getPublishedPosts(locale: PostLocale): Promise<LocalizedEntry<'posts'>[]> {
  const posts = await getLocalizedCollection('posts', locale);
  return posts
    .filter(({ entry }) => !entry.data.draft)
    .sort(
      (a, b) =>
        lastModified(b.entry).getTime() - lastModified(a.entry).getTime() ||
        b.entry.data.pubDate.getTime() - a.entry.data.pubDate.getTime(),
    );
}

/** Locales in which a published translation of the given post exists. */
export async function getPostLocales(slug: string): Promise<PostLocale[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts
    .map((p) => splitId(p.id))
    .filter((p) => p.slug === slug)
    .map(({ locale }) => {
      if (!isPostLocale(locale)) {
        throw new Error(`Post "${slug}" is in ${locale}/, which has no article routes; articles ship in el/ and en/ only.`);
      }
      return locale;
    });
}
