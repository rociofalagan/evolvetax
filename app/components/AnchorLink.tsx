'use client';

import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

// Enlace a una sección (#id). Si la sección existe en la página actual, desplaza hasta ella
// siempre, aunque la URL ya tenga ese #id (Next.js no vuelve a desplazar en ese caso).
// Si no existe (por ejemplo, desde una página legal), navega a la página indicada.
export default function AnchorLink({
  href,
  className,
  children,
  onNavigate,
  ...rest
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
  'aria-hidden'?: boolean;
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onNavigate?.();
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const id = href.split('#')[1];
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `${window.location.pathname}#${id}`);
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
