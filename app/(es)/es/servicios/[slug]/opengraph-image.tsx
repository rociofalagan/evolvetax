import { ogSize, renderOgImage } from '../../../../lib/og';
import { findServiceKey, serviceKeys, serviceSlugs } from '../../../../lib/routes';
import { services } from '../../../../lib/services';

export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return serviceKeys.map((key) => ({ slug: serviceSlugs[key].es }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const key = findServiceKey((await params).slug, 'es') ?? 'structuring';
  const s = services[key].es;
  return renderOgImage({ eyebrow: s.hero.eyebrow, title: `${s.hero.title.lead} ${s.hero.title.accent}` });
}
