import Link from 'next/link';
import Reveal from './Reveal';
import { Check, Eyebrow, Title } from './ui';
import { dictionaries, type Lang } from '../lib/i18n';
import { site } from '../lib/site';

// Oferta de entrada: diagnóstico inicial de pago (enlace de Stripe en lib/site.ts).
export default function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].diagnosis;
  const { url, price, currency } = site.diagnosis;
  const formattedPrice = (
    <>
      {price}
      <span className="ml-3 align-top font-sans text-2xl font-semibold not-italic tracking-wide text-cream/60">{currency}</span>
    </>
  );

  return (
    <section id="diagnosis" className="grain relative isolate overflow-hidden bg-ink px-6 py-24 text-cream sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 text-white/[0.04]" />
      <div className="absolute -left-40 top-1/4 -z-10 h-[480px] w-[480px] rounded-full bg-wine/40 blur-[140px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <Eyebrow dark>{t.eyebrow}</Eyebrow>
          <Title value={t.title} dark className="mt-5" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/65">{t.text}</p>
          <ul className="mt-9 space-y-3.5">
            {t.includes.map((item) => (
              <li key={item} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wine-light/15 text-wine-light">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-cream/85">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-wine/40 to-transparent blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-md sm:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-cream/50">{t.priceLabel}</p>
              <p className="mt-4 font-serif text-7xl italic leading-none">{formattedPrice}</p>
              <p className="mt-3 text-sm text-cream/55">{t.priceNote}</p>

              <a
                href={url || '#contact'}
                className="group mt-9 flex w-full items-center justify-center gap-2 rounded-xl bg-cream px-6 py-4 text-[15px] font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_0_6px_rgba(238,237,233,0.12)]"
              >
                {t.button}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-cream/50">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                {t.secure}
              </p>

              <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-cream/60">
                {t.altLead}{' '}
                <Link href="#contact" className="font-semibold text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream">
                  {t.altLink}
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
