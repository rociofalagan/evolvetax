import LegalDocument from '../../components/LegalDocument';
import { legalMetadata } from '../../lib/metadata';

export const metadata = legalMetadata('cookies', 'en');

export default function Page() {
  return <LegalDocument docKey="cookies" lang="en" />;
}
