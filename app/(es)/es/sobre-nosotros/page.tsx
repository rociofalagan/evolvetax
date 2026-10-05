import AboutPage from '../../../components/AboutPage';
import { aboutMetadata } from '../../../lib/metadata';

export const metadata = aboutMetadata('es');

export default function Page() {
  return <AboutPage lang="es" />;
}
