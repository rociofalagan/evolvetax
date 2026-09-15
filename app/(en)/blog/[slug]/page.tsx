import { notFound } from 'next/navigation';
import BlogPost from '../../../components/blog/BlogPost';
import { blogPostMetadata } from '../../../lib/metadata';
import { findPostKey, postKeys, postSlugs } from '../../../lib/routes';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return postKeys.map((key) => ({ slug: postSlugs[key].en }));
}

export async function generateMetadata({ params }: Props) {
  const key = findPostKey((await params).slug, 'en');
  return key ? blogPostMetadata(key, 'en') : {};
}

export default async function Page({ params }: Props) {
  const key = findPostKey((await params).slug, 'en');
  if (!key) notFound();
  return <BlogPost postKey={key} lang="en" />;
}
