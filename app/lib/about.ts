import type { Lang } from './i18n';

type Accent = { lead: string; accent: string };

export type AboutContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: Accent;
  intro: string;
  facts: { label: string; value: string }[];
  story: { title: Accent; paragraphs: string[] };
  credentials: { title: Accent; items: { title: string; text: string }[] };
  how: { title: Accent; items: { title: string; text: string }[] };
  servicesTitle: Accent;
  servicesIntro: string;
  cta: { title: Accent; text: string };
  breadcrumb: string;
};

// Página "sobre nosotros": quién firma el asesoramiento (señal de confianza para Google en temas fiscales).
export const about: Record<Lang, AboutContent> = {
  en: {
    meta: {
      title: 'About Evolve Tax | International Tax Adviser in Dubai',
      description:
        'Evolve Tax is a licensed tax consultancy in Dubai founded by Rocío Falagán, with nearly a decade advising digital businesses across Spain and the UAE.',
    },
    eyebrow: 'About us',
    title: { lead: 'The adviser behind', accent: 'Evolve Tax.' },
    intro:
      'Evolve Tax is a boutique international tax consultancy based in Dubai. It was founded by Rocío Falagán after nearly a decade working in tax advisory across consulting and law firms in Spain and the United Arab Emirates.',
    facts: [
      { label: 'Founder', value: 'Rocío Falagán' },
      { label: 'Based in', value: 'Dubai, UAE' },
      { label: 'Licensed as', value: 'Tax consultant & CSP' },
      { label: 'Languages', value: 'English · Spanish' },
    ],
    story: {
      title: { lead: 'Why this firm', accent: 'exists.' },
      paragraphs: [
        'After years inside traditional firms, the pattern was always the same: the advice was technically correct, but it arrived late, in language nobody outside the profession understands, and it ignored how a digital business actually works — clients in five countries, income in three currencies and a founder who moves.',
        'Evolve Tax was built for that founder. We design the structure, set it up and then keep it running: the accounting, the Corporate Tax and VAT filings in the UAE, and the obligations that stay behind in Spain.',
        'We are deliberately small. You talk to the person who analyses your case, not to an account manager who forwards your question.',
      ],
    },
    credentials: {
      title: { lead: 'Credentials and', accent: 'licences.' },
      items: [
        { title: 'Licensed tax consultant', text: 'Evolve Blueprint Consulting FZCO holds trade licence 62485, issued by the Dubai Integrated Economic Zones Authority, covering tax consultancy and corporate services.' },
        { title: 'Corporate services provider', text: 'The same licence allows us to incorporate companies, handle licences and process residence visas, so the setup and the tax work stay under one roof.' },
        { title: 'Nearly a decade in tax', text: 'Experience in consulting and law firms in Spain and Dubai, working on international structures, tax residency and corporate compliance.' },
        { title: 'Two jurisdictions, one adviser', text: 'We work daily with both the UAE Federal Tax Authority and the Spanish tax system, which is where most cross-border mistakes happen.' },
        { title: 'A network beyond our own desk', text: 'We incorporate LLCs in the United States ourselves and work with local lawyers and accountants in other countries, so we can advise and incorporate outside our three core jurisdictions.' },
      ],
    },
    how: {
      title: { lead: 'How we', accent: 'work.' },
      items: [
        { title: 'No jargon', text: 'We explain what matters for your business in plain words, and we tell you when something is a risk.' },
        { title: 'Strategy, not paperwork', text: 'We do not just file forms: we design structures that hold up and that grow with you.' },
        { title: 'Direct contact', text: 'You speak with the person handling your case, and you get answers in days, not weeks.' },
      ],
    },
    servicesTitle: { lead: 'What we', accent: 'do.' },
    servicesIntro: 'Seven services you can hire separately or combine, from the first analysis to the day-to-day compliance.',
    cta: {
      title: { lead: 'Shall we look at', accent: 'your case?' },
      text: 'Start with an initial diagnosis: a one-hour call where you tell us your situation and we review it together.',
    },
    breadcrumb: 'About',
  },
  es: {
    meta: {
      title: 'Sobre Evolve Tax | Asesoría fiscal internacional en Dubái',
      description:
        'Evolve Tax es una asesoría fiscal con licencia en Dubái fundada por Rocío Falagán, con casi una década asesorando a negocios digitales entre España y Emiratos.',
    },
    eyebrow: 'Quiénes somos',
    title: { lead: 'Quién hay detrás de', accent: 'Evolve Tax.' },
    intro:
      'Evolve Tax es una asesoría fiscal internacional boutique con sede en Dubái. La fundó Rocío Falagán tras casi una década trabajando en asesoría fiscal, entre consultoras y despachos de España y Emiratos Árabes Unidos.',
    facts: [
      { label: 'Fundadora', value: 'Rocío Falagán' },
      { label: 'Sede', value: 'Dubái, EAU' },
      { label: 'Licencia', value: 'Tax consultant y CSP' },
      { label: 'Idiomas', value: 'Español · Inglés' },
    ],
    story: {
      title: { lead: 'Por qué existe', accent: 'esta asesoría.' },
      paragraphs: [
        'Después de años dentro de firmas tradicionales, el patrón se repetía: el asesoramiento era técnicamente correcto, pero llegaba tarde, en un lenguaje que nadie entiende fuera de la profesión y sin tener en cuenta cómo funciona de verdad un negocio digital, con clientes en cinco países, ingresos en tres monedas y un fundador que se mueve.',
        'Evolve Tax nace para ese fundador. Diseñamos la estructura, la ponemos en marcha y después la mantenemos: la contabilidad, el Corporate Tax y el IVA en Emiratos, y las obligaciones que quedan en España.',
        'Somos pequeños a propósito. Hablas con quien analiza tu caso, no con un gestor de cuentas que reenvía tu pregunta.',
      ],
    },
    credentials: {
      title: { lead: 'Credenciales y', accent: 'licencias.' },
      items: [
        { title: 'Asesoría fiscal con licencia', text: 'Evolve Blueprint Consulting FZCO tiene la licencia 62485, emitida por la Dubai Integrated Economic Zones Authority, que cubre consultoría fiscal y servicios corporativos.' },
        { title: 'Proveedor de servicios corporativos', text: 'La misma licencia nos permite constituir sociedades, tramitar licencias y gestionar visados de residencia, así que la constitución y la parte fiscal están en el mismo sitio.' },
        { title: 'Casi una década en fiscalidad', text: 'Experiencia en consultoras y despachos de España y Dubái, trabajando en estructuras internacionales, residencia fiscal y cumplimiento societario.' },
        { title: 'Dos jurisdicciones, una asesora', text: 'Trabajamos a diario con la Federal Tax Authority emiratí y con el sistema fiscal español, que es donde se concentran los errores transfronterizos.' },
        { title: 'Una red más allá de nuestro despacho', text: 'Creamos LLC en Estados Unidos y trabajamos con abogados y asesores locales en otros países, para poder asesorar y constituir fuera de nuestras tres jurisdicciones principales.' },
      ],
    },
    how: {
      title: { lead: 'Cómo', accent: 'trabajamos.' },
      items: [
        { title: 'Sin jerga', text: 'Te explicamos lo que importa para tu negocio con palabras normales, y te decimos cuándo algo es un riesgo.' },
        { title: 'Estrategia, no trámites', text: 'No rellenamos formularios: diseñamos estructuras que aguantan y que crecen contigo.' },
        { title: 'Trato directo', text: 'Hablas con quien lleva tu caso y tienes respuesta en días, no en semanas.' },
      ],
    },
    servicesTitle: { lead: 'Qué', accent: 'hacemos.' },
    servicesIntro: 'Siete servicios que puedes contratar por separado o combinar, desde el primer análisis hasta el día a día.',
    cta: {
      title: { lead: '¿Vemos', accent: 'tu caso?' },
      text: 'Empieza por un diagnóstico inicial: una llamada de una hora en la que nos cuentas tu situación y la analizamos juntos.',
    },
    breadcrumb: 'Quiénes somos',
  },
};
