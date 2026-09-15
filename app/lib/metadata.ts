import type { Metadata, Viewport } from 'next';
import { dictionaries, type Lang } from './i18n';
import { site } from './site';
import { blogPath, legalPaths, postPath, servicePath, type LegalKey, type PostKey, type ServiceKey } from './routes';
import { legalDocs } from './legal';
import { blogUi, getPost } from './blog';
import { services } from './services';

export const viewport: Viewport = {
  themeColor: '#161211',
};

// Metadatos comunes a todas las páginas de un idioma (lo definen los layouts).
export function baseMetadata(lang: Lang): Metadata {
  const t = dictionaries[lang].meta;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: '%s | Evolve Tax' },
    description: t.description,
    applicationName: site.name,
    authors: [{ name: site.founderName, url: site.linkedinFounder }],
    creator: site.name,
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      type: 'website',
      siteName: site.name,
      locale: t.locale,
      alternateLocale: lang === 'en' ? ['es_ES'] : ['en_GB'],
    },
    twitter: { card: 'summary_large_image' },
  };
}

// Metadatos de cada landing de servicio, con canonical y hreflang entre idiomas.
export function serviceMetadata(key: ServiceKey, lang: Lang): Metadata {
  const t = services[key][lang].meta;
  const path = servicePath(key, lang);
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: {
      canonical: path,
      languages: { en: servicePath(key, 'en'), es: servicePath(key, 'es'), 'x-default': servicePath(key, 'en') },
    },
    openGraph: { title: t.title, description: t.description, url: path },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description },
  };
}

// Metadatos de las páginas legales.
export function legalMetadata(key: LegalKey, lang: Lang): Metadata {
  const doc = legalDocs[key][lang];
  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: legalPaths[key][lang],
      languages: { en: legalPaths[key].en, es: legalPaths[key].es, 'x-default': legalPaths[key].en },
    },
  };
}

// Metadatos de la home de cada idioma, con canonical y hreflang.
export function homeMetadata(lang: Lang): Metadata {
  const t = dictionaries[lang].meta;
  const path = lang === 'en' ? '/' : '/es';
  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: {
      canonical: path,
      languages: { en: '/', es: '/es', 'x-default': '/' },
    },
    openGraph: { title: t.title, description: t.description, url: path },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description },
  };
}

// Metadatos del índice del blog.
export function blogIndexMetadata(lang: Lang): Metadata {
  const ui = blogUi[lang];
  return {
    title: { absolute: ui.metaTitle },
    description: ui.metaDescription,
    alternates: { canonical: blogPath[lang], languages: { en: blogPath.en, es: blogPath.es, 'x-default': blogPath.en } },
    openGraph: { title: ui.metaTitle, description: ui.metaDescription, url: blogPath[lang] },
    twitter: { card: 'summary_large_image', title: ui.metaTitle, description: ui.metaDescription },
  };
}

// Metadatos de cada artículo.
export function blogPostMetadata(key: PostKey, lang: Lang): Metadata {
  const post = getPost(key, lang);
  const title = `${post.metaTitle}`;
  return {
    title: { absolute: title },
    description: post.excerpt,
    authors: [{ name: site.founderName, url: site.linkedinFounder }],
    keywords: post.tags,
    alternates: {
      canonical: postPath(key, lang),
      languages: { en: postPath(key, 'en'), es: postPath(key, 'es'), 'x-default': postPath(key, 'en') },
    },
    openGraph: {
      type: 'article',
      title,
      description: post.excerpt,
      url: postPath(key, lang),
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [site.founderName],
      tags: post.tags,
    },
    twitter: { card: 'summary_large_image', title, description: post.excerpt },
  };
}
