export const LOCALES = ['el', 'en', 'de'] as const;

export type Locale = (typeof LOCALES)[number];

/** Locale served at the site root, without a path prefix. */
export const DEFAULT_LOCALE: Locale = 'el';

/** hreflang x-default target for visitors whose language has no version: English, since the site targets clients and roles abroad. */
export const X_DEFAULT_LOCALE: Locale = 'en';

/** Locales with their own articles. German pages link to the English ones, since all collaboration runs in Greek or English. */
export const POST_LOCALES = ['el', 'en'] as const satisfies readonly Locale[];

export type PostLocale = (typeof POST_LOCALES)[number];

/** Languages the author speaks with clients; deliberately narrower than the languages the site is published in. */
export const WORKING_LANGUAGES = ['el', 'en'] as const satisfies readonly Locale[];

/** Locale whose articles a page in the given locale lists and links to. */
export function postLocaleFor(locale: Locale): PostLocale {
  return locale === 'el' ? 'el' : 'en';
}

interface LocaleMeta {
  /** BCP 47 tag for <html lang> and hreflang. */
  htmlLang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** Intl locale for date formatting. */
  dateLocale: string;
  /** Short label for the language switcher. */
  label: string;
  /** Full language name, in that language. */
  name: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  el: { htmlLang: 'el', ogLocale: 'el_GR', dateLocale: 'el-GR', label: 'ΕΛ', name: 'Ελληνικά' },
  en: { htmlLang: 'en', ogLocale: 'en_US', dateLocale: 'en-US', label: 'EN', name: 'English' },
  de: { htmlLang: 'de', ogLocale: 'de_DE', dateLocale: 'de-DE', label: 'DE', name: 'Deutsch' },
};

/** Map of locale to site-relative path for the same page in each language. */
export type Alternates = Partial<Record<Locale, string>>;

export function homePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

/** Greek posts live under /arthra/ so the legacy English /blog/* URLs can 301 to /en/blog/*. */
export function postPath(locale: PostLocale, slug: string): string {
  return locale === 'el' ? `/arthra/${slug}/` : `/en/blog/${slug}/`;
}

export function blogIndexPath(locale: PostLocale): string {
  return locale === 'el' ? '/arthra/' : '/en/blog/';
}

export function rssPath(locale: PostLocale): string {
  return locale === DEFAULT_LOCALE ? '/rss.xml' : `/${locale}/rss.xml`;
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isPostLocale(value: Locale): value is PostLocale {
  return (POST_LOCALES as readonly Locale[]).includes(value);
}
