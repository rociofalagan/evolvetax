import Link from 'next/link';
import { dictionaries, homePath, type Lang } from '../lib/i18n';
import { legalKeys, legalPaths, serviceKeys, servicePath } from '../lib/routes';
import { legalDocs } from '../lib/legal';
import { services } from '../lib/services';
import { site } from '../lib/site';

export default function Footer({ lang }: { lang: Lang }) {
  const dict = dictionaries[lang];
  const t = dict.footer;
  const base = homePath[lang] === '/' ? '/' : homePath[lang];

  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-10 pt-20 text-cream">
      <img
        src="/favicon.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 w-[520px] opacity-[0.04] invert"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1fr_1fr]">
          <div>
            <img src="/evolvetax-wordmark.svg" alt="Evolve Tax" width={272} height={66} className="h-9 w-auto invert" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">{t.blurb}</p>
          </div>

          <FooterColumn title={dict.services.eyebrow}>
            {serviceKeys.map((key) => (
              <FooterLink key={key} href={servicePath(key, lang)}>{services[key][lang].name}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t.navigation}>
            {dict.nav.items.map((item) => (
              <FooterLink key={item.id} href={`${base}#${item.id}`}>{item.name}</FooterLink>
            ))}
            <FooterLink href={`${base}#contact`}>{t.contact}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.legal}>
            {legalKeys.map((key) => (
              <FooterLink key={key} href={legalPaths[key][lang]}>{legalDocs[key][lang].title}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t.contact}>
            <li>
              <a href={`mailto:${site.email}`} className="text-sm text-cream/70 transition-colors hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedinCompany}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                LinkedIn ↗
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. {t.rights}</p>
          <p>{t.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">{title}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-cream/70 transition-colors hover:text-cream">
        {children}
      </Link>
    </li>
  );
}
