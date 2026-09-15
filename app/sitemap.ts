import type { MetadataRoute } from 'next';
import { blogPath, legalKeys, legalPaths, postKeys, postPath, serviceKeys, servicePath } from './lib/routes';
import { getPost } from './lib/blog';
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

  const blogLanguages = { en: url(blogPath.en), es: url(blogPath.es) };
  const blog = [
    ...(['en', 'es'] as const).map((lang) => ({
      url: url(blogPath[lang]),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: { languages: blogLanguages },
    })),
    ...postKeys.flatMap((key) => {
      const languages = { en: url(postPath(key, 'en')), es: url(postPath(key, 'es')) };
      return (['en', 'es'] as const).map((lang) => ({
        url: url(postPath(key, lang)),
        lastModified: new Date(getPost(key, lang).updated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: { languages },
      }));
    }),
  ];

  return [
    { url: url('/'), lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: homeLanguages } },
    { url: url('/es'), lastModified, changeFrequency: 'monthly', priority: 1, alternates: { languages: homeLanguages } },
    ...services,
    ...blog,
    ...legal,
  ];
}
