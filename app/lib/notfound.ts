import { blogPath, serviceKeys, servicePath } from './routes';
import { homePath, type Lang } from './i18n';
import { services } from './services';

export type NotFoundData = {
  eyebrow: string;
  title: string;
  text: string;
  home: string;
  homeHref: string;
  blog: string;
  blogHref: string;
  links: { name: string; href: string }[];
};

const copy: Record<Lang, Pick<NotFoundData, 'eyebrow' | 'title' | 'text' | 'home' | 'blog'>> = {
  en: {
    eyebrow: 'Error 404',
    title: 'This page does not exist.',
    text: 'The link may be broken or the page may have moved. These are the pages people look for most:',
    home: 'Back to home',
    blog: 'Read the blog',
  },
  es: {
    eyebrow: 'Error 404',
    title: 'Esta página no existe.',
    text: 'Puede que el enlace esté roto o que la página haya cambiado de sitio. Estas son las páginas que más se buscan:',
    home: 'Volver al inicio',
    blog: 'Ir al blog',
  },
};

// Datos planos (solo texto y rutas) para que la página 404 pueda ser un
// componente de cliente sin arrastrar los contenidos de la web al navegador.
export function notFoundData(lang: Lang): NotFoundData {
  return {
    ...copy[lang],
    homeHref: homePath[lang],
    blogHref: blogPath[lang],
    links: serviceKeys.map((key) => ({ name: services[key][lang].name, href: servicePath(key, lang) })),
  };
}

export const notFoundCopy: Record<Lang, NotFoundData> = { en: notFoundData('en'), es: notFoundData('es') };
