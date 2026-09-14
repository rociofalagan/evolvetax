import LegalDocument from '../../../components/LegalDocument';
import { legalMetadata } from '../../../lib/metadata';

export const metadata = legalMetadata('notice', 'es');

export default function Page() {
  return <LegalDocument docKey="notice" lang="es" />;
}
