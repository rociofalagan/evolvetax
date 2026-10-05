import './globals.css';
import { Manrope, Instrument_Serif } from 'next/font/google';
import NotFound from './components/NotFound';
import { notFoundCopy } from './lib/notfound';

// 404 global: al tener un layout raíz por idioma, esta página necesita su
// propio <html>/<body>. El idioma se ajusta en el cliente según la ruta.
const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'], display: 'swap' });
const instrument = Instrument_Serif({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

export const metadata = { title: 'Page not found | Evolve Tax', robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${instrument.variable} antialiased`}>
        <NotFound data={notFoundCopy} />
      </body>
    </html>
  );
}
