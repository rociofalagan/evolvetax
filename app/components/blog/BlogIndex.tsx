import Link from 'next/link';
import AnchorLink from '../AnchorLink';
import DiagnosisSection from '../DiagnosisSection';
import JsonLd from '../JsonLd';
import BlogGrid from './BlogGrid';
import { DarkBackdrop, Eyebrow } from '../ui';
import { homePath, type Lang } from '../../lib/i18n';
import { postPath } from '../../lib/routes';
import { blogUi, categories, formatDate, getPosts, type CategoryKey, type Post } from '../../lib/blog';
import { blogIndexSchema } from '../../lib/schema';
import type { PostCardData } from './PostCard';

export function toCard(post: Post, lang: Lang): PostCardData {
  return {
    href: postPath(post.key, lang),
    title: post.title,
    excerpt: post.excerpt,
    category: categories[post.category][lang],
    date: formatDate(post.published, lang),
    dateIso: post.published,
    readingMinutes: post.readingMinutes,
    tags: post.tags,
  };
}

export default function BlogIndex({ lang }: { lang: Lang }) {
  const ui = blogUi[lang];
  const posts = getPosts(lang);
  const [featured] = posts;
  const home = homePath[lang];
  const anchor = (id: string) => (home === '/' ? `/#${id}` : `${home}#${id}`);

  const usedCategories = (Object.keys(categories) as CategoryKey[])
    .map((key) => ({ key, label: categories[key][lang], count: posts.filter((p) => p.category === key).length }))
    .filter((c) => c.count > 0);

  return (
    <main className="overflow-x-clip">
      <JsonLd data={blogIndexSchema(lang)} />

      {/* Hero */}
      <section className="grain relative isolate overflow-hidden bg-ink text-cream">
        <DarkBackdrop />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-36 sm:pt-44 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
          <div>
            <div className="rise">
              <Eyebrow dark>{ui.eyebrow}</Eyebrow>
            </div>
            <h1 className="lift mt-6 text-[2.6rem] font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-6xl">
              {ui.title.lead}{' '}
              <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-wine-light">{ui.title.accent}</span>
            </h1>
            <p className="lift mt-6 max-w-xl text-lg leading-relaxed text-cream/65">{ui.intro}</p>
            <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '220ms' }}>
              <AnchorLink
                href="#diagnosis"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cream px-7 py-4 text-[15px] font-semibold text-ink transition-all hover:bg-white"
              >
                {ui.primary}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </AnchorLink>
              <AnchorLink
                href={anchor('services')}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-[15px] font-medium text-cream/85 transition-colors hover:border-white/30 hover:bg-white/[0.04]"
              >
                {ui.secondary}
              </AnchorLink>
            </div>
            <ul className="rise mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cream/55" style={{ animationDelay: '320ms' }}>
              {ui.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-wine-light/80" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Categorías + destacado */}
          <div className="rise space-y-4" style={{ animationDelay: '300ms' }}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.18em] text-cream/45">{ui.categoriesTitle}</p>
              <ul className="mt-4 divide-y divide-white/[0.07]">
                {usedCategories.map((c) => (
                  <li key={c.key} className="flex items-center justify-between py-2.5 text-[15px]">
                    <span>{c.label}</span>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-cream/70">{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>
            {featured && (
              <Link
                href={postPath(featured.key, lang)}
                className="group block rounded-3xl border border-wine-light/20 bg-gradient-to-br from-wine/40 to-wine-deep/40 p-6 transition-colors hover:border-wine-light/40"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-wine-light">{ui.featured}</p>
                <p className="mt-3 text-lg font-bold leading-snug">{featured.title}</p>
                <p className="mt-2 line-clamp-2 text-sm text-cream/60">{featured.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-cream">
                  {ui.readMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Migas de pan + listado */}
      <section className="bg-paper px-6 pb-24 pt-8 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex items-center gap-2">
              <li><Link href={home} className="hover:text-wine">{ui.home}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">{ui.blog}</li>
            </ol>
          </nav>

          <div className="mt-10">
            <BlogGrid
              posts={posts.map((p) => ({ ...toCard(p, lang), categoryKey: p.category }))}
              categories={usedCategories.map(({ key, label }) => ({ key, label }))}
              labels={ui}
            />
          </div>
        </div>
      </section>

      <DiagnosisSection lang={lang} />
    </main>
  );
}
