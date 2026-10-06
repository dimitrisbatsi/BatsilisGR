export const LOCALES = ['el', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'el';

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
};

/** Map of locale to site-relative path for the same page in each language. */
export type Alternates = Partial<Record<Locale, string>>;

export function homePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

/** Greek posts live under /arthra/ so the legacy English /blog/* URLs can 301 to /en/blog/*. */
export function postPath(locale: Locale, slug: string): string {
  return locale === 'el' ? `/arthra/${slug}/` : `/en/blog/${slug}/`;
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
