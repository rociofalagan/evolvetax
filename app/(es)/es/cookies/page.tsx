import LegalDocument from '../../../components/LegalDocument';
import { legalMetadata } from '../../../lib/metadata';

export const metadata = legalMetadata('cookies', 'es');

export default function Page() {
  return <LegalDocument docKey="cookies" lang="es" />;
}
