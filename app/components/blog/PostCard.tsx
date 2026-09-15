import Link from 'next/link';

export type PostCardData = {
  href: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateIso: string;
  readingMinutes: number;
  tags: string[];
};

// Tarjeta de artículo (listado del blog y "Sigue leyendo").
export default function PostCard({ post, readMore, minRead }: { post: PostCardData; readMore: string; minRead: string }) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-wine/30 hover:shadow-[0_30px_70px_-40px_rgba(22,18,17,0.35)]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted">
        <span className="rounded-full bg-rose px-3 py-1 font-semibold text-wine">{post.category}</span>
        <time dateTime={post.dateIso}>{post.date}</time>
        <span aria-hidden>·</span>
        <span>
          {post.readingMinutes} {minRead}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight">
        <Link href={post.href} className="after:absolute after:inset-0 after:content-[''] group-hover:text-wine">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 3).map((tag) => (
          <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
            #{tag}
          </li>
        ))}
      </ul>
      <span aria-hidden className="mt-6 text-sm font-semibold text-wine">
        {readMore} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </span>
    </article>
  );
}
