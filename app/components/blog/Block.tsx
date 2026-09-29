import RichText from './RichText';
import type { PostBlock } from '../../lib/blog';

// Renderiza un bloque de contenido (párrafo, titular, lista, aviso o tabla).
// Se usa en los artículos del blog y en las guías largas de las landings.
export default function Block({ block }: { block: PostBlock }) {
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
