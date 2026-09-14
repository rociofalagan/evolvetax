import { dictionaries } from '../../lib/i18n';
import { ogSize, renderOgImage } from '../../lib/og';

const t = dictionaries.es;

export const alt = t.meta.ogAlt;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ eyebrow: t.hero.eyebrow, title: `${t.hero.title.lead} ${t.hero.title.accent}` });
}
