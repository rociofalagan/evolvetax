import Link from 'next/link';
import type { ReactNode } from 'react';

// Convierte **negrita** y [enlaces](/ruta) dentro de los textos de los artículos.
export default function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      parts.push(
        <strong key={i++} className="font-semibold text-ink">
          {match[1]}
        </strong>
      );
    } else {
      const href = match[3];
      const className = 'font-semibold text-wine underline decoration-wine/30 underline-offset-4 transition-colors hover:decoration-wine';
      parts.push(
        href.startsWith('/') ? (
          <Link key={i++} href={href} className={className}>
            {match[2]}
          </Link>
        ) : (
          <a key={i++} href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {match[2]}
          </a>
        )
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <>{parts}</>;
}
