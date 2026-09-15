'use client';

import Link from 'next/link';
import AnchorLink from './AnchorLink';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { dictionaries, homePath, type Lang } from '../lib/i18n';
import { alternatePath } from '../lib/routes';

export default function Navigation({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].nav;
  const home = homePath[lang];
  const otherLang: Lang = lang === 'en' ? 'es' : 'en';

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Todas las páginas empiezan con cabecera oscura: menú transparente arriba y sólido al hacer scroll.
  const solid = scrolled || isMenuOpen;
  const otherPath = alternatePath(pathname, otherLang);
  const anchor = (id: string) => (home === '/' ? `/#${id}` : `${home}#${id}`);

  const langSwitch = (
    <span className="flex items-center rounded-lg border border-white/10 p-0.5 text-xs font-semibold">
      {(['en', 'es'] as Lang[]).map((l) =>
        l === lang ? (
          <span key={l} className="rounded-md bg-white/10 px-2 py-1 uppercase text-cream">
            {l}
          </span>
        ) : (
          <a
            key={l}
            href={otherPath}
            hrefLang={otherLang}
            aria-label={t.switchLabel}
            className="rounded-md px-2 py-1 uppercase text-cream/55 transition-colors hover:text-cream"
          >
            {l}
          </a>
        )
      )}
    </span>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          solid
            ? 'border border-white/10 bg-ink/85 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link href={home} aria-label={t.home} className="shrink-0">
          <img src="/evolvetax-wordmark.svg" alt="Evolve Tax" width={272} height={66} className="h-7 w-auto invert sm:h-8" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {t.items.map((item) => (
            <AnchorLink
              key={item.id}
              href={anchor(item.id)}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-cream/75 transition-colors hover:bg-white/5 hover:text-cream"
            >
              {item.name}
            </AnchorLink>
          ))}
          <span className="ml-2">{langSwitch}</span>
          <AnchorLink
            href={anchor('diagnosis')}
            className="ml-2 rounded-xl bg-cream px-4 py-2 text-sm font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_0_4px_rgba(238,237,233,0.15)]"
          >
            {t.cta}
          </AnchorLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {langSwitch}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-cream transition-colors hover:bg-white/10"
            aria-label={isMenuOpen ? t.close : t.open}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
          {t.items.map((item) => (
            <AnchorLink
              key={item.id}
              href={anchor(item.id)}
              onNavigate={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-cream/85 hover:bg-white/5"
            >
              {item.name}
            </AnchorLink>
          ))}
          <AnchorLink
            href={anchor('diagnosis')}
            onNavigate={() => setIsMenuOpen(false)}
            className="mt-2 block rounded-xl bg-cream px-4 py-3 text-center text-sm font-semibold text-ink"
          >
            {t.cta}
          </AnchorLink>
        </div>
      )}
    </header>
  );
}
