import Reveal from './Reveal';

// Piezas visuales compartidas por la home y las landings de servicio.

export type Accent = { lead: string; accent: string };

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

export function Title({
  value,
  as: Tag = 'h2',
  className = '',
  dark = false,
}: {
  value: Accent;
  as?: 'h1' | 'h2';
  className?: string;
  dark?: boolean;
}) {
  return (
    <Tag className={`text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl ${className}`}>
      {value.lead}{' '}
      <span className={`font-serif font-normal italic ${dark ? 'text-wine-light' : 'text-wine'}`}>{value.accent}</span>
    </Tag>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${
        dark ? 'border-white/10 bg-white/[0.04] text-cream/70' : 'border-wine/15 bg-white/70 text-wine'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-wine-light' : 'bg-wine'}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: Accent;
  text?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <Title value={title} dark={dark} className="mt-5" />
      {text && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-cream/60' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 60}>
          <details className="group py-6">
            <summary className="flex cursor-pointer items-start justify-between gap-6 text-lg font-semibold leading-snug transition-colors hover:text-wine">
              <h3>{f.q}</h3>
              <span
                aria-hidden
                className="faq-icon mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-xl font-light text-wine transition-transform duration-300 group-open:border-wine/30 group-open:bg-rose"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl pr-10 leading-relaxed text-muted">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

// Fondo oscuro con cuadrícula, grano y resplandor borgoña (hero y secciones oscuras).
export function DarkBackdrop() {
  return (
    <>
      <div className="grid-lines absolute inset-0 -z-10 text-white/[0.05]" />
      <div className="absolute -left-40 top-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-wine/40 blur-[140px]" />
      <div className="absolute -right-20 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-wine-deep/70 blur-[120px]" />
    </>
  );
}
