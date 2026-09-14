import HomePage from '../../components/HomePage';
import { homeMetadata } from '../../lib/metadata';

export const metadata = homeMetadata('es');

export default function Page() {
  return <HomePage lang="es" />;
}
