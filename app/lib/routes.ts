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

// Página equivalente en el otro idioma (para el selector EN | ES y hreflang).
export function alternatePath(pathname: string, target: Lang): string {
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
