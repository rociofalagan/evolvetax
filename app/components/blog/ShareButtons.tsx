'use client';

import { useState } from 'react';

// Botones para compartir un artículo.
export default function ShareButtons({ url, title, label, copiedLabel }: { url: string; title: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const links = [
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, icon: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.61 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" fill="currentColor" /> },
    { name: 'X', href: `https://x.com/intent/post?url=${u}&text=${t}`, icon: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58l11.09 14.47Z" fill="currentColor" /> },
    { name: 'WhatsApp', href: `https://wa.me/?text=${t}%20${u}`, icon: <path d="M12 2.5A9.5 9.5 0 0 0 3.8 16.8L2.5 21.5l4.8-1.26A9.5 9.5 0 1 0 12 2.5Zm5.44 13.4c-.23.64-1.33 1.22-1.83 1.26-.47.04-.9.22-3.05-.63-2.58-1.02-4.2-3.66-4.33-3.83-.13-.17-1.04-1.38-1.04-2.64 0-1.26.66-1.88.9-2.13.23-.26.5-.32.67-.32h.48c.15 0 .36-.06.56.43.2.49.68 1.67.74 1.79.06.12.1.26.02.43-.08.17-.13.27-.25.42l-.37.43c-.12.12-.25.26-.11.5.15.25.64 1.05 1.37 1.7.94.84 1.73 1.1 1.98 1.22.24.12.39.1.53-.06.15-.17.62-.72.79-.97.16-.25.33-.2.55-.12.23.08 1.43.68 1.68.8.24.12.4.18.46.28.07.1.07.58-.16 1.23Z" fill="currentColor" /> },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const btn = 'flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-muted transition-colors hover:border-wine/40 hover:text-wine';

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-ink">{label}</span>
      {links.map((l) => (
        <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${l.name}`} className={btn}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            {l.icon}
          </svg>
        </a>
      ))}
      <button type="button" onClick={copy} aria-label={copiedLabel} className={btn}>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          {copied ? <path d="m5 12 5 5 9-10" /> : <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />}
        </svg>
      </button>
      {copied && <span className="text-xs text-wine">{copiedLabel}</span>}
    </div>
  );
}
