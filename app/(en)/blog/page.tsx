import BlogIndex from '../../components/blog/BlogIndex';
import { blogIndexMetadata } from '../../lib/metadata';

export const metadata = blogIndexMetadata('en');

export default function Page() {
  return <BlogIndex lang="en" />;
}
