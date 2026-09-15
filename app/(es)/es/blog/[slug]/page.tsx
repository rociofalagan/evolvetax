import { notFound } from 'next/navigation';
import BlogPost from '../../../../components/blog/BlogPost';
import { blogPostMetadata } from '../../../../lib/metadata';
import { findPostKey, postKeys, postSlugs } from '../../../../lib/routes';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return postKeys.map((key) => ({ slug: postSlugs[key].es }));
}

export async function generateMetadata({ params }: Props) {
  const key = findPostKey((await params).slug, 'es');
  return key ? blogPostMetadata(key, 'es') : {};
}

export default async function Page({ params }: Props) {
  const key = findPostKey((await params).slug, 'es');
  if (!key) notFound();
  return <BlogPost postKey={key} lang="es" />;
}
