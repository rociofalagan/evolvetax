import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import JsonLd from './JsonLd';
import ContactSection from './ContactSection';
import DiagnosisSection from './DiagnosisSection';
import { Check, DarkBackdrop, Eyebrow, FaqList, SectionHeading, Title } from './ui';
import { dictionaries, type Lang } from '../lib/i18n';
import { servicePath } from '../lib/routes';
import { homeSchema } from '../lib/schema';
import { site } from '../lib/site';

// Iconos de "Con quién trabajamos", en el mismo orden que los textos del diccionario.
const audienceIcons = [
  <path key="0" d="M4 5h16v11H4zM8 20h8M12 16v4" />,
  <path key="1" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-9 9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />,
  <path key="2" d="M3 21h18M6 21V10l3-2v13M13 21V4l4 3v14" />,
  <path key="3" d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3" />,
];

type D = (typeof dictionaries)['en'];

export default function HomePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];

  return (
    <main className="overflow-x-clip">
      <JsonLd data={homeSchema(lang)} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Audience t={t.audience} />
      <Services t={t.services} lang={lang} />
      <Process t={t.process} />
      <Faq t={t.faq} />
      <DiagnosisSection lang={lang} />
      <ContactSection lang={lang} />
    </main>
  );
}

function Hero({ t }: { t: D['hero'] }) {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-cream">
      <DarkBackdrop />
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden
        className="drift pointer-events-none absolute -right-24 top-16 -z-10 hidden w-[640px] opacity-[0.05] invert lg:block"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-36 sm:pt-44 lg:grid-cols-[1.25fr_1fr] lg:pb-32">
        <div>
          {/* El H1 incluye la frase con palabras clave (arriba, en pequeño) y el titular grande */}
          <h1>
            <span className="rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cream/70">
              <span className="h-1.5 w-1.5 rounded-full bg-wine-light" />
              {t.eyebrow}
            </span>
            <span className="lift mt-7 block text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
              {t.title.lead}{' '}
              <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-wine-light">
                {t.title.accent}
              </span>
            </span>
          </h1>

          <p className="lift mt-7 max-w-xl text-lg leading-relaxed text-cream/65" style={{ animationDelay: '120ms' }}>
            {t.text}
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '300ms' }}>
            <Link
              href="#diagnosis"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cream px-7 py-4 text-[15px] font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_0_6px_rgba(238,237,233,0.12)]"
            >
              {t.primary}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-[15px] font-medium text-cream/85 transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              {t.secondary}
            </Link>
          </div>

          <ul className="rise mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/55" style={{ animationDelay: '420ms' }}>
            {t.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-wine-light/80" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tarjeta ilustrativa: la estructura "al día" */}
        <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: '380ms' }} aria-hidden>
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-wine/30 to-transparent blur-2xl" />
          <div className="rotate-[1.5deg] rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-md transition-transform duration-700 hover:rotate-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cream/45">{t.card.label}</p>
                <p className="mt-1 font-serif text-3xl italic">{t.card.title}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream font-serif text-3xl italic leading-none text-ink">
                e<span className="text-wine">.</span>
              </span>
            </div>
            <ul className="mt-6 divide-y divide-white/[0.07]">
              {t.card.rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between py-3.5">
                  <div>
                    <p className="text-[15px] font-semibold">{row.label}</p>
                    <p className="text-xs text-cream/45">{row.detail}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200/90">
                    <Check className="h-3.5 w-3.5" />
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl bg-white/[0.04] px-4 py-3 text-xs leading-relaxed text-cream/55">
              {t.card.note.lead} <span className="text-cream/85">{t.card.note.accent}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: D['about'] }) {
  return (
    <section id="about" className="relative bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-wine/20" />
          <div className="relative overflow-hidden rounded-[2rem] bg-cream">
            <Image
              src={site.founderPhoto}
              alt={t.photoAlt}
              width={400}
              height={400}
              sizes="(min-width: 1024px) 384px, 90vw"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl sm:-right-8">
            <p className="font-serif text-xl italic leading-none">{site.founderName}</p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-cream/55">{t.role}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <Title value={t.title} className="mt-5" />
          </Reveal>
          <Reveal delay={100}>
            {t.paragraphs.map((p, i) => (
              <p key={i} className={`${i === 0 ? 'mt-6' : 'mt-4'} text-lg leading-relaxed text-muted`}>
                {p}
              </p>
            ))}
          </Reveal>

          <ul className="mt-10 overflow-hidden rounded-2xl border border-line bg-white">
            {t.pillars.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={150 + i * 90}
                className="flex items-baseline gap-5 border-b border-line px-6 py-5 last:border-b-0"
              >
                <span className="w-8 shrink-0 font-serif text-2xl italic text-wine">0{i + 1}</span>
                <p className="leading-relaxed text-muted">
                  <strong className="font-bold text-ink">{p.title}.</strong> {p.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Audience({ t }: { t: D['audience'] }) {
  return (
    <section id="who" className="relative isolate overflow-hidden bg-rose/60 px-6 py-24 sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 text-wine/[0.07]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 90}
              className="group rounded-3xl border border-white bg-white/80 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-30px_rgba(107,44,44,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose text-wine transition-colors group-hover:bg-wine group-hover:text-cream">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {audienceIcons[i]}
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-bold leading-snug">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t, lang }: { t: D['services']; lang: Lang }) {
  return (
    <section id="services" className="bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((s, i) => (
            <Reveal
              as="article"
              key={s.key}
              delay={(i % 3) * 80}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-wine/30 hover:shadow-[0_30px_70px_-40px_rgba(22,18,17,0.35)]"
            >
              <span aria-hidden className="font-serif text-5xl italic leading-none text-wine/80 transition-colors group-hover:text-wine">
                0{i + 1}
              </span>
              <h3 className="mt-7 text-xl font-bold tracking-tight">
                {/* El enlace cubre toda la tarjeta */}
                <Link href={servicePath(s.key, lang)} className="after:absolute after:inset-0 after:content-['']">
                  {s.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-rose px-3 py-1 text-xs font-medium text-wine">
                    {tag}
                  </li>
                ))}
              </ul>
              <span aria-hidden className="mt-7 text-sm font-semibold text-wine">
                {t.learnMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 text-center text-muted">
          {t.oneOff.lead}{' '}
          <Link href="#diagnosis" className="font-semibold text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine">
            {t.oneOff.link}
          </Link>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-wine/15 bg-rose/60 p-8 sm:flex-row sm:items-center sm:p-10">
          <p className="max-w-2xl text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            {t.band.lead} <span className="font-serif font-normal italic text-wine">{t.band.accent}</span>
          </p>
          <Link
            href="#diagnosis"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-wine px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-wine-deep"
          >
            {t.bandCta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Process({ t }: { t: D['process'] }) {
  return (
    <section id="process" className="grain relative isolate overflow-hidden bg-ink px-6 py-24 text-cream sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 text-white/[0.04]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-wine/35 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading dark eyebrow={t.eyebrow} title={t.title} text={t.text} />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 110} className="relative">
                <div aria-hidden className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/10 bg-ink-soft font-serif text-3xl italic text-wine-light">
                  {i + 1}
                </div>
                <div className="mt-6 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-cream/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Faq({ t }: { t: D['faq'] }) {
  return (
    <section id="faq" className="bg-paper px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Title value={t.title} className="mt-5" />
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {t.textLead}{' '}
            <Link href="#contact" className="font-semibold text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine">
              {t.textLink}
            </Link>
            .
          </p>
        </Reveal>
        <FaqList items={t.items} />
      </div>
    </section>
  );
}
