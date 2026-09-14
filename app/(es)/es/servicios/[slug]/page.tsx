import { notFound } from 'next/navigation';
import ServicePage from '../../../../components/ServicePage';
import { serviceMetadata } from '../../../../lib/metadata';
import { findServiceKey, serviceKeys, serviceSlugs } from '../../../../lib/routes';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceKeys.map((key) => ({ slug: serviceSlugs[key].es }));
}

export async function generateMetadata({ params }: Props) {
  const key = findServiceKey((await params).slug, 'es');
  return key ? serviceMetadata(key, 'es') : {};
}

export default async function Page({ params }: Props) {
  const key = findServiceKey((await params).slug, 'es');
  if (!key) notFound();
  return <ServicePage serviceKey={key} lang="es" />;
}
