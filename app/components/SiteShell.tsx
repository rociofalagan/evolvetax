import { Manrope, Instrument_Serif } from 'next/font/google';
import Navigation from './Navigation';
import Footer from './Footer';
import type { Lang } from '../lib/i18n';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const instrument = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

// Estructura HTML común. Cada idioma tiene su propio layout raíz para que
// <html lang> sea correcto ("en" o "es") y las páginas sigan siendo estáticas.
export default function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body className={`${manrope.variable} ${instrument.variable} antialiased`}>
        <Navigation lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
