import LegalDocument from '../../../components/LegalDocument';
import { legalMetadata } from '../../../lib/metadata';

export const metadata = legalMetadata('terms', 'es');

export default function Page() {
  return <LegalDocument docKey="terms" lang="es" />;
}
