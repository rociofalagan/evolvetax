import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

// Imagen que aparece al compartir la web en LinkedIn, WhatsApp, X, etc.
export async function renderOgImage({ eyebrow, title }: { eyebrow: string; title: string }) {
  const svg = await readFile(join(process.cwd(), 'public/evolvetax-wordmark.svg'), 'utf8');
  const wordmark = `data:image/svg+xml;base64,${Buffer.from(svg.replaceAll('#1b1b1b', '#eeede9')).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'radial-gradient(circle at 15% 85%, #6b2c2c 0%, #2a1717 38%, #161211 70%)',
          color: '#eeede9',
          fontFamily: 'sans-serif',
        }}
      >
        <img src={wordmark} width={272 * 1.1} height={66 * 1.1} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: 'uppercase', color: '#c98f86' }}>{eyebrow}</div>
          <div style={{ marginTop: 24, fontSize: title.length > 60 ? 58 : 68, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1040 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 24, color: 'rgba(238,237,233,0.6)' }}>evolvetaxdubai.com</div>
      </div>
    ),
    ogSize
  );
}
