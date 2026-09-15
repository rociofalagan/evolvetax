import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import JsonLd from './JsonLd';
import ContactSection from './ContactSection';
import DiagnosisSection from './DiagnosisSection';
import { Check, DarkBackdrop, Eyebrow, FaqList, SectionHeading, Title } from './ui';
import { dictionaries, homePath, type Lang } from '../lib/i18n';
import { relatedServices, servicePath, type ServiceKey } from '../lib/routes';
import { serviceSchema } from '../lib/schema';
import { serviceUi, services, servicesUpdated } from '../lib/services';
import { site } from '../lib/site';

// Opción del formulario que se preselecciona en cada landing.
const needIndex: Record<ServiceKey, number> = { structuring: 0, dubai: 1, uaeTax: 2, spainTax: 3, residency: 4, beckham: 5 };

export default function ServicePage({ serviceKey, lang }: { serviceKey: ServiceKey; lang: Lang }) {
  const s = services[serviceKey][lang];
  const ui = serviceUi[lang];
  const form = dictionaries[lang].contact.form;
  const home = homePath[lang];
  const homeAnchor = (id: string) => (home === '/' ? `/#${id}` : `${home}#${id}`);

  return (
    <main className="overflow-x-clip">
      <JsonLd data={serviceSchema(serviceKey, lang)} />

      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-ink text-cream">
        <DarkBackdrop />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-32 sm:pt-40 lg:grid-cols-[1.3fr_1fr] lg:pb-28">
          <div>
            <nav aria-label="Breadcrumb" className="rise text-sm text-cream/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href={home} className="hover:text-cream">{ui.home}</Link></li>
                <li aria-hidden>/</li>
                <li><Link href={homeAnchor('services')} className="hover:text-cream">{ui.services}</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-cream/80">{s.name}</li>
              </ol>
            </nav>

            <div className="rise mt-6" style={{ animationDelay: '60ms' }}>
              <Eyebrow dark>{s.hero.eyebrow}</Eyebrow>
            </div>

            <h1 className="lift mt-6 text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
              {s.hero.title.lead}{' '}
              <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-wine-light">
                {s.hero.title.accent}
              </span>
            </h1>

            <p className="lift mt-6 max-w-xl text-lg leading-relaxed text-cream/65" style={{ animationDelay: '100ms' }}>
              {s.hero.intro}
            </p>

            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '260ms' }}>
              <Link
                href="#diagnosis"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cream px-7 py-4 text-[15px] font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_0_6px_rgba(238,237,233,0.12)]"
              >
                {ui.primary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#included"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-[15px] font-medium text-cream/85 transition-colors hover:border-white/30 hover:bg-white/[0.04]"
              >
                {ui.secondary}
              </Link>
            </div>
          </div>

          {/* Datos clave */}
          <div className="rise relative mx-auto w-full max-w-sm lg:max-w-none" style={{ animationDelay: '340ms' }}>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-wine/30 to-transparent blur-2xl" />
            <dl className="rotate-[1.2deg] divide-y divide-white/[0.07] rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-2 shadow-2xl backdrop-blur-md transition-transform duration-700 hover:rotate-0">
              {s.hero.facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-sm text-cream/50">{f.label}</dt>
                  <dd className="text-right text-[15px] font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="included" className="bg-paper px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={ui.includedEyebrow} title={s.included.title} text={s.included.intro} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.included.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className="rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-wine/30 hover:shadow-[0_30px_70px_-40px_rgba(22,18,17,0.35)]"
              >
                <span aria-hidden className="font-serif text-4xl italic leading-none text-wine/80">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién + cómo funciona */}
      <section className="relative isolate overflow-hidden bg-rose/60 px-6 py-24 sm:py-28">
        <div className="grid-lines absolute inset-0 -z-10 text-wine/[0.07]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>{ui.forWhoEyebrow}</Eyebrow>
            <Title value={ui.forWhoTitle} className="mt-5" />
            <ul className="mt-10 space-y-4">
              {s.forWho.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-white bg-white/80 p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>{ui.processEyebrow}</Eyebrow>
            <Title value={ui.processTitle} className="mt-5" />
            <ol className="relative mt-10 space-y-8 border-l border-wine/20 pl-8">
              {s.process.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-lg italic text-wine-light"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Guía: contenido informativo */}
      <section className="bg-paper px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{ui.guideEyebrow}</Eyebrow>
            <Title value={s.guide.title} className="mt-5" />
            <p className="mt-5 text-lg leading-relaxed text-muted">{s.guide.intro}</p>
          </Reveal>

          <div>
            <article className="space-y-12">
              {s.guide.blocks.map((block) => (
                <Reveal key={block.heading}>
                  <h3 className="text-2xl font-bold tracking-tight">{block.heading}</h3>
                  {block.paragraphs.map((p, i) => (
                    <p key={i} className="mt-4 text-[17px] leading-[1.75] text-muted">{p}</p>
                  ))}
                </Reveal>
              ))}
            </article>

            {/* Autoría y revisión (señales de experiencia para Google) */}
            <Reveal className="mt-14 flex items-center gap-5 rounded-3xl border border-line bg-white p-6">
              <Image
                src={site.founderPhoto}
                alt={dictionaries[lang].about.photoAlt}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div className="text-sm leading-relaxed">
                <p className="text-muted">
                  {ui.reviewedBy}{' '}
                  <a href={site.linkedinFounder} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-wine">
                    {site.founderName}
                  </a>
                </p>
                <p className="mt-0.5 text-muted">{ui.authorBio}</p>
                <p className="mt-1.5 text-xs text-muted/80">
                  {ui.updated}: <time dateTime={servicesUpdated.iso}>{servicesUpdated[lang]}</time>
                </p>
              </div>
            </Reveal>
            <p className="mt-4 text-xs leading-relaxed text-muted/80">{ui.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* Errores habituales */}
      <section className="grain relative isolate overflow-hidden bg-ink px-6 py-24 text-cream sm:py-28">
        <div className="grid-lines absolute inset-0 -z-10 text-white/[0.04]" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-wine/35 blur-[140px]" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading dark eyebrow={ui.mistakesEyebrow} title={ui.mistakesTitle} />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {s.mistakes.map((m, i) => (
              <Reveal key={m.title} delay={i * 80} className="flex gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-7">
                <span aria-hidden className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-wine-light/30 text-lg text-wine-light">
                  ×
                </span>
                <div>
                  <h3 className="text-lg font-bold">{m.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-cream/60">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>{ui.faqEyebrow}</Eyebrow>
            <Title value={ui.faqTitle} className="mt-5" />
          </Reveal>
          <FaqList items={s.faq} />
        </div>
      </section>

      {/* Otros servicios (enlazado interno) */}
      <section className="border-t border-line bg-paper px-6 pb-24 sm:pb-28">
        <div className="mx-auto max-w-6xl pt-20">
          <SectionHeading eyebrow={ui.relatedEyebrow} title={ui.relatedTitle} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedServices[serviceKey].map((key, i) => {
                const other = services[key][lang];
                return (
                  <Reveal key={key} delay={i * 80}>
                    <Link
                      href={servicePath(key, lang)}
                      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-wine/30 hover:shadow-[0_30px_70px_-40px_rgba(22,18,17,0.35)]"
                    >
                      <h3 className="text-lg font-bold leading-snug group-hover:text-wine">{other.name}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{other.meta.description}</p>
                      <span className="mt-5 text-sm font-semibold text-wine">
                        {ui.learnMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
          </div>
        </div>
      </section>

      <DiagnosisSection lang={lang} />

      <ContactSection lang={lang} title={s.cta.title} text={s.cta.text} defaultNeed={form.needs[needIndex[serviceKey]]} />
    </main>
  );
}
