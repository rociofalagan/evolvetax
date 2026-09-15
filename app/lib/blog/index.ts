import type { Lang } from '../i18n';
import { postKeys, type PostKey } from '../routes';
import { postsEn } from './posts-en';
import { postsEs } from './posts-es';
import type { CategoryKey, PostBlock, PostContent, PostMeta } from './types';

export type { CategoryKey, PostBlock, PostContent, PostMeta } from './types';

// Datos comunes a los dos idiomas de cada artículo.
const meta: Record<PostKey, Omit<PostMeta, 'key'>> = {
  uaeTax: { category: 'uae', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['uaeTax', 'dubai'], relatedPosts: ['freeZone', 'dubaiInSpain', 'digitalVat'] },
  beckham: { category: 'spain', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['beckham', 'residency'], relatedPosts: ['dubaiInSpain', 'llc', 'uaeTax'] },
  llc: { category: 'structures', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['structuring', 'spainTax'], relatedPosts: ['dubaiInSpain', 'digitalVat', 'uaeTax'] },
  digitalVat: { category: 'vat', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['spainTax', 'uaeTax'], relatedPosts: ['uaeTax', 'llc', 'freeZone'] },
  dubaiInSpain: { category: 'residency', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['structuring', 'residency'], relatedPosts: ['uaeTax', 'llc', 'beckham'] },
  freeZone: { category: 'uae', published: '2026-09-15', updated: '2026-09-15', relatedServices: ['dubai', 'uaeTax'], relatedPosts: ['uaeTax', 'dubaiInSpain', 'digitalVat'] },
};

// Orden en el listado (el primero es el destacado).
const order: PostKey[] = ['dubaiInSpain', 'uaeTax', 'beckham', 'llc', 'digitalVat', 'freeZone'];

const content: Record<Lang, Record<PostKey, PostContent>> = { en: postsEn, es: postsEs };

export const categories: Record<CategoryKey, Record<Lang, string>> = {
  uae: { en: 'UAE', es: 'Emiratos' },
  spain: { en: 'Spain', es: 'España' },
  structures: { en: 'International structures', es: 'Estructuras internacionales' },
  vat: { en: 'VAT & digital business', es: 'IVA y negocio digital' },
  residency: { en: 'Tax residency', es: 'Residencia fiscal' },
};

export type Post = PostMeta & PostContent & { readingMinutes: number };

function blockText(block: PostBlock): string {
  if ('p' in block) return block.p;
  if ('h2' in block) return block.h2;
  if ('h3' in block) return block.h3;
  if ('list' in block) return block.list.map((i) => (Array.isArray(i) ? i.join(' ') : i)).join(' ');
  if ('olist' in block) return block.olist.join(' ');
  if ('callout' in block) return `${block.callout.title} ${block.callout.text}`;
  return block.table.rows.flat().join(' ');
}

export function getPost(key: PostKey, lang: Lang): Post {
  const c = content[lang][key];
  const words = [c.excerpt, ...c.takeaways, ...c.body.map(blockText), ...c.faq.flatMap((f) => [f.q, f.a])]
    .join(' ')
    .split(/\s+/).length;
  return { key, ...meta[key], ...c, readingMinutes: Math.max(1, Math.round(words / 220)) };
}

export function getPosts(lang: Lang): Post[] {
  return order.filter((k) => postKeys.includes(k)).map((k) => getPost(k, lang));
}

export function formatDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
}

export const blogUi = {
  en: {
    metaTitle: 'Blog: International Tax Guides for Digital Businesses | Evolve Tax',
    metaDescription:
      'Practical guides on international taxation for digital entrepreneurs: UAE Corporate Tax, the Beckham Law, US LLCs, VAT on digital products and tax residency.',
    eyebrow: 'Blog',
    title: { lead: 'International tax,', accent: 'explained clearly.' },
    intro: 'Practical guides for digital entrepreneurs and online businesses: taxes in the UAE and Spain, international structures, VAT and tax residency.',
    primary: 'Book your initial diagnosis',
    secondary: 'See services',
    bullets: ['Written by international tax specialists', 'Spain, the UAE and international structures', 'Updated with current regulations'],
    categoriesTitle: 'Blog categories',
    featured: 'Featured',
    home: 'Home',
    blog: 'Blog',
    filterCategories: 'Categories',
    filterTags: 'Tags',
    all: 'All',
    readMore: 'Read article',
    minRead: 'min read',
    noResults: 'No articles match this filter yet.',
    back: 'Back to blog',
    keyTakeaways: 'Key takeaways',
    contents: 'Contents',
    faq: 'Frequently asked questions',
    share: 'Share',
    copied: 'Link copied',
    author: 'Written by',
    authorBio: 'Founder of Evolve Tax. Nearly a decade in tax advisory across consulting and law firms in Spain and Dubai.',
    published: 'Published',
    updated: 'Updated',
    disclaimer: 'This article offers general information and does not replace personalised advice for your case.',
    relatedServices: 'Related services',
    relatedPosts: 'Keep reading',
    learnMore: 'Learn more',
  },
  es: {
    metaTitle: 'Blog: guías de fiscalidad internacional para negocios digitales | Evolve Tax',
    metaDescription:
      'Guías prácticas de fiscalidad internacional para emprendedores digitales: Corporate Tax en Emiratos, Ley Beckham, LLC americanas, IVA en productos digitales y residencia fiscal.',
    eyebrow: 'Blog',
    title: { lead: 'Fiscalidad internacional,', accent: 'explicada claro.' },
    intro: 'Guías prácticas para emprendedores y negocios digitales: impuestos en Emiratos y España, estructuras internacionales, IVA y residencia fiscal.',
    primary: 'Reserva tu diagnóstico inicial',
    secondary: 'Ver servicios',
    bullets: ['Escritas por especialistas en fiscalidad internacional', 'España, Emiratos y estructuras internacionales', 'Actualizadas con la normativa vigente'],
    categoriesTitle: 'Categorías del blog',
    featured: 'Destacado',
    home: 'Inicio',
    blog: 'Blog',
    filterCategories: 'Categorías',
    filterTags: 'Etiquetas',
    all: 'Todas',
    readMore: 'Leer artículo',
    minRead: 'min de lectura',
    noResults: 'Todavía no hay artículos con este filtro.',
    back: 'Volver al blog',
    keyTakeaways: 'En resumen',
    contents: 'Índice',
    faq: 'Preguntas frecuentes',
    share: 'Compartir',
    copied: 'Enlace copiado',
    author: 'Escrito por',
    authorBio: 'Fundadora de Evolve Tax. Casi una década en asesoría fiscal, entre consultoras y despachos de España y Dubái.',
    published: 'Publicado',
    updated: 'Actualizado',
    disclaimer: 'Este artículo ofrece información general y no sustituye el asesoramiento personalizado para tu caso.',
    relatedServices: 'Servicios relacionados',
    relatedPosts: 'Sigue leyendo',
    learnMore: 'Saber más',
  },
};
