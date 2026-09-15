import type { Lang } from './i18n';

// Rutas de la web en cada idioma. Sin textos, para que el menú (cliente) pese poco.

export const serviceKeys = ['structuring', 'dubai', 'uaeTax', 'spainTax', 'residency', 'beckham'] as const;
export type ServiceKey = (typeof serviceKeys)[number];

export const serviceSlugs: Record<ServiceKey, Record<Lang, string>> = {
  structuring: { en: 'international-tax-structuring', es: 'estructuracion-fiscal-internacional' },
  dubai: { en: 'dubai-company-setup', es: 'crear-empresa-en-dubai' },
  uaeTax: { en: 'dubai-tax-management', es: 'gestion-fiscal-en-dubai' },
  spainTax: { en: 'spain-tax-management', es: 'gestion-fiscal-en-espana' },
  residency: { en: 'tax-residency-change', es: 'cambio-de-residencia-fiscal' },
  beckham: { en: 'beckham-law-spain', es: 'regimen-beckham' },
};

// Servicios relacionados que se enlazan al final de cada landing (enlazado interno).
export const relatedServices: Record<ServiceKey, ServiceKey[]> = {
  structuring: ['dubai', 'residency', 'spainTax'],
  dubai: ['uaeTax', 'structuring', 'residency'],
  uaeTax: ['dubai', 'spainTax', 'structuring'],
  spainTax: ['beckham', 'residency', 'uaeTax'],
  residency: ['beckham', 'structuring', 'dubai'],
  beckham: ['residency', 'spainTax', 'structuring'],
};

const servicesBase: Record<Lang, string> = { en: '/services', es: '/es/servicios' };

export function servicePath(key: ServiceKey, lang: Lang) {
  return `${servicesBase[lang]}/${serviceSlugs[key][lang]}`;
}

export function findServiceKey(slug: string, lang: Lang): ServiceKey | undefined {
  return serviceKeys.find((key) => serviceSlugs[key][lang] === slug);
}

// Páginas legales en cada idioma.
export const legalKeys = ['notice', 'privacy', 'terms', 'cookies'] as const;
export type LegalKey = (typeof legalKeys)[number];

export const legalPaths: Record<LegalKey, Record<Lang, string>> = {
  notice: { en: '/legal-notice', es: '/es/aviso-legal' },
  privacy: { en: '/privacy-policy', es: '/es/privacidad' },
  terms: { en: '/terms-and-conditions', es: '/es/terminos' },
  cookies: { en: '/cookie-policy', es: '/es/cookies' },
};

// Blog: índice y artículos en cada idioma.
export const blogPath: Record<Lang, string> = { en: '/blog', es: '/es/blog' };

export const postKeys = ['uaeTax', 'beckham', 'llc', 'digitalVat', 'dubaiInSpain', 'freeZone'] as const;
export type PostKey = (typeof postKeys)[number];

export const postSlugs: Record<PostKey, Record<Lang, string>> = {
  uaeTax: { en: 'uae-tax-system-guide', es: 'sistema-fiscal-emiratos-arabes-unidos' },
  beckham: { en: 'beckham-law-spain-guide', es: 'ley-beckham-guia' },
  llc: { en: 'us-llc-tax-transparency', es: 'llc-estados-unidos-transparencia-fiscal' },
  digitalVat: { en: 'vat-digital-products-online-courses', es: 'iva-productos-digitales-cursos-online' },
  dubaiInSpain: { en: 'dubai-company-taxed-in-spain', es: 'empresa-dubai-tributa-en-espana' },
  freeZone: { en: 'dubai-free-zone-vs-mainland', es: 'free-zone-o-mainland-dubai' },
};

export function postPath(key: PostKey, lang: Lang) {
  return `${blogPath[lang]}/${postSlugs[key][lang]}`;
}

export function findPostKey(slug: string, lang: Lang): PostKey | undefined {
  return postKeys.find((key) => postSlugs[key][lang] === slug);
}

// Página equivalente en el otro idioma (para el selector EN | ES y hreflang).
export function alternatePath(pathname: string, target: Lang): string {
  if (pathname === blogPath.en || pathname === blogPath.es) return blogPath[target];
  for (const key of postKeys) {
    if (pathname === postPath(key, 'en') || pathname === postPath(key, 'es')) {
      return postPath(key, target);
    }
  }
  for (const key of serviceKeys) {
    if (pathname === servicePath(key, 'en') || pathname === servicePath(key, 'es')) {
      return servicePath(key, target);
    }
  }
  for (const key of legalKeys) {
    if (pathname === legalPaths[key].en || pathname === legalPaths[key].es) {
      return legalPaths[key][target];
    }
  }
  return target === 'en' ? '/' : '/es';
}
