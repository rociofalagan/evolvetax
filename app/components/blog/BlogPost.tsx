import Image from 'next/image';
import Link from 'next/link';
import DiagnosisSection from '../DiagnosisSection';
import JsonLd from '../JsonLd';
import PostCard from './PostCard';
import RichText from './RichText';
import ShareButtons from './ShareButtons';
import { toCard } from './BlogIndex';
import { DarkBackdrop, FaqList } from '../ui';
import { dictionaries, homePath, type Lang } from '../../lib/i18n';
import { blogPath, postPath, servicePath, type PostKey } from '../../lib/routes';
import { blogUi, categories, formatDate, getPost, type PostBlock } from '../../lib/blog';
import { blogPostSchema } from '../../lib/schema';
import { services } from '../../lib/services';
import { site } from '../../lib/site';

export default function BlogPost({ postKey, lang }: { postKey: PostKey; lang: Lang }) {
  const post = getPost(postKey, lang);
  const ui = blogUi[lang];
  const url = `${site.url}${postPath(postKey, lang)}`;
  const toc = post.body.filter((b): b is { h2: string; id: string } => 'h2' in b);

  return (
    <main className="overflow-x-clip">
      <JsonLd data={blogPostSchema(postKey, lang)} />

      {/* Cabecera del artículo */}
      <section className="grain relative isolate overflow-hidden bg-ink text-cream">
        <DarkBackdrop />
        <div className="mx-auto max-w-4xl px-6 pb-32 pt-32 sm:pt-40">
          <Link href={blogPath[lang]} className="rise inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream">
            <span aria-hidden>←</span> {ui.back}
          </Link>

          <div className="rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream/60" style={{ animationDelay: '60ms' }}>
            <span className="rounded-full border border-wine-light/30 bg-wine/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-wine-light">
              {categories[post.category][lang]}
            </span>
            <time dateTime={post.published}>{formatDate(post.published, lang)}</time>
            <span aria-hidden>·</span>
            <span>
              {post.readingMinutes} {ui.minRead}
            </span>
          </div>

          <h1 className="lift mt-6 text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
          <p className="lift mt-6 text-lg leading-relaxed text-cream/65">{post.excerpt}</p>

          <div className="rise mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3">
              <Image src={site.founderPhoto} alt={site.founderName} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">{site.founderName}</p>
                <p className="text-xs text-cream/50">{dictionaries[lang].about.role} · Evolve Tax</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-cream/70">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-paper px-6 pb-24">
        {/* Portada */}
        <div className="relative mx-auto -mt-20 max-w-4xl">
          <div aria-hidden className="relative flex aspect-[21/9] items-end overflow-hidden rounded-3xl bg-gradient-to-br from-wine via-wine-deep to-ink p-8 shadow-[0_40px_80px_-40px_rgba(22,18,17,0.6)] sm:p-10">
            <div className="grid-lines absolute inset-0 text-white/[0.06]" />
            <span className="absolute -right-6 -top-10 font-serif text-[16rem] italic leading-none text-cream/10 sm:text-[22rem]">e.</span>
            <p className="relative max-w-md font-serif text-2xl italic leading-tight text-cream/90 sm:text-4xl">{categories[post.category][lang]}</p>
          </div>

          <nav aria-label="Breadcrumb" className="mt-6 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={homePath[lang]} className="hover:text-wine">{ui.home}</Link></li>
              <li aria-hidden>/</li>
              <li><Link href={blogPath[lang]} className="hover:text-wine">{ui.blog}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="line-clamp-1 text-ink">{post.title}</li>
            </ol>
          </nav>
        </div>

        {/* Contenido */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{ui.contents}</p>
              <ol className="mt-4 space-y-2 border-l border-line">
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-wine hover:text-wine">
                      {h.h2}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted transition-colors hover:border-wine hover:text-wine">
                    {ui.faq}
                  </a>
                </li>
              </ol>
            </div>
          </aside>

          <div className="min-w-0">
            <article className="rounded-3xl border border-line bg-white p-6 sm:p-10">
              <div className="rounded-2xl border border-wine/15 bg-rose/50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wine">{ui.keyTakeaways}</p>
                <ul className="mt-4 space-y-2.5">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 leading-relaxed text-ink/85">
                      <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wine" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-5">
                {post.body.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>

              <section id="faq" className="mt-14 scroll-mt-28 border-t border-line pt-10">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{ui.faq}</h2>
                <div className="mt-6">
                  <FaqList items={post.faq} />
                </div>
              </section>

              <div className="mt-10 border-t border-line pt-8">
                <ShareButtons url={url} title={post.title} label={ui.share} copiedLabel={ui.copied} />
              </div>
            </article>

            {/* Autora */}
            <div className="mt-6 flex items-center gap-5 rounded-3xl border border-line bg-white p-6">
              <Image src={site.founderPhoto} alt={site.founderName} width={64} height={64} className="h-16 w-16 shrink-0 rounded-full object-cover" />
              <div className="text-sm leading-relaxed">
                <p className="text-muted">
                  {ui.author}{' '}
                  <a href={site.linkedinFounder} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-wine">
                    {site.founderName}
                  </a>
                </p>
                <p className="mt-0.5 text-muted">{ui.authorBio}</p>
                <p className="mt-1.5 text-xs text-muted/80">
                  {ui.published}: <time dateTime={post.published}>{formatDate(post.published, lang)}</time> · {ui.updated}:{' '}
                  <time dateTime={post.updated}>{formatDate(post.updated, lang)}</time>
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted/80">{ui.disclaimer}</p>

            {/* Servicios relacionados */}
            <div className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight">{ui.relatedServices}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {post.relatedServices.map((key) => {
                  const s = services[key][lang];
                  return (
                    <Link
                      key={key}
                      href={servicePath(key, lang)}
                      className="group rounded-3xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-wine/30"
                    >
                      <p className="font-bold group-hover:text-wine">{s.name}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">{s.meta.description}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-wine">
                        {ui.learnMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="text-3xl font-extrabold tracking-tight">{ui.relatedPosts}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {post.relatedPosts.map((key) => (
              <PostCard key={key} post={toCard(getPost(key, lang), lang)} readMore={ui.readMore} minRead={ui.minRead} />
            ))}
          </div>
        </div>
      </div>

      <DiagnosisSection lang={lang} />
    </main>
  );
}

function Block({ block }: { block: PostBlock }) {
  if ('h2' in block) {
    return (
      <h2 id={block.id} className="scroll-mt-28 pt-6 text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
        {block.h2}
      </h2>
    );
  }
  if ('h3' in block) return <h3 className="pt-2 text-lg font-bold text-ink">{block.h3}</h3>;
  if ('callout' in block) {
    return (
      <aside className="rounded-2xl border-l-4 border-wine bg-paper px-6 py-5">
        <p className="font-bold text-ink">{block.callout.title}</p>
        <p className="mt-2 leading-relaxed text-muted">
          <RichText text={block.callout.text} />
        </p>
      </aside>
    );
  }
  if ('table' in block) {
    return (
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[480px] text-left text-[15px]">
          <thead className="bg-paper">
            <tr>
              {block.table.head.map((h, i) => (
                <th key={i} scope="col" className="px-4 py-3 font-semibold text-ink">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {block.table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="px-4 py-3 align-top text-muted">
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if ('list' in block) {
    return (
      <ul className="space-y-2.5">
        {block.list.map((item, i) => (
          <li key={i} className="flex gap-3 text-[17px] leading-relaxed text-muted">
            <span aria-hidden className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-wine/70" />
            <span>
              {Array.isArray(item) ? (
                <>
                  <strong className="font-semibold text-ink">{item[0]}:</strong> <RichText text={item[1]} />
                </>
              ) : (
                <RichText text={item} />
              )}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  if ('olist' in block) {
    return (
      <ol className="space-y-2.5">
        {block.olist.map((item, i) => (
          <li key={i} className="flex gap-3 text-[17px] leading-relaxed text-muted">
            <span aria-hidden className="w-5 shrink-0 font-serif text-xl italic leading-7 text-wine">
              {i + 1}
            </span>
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <p className="text-[17px] leading-[1.8] text-muted">
      <RichText text={block.p} />
    </p>
  );
}
