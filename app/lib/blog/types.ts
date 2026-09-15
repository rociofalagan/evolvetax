import type { Lang } from '../i18n';
import type { PostKey, ServiceKey } from '../routes';

// Bloques de contenido de un artículo. Los textos admiten **negrita** y [enlaces](/ruta).
export type PostBlock =
  | { p: string }
  | { h2: string; id: string }
  | { h3: string }
  | { list: (string | [string, string])[] }
  | { olist: string[] }
  | { callout: { title: string; text: string } }
  | { table: { head: string[]; rows: string[][] } };

export type CategoryKey = 'uae' | 'spain' | 'structures' | 'vat' | 'residency';

export type PostContent = {
  metaTitle: string;
  title: string;
  excerpt: string;
  tags: string[];
  takeaways: string[];
  body: PostBlock[];
  faq: { q: string; a: string }[];
};

export type PostMeta = {
  key: PostKey;
  category: CategoryKey;
  published: string;
  updated: string;
  relatedServices: ServiceKey[];
  relatedPosts: PostKey[];
};

export type Localized<T> = Record<Lang, T>;
