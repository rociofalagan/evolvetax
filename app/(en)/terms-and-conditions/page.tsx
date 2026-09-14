import LegalDocument from '../../components/LegalDocument';
import { legalMetadata } from '../../lib/metadata';

export const metadata = legalMetadata('terms', 'en');

export default function Page() {
  return <LegalDocument docKey="terms" lang="en" />;
}
