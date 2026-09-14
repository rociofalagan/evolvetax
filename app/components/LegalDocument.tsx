import Link from 'next/link';
import { DarkBackdrop, Eyebrow } from './ui';
import type { Lang } from '../lib/i18n';
import { legalDocs, legalUi, legalUpdated, type LegalBlock } from '../lib/legal';
import type { LegalKey } from '../lib/routes';

export default function LegalDocument({ docKey, lang }: { docKey: LegalKey; lang: Lang }) {
  const doc = legalDocs[docKey][lang];
  const ui = legalUi[lang];

  return (
    <main className="overflow-x-clip">
      <section className="grain relative isolate overflow-hidden bg-ink text-cream">
        <DarkBackdrop />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-36 sm:pt-44">
          <Eyebrow dark>{ui.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.035em] sm:text-6xl">{doc.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/65">{doc.lead}</p>
          <p className="mt-6 text-sm text-cream/45">
            {ui.updated}: {legalUpdated[lang]}
          </p>
        </div>
      </section>

      <div className="bg-paper px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav aria-label={ui.contents} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{ui.contents}</p>
              <ol className="mt-4 space-y-2 border-l border-line">
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-wine hover:text-wine">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-3xl">
            {doc.sections.map((s, i) => (
              <section key={s.id} id={s.id} className={`scroll-mt-28 ${i > 0 ? 'mt-14 border-t border-line pt-14' : ''}`}>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{s.title}</h2>
                <div className="mt-5 space-y-4">
                  {s.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </section>
            ))}

            {doc.closing && (
              <p className="mt-16 rounded-2xl border border-wine/15 bg-rose/50 p-6 font-serif text-xl italic leading-snug text-ink">
                {doc.closing}
              </p>
            )}
          </article>
        </div>
      </div>
    </main>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if ('h' in block) {
    return <h3 className="pt-3 text-lg font-bold">{block.h}</h3>;
  }

  if ('note' in block) {
    return <p className="rounded-2xl border border-line bg-white px-5 py-4 text-[15px] leading-relaxed text-muted">{block.note}</p>;
  }

  if ('dl' in block) {
    return (
      <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {block.dl.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="text-sm font-semibold text-ink">{label}</dt>
            <dd className="text-[15px] text-muted">{value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if ('list' in block) {
    const Tag = block.ordered ? 'ol' : 'ul';
    return (
      <Tag className="space-y-2.5">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden className={`mt-0.5 shrink-0 ${block.ordered ? 'w-5 font-serif text-lg italic text-wine' : 'mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-wine/70'}`}>
              {block.ordered ? i + 1 : null}
            </span>
            <span>
              {Array.isArray(item) ? (
                <>
                  <strong className="font-semibold text-ink">{item[0]}:</strong> {item[1]}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        ))}
      </Tag>
    );
  }

  return (
    <p className="leading-relaxed text-muted">
      {block.p}
      {block.link && (
        <>
          {' '}
          {block.link.href.startsWith('mailto:') ? (
            <a href={block.link.href} className="font-semibold text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine">
              {block.link.label}
            </a>
          ) : (
            <Link href={block.link.href} className="font-semibold text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine">
              {block.link.label}
            </Link>
          )}
        </>
      )}
    </p>
  );
}
