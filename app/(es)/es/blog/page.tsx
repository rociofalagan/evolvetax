import BlogIndex from '../../../components/blog/BlogIndex';
import { blogIndexMetadata } from '../../../lib/metadata';

export const metadata = blogIndexMetadata('es');

export default function Page() {
  return <BlogIndex lang="es" />;
}
