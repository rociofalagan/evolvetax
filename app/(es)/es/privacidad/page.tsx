import LegalDocument from '../../../components/LegalDocument';
import { legalMetadata } from '../../../lib/metadata';

export const metadata = legalMetadata('privacy', 'es');

export default function Page() {
  return <LegalDocument docKey="privacy" lang="es" />;
}
