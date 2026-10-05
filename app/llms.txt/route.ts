import { blogPath, postKeys, postPath, serviceKeys, servicePath, aboutPath } from '../lib/routes';
import { getPost } from '../lib/blog';
import { services } from '../lib/services';
import { site } from '../lib/site';

export const dynamic = 'force-static';

// llms.txt: resumen de la web para buscadores con IA (ChatGPT, Perplexity, etc.).
export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> International tax advisory for digital entrepreneurs and online businesses, based in Dubai (${site.legalName}, trade licence ${site.licence}). We work in English and Spanish across the UAE, Spain and the United States, and incorporate in other countries through a network of local partners.`,
    '',
    `Contact: ${site.email} · ${site.phoneDisplay} · ${site.url}`,
    '',
    '## Services',
    ...serviceKeys.map((key) => `- [${services[key].en.name}](${site.url}${servicePath(key, 'en')}): ${services[key].en.meta.description}`),
    '',
    '## Guides',
    ...postKeys.map((key) => {
      const p = getPost(key, 'en');
      return `- [${p.title}](${site.url}${postPath(key, 'en')}): ${p.excerpt}`;
    }),
    '',
    '## More',
    `- [About Evolve Tax](${site.url}${aboutPath.en})`,
    `- [Blog](${site.url}${blogPath.en})`,
    `- Spanish version: ${site.url}/es`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
