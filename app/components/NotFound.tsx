'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '../lib/i18n';
import type { NotFoundData } from '../lib/notfound';

// La 404 global vive fuera de los layouts por idioma, así que el idioma se
// deduce de la ruta en el navegador y se corrige <html lang> al montar.
export default function NotFound({ data, lang }: { data: Record<Lang, NotFoundData>; lang?: Lang }) {
  const pathname = usePathname();
  const active: Lang = lang ?? (pathname?.startsWith('/es') ? 'es' : 'en');
  const t = data[active];

  useEffect(() => {
    document.documentElement.lang = active;
  }, [active]);

  return (
    <main className="grain relative isolate flex min-h-screen items-center overflow-hidden bg-ink px-6 py-32 text-cream">
      <div className="grid-lines absolute inset-0 -z-10 text-white/[0.04]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/35 blur-[140px]" />

      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/45">{t.eyebrow}</p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/65">{t.text}</p>

        <ul className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
          {t.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-left text-sm transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={t.homeHref} className="rounded-xl bg-cream px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-white">
            {t.home}
          </Link>
          <Link href={t.blogHref} className="rounded-xl border border-white/15 px-6 py-3.5 text-[15px] font-medium text-cream/85 transition-colors hover:border-white/30">
            {t.blog}
          </Link>
        </div>
      </div>
    </main>
  );
}
