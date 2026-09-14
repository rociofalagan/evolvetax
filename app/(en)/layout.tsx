import '../globals.css';
import SiteShell from '../components/SiteShell';
import { baseMetadata } from '../lib/metadata';

export { viewport } from '../lib/metadata';
export const metadata = baseMetadata('en');

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
