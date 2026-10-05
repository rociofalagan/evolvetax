import AboutPage from '../../components/AboutPage';
import { aboutMetadata } from '../../lib/metadata';

export const metadata = aboutMetadata('en');

export default function Page() {
  return <AboutPage lang="en" />;
}
