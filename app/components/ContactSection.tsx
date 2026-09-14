import Reveal from './Reveal';
import ContactForm from './ContactForm';
import { Check, Eyebrow, Title, type Accent } from './ui';
import { dictionaries, type Lang } from '../lib/i18n';
import { site } from '../lib/site';

// Bloque final de contacto. Las landings pueden cambiar título, texto y la opción preseleccionada.
export default function ContactSection({
  lang,
  title,
  text,
  defaultNeed,
}: {
  lang: Lang;
  title?: Accent;
  text?: string;
  defaultNeed?: string;
}) {
  const t = dictionaries[lang].contact;

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-cream px-6 py-24 sm:py-32">
      <div className="grid-lines absolute inset-0 -z-10 text-ink/[0.05]" />
      <div className="absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-rose blur-[120px]" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Title value={title ?? t.title} className="mt-5" />
          <p className="mt-6 text-lg leading-relaxed text-muted">{text ?? t.text}</p>

          <ul className="mt-10 space-y-5">
            {t.bullets.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wine text-cream">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-bold">{b.title}</p>
                  <p className="text-[15px] text-muted">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
            {site.bookingUrl && (
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-ink px-5 py-3 font-semibold text-cream transition-colors hover:bg-wine"
              >
                {t.booking}
              </a>
            )}
            <a
              href={`mailto:${site.email}`}
              className="rounded-xl border border-ink/15 px-5 py-3 font-medium transition-colors hover:border-wine hover:text-wine"
            >
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm t={t.form} lang={lang} defaultNeed={defaultNeed} />
        </Reveal>
      </div>
    </section>
  );
}
