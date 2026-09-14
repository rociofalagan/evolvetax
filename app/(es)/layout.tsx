import '../globals.css';
import SiteShell from '../components/SiteShell';
import { baseMetadata } from '../lib/metadata';

export { viewport } from '../lib/metadata';
export const metadata = baseMetadata('es');

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
