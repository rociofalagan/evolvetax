import { dictionaries, homePath, type Lang } from './i18n';
import { blogPath, postPath, serviceKeys, servicePath, type PostKey, type ServiceKey } from './routes';
import { blogUi, categories, getPost, getPosts } from './blog';
import { services, servicesUpdated } from './services';
import { site } from './site';

// Datos estructurados (schema.org) para que Google entienda quién es Evolve Tax,
// qué servicios ofrece, quién está detrás y las preguntas frecuentes de cada página.

const orgId = `${site.url}/#organization`;
const founderId = `${site.url}/#founder`;
const websiteId = `${site.url}/#website`;

const abs = (path: string) => `${site.url}${path === '/' ? '/' : path}`;

function organization(lang: Lang) {
  const t = dictionaries[lang];
  return {
    '@type': ['ProfessionalService', 'AccountingService'],
    '@id': orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/evolvetaxwhite.jpg`,
    image: `${site.url}/evolvetaxwhite.jpg`,
    email: site.email,
    description: t.meta.description,
    address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
    areaServed: [
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Spain' },
    ],
    knowsLanguage: ['en', 'es'],
    founder: { '@id': founderId },
    sameAs: [site.linkedinCompany],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.eyebrow,
      itemListElement: [
        {
          '@type': 'Offer',
          price: site.diagnosis.price,
          priceCurrency: site.diagnosis.currency,
          url: `${abs(homePath[lang])}#diagnosis`,
          itemOffered: {
            '@type': 'Service',
            name: t.diagnosis.priceLabel,
            description: t.diagnosis.text,
            provider: { '@id': orgId },
          },
        },
        ...serviceKeys.map((key) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: services[key][lang].name,
          url: abs(servicePath(key, lang)),
          provider: { '@id': orgId },
        },
        })),
      ],
    },
  };
}

function founder(lang: Lang) {
  return {
    '@type': 'Person',
    '@id': founderId,
    name: site.founderName,
    jobTitle: dictionaries[lang].about.role,
    image: `${site.url}${site.founderPhoto}`,
    worksFor: { '@id': orgId },
    sameAs: [site.linkedinFounder],
  };
}

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  inLanguage: ['en', 'es'],
  publisher: { '@id': orgId },
};

function faqPage(url: string, lang: Lang, items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: lang,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function homeSchema(lang: Lang) {
  const t = dictionaries[lang];
  const url = abs(homePath[lang]);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(lang),
      founder(lang),
      website,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
      },
      faqPage(url, lang, t.faq.items),
    ],
  };
}

export function serviceSchema(key: ServiceKey, lang: Lang) {
  const s = services[key][lang];
  const url = abs(servicePath(key, lang));
  const homeName = lang === 'en' ? 'Home' : 'Inicio';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(lang),
      founder(lang),
      website,
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: s.meta.title,
        description: s.meta.description,
        inLanguage: lang,
        isPartOf: { '@id': websiteId },
        about: { '@id': `${url}#service` },
        reviewedBy: { '@id': founderId },
        dateModified: servicesUpdated.iso,
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.meta.description,
        url,
        provider: { '@id': orgId },
        areaServed: [
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Spain' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: homeName, item: abs(homePath[lang]) },
          { '@type': 'ListItem', position: 2, name: s.name, item: url },
        ],
      },
      faqPage(url, lang, s.faq),
    ],
  };
}

export function blogIndexSchema(lang: Lang) {
  const ui = blogUi[lang];
  const url = abs(blogPath[lang]);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(lang),
      website,
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        url,
        name: ui.metaTitle,
        description: ui.metaDescription,
        inLanguage: lang,
        publisher: { '@id': orgId },
        blogPost: getPosts(lang).map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: abs(postPath(p.key, lang)),
          datePublished: p.published,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: ui.home, item: abs(homePath[lang]) },
          { '@type': 'ListItem', position: 2, name: ui.blog, item: url },
        ],
      },
    ],
  };
}

export function blogPostSchema(key: PostKey, lang: Lang) {
  const post = getPost(key, lang);
  const ui = blogUi[lang];
  const url = abs(postPath(key, lang));
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization(lang),
      founder(lang),
      website,
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        datePublished: post.published,
        dateModified: post.updated,
        inLanguage: lang,
        author: { '@id': founderId },
        publisher: { '@id': orgId },
        image: `${site.url}/evolvetaxwhite.jpg`,
        articleSection: categories[post.category][lang],
        keywords: post.tags.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: ui.home, item: abs(homePath[lang]) },
          { '@type': 'ListItem', position: 2, name: ui.blog, item: abs(blogPath[lang]) },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
      faqPage(url, lang, post.faq),
    ],
  };
}
