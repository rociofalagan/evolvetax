import LegalDocument from '../../components/LegalDocument';
import { legalMetadata } from '../../lib/metadata';

export const metadata = legalMetadata('privacy', 'en');

export default function Page() {
  return <LegalDocument docKey="privacy" lang="en" />;
}
