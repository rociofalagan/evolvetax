import NotFound from '../components/NotFound';
import { notFoundCopy } from '../lib/notfound';

export const metadata = { title: 'Página no encontrada | Evolve Tax', robots: { index: false, follow: true } };

export default function Page() {
  return <NotFound data={notFoundCopy} lang="es" />;
}
