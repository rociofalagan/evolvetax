'use client';

import { useMemo, useState } from 'react';
import PostCard, { type PostCardData } from './PostCard';

type Item = PostCardData & { categoryKey: string };

// Filtros por categoría y etiqueta + cuadrícula de artículos.
export default function BlogGrid({
  posts,
  categories,
  labels,
}: {
  posts: Item[];
  categories: { key: string; label: string }[];
  labels: { filterCategories: string; filterTags: string; all: string; readMore: string; minRead: string; noResults: string };
}) {
  const [category, setCategory] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t]) => t);
  }, [posts]);

  const visible = posts.filter((p) => (!category || p.categoryKey === category) && (!tag || p.tags.includes(tag)));

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
      active ? 'border-wine bg-wine text-cream' : 'border-line bg-white text-muted hover:border-wine/40 hover:text-wine'
    }`;

  return (
    <div>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-semibold text-ink">{labels.filterCategories}:</span>
          <button type="button" onClick={() => setCategory(null)} className={chip(category === null)} aria-pressed={category === null}>
            {labels.all}
          </button>
          {categories.map((c) => (
            <button key={c.key} type="button" onClick={() => setCategory(c.key)} className={chip(category === c.key)} aria-pressed={category === c.key}>
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-semibold text-ink">{labels.filterTags}:</span>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? null : t)}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${tag === t ? 'bg-ink text-cream' : 'bg-rose/70 text-wine hover:bg-rose'}`}
              aria-pressed={tag === t}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <PostCard key={post.href} post={post} readMore={labels.readMore} minRead={labels.minRead} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-3xl border border-dashed border-line p-10 text-center text-muted">{labels.noResults}</p>
      )}
    </div>
  );
}
