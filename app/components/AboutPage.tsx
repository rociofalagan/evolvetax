import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import JsonLd from './JsonLd';
import DiagnosisSection from './DiagnosisSection';
import ContactSection from './ContactSection';
import { Check, DarkBackdrop, Eyebrow, SectionHeading, Title } from './ui';
import { dictionaries, homePath, type Lang } from '../lib/i18n';
import { serviceKeys, servicePath } from '../lib/routes';
import { about } from '../lib/about';
import { aboutSchema } from '../lib/schema';
import { services } from '../lib/services';
import { site } from '../lib/site';

export default function AboutPage({ lang }: { lang: Lang }) {
  const t = about[lang];

  return (
    <main className="overflow-x-clip">
      <JsonLd data={aboutSchema(lang)} />

      {/* Cabecera */}
      <section className="grain relative isolate overflow-hidden bg-ink text-cream">
        <DarkBackdrop />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 sm:pt-44 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <nav aria-label="Breadcrumb" className="rise text-sm text-cream/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href={homePath[lang]} className="hover:text-cream">{dictionaries[lang].footer.navigation}</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-cream/80">{t.breadcrumb}</li>
              </ol>
            </nav>
            <div className="rise mt-6" style={{ animationDelay: '60ms' }}>
              <Eyebrow dark>{t.eyebrow}</Eyebrow>
            </div>
            <h1 className="lift mt-6 text-[2.4rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
              {t.title.lead}{' '}
              <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-wine-light">{t.title.accent}</span>
            </h1>
            <p className="lift mt-6 max-w-xl text-lg leading-relaxed text-cream/65" style={{ animationDelay: '100ms' }}>{t.intro}</p>
          </div>

          <div className="rise relative mx-auto w-full max-w-xs lg:max-w-none" style={{ animationDelay: '280ms' }}>
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-wine/30 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] bg-cream">
              <Image src={site.founderPhoto} alt={dictionaries[lang].about.photoAlt} width={400} height={400} sizes="(min-width: 1024px) 320px, 70vw" className="aspect-square w-full object-cover" />
            </div>
            <dl className="mt-4 divide-y divide-white/[0.07] rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-1 backdrop-blur-md">
              {t.facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-sm text-cream/50">{f.label}</dt>
                  <dd className="text-right text-[15px] font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="bg-paper px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Title value={t.story.title} />
            <a href={site.linkedinFounder} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine">
              LinkedIn ↗
            </a>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            {t.story.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-[1.8] text-muted">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Credenciales */}
      <section className="relative isolate overflow-hidden bg-rose/60 px-6 py-24 sm:py-28">
        <div className="grid-lines absolute inset-0 -z-10 text-wine/[0.07]" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={t.eyebrow} title={t.credentials.title} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {t.credentials.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="flex gap-4 rounded-3xl border border-white bg-white/80 p-7 backdrop-blur">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-paper px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow={dictionaries[lang].process.eyebrow} title={t.how.title} />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {t.how.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="rounded-3xl border border-line bg-white p-7">
                <span aria-hidden className="font-serif text-4xl italic leading-none text-wine/80">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>

          {/* Servicios */}
          <div className="mt-20 border-t border-line pt-16">
            <SectionHeading eyebrow={dictionaries[lang].services.eyebrow} title={t.servicesTitle} text={t.servicesIntro} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceKeys.map((key) => (
                <Reveal key={key}>
                  <Link href={servicePath(key, lang)} className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-wine/30">
                    <p className="font-bold group-hover:text-wine">{services[key][lang].name}</p>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{services[key][lang].meta.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagnosisSection lang={lang} />
      <ContactSection lang={lang} title={t.cta.title} text={t.cta.text} />
    </main>
  );
}
