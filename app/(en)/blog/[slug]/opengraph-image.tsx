import { ogSize, renderOgImage } from '../../../lib/og';
import { findPostKey, postKeys, postSlugs } from '../../../lib/routes';
import { categories, getPost } from '../../../lib/blog';

export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return postKeys.map((key) => ({ slug: postSlugs[key].en }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost(findPostKey((await params).slug, 'en') ?? 'uaeTax', 'en');
  return renderOgImage({ eyebrow: `Blog · ${categories[post.category].en}`, title: post.title });
}
