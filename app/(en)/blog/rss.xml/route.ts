import { blogPath, postKeys, postPath } from '../../../lib/routes';
import { blogUi, getPost } from '../../../lib/blog';
import { site } from '../../../lib/site';

export const dynamic = 'force-static';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Feed RSS del blog: ayuda a que lectores y agregadores descubran los artículos nuevos.
export function GET() {
  const ui = blogUi.en;
  const posts = postKeys
    .map((key) => getPost(key, 'en'))
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

  const items = posts
    .map((p) => {
      const url = `${site.url}${postPath(p.key, 'en')}`;
      return [
        '    <item>',
        `      <title>${escape(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escape(p.excerpt)}</description>`,
        `      <pubDate>${new Date(p.published).toUTCString()}</pubDate>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escape(ui.metaTitle)}</title>`,
    `    <link>${site.url}${blogPath.en}</link>`,
    `    <description>${escape(ui.metaDescription)}</description>`,
    '    <language>en</language>',
    `    <atom:link href="${site.url}${blogPath.en}/rss.xml" rel="self" type="application/rss+xml" />`,
    items,
    '  </channel>',
    '</rss>',
  ].join('\n');

  return new Response(xml, {
    headers: { 'content-type': 'application/rss+xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
