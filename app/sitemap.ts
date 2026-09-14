import type { MetadataRoute } from 'next';
import { legalKeys, legalPaths, serviceKeys, servicePath } from './lib/routes';
import { site } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const url = (path: string) => `${site.url}${path}`;

  const homeLanguages = { en: url('/'), es: url('/es') };

  const services = serviceKeys.flatMap((key) => {
    const languages = { en: url(servicePath(key, 'en')), es: url(servicePath(key, 'es')) };
    return (['en', 'es'] as const).map((lang) => ({
      url: url(servicePath(key, lang)),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: { languages },
    }));
  });

  const legal = legalKeys.flatMap((key) => {
    const languages = { en: url(legalPaths[key].en), es: url(legalPaths[key].es) };
    return (['en', 'es'] as const).map((lang) => ({
      url: url(legalPaths[key][lang]),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.2,
      alternates: { languages },
    }));
  });

  return [
    { url: url('/'), lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: homeLanguages } },
    { url: url('/es'), lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: homeLanguages } },
    ...services,
    ...legal,
  ];
}
