import { dictionaries, homePath, type Lang } from './i18n';
import { serviceKeys, servicePath, type ServiceKey } from './routes';
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
      itemListElement: serviceKeys.map((key) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: services[key][lang].name,
          url: abs(servicePath(key, lang)),
          provider: { '@id': orgId },
        },
      })),
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
