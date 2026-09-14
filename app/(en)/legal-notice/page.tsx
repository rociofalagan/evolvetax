import LegalDocument from '../../components/LegalDocument';
import { legalMetadata } from '../../lib/metadata';

export const metadata = legalMetadata('notice', 'en');

export default function Page() {
  return <LegalDocument docKey="notice" lang="en" />;
}
