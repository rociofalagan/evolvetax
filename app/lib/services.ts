// Contenido de las landings de servicio (SEO), en inglés y español.
// Cada servicio tiene su propia URL en cada idioma (ver routes.ts).

import type { Lang } from './i18n';
import type { ServiceKey } from './routes';
import type { PostBlock } from './blog/types';

type Accent = { lead: string; accent: string };

export type ServiceContent = {
  name: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: Accent; intro: string; facts: { label: string; value: string }[] };
  included: { title: Accent; intro: string; items: { title: string; text: string }[] };
  forWho: string[];
  process: { title: string; text: string }[];
  guide: { title: Accent; intro: string; blocks: { heading: string; paragraphs: string[] }[] };
  // Guía larga opcional (SEO): bloques enriquecidos con tablas, listas y avisos.
  deepDive?: { title: Accent; intro: string; blocks: PostBlock[] };
  mistakes: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  cta: { title: Accent; text: string };
};

// Fecha de última revisión de cada landing (se muestra en la página y en los datos estructurados).
export const serviceUpdated: Record<ServiceKey, string> = {
  structuring: '2026-10-05',
  dubai: '2026-11-25',
  uaeTax: '2026-10-05',
  usLlc: '2026-10-05',
  spainTax: '2026-10-05',
  residency: '2026-10-05',
  spainDubai: '2026-11-25',
  beckham: '2026-10-05',
};

// La más reciente de todas, para el sitemap.
export const servicesUpdatedIso = Object.values(serviceUpdated).sort().at(-1)!;

export function serviceUpdatedLabel(key: ServiceKey, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', { month: 'long', year: 'numeric' })
    .format(new Date(serviceUpdated[key]));
}

export const serviceUi = {
  en: {
    home: 'Home',
    services: 'Services',
    primary: 'Book your initial diagnosis',
    secondary: 'See what’s included',
    includedEyebrow: 'What’s included',
    forWhoEyebrow: 'Who it’s for',
    forWhoTitle: { lead: 'Is this', accent: 'for you?' },
    processEyebrow: 'How it works',
    processTitle: { lead: 'Step by', accent: 'step.' },
    guideEyebrow: 'Guide',
    deepDiveEyebrow: 'Complete guide',
    contents: 'Contents',
    mistakesEyebrow: 'Common mistakes',
    mistakesTitle: { lead: 'Mistakes we', accent: 'see often.' },
    faqEyebrow: 'FAQ',
    faqTitle: { lead: 'Frequently asked', accent: 'questions.' },
    reviewedBy: 'Reviewed by',
    authorBio: 'Founder of Evolve Tax. Nearly a decade in tax advisory across consulting and law firms in Spain and Dubai.',
    updated: 'Last updated',
    disclaimer: 'This page offers general information and does not replace personalised advice for your case.',
    relatedEyebrow: 'Other services',
    relatedTitle: { lead: 'You may also', accent: 'need.' },
    learnMore: 'Learn more',
    relatedArticles: { lead: 'From the', accent: 'blog.' },
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    primary: 'Reserva tu diagnóstico inicial',
    secondary: 'Ver qué incluye',
    includedEyebrow: 'Qué incluye',
    forWhoEyebrow: 'Para quién es',
    forWhoTitle: { lead: '¿Es para', accent: 'ti?' },
    processEyebrow: 'Cómo funciona',
    processTitle: { lead: 'Paso a', accent: 'paso.' },
    guideEyebrow: 'Guía',
    deepDiveEyebrow: 'Guía completa',
    contents: 'Índice',
    mistakesEyebrow: 'Errores habituales',
    mistakesTitle: { lead: 'Errores que vemos', accent: 'a menudo.' },
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: { lead: 'Preguntas', accent: 'frecuentes.' },
    reviewedBy: 'Revisado por',
    authorBio: 'Fundadora de Evolve Tax. Casi una década en asesoría fiscal, entre consultoras y despachos de España y Dubái.',
    updated: 'Última actualización',
    disclaimer: 'Esta página ofrece información general y no sustituye el asesoramiento personalizado para tu caso.',
    relatedEyebrow: 'Otros servicios',
    relatedTitle: { lead: 'También te puede', accent: 'interesar.' },
    learnMore: 'Saber más',
    relatedArticles: { lead: 'Del', accent: 'blog.' },
  },
} satisfies Record<Lang, Record<string, string | Accent>>;

export const services: Record<ServiceKey, Record<Lang, ServiceContent>> = {
  /* ----------------------------------------------------------------
     Estructuración fiscal internacional
     ---------------------------------------------------------------- */
  structuring: {
    en: {
      name: 'International tax structuring',
      meta: {
        title: 'International Tax Structuring for Founders | Evolve Tax',
        description:
          'International tax structuring for digital entrepreneurs and online businesses: tax residency, company structure and jurisdiction comparison with real numbers.',
      },
      hero: {
        eyebrow: 'Service · International tax structuring',
        title: { lead: 'International tax structuring,', accent: 'before you move a thing.' },
        intro:
          'Setting up a company abroad or changing country is a decision with tax consequences for years. We analyse your personal and business situation, compare options with real numbers and give you a clear roadmap — so you decide with data, not with what you read on social media.',
        facts: [
          { label: 'Starting point', value: 'Your real situation' },
          { label: 'Output', value: 'Written roadmap' },
          { label: 'Covers', value: 'You and your company' },
          { label: 'Jurisdictions', value: 'Spain · UAE · others' },
        ],
      },
      included: {
        title: { lead: 'What the plan', accent: 'includes.' },
        intro: 'A tax plan isn’t a generic report. It’s an analysis of your case with conclusions you can act on.',
        items: [
          { title: 'Analysis of your current situation', text: 'Where you are tax resident today, how you invoice, what structure you have and what risks it carries.' },
          { title: 'Personal tax residency', text: 'Whether you would really change your tax residency, what conditions you must meet and what to watch during the transition.' },
          { title: 'Company structure', text: 'Where the company should be, who should own it and how income should flow between you and the business.' },
          { title: 'Jurisdiction comparison', text: 'Spain, the UAE and other realistic options for your profile, with the estimated tax burden of each scenario.' },
          { title: 'Risks and substance', text: 'What a tax authority would look at in your case and what real substance your structure needs to be defensible.' },
          { title: 'Roadmap', text: 'The steps in order, with timings and dependencies, ready to implement.' },
        ],
      },
      forWho: [
        'Entrepreneurs considering a move abroad — to Dubai or elsewhere — who want to check the numbers first.',
        'Founders with a company in Spain who work mostly with international clients.',
        'People who already set up a company abroad and aren’t sure it’s well structured.',
        'Freelancers whose income has grown and who need to stop improvising.',
      ],
      process: [
        { title: 'First conversation', text: 'We understand your situation, your goals and your timeline.' },
        { title: 'Information gathering', text: 'You send us the key documents: tax returns, company details and income sources.' },
        { title: 'Analysis and scenarios', text: 'We study your case and compare realistic alternatives with numbers.' },
        { title: 'Roadmap', text: 'We walk you through the conclusions and next steps, in writing.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'before structuring.' },
        intro: 'Three ideas that prevent most problems in international tax structuring.',
        blocks: [
          {
            heading: 'Tax residency comes first',
            paragraphs: [
              'The company is only half the picture. In most cases, what determines where you pay tax is where you are personally tax resident. If you remain resident in Spain, your worldwide income is taxed there, wherever your company is.',
              'That’s why any serious plan starts by analysing your personal residency and only then designs the company structure.',
            ],
          },
          {
            heading: 'Where the company is managed matters as much as where it is registered',
            paragraphs: [
              'A company incorporated abroad can be considered tax resident in Spain if its effective management takes place in Spain. Registering a company in Dubai while running it from Madrid doesn’t change where it is taxed.',
              'The structure has to match reality: where decisions are made, where the team is and where the business actually operates.',
            ],
          },
          {
            heading: 'Cheap today can be expensive tomorrow',
            paragraphs: [
              'Choosing a structure only by its tax rate often ends in reassessments, penalties or a structure that has to be undone. What matters is a structure you can explain, with real substance, that holds up if the tax authority asks.',
              'A good plan also looks ahead: what happens if you grow, bring in partners or decide to return.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Incorporating first, asking later', text: 'Opening a company abroad before analysing your residency is the most expensive and most common mistake.' },
        { title: 'Copying someone else’s structure', text: 'What works for another entrepreneur may not fit your income, your family or your business model.' },
        { title: 'Forgetting about the exit', text: 'Leaving Spain can have tax consequences on the way out that should be planned in advance.' },
        { title: 'Confusing optimisation with hiding', text: 'Structures without substance, or designed to hide income, end up costing more than they save.' },
      ],
      faq: [
        { q: 'How long does international tax structuring take?', a: 'It depends on the complexity of your case and how quickly we receive the information. We give you an estimated timeline in the proposal, before we start.' },
        { q: 'Do I have to hire the implementation afterwards?', a: 'No. The roadmap is yours and you can implement it with whoever you want. If you’d like us to do it, we can take care of the whole process.' },
        { q: 'Is Dubai always the best option?', a: 'No. For some profiles it makes a lot of sense and for others it doesn’t. The analysis compares realistic options and tells you honestly which one fits you.' },
        { q: 'Can you help if I already have a structure in place?', a: 'Yes. We review your current structure, identify risks and propose adjustments if they are needed.' },
      ],
      cta: {
        title: { lead: 'Let’s look at', accent: 'your numbers.' },
        text: 'Tell us about your situation and we’ll tell you whether a tax structuring plan makes sense for your case.',
      },
    },
    es: {
      name: 'Estructuración fiscal internacional',
      meta: {
        title: 'Estructuración fiscal internacional | Evolve Tax',
        description:
          'Estructuración fiscal internacional para negocios digitales: residencia fiscal, estructura societaria y comparativa de jurisdicciones con números reales.',
      },
      hero: {
        eyebrow: 'Servicio · Estructuración fiscal internacional',
        title: { lead: 'Estructuración fiscal internacional,', accent: 'antes de mover nada.' },
        intro:
          'Montar una empresa fuera o cambiar de país es una decisión con consecuencias fiscales durante años. Analizamos tu situación personal y de negocio, comparamos opciones con números reales y te damos una hoja de ruta clara, para que decidas con datos y no con lo que lees en redes.',
        facts: [
          { label: 'Punto de partida', value: 'Tu situación real' },
          { label: 'Resultado', value: 'Hoja de ruta por escrito' },
          { label: 'Cubre', value: 'Tú y tu empresa' },
          { label: 'Jurisdicciones', value: 'España · EAU · otras' },
        ],
      },
      included: {
        title: { lead: 'Qué incluye', accent: 'el plan.' },
        intro: 'Un plan fiscal no es un informe genérico. Es un análisis de tu caso con conclusiones sobre las que puedes actuar.',
        items: [
          { title: 'Análisis de tu situación actual', text: 'Dónde eres residente fiscal hoy, cómo facturas, qué estructura tienes y qué riesgos implica.' },
          { title: 'Residencia fiscal personal', text: 'Si de verdad cambiarías de residencia fiscal, qué condiciones debes cumplir y qué vigilar durante la transición.' },
          { title: 'Estructura societaria', text: 'Dónde debe estar la sociedad, quién debe ser el titular y cómo deben fluir los ingresos entre tú y el negocio.' },
          { title: 'Comparativa de jurisdicciones', text: 'España, Emiratos y otras opciones realistas para tu perfil, con la carga fiscal estimada de cada escenario.' },
          { title: 'Riesgos y sustancia', text: 'Qué miraría Hacienda en tu caso y qué sustancia real necesita tu estructura para ser defendible.' },
          { title: 'Hoja de ruta', text: 'Los pasos en orden, con plazos y dependencias, lista para implantar.' },
        ],
      },
      forWho: [
        'Emprendedores que se plantean irse fuera, a Dubái u otro destino, y quieren ver los números antes.',
        'Fundadores con empresa en España que trabajan sobre todo con clientes internacionales.',
        'Quien ya montó una sociedad fuera y no tiene claro si está bien estructurada.',
        'Freelancers cuyos ingresos han crecido y necesitan dejar de improvisar.',
      ],
      process: [
        { title: 'Primera conversación', text: 'Entendemos tu situación, tus objetivos y tus plazos.' },
        { title: 'Recogida de información', text: 'Nos envías la documentación clave: declaraciones, datos de la sociedad y fuentes de ingresos.' },
        { title: 'Análisis y escenarios', text: 'Estudiamos tu caso y comparamos alternativas realistas con números.' },
        { title: 'Hoja de ruta', text: 'Te explicamos las conclusiones y los siguientes pasos, por escrito.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'antes de estructurar.' },
        intro: 'Tres ideas que evitan la mayoría de problemas en la estructuración fiscal internacional.',
        blocks: [
          {
            heading: 'Primero va la residencia fiscal',
            paragraphs: [
              'La sociedad es solo la mitad del cuadro. En la mayoría de casos, lo que determina dónde pagas impuestos es dónde eres residente fiscal como persona. Si sigues siendo residente en España, tributas allí por tu renta mundial, esté donde esté tu empresa.',
              'Por eso cualquier plan serio empieza analizando tu residencia personal y solo después diseña la estructura societaria.',
            ],
          },
          {
            heading: 'Importa tanto dónde se dirige la empresa como dónde está registrada',
            paragraphs: [
              'Una sociedad constituida fuera puede considerarse residente fiscal en España si su sede de dirección efectiva está en España. Registrar una empresa en Dubái y dirigirla desde Madrid no cambia dónde tributa.',
              'La estructura tiene que coincidir con la realidad: dónde se toman las decisiones, dónde está el equipo y dónde opera de verdad el negocio.',
            ],
          },
          {
            heading: 'Lo barato hoy puede salir caro mañana',
            paragraphs: [
              'Elegir una estructura solo por el tipo impositivo suele acabar en regularizaciones, sanciones o en tener que deshacerla. Lo que importa es una estructura que puedas explicar, con sustancia real, y que aguante si Hacienda pregunta.',
              'Un buen plan también mira hacia delante: qué pasa si creces, si entran socios o si decides volver.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Constituir primero y preguntar después', text: 'Abrir una sociedad fuera antes de analizar tu residencia es el error más caro y más frecuente.' },
        { title: 'Copiar la estructura de otro', text: 'Lo que funciona a otro emprendedor puede no encajar con tus ingresos, tu familia o tu modelo de negocio.' },
        { title: 'Olvidarse de la salida', text: 'Irse de España puede tener consecuencias fiscales a la salida que conviene planificar con antelación.' },
        { title: 'Confundir optimizar con ocultar', text: 'Las estructuras sin sustancia o pensadas para esconder ingresos acaban costando más de lo que ahorran.' },
      ],
      faq: [
        { q: '¿Cuánto tarda la estructuración fiscal internacional?', a: 'Depende de la complejidad de tu caso y de lo rápido que recibamos la información. Te damos un plazo estimado en la propuesta, antes de empezar.' },
        { q: '¿Tengo que contratar después la implantación?', a: 'No. La hoja de ruta es tuya y puedes implantarla con quien quieras. Si prefieres que lo hagamos nosotros, nos encargamos de todo el proceso.' },
        { q: '¿Dubái es siempre la mejor opción?', a: 'No. Para algunos perfiles tiene mucho sentido y para otros no. El análisis compara opciones realistas y te dice con honestidad cuál encaja contigo.' },
        { q: '¿Podéis ayudarme si ya tengo una estructura montada?', a: 'Sí. Revisamos tu estructura actual, identificamos riesgos y te proponemos ajustes si hacen falta.' },
      ],
      cta: {
        title: { lead: 'Veamos tus', accent: 'números.' },
        text: 'Cuéntanos tu situación y te decimos si una estructuración fiscal tiene sentido en tu caso.',
      },
    },
  },

  /* ----------------------------------------------------------------
     Incorporación de empresas en Dubái
     ---------------------------------------------------------------- */
  dubai: {
    en: {
      name: 'Business setup in Dubai',
      meta: {
        title: 'Business Setup in Dubai: Cost and Licence | Evolve Tax',
        description:
          'Business setup in Dubai with a licensed tax adviser: free zone or mainland licence from AED 15,000 in about 14 days, plus visa, bank and tax registrations.',
      },
      hero: {
        eyebrow: 'Service · Business setup in Dubai',
        title: { lead: 'Business setup in Dubai,', accent: 'done the right way.' },
        intro:
          'We handle your company formation in Dubai from start to finish: choosing the free zone or mainland licence, incorporation, residence visa, corporate bank account and tax registrations. And unlike a pure formation agent, we are a licensed tax consultant, so the structure is designed around your tax situation — in the UAE and in the country you are coming from.',
        facts: [
          { label: 'Licence issued in', value: '≈ 14 days' },
          { label: 'Free zones', value: 'Any, based on your activity' },
          { label: 'Includes', value: 'Licence · Visa · Bank' },
          { label: 'Licensed as', value: 'Tax consultant & CSP' },
        ],
      },
      included: {
        title: { lead: 'What the setup', accent: 'includes.' },
        intro: 'Everything your company needs to operate in Dubai, not just the trade licence.',
        items: [
          { title: 'Free zone or mainland selection', text: 'We compare the free zones and the mainland for your activity, visa needs and budget, and recommend the licence that fits.' },
          { title: 'Company incorporation', text: 'Name reservation, initial approval, documentation and incorporation until your trade licence is issued.' },
          { title: 'Residence visa and Emirates ID', text: 'Establishment card, entry permit, medical test, Emirates ID and visa stamping for you and, if needed, your family.' },
          { title: 'Corporate bank account', text: 'We prepare the compliance file and support you through the account opening, the step where most applications stall.' },
          { title: 'Corporate Tax and VAT registration', text: 'Registration with the Federal Tax Authority and, where applicable, VAT, so your company starts compliant.' },
          { title: 'Tax structure review', text: 'Before incorporating, we check how the company fits with your personal tax residency and where it will really be taxed.' },
        ],
      },
      forWho: [
        'Digital entrepreneurs and online businesses that want to operate from the UAE.',
        'Freelancers and consultants with international clients who are moving to Dubai.',
        'Founders who want a UAE company as part of a well-designed international structure.',
        'Companies expanding to the Middle East that need a licence, visas and banking.',
        'Anyone who wants one provider for the setup and the tax work that comes after.',
      ],
      process: [
        { title: 'Analysis and free zone', text: 'We review your activity, your residency and your plans, and choose the free zone or mainland licence that fits.' },
        { title: 'Documentation', text: 'We tell you exactly what is needed and prepare the application with you.' },
        { title: 'Incorporation', text: 'We file and follow up the application until the trade licence is issued — around 14 days in total.' },
        { title: 'Visa, bank and registrations', text: 'Residence visa, corporate bank account and tax registrations, so the company is ready to operate.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'before setting up in Dubai.' },
        intro: 'Setting up is quick. Setting up well means answering a few questions first.',
        blocks: [
          {
            heading: 'Free zone or mainland',
            paragraphs: [
              'Free zone companies are the usual choice for digital businesses: 100% foreign ownership, a fast setup and a wide range of activities. Mainland companies make more sense if you need to trade directly with the local market.',
              'Almost any free zone can work. What matters is choosing one whose licensed activities, costs and requirements fit your business.',
            ],
          },
          {
            heading: 'Corporate Tax also applies in free zones',
            paragraphs: [
              'The UAE has a federal Corporate Tax: 0% on taxable income up to AED 375,000 and 9% above that. Free zone companies must also register and file returns, even though they can apply a 0% rate on qualifying income when they meet the requirements.',
              'Choosing the right structure and keeping proper accounts from the start is what allows you to apply the right tax treatment.',
            ],
          },
          {
            heading: 'A company in Dubai does not change your personal tax residency',
            paragraphs: [
              'Having a UAE company does not make you non-resident where you live today. If you still live in Spain, for example, or the company is effectively managed from Spain, both you and the company can be taxed there.',
              'That is why we check your personal tax residency before incorporating, not after.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Company formation in Dubai:', accent: 'the complete guide.' },
        intro: 'Licences, costs, documents, timelines, visas, banking and what happens after the licence is issued.',
        blocks: [
          { h2: 'Which licence you need', id: 'licence-types' },
          { p: 'Every UAE company operates under a trade licence tied to the activities it is allowed to carry out. The main categories are:' },
          {
            list: [
              ['Commercial licence', 'trading, import and export, e-commerce and general buying and selling of goods.'],
              ['Professional or service licence', 'consulting, marketing, design, software, coaching and most digital services.'],
              ['Industrial licence', 'manufacturing, processing and assembly.'],
              ['Tourism licence', 'travel agencies and tourism-related activities.'],
            ],
          },
          { p: 'The activities on your licence matter more than people expect: invoicing for something your licence does not cover is one of the most common problems we see, and adding activities later means an amendment and extra fees. We map your real revenue streams to the activity list before filing anything.' },

          { h2: 'Where to set up: mainland, free zone or offshore', id: 'routes' },
          {
            table: {
              head: ['', 'Free zone', 'Mainland', 'Offshore'],
              rows: [
                ['Foreign ownership', '100%', '100% for most activities', '100%'],
                ['Trade in the UAE market', 'Limited; may need a distributor or permit', 'Anywhere in the UAE', 'No'],
                ['Residence visas', 'Yes, depending on the package', 'Yes, depending on office space', 'No'],
                ['Office', 'Flexi-desk packages are common', 'Physical office lease usually required', 'Registered agent only'],
                ['Corporate Tax', '9%, with a possible 0% on qualifying income', '0% up to AED 375,000 and 9% above', 'Subject to the same rules'],
              ],
            },
          },
          { p: 'For a digital business selling to clients outside the UAE, a free zone company is usually the right answer. We compare both in detail in [Free zone or mainland in Dubai](/blog/dubai-free-zone-vs-mainland).' },

          { h2: 'How much it costs to open a company in Dubai', id: 'cost' },
          { p: 'There is no single price: the cost depends on the free zone, the number of activities on your licence, how many residence visas you need and whether you need a physical office.' },
          { callout: { title: 'As a guide: AED 15,000 – 20,000', text: 'A free zone company with one residence visa usually falls in that range for the first year, including the trade licence, the establishment card and the visa. Mainland companies cost more because they require a physical office lease. We always send a written quote with the exact figures for your case.' } },
          { p: 'These are the components behind that number:' },
          {
            table: {
              head: ['Concept', 'When you pay it'],
              rows: [
                ['Trade licence (free zone or mainland)', 'Every year'],
                ['Name reservation and initial approval', 'Once, at incorporation'],
                ['Establishment card', 'Once, then renewed; needed to sponsor visas'],
                ['Residence visa: permit, medical, Emirates ID and stamping', 'Per person, renewed every 2–3 years'],
                ['Office: flexi-desk or lease', 'Usually included in free zone packages; extra on mainland'],
                ['Our professional fees', 'Agreed in writing before we start'],
              ],
            },
          },
          { callout: { title: 'What a licence quote does not include', text: 'Bank account minimum balances, accounting and Corporate Tax filings, VAT registration and returns, document attestation and translation, health insurance for visa holders, and the renewal of the licence and visas every year. We quote these separately so there are no surprises in month three.' } },
          { p: 'Our own fees for the setup are agreed in writing before we start, and we tell you which third-party costs are paid directly to the authorities. We break every line down in [how much it costs to set up a company in Dubai](/blog/cost-to-set-up-a-company-in-dubai).' },

          { h2: 'Documents you will need', id: 'documents' },
          {
            list: [
              'Passport copy with at least six months of validity',
              'Recent passport-size photograph with a white background',
              'Proof of address in your current country of residence',
              'Entry stamp or current UAE visa page, if you are already in the country',
              'A short CV or company profile, required by some free zones and activities',
              'A no-objection certificate, if you already hold a UAE employment visa',
              'Attested corporate documents, if a company is going to be a shareholder',
            ],
          },

          { h2: 'How to set up a company in Dubai, step by step', id: 'steps' },
          {
            olist: [
              'Choose the activity, the legal form and the free zone or mainland route.',
              'Reserve the company name and obtain the initial approval.',
              'Prepare and file the application with the documentation.',
              'Trade licence issued — around 14 days in total in a free zone.',
              'Establishment card and visa quota for the company.',
              'Entry permit, medical test, Emirates ID and residence visa stamping.',
              'Corporate bank account opening.',
              'Corporate Tax registration and, if applicable, VAT registration.',
            ],
          },
          { p: 'The licence is the fast part. Visas usually take one to three weeks after the licence, and the bank account depends on the bank and on how well the file is prepared — that is where most of the real waiting time is.' },

          { h2: 'Residence visas and how many you get', id: 'visas' },
          { p: 'The number of visas your company can sponsor depends on the package and the office space. A flexi-desk package typically comes with one or two visa quotas; more visas usually require a larger office.' },
          { p: 'The visa process runs in stages: entry permit, status change, medical test, Emirates ID biometrics and visa stamping. Once you have a residence visa you can sponsor your spouse and children, and you can apply for a UAE tax residency certificate when you meet the day-count conditions explained in our [guide to the UAE tax system](/blog/uae-tax-system-guide).' },

          { h2: 'Opening a corporate bank account', id: 'banking' },
          { p: 'A trade licence does not come with a bank account. UAE banks run their own compliance checks and will ask about your business model, your clients, expected turnover and the source of your funds. Applications are rejected or delayed when the story on paper does not match the activity on the licence.' },
          { p: 'We prepare the file — licence, corporate documents, passports, business plan, contracts or invoices that prove real activity — and guide you through the options, from traditional banks with minimum balance requirements to digital business banking.' },

          { h2: 'What happens after the licence: tax and compliance', id: 'after-setup' },
          { p: 'A UAE company has yearly obligations from day one:' },
          {
            list: [
              ['Corporate Tax registration', 'with the Federal Tax Authority, and an annual return within nine months of your financial year end, even if the tax due is zero.'],
              ['Bookkeeping', 'proper accounting records, kept for at least seven years.'],
              ['VAT', 'registration is mandatory above AED 375,000 of taxable supplies, with periodic returns.'],
              ['Free zone 0% rate', 'only available to a Qualifying Free Zone Person with adequate substance, audited accounts and non-qualifying revenue under the de minimis threshold.'],
              ['Renewals', 'licence, establishment card and visas renew every year.'],
            ],
          },
          { p: 'This is the part most formation agents do not cover. We do: see [tax management in Dubai](/services/dubai-tax-management).' },

          { h2: 'Opening a Dubai company from Spain or the EU', id: 'from-spain' },
          { p: 'Opening a company in Dubai does not, by itself, change where you pay tax. If you keep living in Spain, or you manage the company from there, the Spanish tax authorities can treat the company as Spanish and tax its worldwide profits. Your own tax residency has to change first, and it has to be provable.' },
          { p: 'We analyse both sides before you incorporate: read [Does a Dubai company pay tax in Spain?](/blog/dubai-company-taxed-in-spain) or start with a [change of tax residency](/services/tax-residency-change) analysis.' },
          { p: 'If you are based in Spain and want to know what can be done remotely, which documents you will be asked for and what you still report at home, we walk through it in [setting up a Dubai company from Spain](/blog/set-up-a-dubai-company-from-spain).' },
        ],
      },
      mistakes: [
        { title: 'Choosing the free zone on price alone', text: 'The cheapest licence may not cover your activity or may limit how you can operate.' },
        { title: 'Underestimating the bank account', text: 'Opening the account can take longer than the incorporation itself if the file is not well prepared.' },
        { title: 'Forgetting about Corporate Tax', text: 'Many free zone companies do not register or keep accounts because they assume they pay nothing, and end up with penalties.' },
        { title: 'Running it from another country', text: 'Setting up in Dubai while you keep living in and managing the business from Spain can make the company taxable in Spain.' },
      ],
      faq: [
        { q: 'What do I need to open a company in Dubai?', a: 'A passport with at least six months of validity, a passport-style photograph, proof of address and, depending on the free zone and the activity, a short CV or company profile. If a company is the shareholder, you also need attested corporate documents. You do not need to be a resident or to have a local partner.' },
        { q: 'Can I open a company in Dubai from abroad?', a: 'Yes. Incorporation and the licence are handled remotely with a power of attorney and digitised documents; the residence visa and most bank account openings do require a trip. What has to be checked first is your tax residency, because if you remain resident elsewhere the company may end up taxable there.' },
        { q: 'How long does business setup in Dubai take?', a: 'The trade licence usually takes around 14 days once we have your documentation. The residence visa comes afterwards, normally one to three weeks, and the bank account depends on the bank and the profile of the business.' },
        { q: 'How much does it cost to set up a company in Dubai?', a: 'As a guide, a free zone company with one residence visa usually costs between AED 15,000 and AED 20,000 for the first year, including licence, establishment card and visa. Mainland companies cost more because of the office lease. We send a written quote with the exact figures for your case.' },
        { q: 'Which free zone is best for my business?', a: 'There is no single best free zone. Almost any can work for a digital business; the right one depends on your licensed activities, how many visas you need and your budget.' },
        { q: 'Can I set up a company in Dubai without living there?', a: 'Yes, you can own a UAE company as a non-resident. But if you manage it from another country, that country may consider the company tax resident there, so the structure needs to be analysed first.' },
        { q: 'Do I need a physical office in Dubai?', a: 'Not in most free zones: a flexi-desk or shared desk package is enough and is included in many licence packages. Mainland companies usually require a physical office lease registered through Ejari.' },
        { q: 'How many residence visas can my company sponsor?', a: 'It depends on the package and the office space. Flexi-desk packages usually include one or two visa quotas, and more visas normally require a larger office.' },
        { q: 'Does a free zone company pay taxes?', a: 'Free zone companies are subject to Corporate Tax and must register and file returns. Depending on the type of income and whether the requirements are met, part of the income may be taxed at 0%.' },
        { q: 'Can I open the bank account remotely?', a: 'Some banks allow part of the process remotely, but most still require an in-person meeting or biometrics. We prepare the file and tell you what each option involves before you travel.' },
        { q: 'Do you handle the accounting after the setup?', a: 'Yes. Once the company is incorporated we can take care of the bookkeeping, Corporate Tax and VAT, so you have one provider for the setup and for what comes after.' },
      ],
      cta: {
        title: { lead: 'Ready to set up', accent: 'your company?' },
        text: 'Tell us what you do and we will tell you how we would structure it, which free zone fits and what it costs.',
      },
    },
    es: {
      name: 'Incorporación de empresas en Dubái',
      meta: {
        title: 'Abrir empresa en Dubái: costes y licencia | Evolve Tax',
        description:
          'Abrir una empresa en Dubái con asesoría fiscal: licencia de free zone o mainland desde 15.000 AED en unos 14 días, visado, cuenta bancaria y altas fiscales.',
      },
      hero: {
        eyebrow: 'Servicio · Incorporación de empresas en Dubái',
        title: { lead: 'Crea tu empresa en Dubái,', accent: 'bien hecha.' },
        intro:
          'Nos encargamos de todo el proceso: elegir la licencia de free zone o mainland, constituir la sociedad, tramitar el visado de residencia, abrir la cuenta bancaria y hacer las altas fiscales. Y a diferencia de un simple agente de constitución, somos asesoría fiscal con licencia, así que la estructura se diseña pensando en tu situación fiscal, en Emiratos y en el país del que vienes.',
        facts: [
          { label: 'Licencia en', value: '≈ 14 días' },
          { label: 'Free zones', value: 'Cualquiera, según tu actividad' },
          { label: 'Incluye', value: 'Licencia · Visado · Banco' },
          { label: 'Licencia como', value: 'Tax consultant y CSP' },
        ],
      },
      included: {
        title: { lead: 'Qué incluye', accent: 'la constitución.' },
        intro: 'Todo lo que tu empresa necesita para operar en Dubái, no solo la licencia.',
        items: [
          { title: 'Elección de free zone o mainland', text: 'Comparamos las free zones y el mainland según tu actividad, los visados que necesitas y tu presupuesto, y te recomendamos la licencia que encaja.' },
          { title: 'Constitución de la sociedad', text: 'Reserva de nombre, aprobación inicial, documentación y constitución hasta que se emite la licencia.' },
          { title: 'Visado de residencia y Emirates ID', text: 'Establishment card, permiso de entrada, prueba médica, Emirates ID y sellado del visado para ti y, si hace falta, para tu familia.' },
          { title: 'Cuenta bancaria de empresa', text: 'Preparamos el expediente de compliance y te acompañamos en la apertura, el paso donde más solicitudes se atascan.' },
          { title: 'Alta en Corporate Tax e IVA', text: 'Registro en la Federal Tax Authority y, si corresponde, en el IVA, para que la empresa empiece cumpliendo.' },
          { title: 'Revisión de la estructura fiscal', text: 'Antes de constituir, revisamos cómo encaja la sociedad con tu residencia fiscal personal y dónde va a tributar de verdad.' },
        ],
      },
      forWho: [
        'Emprendedores digitales y negocios online que quieren operar desde Emiratos.',
        'Freelancers y consultores con clientes internacionales que se mudan a Dubái.',
        'Fundadores que quieren una sociedad emiratí dentro de una estructura internacional bien diseñada.',
        'Empresas que se expanden a Oriente Medio y necesitan licencia, visados y banco.',
        'Quien quiere un solo proveedor para la constitución y para la parte fiscal posterior.',
      ],
      process: [
        { title: 'Análisis y free zone', text: 'Revisamos tu actividad, tu residencia y tus planes, y elegimos la licencia de free zone o mainland que encaja.' },
        { title: 'Documentación', text: 'Te decimos exactamente qué hace falta y preparamos la solicitud contigo.' },
        { title: 'Constitución', text: 'Presentamos y hacemos el seguimiento hasta que se emite la licencia: unos 14 días en total.' },
        { title: 'Visado, banco y altas', text: 'Visado de residencia, cuenta bancaria de empresa y altas fiscales, para que la empresa esté lista para operar.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'antes de montar en Dubái.' },
        intro: 'Montar es rápido. Montar bien exige responder antes a unas cuantas preguntas.',
        blocks: [
          {
            heading: 'Free zone o mainland',
            paragraphs: [
              'Las sociedades de free zone son la opción habitual para negocios digitales: 100 % de propiedad extranjera, constitución rápida y mucha variedad de actividades. Las de mainland tienen más sentido si necesitas vender directamente al mercado local.',
              'Prácticamente cualquier free zone puede servir. Lo importante es elegir una cuyas actividades, costes y requisitos encajen con tu negocio.',
            ],
          },
          {
            heading: 'El Corporate Tax también existe en las free zones',
            paragraphs: [
              'Emiratos tiene un impuesto federal sobre sociedades: 0 % sobre la base imponible hasta 375.000 AED y 9 % a partir de ahí. Las sociedades de free zone también deben registrarse y presentar declaración, aunque pueden aplicar un tipo del 0 % sobre las rentas cualificadas si cumplen los requisitos.',
              'Elegir bien la estructura y llevar la contabilidad en orden desde el principio es lo que permite aplicar el tratamiento fiscal correcto.',
            ],
          },
          {
            heading: 'Una empresa en Dubái no cambia tu residencia fiscal personal',
            paragraphs: [
              'Tener una sociedad emiratí no te convierte en no residente donde vives hoy. Si sigues viviendo en España, por ejemplo, o la sociedad se dirige de forma efectiva desde allí, tanto tú como la empresa podéis tributar en España.',
              'Por eso revisamos tu residencia fiscal personal antes de constituir, no después.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Crear empresa en Dubái:', accent: 'la guía completa.' },
        intro: 'Licencias, costes, documentación, plazos, visados, banco y qué ocurre después de tener la licencia.',
        blocks: [
          { h2: 'Qué licencia necesitas', id: 'tipos-de-licencia' },
          { p: 'Toda sociedad emiratí opera con una licencia comercial vinculada a las actividades que puede realizar. Las categorías principales son:' },
          {
            list: [
              ['Licencia comercial', 'comercio, importación y exportación, e-commerce y compraventa de bienes en general.'],
              ['Licencia profesional o de servicios', 'consultoría, marketing, diseño, software, coaching y la mayoría de servicios digitales.'],
              ['Licencia industrial', 'fabricación, transformación y montaje.'],
              ['Licencia turística', 'agencias de viajes y actividades relacionadas con el turismo.'],
            ],
          },
          { p: 'Las actividades de la licencia importan más de lo que parece: facturar algo que tu licencia no cubre es uno de los problemas más frecuentes que vemos, y añadir actividades después implica una modificación y tasas extra. Antes de presentar nada, cruzamos tus fuentes de ingresos reales con la lista de actividades.' },

          { h2: 'Dónde constituir la empresa: mainland, free zone u offshore', id: 'rutas' },
          {
            table: {
              head: ['', 'Free zone', 'Mainland', 'Offshore'],
              rows: [
                ['Propiedad extranjera', '100 %', '100 % en la mayoría de actividades', '100 %'],
                ['Vender en el mercado emiratí', 'Limitado; puede requerir distribuidor o permiso', 'En todo Emiratos', 'No'],
                ['Visados de residencia', 'Sí, según el paquete', 'Sí, según la oficina', 'No'],
                ['Oficina', 'Son habituales los paquetes flexi-desk', 'Normalmente exige oficina física', 'Solo agente registrado'],
                ['Corporate Tax', '9 %, con posible 0 % sobre rentas cualificadas', '0 % hasta 375.000 AED y 9 % a partir de ahí', 'Sujeta a las mismas reglas'],
              ],
            },
          },
          { p: 'Para un negocio digital que vende a clientes de fuera de Emiratos, la free zone suele ser la respuesta. Las comparamos en detalle en [Free zone o mainland en Dubái](/es/blog/free-zone-o-mainland-dubai).' },

          { h2: 'Cuánto cuesta abrir una empresa en Dubái', id: 'coste' },
          { p: 'No hay un precio único: depende de la free zone, del número de actividades de la licencia, de cuántos visados de residencia necesitas y de si necesitas oficina física.' },
          { callout: { title: 'Como referencia: 15.000 – 20.000 AED', text: 'Una sociedad de free zone con un visado de residencia suele moverse en esa horquilla el primer año, incluyendo la licencia comercial, la establishment card y el visado. Las de mainland cuestan más porque exigen alquiler de oficina física. Siempre enviamos un presupuesto por escrito con las cifras exactas de tu caso.' } },
          { p: 'Estos son los conceptos que hay detrás de esa cifra:' },
          {
            table: {
              head: ['Concepto', 'Cuándo se paga'],
              rows: [
                ['Licencia comercial (free zone o mainland)', 'Cada año'],
                ['Reserva de nombre y aprobación inicial', 'Una vez, al constituir'],
                ['Establishment card', 'Una vez y luego se renueva; necesaria para patrocinar visados'],
                ['Visado de residencia: permiso, médico, Emirates ID y sellado', 'Por persona, se renueva cada 2–3 años'],
                ['Oficina: flexi-desk o alquiler', 'Suele ir incluida en los paquetes de free zone; aparte en mainland'],
                ['Nuestros honorarios', 'Acordados por escrito antes de empezar'],
              ],
            },
          },
          { callout: { title: 'Lo que no incluye un presupuesto de licencia', text: 'Los saldos mínimos del banco, la contabilidad y las declaraciones de Corporate Tax, el alta y las declaraciones de IVA, la legalización y traducción de documentos, el seguro médico obligatorio para los visados y la renovación anual de licencia y visados. Nosotros lo presupuestamos aparte para que no haya sorpresas en el tercer mes.' } },
          { p: 'Nuestros honorarios de constitución se acuerdan por escrito antes de empezar, y te decimos qué costes de terceros se pagan directamente a las autoridades. Desglosamos cada línea en [cuánto cuesta crear una empresa en Dubái](/es/blog/cuanto-cuesta-crear-una-empresa-en-dubai).'},

          { h2: 'Documentación que vas a necesitar', id: 'documentacion' },
          {
            list: [
              'Copia del pasaporte con al menos seis meses de validez',
              'Fotografía reciente tipo carné con fondo blanco',
              'Justificante de domicilio en tu país de residencia actual',
              'Sello de entrada o página del visado emiratí, si ya estás en el país',
              'Un CV breve o perfil de la empresa, que piden algunas free zones y actividades',
              'Certificado de no objeción, si ya tienes un visado de trabajo emiratí',
              'Documentación societaria legalizada, si va a ser socia otra empresa',
            ],
          },

          { h2: 'Cómo crear una empresa en Dubái, paso a paso', id: 'pasos' },
          {
            olist: [
              'Elegir la actividad, la forma jurídica y la vía: free zone o mainland.',
              'Reservar el nombre de la sociedad y obtener la aprobación inicial.',
              'Preparar y presentar la solicitud con la documentación.',
              'Emisión de la licencia comercial: unos 14 días en total en free zone.',
              'Establishment card y cuota de visados de la empresa.',
              'Permiso de entrada, prueba médica, Emirates ID y sellado del visado.',
              'Apertura de la cuenta bancaria de empresa.',
              'Alta en el Corporate Tax y, si corresponde, en el IVA.',
            ],
          },
          { p: 'La licencia es la parte rápida. Los visados suelen tardar de una a tres semanas más, y la cuenta bancaria depende del banco y de lo bien preparado que esté el expediente: ahí es donde está casi toda la espera real.' },

          { h2: 'Visados de residencia y cuántos te corresponden', id: 'visados' },
          { p: 'El número de visados que puede patrocinar tu empresa depende del paquete y de la oficina. Un paquete flexi-desk suele incluir una o dos cuotas de visado; más visados normalmente exigen una oficina mayor.' },
          { p: 'El trámite va por fases: permiso de entrada, cambio de estatus, prueba médica, biometría del Emirates ID y sellado del visado. Con el visado de residencia puedes patrocinar a tu cónyuge y a tus hijos, y solicitar el certificado de residencia fiscal emiratí cuando cumplas los días exigidos, que explicamos en nuestra [guía del sistema fiscal de Emiratos](/es/blog/sistema-fiscal-emiratos-arabes-unidos).' },

          { h2: 'Abrir la cuenta bancaria', id: 'banco' },
          { p: 'La licencia no lleva cuenta bancaria incluida. Los bancos emiratíes hacen sus propias comprobaciones de compliance y preguntan por tu modelo de negocio, tus clientes, la facturación prevista y el origen de los fondos. Las solicitudes se rechazan o se retrasan cuando lo que cuenta el expediente no encaja con la actividad de la licencia.' },
          { p: 'Preparamos el expediente (licencia, documentación societaria, pasaportes, plan de negocio, contratos o facturas que acrediten actividad real) y te explicamos las opciones, desde bancos tradicionales con saldo mínimo hasta banca digital para empresas.' },

          { h2: 'Después de la licencia: impuestos y cumplimiento', id: 'despues' },
          { p: 'Una sociedad emiratí tiene obligaciones anuales desde el primer día:' },
          {
            list: [
              ['Alta en el Corporate Tax', 'en la Federal Tax Authority, y declaración anual en los nueve meses siguientes al cierre, aunque la cuota sea cero.'],
              ['Contabilidad', 'registros contables adecuados, conservados al menos siete años.'],
              ['IVA', 'el registro es obligatorio por encima de 375.000 AED de operaciones sujetas, con declaraciones periódicas.'],
              ['El 0 % de free zone', 'solo está disponible para una Qualifying Free Zone Person con sustancia suficiente, cuentas auditadas e ingresos no cualificados por debajo del umbral.'],
              ['Renovaciones', 'licencia, establishment card y visados se renuevan cada año.'],
            ],
          },
          { p: 'Esta es la parte que no cubren la mayoría de agentes de constitución. Nosotros sí: mira [gestión fiscal en Dubái](/es/servicios/gestion-fiscal-en-dubai).' },

          { h2: 'Abrir una empresa en Dubái desde España', id: 'desde-espana' },
          { p: 'Abrir una empresa en Dubái no cambia, por sí solo, dónde pagas impuestos. Si sigues viviendo en España, o diriges la sociedad desde allí, Hacienda puede considerarla española y gravar su beneficio mundial. Tu residencia fiscal tiene que cambiar primero, y tiene que poder demostrarse.' },
          { p: 'Analizamos las dos partes antes de constituir: lee [¿Tributa en España una empresa de Dubái?](/es/blog/empresa-dubai-tributa-en-espana) o empieza por un análisis de [cambio de residencia fiscal](/es/servicios/cambio-de-residencia-fiscal).' },
          { p: 'Si vives en España y quieres saber qué puedes hacer en remoto, qué documentos te van a pedir y qué sigues declarando aquí, lo contamos paso a paso en [crear una empresa en Dubái desde España](/es/blog/crear-empresa-en-dubai-desde-espana).' },
        ],
      },
      mistakes: [
        { title: 'Elegir la free zone solo por precio', text: 'La licencia más barata puede no cubrir tu actividad o limitar cómo puedes operar.' },
        { title: 'Subestimar la cuenta bancaria', text: 'La apertura de la cuenta puede tardar más que la propia constitución si el expediente no está bien preparado.' },
        { title: 'Olvidarse del Corporate Tax', text: 'Muchas sociedades de free zone no se registran ni llevan contabilidad porque creen que no pagan nada, y acaban con sanciones.' },
        { title: 'Dirigirla desde otro país', text: 'Montar en Dubái mientras sigues viviendo y gestionando el negocio desde España puede hacer que la sociedad tribute en España.' },
      ],
      faq: [
        { q: '¿Qué necesito para abrir una empresa en Dubái?', a: 'El pasaporte con al menos seis meses de validez, una foto tipo carné, un justificante de domicilio y, según la free zone y la actividad, un CV breve o perfil de empresa. Si el socio va a ser otra sociedad, hace falta documentación societaria legalizada. No necesitas ser residente ni tener un socio local.' },
        { q: '¿Se puede abrir una empresa en Dubái desde España?', a: 'Sí. La constitución y la licencia se gestionan en remoto con poderes y documentación digitalizada; el visado de residencia y la mayoría de aperturas de cuenta sí exigen viajar. Lo que hay que revisar antes es tu residencia fiscal: si sigues siendo residente en España, la empresa puede acabar tributando aquí.' },
        { q: '¿Cuánto se tarda en crear una empresa en Dubái?', a: 'La licencia comercial suele tardar unos 14 días desde que tenemos tu documentación. El visado de residencia viene después, normalmente de una a tres semanas, y la cuenta bancaria depende del banco y del perfil del negocio.' },
        { q: '¿Cuánto cuesta crear una empresa en Dubái?', a: 'Como referencia, una sociedad de free zone con un visado de residencia suele costar entre 15.000 y 20.000 AED el primer año, incluyendo licencia, establishment card y visado. Las de mainland cuestan más por el alquiler de oficina. Te enviamos un presupuesto por escrito con las cifras exactas de tu caso.' },
        { q: '¿Qué free zone es la mejor para mi negocio?', a: 'No hay una única mejor free zone. Prácticamente cualquiera puede servir para un negocio digital; la adecuada depende de las actividades de tu licencia, de cuántos visados necesitas y de tu presupuesto.' },
        { q: '¿Puedo crear una empresa en Dubái sin vivir allí?', a: 'Sí, puedes ser propietario de una sociedad emiratí sin ser residente. Pero si la diriges desde otro país, ese país puede considerarla residente fiscal allí, así que hay que analizar la estructura antes.' },
        { q: '¿Necesito una oficina física en Dubái?', a: 'En la mayoría de free zones no: basta con un paquete flexi-desk o escritorio compartido, que suele venir incluido en la licencia. Las sociedades de mainland normalmente sí exigen un contrato de oficina registrado con Ejari.' },
        { q: '¿Cuántos visados de residencia puede patrocinar mi empresa?', a: 'Depende del paquete y de la oficina. Los paquetes flexi-desk suelen incluir una o dos cuotas de visado, y más visados normalmente exigen una oficina mayor.' },
        { q: '¿Se pagan impuestos con una sociedad de free zone?', a: 'Las sociedades de free zone están sujetas al Corporate Tax y deben registrarse y presentar declaración. Según el tipo de rentas y si se cumplen los requisitos, parte de los ingresos puede tributar al 0 %.' },
        { q: '¿Puedo abrir la cuenta bancaria en remoto?', a: 'Algunos bancos permiten parte del proceso en remoto, pero la mayoría siguen pidiendo una reunión presencial o biometría. Preparamos el expediente y te decimos qué implica cada opción antes de que viajes.' },
        { q: '¿Lleváis la contabilidad después de la constitución?', a: 'Sí. Una vez constituida la empresa podemos encargarnos de la contabilidad, el Corporate Tax y el IVA, para que tengas un solo proveedor para la constitución y para lo que viene después.' },
      ],
      cta: {
        title: { lead: '¿Montamos', accent: 'tu empresa?' },
        text: 'Cuéntanos a qué te dedicas y te decimos cómo lo estructuraríamos, qué free zone encaja y cuánto cuesta.',
      },
    },
  },

  uaeTax: {
    en: {
      name: 'Tax management in Dubai',
      meta: {
        title: 'Accounting, Corporate Tax & VAT in Dubai | Evolve Tax',
        description:
          'Tax management for companies in Dubai and the UAE: bookkeeping, Corporate Tax and VAT, with registrations, returns and deadlines under control.',
      },
      hero: {
        eyebrow: 'Service · Tax management in Dubai',
        title: { lead: 'Tax management in Dubai:', accent: 'accounting, Corporate Tax and VAT up to date.' },
        intro:
          'Your company in the UAE has obligations every month, every quarter and every year. We keep your books, file your Corporate Tax and VAT returns and watch the deadlines, so you can focus on your business without surprises from the tax authority.',
        facts: [
          { label: 'Bookkeeping', value: 'Monthly' },
          { label: 'VAT', value: 'Usually quarterly' },
          { label: 'Corporate Tax', value: 'Annual return' },
          { label: 'Also', value: 'Obligations in Spain' },
        ],
      },
      included: {
        title: { lead: 'What we', accent: 'take care of.' },
        intro: 'The day-to-day compliance of your company, handled by people who also understand the structure behind it.',
        items: [
          { title: 'Bookkeeping', text: 'We record your income and expenses, reconcile bank accounts and keep your books in order all year round.' },
          { title: 'Corporate Tax', text: 'Registration, calculation of taxable income, reliefs and exemptions where applicable, and filing of the annual return.' },
          { title: 'VAT', text: 'Assessment of whether you need to register, VAT registration, and preparation and filing of returns.' },
          { title: 'Financial statements', text: 'Annual financial statements and, where required, coordination with the auditor.' },
          { title: 'Deadline calendar', text: 'We track every deadline for you and tell you what we need before each filing.' },
          { title: 'Obligations in Spain', text: 'If your situation also has obligations in Spain, we coordinate them so both sides are consistent.' },
        ],
      },
      forWho: [
        'Free zone and mainland companies in the UAE that need their accounting in order.',
        'Founders who set up in Dubai and aren’t sure what they have to file, or when.',
        'Businesses that have received a notice or are behind on registrations or returns.',
        'Entrepreneurs who want one advisor who understands both Spain and the UAE.',
      ],
      process: [
        { title: 'Review of your situation', text: 'We check registrations, previous filings and the state of your books.' },
        { title: 'Onboarding', text: 'We set up access, the document flow and the calendar of deadlines.' },
        { title: 'Monthly bookkeeping', text: 'You send us the documents; we keep the books up to date and flag anything unusual.' },
        { title: 'Returns and reporting', text: 'We prepare and file your VAT and Corporate Tax returns and explain the figures to you.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'about taxes in the UAE.' },
        intro: 'The UAE is no longer a jurisdiction without taxes. These are the key points.',
        blocks: [
          {
            heading: 'Corporate Tax',
            paragraphs: [
              'For financial years starting on or after 1 June 2023, the UAE applies a federal Corporate Tax: 0% on taxable income up to AED 375,000 and 9% above that. Companies must register with the Federal Tax Authority and file an annual return — free zone companies included.',
              'Free zone companies can apply a 0% rate on qualifying income if they meet the requirements, which include having adequate substance and keeping proper records.',
            ],
          },
          {
            heading: 'VAT',
            paragraphs: [
              'The UAE applies VAT at a standard rate of 5%. Registration is mandatory when taxable supplies exceed AED 375,000 over the last 12 months or are expected to exceed it in the next 30 days, and voluntary from AED 187,500.',
              'Once registered, returns are usually filed quarterly, and each return has its own filing and payment deadline.',
            ],
          },
          {
            heading: 'Accounting records',
            paragraphs: [
              'Proper accounting records are not optional: they support your Corporate Tax and VAT returns and must be kept for at least seven years. Without reliable books, it is very hard to apply exemptions or defend your position if the tax authority asks.',
              'Well-kept books are also what lets you see how your business is really doing.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Not registering for Corporate Tax', text: 'Registration is required even if you expect to pay nothing, and registering late carries penalties.' },
        { title: 'Leaving the books until year end', text: 'Rebuilding a whole year of accounting in a rush leads to errors and makes exemptions harder to apply.' },
        { title: 'Mixing personal and business expenses', text: 'It complicates the accounts and weakens your position if the tax authority reviews them.' },
        { title: 'Missing VAT deadlines', text: 'Filing or paying late generates penalties that add up quickly.' },
      ],
      faq: [
        { q: 'Does a free zone company have to file Corporate Tax?', a: 'Yes. Free zone companies must register and file an annual Corporate Tax return, even if part or all of their income is taxed at 0%.' },
        { q: 'When do I have to register for VAT in the UAE?', a: 'When your taxable supplies exceed AED 375,000 over the last 12 months, or are expected to within the next 30 days. Below that, you can register voluntarily from AED 187,500.' },
        { q: 'Can you take over if my accounts are behind?', a: 'Yes. We start by reviewing the situation, catch up on what’s pending and put the company back on track.' },
        { q: 'Do you also handle obligations in Spain?', a: 'Yes. If your situation has obligations in Spain, we coordinate them so that what you declare in both countries is consistent.' },
        { q: 'What do I need to send you each month?', a: 'Mainly invoices issued and received, bank statements and any relevant contracts. We give you a simple checklist when you start.' },
      ],
      cta: {
        title: { lead: 'Let’s put your company', accent: 'in order.' },
        text: 'Tell us where you are and we’ll tell you what your company needs to be fully compliant.',
      },
    },
    es: {
      name: 'Gestión fiscal en Dubái',
      meta: {
        title: 'Gestión fiscal en Dubái: Corporate Tax e IVA | Evolve Tax',
        description:
          'Gestión fiscal para empresas en Dubái y Emiratos: contabilidad, Corporate Tax e IVA, con registros, declaraciones y plazos bajo control.',
      },
      hero: {
        eyebrow: 'Servicio · Gestión fiscal en Dubái',
        title: { lead: 'Gestión fiscal en Dubái:', accent: 'contabilidad, Corporate Tax e IVA al día.' },
        intro:
          'Tu sociedad en Emiratos tiene obligaciones cada mes, cada trimestre y cada año. Llevamos tu contabilidad, presentamos tus declaraciones de Corporate Tax e IVA y vigilamos los plazos, para que te centres en tu negocio sin sustos con la autoridad fiscal.',
        facts: [
          { label: 'Contabilidad', value: 'Mensual' },
          { label: 'IVA', value: 'Normalmente trimestral' },
          { label: 'Corporate Tax', value: 'Declaración anual' },
          { label: 'Además', value: 'Obligaciones en España' },
        ],
      },
      included: {
        title: { lead: 'Qué', accent: 'llevamos.' },
        intro: 'El cumplimiento del día a día de tu sociedad, en manos de quien también entiende la estructura que hay detrás.',
        items: [
          { title: 'Contabilidad', text: 'Registramos ingresos y gastos, conciliamos bancos y mantenemos tus libros en orden durante todo el año.' },
          { title: 'Corporate Tax', text: 'Registro, cálculo de la base imponible, exenciones y reducciones cuando corresponda y presentación de la declaración anual.' },
          { title: 'IVA', text: 'Análisis de si debes registrarte, alta en el IVA y preparación y presentación de las declaraciones.' },
          { title: 'Estados financieros', text: 'Cuentas anuales y, cuando son obligatorias, coordinación con el auditor.' },
          { title: 'Calendario de plazos', text: 'Controlamos todos los vencimientos por ti y te avisamos de lo que necesitamos antes de cada presentación.' },
          { title: 'Obligaciones en España', text: 'Si tu situación también tiene obligaciones en España, las coordinamos para que ambos lados sean coherentes.' },
        ],
      },
      forWho: [
        'Sociedades de free zone y mainland en Emiratos que necesitan la contabilidad en orden.',
        'Fundadores que montaron en Dubái y no tienen claro qué deben presentar ni cuándo.',
        'Empresas que han recibido una notificación o van con retraso en registros o declaraciones.',
        'Emprendedores que quieren un solo asesor que entienda España y Emiratos.',
      ],
      process: [
        { title: 'Revisión de tu situación', text: 'Comprobamos registros, declaraciones anteriores y el estado de la contabilidad.' },
        { title: 'Puesta en marcha', text: 'Configuramos accesos, el flujo de documentación y el calendario de plazos.' },
        { title: 'Contabilidad mensual', text: 'Nos envías la documentación; mantenemos los libros al día y te avisamos de cualquier cosa rara.' },
        { title: 'Declaraciones e informes', text: 'Preparamos y presentamos el IVA y el Corporate Tax y te explicamos las cifras.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'sobre los impuestos en Emiratos.' },
        intro: 'Emiratos ya no es una jurisdicción sin impuestos. Estos son los puntos clave.',
        blocks: [
          {
            heading: 'Corporate Tax',
            paragraphs: [
              'Para los ejercicios iniciados a partir del 1 de junio de 2023, Emiratos aplica un impuesto federal sobre sociedades: 0 % sobre la base imponible hasta 375.000 AED y 9 % a partir de ahí. Las sociedades deben registrarse en la Federal Tax Authority y presentar una declaración anual, también las de free zone.',
              'Las sociedades de free zone pueden aplicar un tipo del 0 % sobre las rentas cualificadas si cumplen los requisitos, entre ellos tener sustancia suficiente y llevar una contabilidad adecuada.',
            ],
          },
          {
            heading: 'IVA',
            paragraphs: [
              'Emiratos aplica un IVA general del 5 %. El registro es obligatorio cuando las operaciones sujetas superan 375.000 AED en los últimos 12 meses o se prevé superarlos en los próximos 30 días, y voluntario a partir de 187.500 AED.',
              'Una vez registrada, la sociedad suele presentar declaraciones trimestrales, cada una con su plazo de presentación y pago.',
            ],
          },
          {
            heading: 'Registros contables',
            paragraphs: [
              'Llevar una contabilidad adecuada no es opcional: respalda tus declaraciones de Corporate Tax e IVA y debe conservarse durante al menos siete años. Sin libros fiables es muy difícil aplicar exenciones o defender tu posición si la autoridad fiscal pregunta.',
              'Una contabilidad bien llevada es también lo que te permite ver cómo va de verdad tu negocio.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'No registrarse en el Corporate Tax', text: 'El registro es obligatorio aunque creas que no vas a pagar nada, y hacerlo tarde tiene sanciones.' },
        { title: 'Dejar la contabilidad para final de año', text: 'Reconstruir un año entero con prisas genera errores y complica aplicar exenciones.' },
        { title: 'Mezclar gastos personales y de empresa', text: 'Complica las cuentas y debilita tu posición si la autoridad fiscal las revisa.' },
        { title: 'Saltarse los plazos del IVA', text: 'Presentar o pagar tarde genera sanciones que se acumulan rápido.' },
      ],
      faq: [
        { q: '¿Una sociedad de free zone tiene que presentar Corporate Tax?', a: 'Sí. Las sociedades de free zone deben registrarse y presentar su declaración anual de Corporate Tax, aunque parte o la totalidad de sus rentas tribute al 0 %.' },
        { q: '¿Cuándo tengo que registrarme en el IVA de Emiratos?', a: 'Cuando tus operaciones sujetas superan 375.000 AED en los últimos 12 meses o se prevé que los superen en los próximos 30 días. Por debajo, puedes registrarte voluntariamente a partir de 187.500 AED.' },
        { q: '¿Podéis haceros cargo si voy con retraso?', a: 'Sí. Empezamos revisando la situación, ponemos al día lo pendiente y dejamos la sociedad en orden.' },
        { q: '¿También lleváis las obligaciones en España?', a: 'Sí. Si tu situación tiene obligaciones en España, las coordinamos para que lo que declaras en ambos países sea coherente.' },
        { q: '¿Qué tengo que enviaros cada mes?', a: 'Principalmente facturas emitidas y recibidas, extractos bancarios y los contratos relevantes. Al empezar te damos una lista sencilla.' },
      ],
      cta: {
        title: { lead: 'Pongamos tu empresa', accent: 'en orden.' },
        text: 'Cuéntanos en qué punto estás y te decimos qué necesita tu sociedad para cumplir con todo.',
      },
    },
  },

  /* ----------------------------------------------------------------
     Gestión fiscal en España
     ---------------------------------------------------------------- */
  /* ----------------------------------------------------------------
     LLC en Estados Unidos (y otros países con colaboradores locales)
     ---------------------------------------------------------------- */
  usLlc: {
    en: {
      name: 'LLC in the United States',
      meta: {
        title: 'Open a US LLC from Abroad | Evolve Tax',
        description:
          'We open your LLC in the United States: state, EIN, bank account and annual filings. And companies in other countries through our network of local partners.',
      },
      hero: {
        eyebrow: 'Service · US LLC and other countries',
        title: { lead: 'Your LLC in the United States,', accent: 'opened and filed properly.' },
        intro:
          'We incorporate your LLC, apply for the EIN, prepare the bank account and keep the annual filings in order. And if the right answer is a company somewhere else, we have local partners to incorporate and advise in other countries too.',
        facts: [
          { label: 'Incorporation', value: 'A few days' },
          { label: 'EIN', value: 'Weeks without an SSN' },
          { label: 'Annual filing', value: 'Form 5472 + 1120' },
          { label: 'Other countries', value: 'Local partners' },
        ],
      },
      included: {
        title: { lead: 'What we', accent: 'take care of.' },
        intro: 'From choosing the state to the filings you have to make every year, including the part nobody tells you about.',
        items: [
          { title: 'Choice of state', text: 'Delaware, Wyoming, Florida, New Mexico and others differ in fees, annual reports and privacy. We choose based on your business, not on what is trending.' },
          { title: 'Incorporation', text: 'Filing with the state, registered agent and operating agreement adapted to whether you are one owner or several.' },
          { title: 'EIN', text: 'Application for the federal tax number, including the route that applies when you have no SSN or ITIN.' },
          { title: 'Bank account', text: 'We prepare the documentation and support your application with US banks and fintechs.' },
          { title: 'Annual compliance', text: 'Form 5472 with pro-forma Form 1120 for foreign-owned single-member LLCs, state annual report and franchise tax.' },
          { title: 'Other countries', text: 'When the LLC is not the answer, we incorporate and advise in other jurisdictions through our network of local lawyers and accountants.' },
        ],
      },
      forWho: [
        'Digital entrepreneurs selling to the US market who need a US entity to invoice and get paid.',
        'Founders who already have an LLC and are not sure what they must file each year.',
        'Anyone who has been told an LLC is “tax-free” and wants to know how it is really taxed where they live.',
        'Businesses that need a company in another country and want a single advisor coordinating it.',
      ],
      process: [
        { title: 'Analysis first', text: 'We check where you are tax resident and whether an LLC actually helps you — and in which state.' },
        { title: 'Incorporation', text: 'We file with the state, appoint the registered agent and prepare the operating agreement.' },
        { title: 'EIN and bank account', text: 'We apply for the EIN and get everything ready so the account application goes through.' },
        { title: 'Ongoing filings', text: 'We keep the annual US obligations and coordinate them with what you declare in your country.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'before opening an LLC.' },
        intro: 'The LLC is a useful tool. It is not a way of not paying tax.',
        blocks: [
          {
            heading: 'How a US LLC is taxed',
            paragraphs: [
              'By default, an LLC is transparent for US federal tax purposes: a single-member LLC is disregarded and a multi-member one is taxed as a partnership, so the income flows to its owners. It can also elect to be taxed as a corporation.',
              'If the owner is not a US person and the LLC has no income effectively connected with a US trade or business, the LLC may pay no US federal income tax. That is not the same as paying no tax: the income normally has to be declared where you are tax resident.',
            ],
          },
          {
            heading: 'What you still have to file',
            paragraphs: [
              'A foreign-owned single-member LLC has to file Form 5472 together with a pro-forma Form 1120 every year, even with no activity, and the penalty for not filing starts at USD 25,000. On top of that comes the state annual report and franchise tax and, if you sell within the United States, possible sales tax obligations in the states where you have nexus.',
              'Beneficial ownership and information reporting rules in the United States have changed repeatedly over the last few years, so we check what applies to your LLC each time a filing is due.',
            ],
          },
          {
            heading: 'The mistake that costs the most',
            paragraphs: [
              'An LLC does not change where you are tax resident. If you live in Spain and run the LLC from there, the income will normally be taxed in Spain, and the company may even be treated as having its place of effective management there.',
              'That is why we start with your residency and your business, not with the paperwork. Sometimes the LLC is the right answer, sometimes it is a company somewhere else, and sometimes you do not need a new company at all.',
            ],
          },
          {
            heading: 'Other countries, through our partner network',
            paragraphs: [
              'Beyond the United States, the UAE and Spain, we work with a network of local lawyers, accountants and corporate services providers in Europe, Latin America, the United Kingdom and Asia.',
              'We coordinate the incorporation and the advice with them and stay as your single point of contact, so you do not end up with one adviser per country and no one looking at the whole picture.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Complete guide to the', accent: 'US LLC for non-residents.' },
        intro: 'What it is, how it is taxed, what you file every year and how to choose the state — plus what to do when the answer is a company in another country.',
        blocks: [
          { h2: 'What an LLC is, and what it is not', id: 'what' },
          { p: 'An LLC (Limited Liability Company) is a US entity that separates your personal assets from the business and is flexible about how it is taxed. It is not a corporation, it does not issue shares and it has no board: it has members and an operating agreement that sets the rules between them.' },
          { p: 'It is popular among digital entrepreneurs for three practical reasons: it is quick and cheap to set up, it gives you a US entity to invoice and collect through, and in many cases it does not pay tax in the United States. The third reason is the one that gets misunderstood most often.' },
          {
            callout: {
              title: 'The LLC does not make you a non-resident',
              text: 'Where you pay tax depends on where you are tax resident and where the company is actually managed, not on where it is registered. Before incorporating anything, it is worth reviewing your [international tax structuring](/services/international-tax-structuring).',
            },
          },

          { h2: 'How it is taxed', id: 'tax' },
          { p: 'By default the LLC is transparent: the United States looks through it and attributes the income to its members. A single-member LLC is a **disregarded entity**; a multi-member LLC is taxed as a **partnership**. It can also elect to be taxed as a corporation, which changes the picture completely.' },
          { p: 'For a member who is not a US person, the key question is whether the LLC has income **effectively connected** with a US trade or business. If it does not — typically a business run from outside the United States, without employees, offices or dependent agents there — there is usually no US federal income tax to pay on that income.' },
          { p: 'What does not disappear is the tax in your own country. Many countries, Spain among them, do not treat the LLC the same way the United States does, which can lead to double taxation or to income being attributed to you personally. We cover this in the guide on [US LLCs and tax transparency](/blog/us-llc-tax-transparency).' },

          { h2: 'What you file every year', id: 'filings' },
          { p: 'These are the obligations that catch people out. Not filing them is far more expensive than the tax itself.' },
          {
            table: {
              head: ['Filing', 'Who files it', 'When'],
              rows: [
                ['Form 5472 + pro-forma 1120', 'Foreign-owned single-member LLCs', 'Annually, even with no activity'],
                ['Form 1065 + K-1', 'Multi-member LLCs taxed as partnerships', 'Annually'],
                ['State annual report / franchise tax', 'Almost every LLC, depending on the state', 'Annually, on the state’s own date'],
                ['Sales tax', 'LLCs with nexus in a state where they sell', 'Depends on the state and the volume'],
              ],
            },
          },
          { p: 'The penalty for not filing Form 5472 starts at **USD 25,000** per year and per entity, and it applies even if the LLC had no income. It is the single most common and most expensive mistake we see.' },

          { h2: 'Which state to choose', id: 'state' },
          { p: 'There is no best state in the abstract. These are the trade-offs that actually matter:' },
          {
            list: [
              ['Annual cost', 'Each state has its own franchise tax and annual report fee, and the difference between the cheapest and the most expensive is significant over the years.'],
              ['Privacy', 'Some states publish the members in the public registry and others do not.'],
              ['Where you really operate', 'If you have people, an office or stock in a particular state, you may have to register there regardless of where you incorporated.'],
              ['Banking and payment providers', 'Some providers are more comfortable with certain states, which in practice affects how easily you get your account.'],
            ],
          },

          { h2: 'Other countries, through our partner network', id: 'network' },
          { p: 'Sometimes the honest answer is that the LLC does not fit, and what you need is a company in the United Kingdom, in another EU country, in Latin America or in Asia — or simply to keep operating as you are.' },
          { p: 'For those cases we work with a network of local lawyers, accountants and corporate services providers, which lets us incorporate and advise outside our three core jurisdictions. We select the partner, coordinate the work and remain your single point of contact, so the tax strategy stays consistent instead of being split across advisers who never speak to each other.' },
        ],
      },
      mistakes: [
        { title: 'Choosing the state because of a video', text: 'The state that suits a US e-commerce business with staff is not the one that suits a consultant invoicing from abroad.' },
        { title: 'Assuming the LLC pays no tax anywhere', text: 'If you are tax resident in Spain, or in most countries, the income is normally taxed there even when the LLC pays nothing in the United States.' },
        { title: 'Forgetting Form 5472', text: 'It is due every year, even with no activity, and the penalty starts at USD 25,000.' },
        { title: 'Incorporating before looking at your residency', text: 'The order matters: first where you are tax resident, then which company — not the other way round.' },
      ],
      faq: [
        { q: 'Do I need to live in the United States to open an LLC?', a: 'No. A non-resident can be the sole member of an LLC. You do need a registered agent in the state and, in practice, an EIN to open a bank account.' },
        { q: 'Does my LLC pay tax in the United States?', a: 'If the owner is not a US person and the LLC has no income effectively connected with a US trade or business, there is usually no US federal income tax on that income. The filings still have to be made, and the income normally has to be declared where you are tax resident.' },
        { q: 'Do I have to file anything if the LLC had no activity?', a: 'Yes. A foreign-owned single-member LLC files Form 5472 with a pro-forma Form 1120 every year, even at zero, plus the state annual report. Not filing carries a penalty from USD 25,000.' },
        { q: 'How long does it take to open an LLC?', a: 'The company itself is usually a matter of days. The EIN is what takes longest when you have no SSN or ITIN: it can take several weeks, and the bank account comes after that.' },
        { q: 'Can you incorporate in countries other than the United States?', a: 'Yes. Beyond the UAE, Spain and the United States, we work with a network of local partners that lets us incorporate and advise in other jurisdictions, with us coordinating the whole thing.' },
      ],
      cta: {
        title: { lead: 'Let’s check whether the LLC', accent: 'is really your answer.' },
        text: 'Tell us where you live and what your business looks like, and we’ll tell you whether an LLC helps you, which state fits and what it would cost you to keep it.',
      },
    },
    es: {
      name: 'LLC en Estados Unidos',
      meta: {
        title: 'Crear una LLC en Estados Unidos | Evolve Tax',
        description:
          'Creamos tu LLC en Estados Unidos desde fuera: estado, EIN, cuenta bancaria y obligaciones anuales. Y empresas en otros países con nuestra red de colaboradores.',
      },
      hero: {
        eyebrow: 'Servicio · LLC en EE. UU. y otros países',
        title: { lead: 'Tu LLC en Estados Unidos,', accent: 'abierta y declarada como toca.' },
        intro:
          'Constituimos tu LLC, solicitamos el EIN, preparamos la cuenta bancaria y mantenemos al día las declaraciones anuales. Y si lo que necesitas es una sociedad en otro país, tenemos colaboradores locales para constituir y asesorar fuera de Estados Unidos.',
        facts: [
          { label: 'Constitución', value: 'Unos días' },
          { label: 'EIN', value: 'Semanas sin SSN' },
          { label: 'Declaración anual', value: 'Form 5472 + 1120' },
          { label: 'Otros países', value: 'Colaboradores locales' },
        ],
      },
      included: {
        title: { lead: 'De qué nos', accent: 'encargamos.' },
        intro: 'Desde elegir el estado hasta las declaraciones que hay que presentar cada año, incluida la parte que nadie te cuenta.',
        items: [
          { title: 'Elección del estado', text: 'Delaware, Wyoming, Florida, Nuevo México y otros se diferencian en tasas, informes anuales y privacidad. Elegimos según tu negocio, no según lo que esté de moda.' },
          { title: 'Constitución', text: 'Presentación ante el estado, agente registrado y operating agreement adaptado a si eres un solo socio o varios.' },
          { title: 'EIN', text: 'Solicitud del número fiscal federal, incluida la vía que corresponde cuando no tienes SSN ni ITIN.' },
          { title: 'Cuenta bancaria', text: 'Preparamos la documentación y te acompañamos en la solicitud ante bancos y fintechs estadounidenses.' },
          { title: 'Obligaciones anuales', text: 'Form 5472 con el Form 1120 pro forma para LLC de un solo socio extranjero, informe anual del estado y franchise tax.' },
          { title: 'Otros países', text: 'Cuando la LLC no es la respuesta, constituimos y asesoramos en otras jurisdicciones con nuestra red de abogados y asesores locales.' },
        ],
      },
      forWho: [
        'Emprendedores digitales que venden al mercado estadounidense y necesitan una entidad allí para facturar y cobrar.',
        'Quien ya tiene una LLC y no sabe con certeza qué tiene que presentar cada año.',
        'Quien ha oído que la LLC «no paga impuestos» y quiere saber cómo tributa de verdad donde vive.',
        'Negocios que necesitan una sociedad en otro país y quieren un único asesor coordinándolo.',
      ],
      process: [
        { title: 'Primero el análisis', text: 'Miramos dónde eres residente fiscal y si la LLC te sirve de algo, y en qué estado.' },
        { title: 'Constitución', text: 'Presentamos ante el estado, nombramos agente registrado y preparamos el operating agreement.' },
        { title: 'EIN y cuenta', text: 'Solicitamos el EIN y dejamos todo listo para que la cuenta bancaria salga adelante.' },
        { title: 'Declaraciones', text: 'Mantenemos las obligaciones anuales en Estados Unidos y las coordinamos con lo que declaras en tu país.' },
      ],
      guide: {
        title: { lead: 'Lo que conviene saber', accent: 'antes de abrir una LLC.' },
        intro: 'La LLC es una herramienta útil. No es una forma de no pagar impuestos.',
        blocks: [
          {
            heading: 'Cómo tributa una LLC',
            paragraphs: [
              'Por defecto la LLC es transparente a efectos fiscales federales en Estados Unidos: la de un solo socio se ignora (disregarded entity) y la de varios tributa como partnership, de modo que la renta va a sus socios. También puede optar por tributar como sociedad.',
              'Si el socio no es persona estadounidense y la LLC no obtiene rentas efectivamente conectadas con una actividad en Estados Unidos, es posible que la LLC no pague impuesto federal allí. Eso no es lo mismo que no pagar impuestos: la renta normalmente hay que declararla donde eres residente fiscal.',
            ],
          },
          {
            heading: 'Lo que hay que presentar igualmente',
            paragraphs: [
              'Una LLC de un solo socio extranjero tiene que presentar cada año el Form 5472 junto con un Form 1120 pro forma, incluso sin actividad, y la sanción por no hacerlo arranca en 25.000 USD. A eso se suman el informe anual del estado y la franchise tax y, si vendes dentro de Estados Unidos, posibles obligaciones de sales tax en los estados donde tengas nexus.',
              'Las normas de información sobre titularidad real en Estados Unidos han cambiado varias veces en los últimos años, así que revisamos qué aplica a tu LLC cada vez que toca presentar.',
            ],
          },
          {
            heading: 'El error que más caro sale',
            paragraphs: [
              'La LLC no cambia dónde eres residente fiscal. Si vives en España y diriges la LLC desde aquí, la renta tributará normalmente en España, e incluso puede considerarse que la sociedad tiene aquí su sede de dirección efectiva.',
              'Por eso empezamos por tu residencia y tu negocio, no por el papeleo. A veces la LLC es la respuesta correcta, a veces lo es una sociedad en otro país y a veces no necesitas ninguna sociedad nueva.',
            ],
          },
          {
            heading: 'Otros países, con nuestra red de colaboradores',
            paragraphs: [
              'Más allá de Estados Unidos, Emiratos y España, trabajamos con una red de abogados, asesores y proveedores de servicios corporativos locales en Europa, Latinoamérica, Reino Unido y Asia.',
              'Coordinamos con ellos la constitución y el asesoramiento y seguimos siendo tu único interlocutor, para que no acabes con un asesor por país y nadie mirando el conjunto.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Guía completa de la', accent: 'LLC para no residentes.' },
        intro: 'Qué es, cómo tributa, qué se presenta cada año y cómo elegir el estado. Y qué hacer cuando la respuesta es una sociedad en otro país.',
        blocks: [
          { h2: 'Qué es una LLC y qué no es', id: 'que-es' },
          { p: 'Una LLC (Limited Liability Company) es una entidad estadounidense que separa tu patrimonio personal del del negocio y que es flexible en cuanto a cómo tributa. No es una corporation, no emite acciones y no tiene consejo: tiene socios (members) y un operating agreement que fija las reglas entre ellos.' },
          { p: 'Es popular entre emprendedores digitales por tres motivos prácticos: se constituye rápido y barato, te da una entidad en Estados Unidos para facturar y cobrar, y en muchos casos no paga impuestos allí. El tercero es el que peor se entiende.' },
          {
            callout: {
              title: 'La LLC no te convierte en no residente',
              text: 'Dónde pagas impuestos depende de dónde eres residente fiscal y desde dónde se dirige la sociedad, no de dónde está registrada. Antes de constituir nada conviene revisar tu [estructuración fiscal internacional](/es/servicios/estructuracion-fiscal-internacional).',
            },
          },

          { h2: 'Cómo tributa', id: 'tributacion' },
          { p: 'Por defecto la LLC es transparente: Estados Unidos mira a través de ella y atribuye la renta a sus socios. La de un solo socio es una **disregarded entity**; la de varios tributa como **partnership**. También puede optar por tributar como sociedad, lo que cambia el escenario por completo.' },
          { p: 'Para un socio que no es persona estadounidense, la pregunta clave es si la LLC obtiene rentas **efectivamente conectadas** con una actividad económica en Estados Unidos. Si no las obtiene (lo habitual en un negocio dirigido desde fuera, sin empleados, oficinas ni agentes dependientes allí), normalmente no hay impuesto federal estadounidense sobre esa renta.' },
          { p: 'Lo que no desaparece es el impuesto en tu país. Muchos países, España entre ellos, no tratan la LLC igual que Estados Unidos, lo que puede generar doble imposición o atribución de la renta a tu IRPF. Lo contamos en la guía sobre [la LLC y la transparencia fiscal](/es/blog/llc-estados-unidos-transparencia-fiscal).' },

          { h2: 'Qué se presenta cada año', id: 'obligaciones' },
          { p: 'Estas son las obligaciones que pillan a mucha gente. No presentarlas sale mucho más caro que el propio impuesto.' },
          {
            table: {
              head: ['Declaración', 'Quién la presenta', 'Cuándo'],
              rows: [
                ['Form 5472 + 1120 pro forma', 'LLC de un solo socio extranjero', 'Cada año, aunque no haya actividad'],
                ['Form 1065 + K-1', 'LLC de varios socios que tributa como partnership', 'Cada año'],
                ['Informe anual del estado / franchise tax', 'Casi toda LLC, según el estado', 'Cada año, en la fecha del estado'],
                ['Sales tax', 'LLC con nexus en un estado donde vende', 'Depende del estado y del volumen'],
              ],
            },
          },
          { p: 'La sanción por no presentar el Form 5472 arranca en **25.000 USD** por año y por entidad, y se aplica aunque la LLC no haya tenido ingresos. Es el error más habitual y más caro que vemos.' },

          { h2: 'Qué estado elegir', id: 'estado' },
          { p: 'No hay un estado mejor en abstracto. Estos son los criterios que de verdad importan:' },
          {
            list: [
              ['Coste anual', 'Cada estado tiene su franchise tax y su tasa de informe anual, y la diferencia entre el más barato y el más caro se nota con los años.'],
              ['Privacidad', 'Algunos estados publican los socios en el registro público y otros no.'],
              ['Dónde operas de verdad', 'Si tienes personas, oficina o stock en un estado concreto, puede que tengas que registrarte allí aunque te hayas constituido en otro.'],
              ['Bancos y pasarelas de pago', 'Algunos proveedores están más cómodos con ciertos estados, lo que en la práctica afecta a lo fácil que te resulte abrir la cuenta.'],
            ],
          },

          { h2: 'Otros países, con nuestra red de colaboradores', id: 'red' },
          { p: 'A veces la respuesta honesta es que la LLC no encaja y lo que necesitas es una sociedad en Reino Unido, en otro país de la Unión Europea, en Latinoamérica o en Asia, o simplemente seguir operando como estás.' },
          { p: 'Para esos casos trabajamos con una red de abogados, asesores y proveedores de servicios corporativos locales que nos permite constituir y asesorar fuera de nuestras tres jurisdicciones principales. Seleccionamos al colaborador, coordinamos el trabajo y seguimos siendo tu único interlocutor, para que la estrategia fiscal sea coherente y no quede repartida entre asesores que no hablan entre sí.' },
        ],
      },
      mistakes: [
        { title: 'Elegir el estado por un vídeo', text: 'El estado que le conviene a un ecommerce con personal en Estados Unidos no es el que le conviene a un consultor que factura desde fuera.' },
        { title: 'Dar por hecho que la LLC no paga impuestos en ningún sitio', text: 'Si eres residente fiscal en España, o en la mayoría de países, la renta tributa allí aunque la LLC no pague nada en Estados Unidos.' },
        { title: 'Olvidar el Form 5472', text: 'Se presenta cada año, aunque no haya actividad, y la sanción arranca en 25.000 USD.' },
        { title: 'Constituir antes de mirar tu residencia', text: 'El orden importa: primero dónde eres residente fiscal y después qué sociedad, no al revés.' },
      ],
      faq: [
        { q: '¿Necesito vivir en Estados Unidos para abrir una LLC?', a: 'No. Un no residente puede ser socio único de una LLC. Sí necesitas un agente registrado en el estado y, en la práctica, un EIN para abrir la cuenta bancaria.' },
        { q: '¿Mi LLC paga impuestos en Estados Unidos?', a: 'Si el socio no es persona estadounidense y la LLC no tiene rentas efectivamente conectadas con una actividad allí, normalmente no hay impuesto federal estadounidense sobre esa renta. Las declaraciones hay que presentarlas igual, y la renta normalmente se declara donde eres residente fiscal.' },
        { q: '¿Tengo que presentar algo si la LLC no ha tenido actividad?', a: 'Sí. Una LLC de un solo socio extranjero presenta cada año el Form 5472 con un Form 1120 pro forma, aunque sea a cero, además del informe anual del estado. No presentarlo tiene una sanción desde 25.000 USD.' },
        { q: '¿Cuánto se tarda en abrir una LLC?', a: 'La sociedad en sí suele ser cuestión de días. Lo que más tarda es el EIN cuando no tienes SSN ni ITIN: pueden ser varias semanas, y la cuenta bancaria viene después.' },
        { q: '¿Constituís en otros países además de Estados Unidos?', a: 'Sí. Más allá de Emiratos, España y Estados Unidos, trabajamos con una red de colaboradores locales que nos permite constituir y asesorar en otras jurisdicciones, coordinándolo todo nosotros.' },
      ],
      cta: {
        title: { lead: 'Veamos si la LLC', accent: 'es de verdad tu respuesta.' },
        text: 'Cuéntanos dónde vives y cómo es tu negocio y te decimos si la LLC te sirve, qué estado encaja y cuánto te costaría mantenerla.',
      },
    },
  },

  spainTax: {
    en: {
      name: 'Tax management in Spain',
      meta: {
        title: 'Tax Advisor in Spain for Digital Entrepreneurs | Evolve Tax',
        description:
          'Tax advice in Spain for freelancers, companies and online businesses: quarterly and annual returns, international invoicing and Form 720.',
      },
      hero: {
        eyebrow: 'Service · Tax management in Spain',
        title: { lead: 'Tax management in Spain', accent: 'for digital businesses.' },
        intro:
          'If you sell online, work with clients abroad or hold assets outside Spain, a standard accountant often falls short. We handle your taxes in Spain — as a freelancer or through a company — with the international side in mind from the start.',
        facts: [
          { label: 'For', value: 'Freelancers & companies' },
          { label: 'Returns', value: 'Quarterly & annual' },
          { label: 'Specialty', value: 'International invoicing' },
          { label: 'Also', value: 'Tax authority requests' },
        ],
      },
      included: {
        title: { lead: 'What we', accent: 'take care of.' },
        intro: 'Your tax obligations in Spain, handled by people who understand how a digital business works.',
        items: [
          { title: 'Freelancer or company', text: 'We help you decide whether to operate as a freelancer (autónomo) or through a company, based on your income and plans.' },
          { title: 'Quarterly returns', text: 'VAT and income tax prepayments every quarter, prepared on time and reviewed before filing.' },
          { title: 'Annual returns', text: 'Personal income tax, Corporate Income Tax and the annual summaries and informative returns that apply to you.' },
          { title: 'International invoicing', text: 'VAT on sales to clients inside and outside the EU, registration in the intra-EU operators register (ROI) and the related returns.' },
          { title: 'Assets abroad', text: 'Forms 720 and 721 when you hold accounts, investments or crypto outside Spain above the reporting thresholds.' },
          { title: 'Requests and reviews', text: 'We prepare the response to requests and review procedures from the Spanish tax authority.' },
        ],
      },
      forWho: [
        'Freelancers who invoice clients in other countries.',
        'Online businesses, agencies and creators operating through a Spanish company.',
        'People with bank accounts, investments or crypto outside Spain.',
        'Anyone who has received a letter from the tax authority and doesn’t know how to respond.',
      ],
      process: [
        { title: 'Initial review', text: 'We look at your activity, how you invoice and what you have filed so far.' },
        { title: 'Onboarding', text: 'We set up the document flow and your calendar of obligations.' },
        { title: 'Ongoing management', text: 'We prepare and file your returns and flag anything that needs attention.' },
        { title: 'Annual review', text: 'Once a year we check whether your setup still fits as your business grows.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'about taxes in Spain.' },
        intro: 'Three points that digital entrepreneurs in Spain often overlook.',
        blocks: [
          {
            heading: 'Invoicing international clients',
            paragraphs: [
              'Providing services to businesses in other EU countries usually means invoicing without Spanish VAT under the reverse charge — but only if you are registered in the intra-EU operators register (ROI) and file the corresponding informative return (Form 349).',
              'Services to businesses outside the EU are generally not subject to Spanish VAT either. Sales to private individuals, digital services and platforms follow their own rules, so each income stream is worth reviewing.',
            ],
          },
          {
            heading: 'Freelancer or company: it depends on the numbers',
            paragraphs: [
              'Freelancers pay personal income tax at progressive rates, while a company pays Corporate Income Tax and the shareholder is taxed again when profits are distributed. Neither option is better in the abstract.',
              'The decision depends on your income, how much you need to take out of the business, your plans and the extra costs and obligations a company involves.',
            ],
          },
          {
            heading: 'Assets abroad must be reported',
            paragraphs: [
              'If you are tax resident in Spain and hold accounts, securities or real estate abroad worth more than €50,000 in any of those categories, you must file Form 720. Crypto held abroad has its own return, Form 721.',
              'These are informative returns — they don’t create tax by themselves — but they are easy to forget and a common source of problems with the tax authority.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Getting VAT wrong with EU clients', text: 'Invoicing without VAT without being registered in the ROI, or charging VAT when it doesn’t apply, has to be corrected later.' },
        { title: 'Missing quarterly deadlines', text: 'Late filings carry surcharges and penalties, even when the amount due is small.' },
        { title: 'Forgetting Form 720', text: 'Accounts and brokers based outside Spain can trigger the reporting obligation.' },
        { title: 'Ignoring a letter from the tax authority', text: 'Requests have a response deadline; not answering usually makes things worse.' },
      ],
      faq: [
        { q: 'Do you only advise digital businesses?', a: 'Our focus is digital entrepreneurs and online businesses, but we also advise individuals and companies in Spain with other activities, especially when there is an international component.' },
        { q: 'Can you take over from my current accountant?', a: 'Yes. We review what has been filed, take over the pending obligations and make the switch as smooth as possible.' },
        { q: 'Do I have to charge VAT to clients outside Spain?', a: 'It depends on where the client is and whether it’s a business or a private individual. Services to businesses outside Spain are often invoiced without Spanish VAT, but each case has its own rules.' },
        { q: 'I’ve received a request from the tax authority. Can you help?', a: 'Yes. We review the notice, prepare the documentation and the response within the deadline, and advise you on the next steps.' },
        { q: 'Do you work with non-residents who have income in Spain?', a: 'Yes. We handle the tax obligations of non-residents with income or property in Spain.' },
      ],
      cta: {
        title: { lead: 'Let’s get your taxes in Spain', accent: 'in order.' },
        text: 'Tell us how you work and we’ll tell you what your situation needs.',
      },
    },
    es: {
      name: 'Gestión fiscal en España',
      meta: {
        title: 'Asesoría fiscal en España para negocios online | Evolve Tax',
        description:
          'Asesoría fiscal en España para autónomos, sociedades y negocios digitales: declaraciones trimestrales y anuales, facturación internacional y modelo 720.',
      },
      hero: {
        eyebrow: 'Servicio · Gestión fiscal en España',
        title: { lead: 'Gestión fiscal en España', accent: 'para negocios digitales.' },
        intro:
          'Si vendes online, trabajas con clientes de fuera o tienes bienes fuera de España, una gestoría estándar se suele quedar corta. Llevamos tus impuestos en España, como autónomo o a través de sociedad, teniendo en cuenta la parte internacional desde el principio.',
        facts: [
          { label: 'Para', value: 'Autónomos y sociedades' },
          { label: 'Declaraciones', value: 'Trimestrales y anuales' },
          { label: 'Especialidad', value: 'Facturación internacional' },
          { label: 'Además', value: 'Requerimientos de Hacienda' },
        ],
      },
      included: {
        title: { lead: 'Qué', accent: 'llevamos.' },
        intro: 'Tus obligaciones fiscales en España, en manos de quien entiende cómo funciona un negocio digital.',
        items: [
          { title: 'Autónomo o sociedad', text: 'Te ayudamos a decidir si te conviene operar como autónomo o a través de una sociedad, según tus ingresos y tus planes.' },
          { title: 'Declaraciones trimestrales', text: 'IVA y pagos fraccionados cada trimestre, preparados a tiempo y revisados antes de presentar.' },
          { title: 'Declaraciones anuales', text: 'Renta, Impuesto sobre Sociedades y los resúmenes y declaraciones informativas anuales que te correspondan.' },
          { title: 'Facturación internacional', text: 'IVA en ventas a clientes de dentro y fuera de la UE, alta en el Registro de Operadores Intracomunitarios (ROI) y sus declaraciones.' },
          { title: 'Bienes en el extranjero', text: 'Modelos 720 y 721 cuando tienes cuentas, inversiones o criptomonedas fuera de España por encima de los umbrales.' },
          { title: 'Requerimientos y comprobaciones', text: 'Preparamos la respuesta a requerimientos y procedimientos de comprobación de Hacienda.' },
        ],
      },
      forWho: [
        'Autónomos que facturan a clientes de otros países.',
        'Negocios online, agencias y creadores que operan con una sociedad española.',
        'Quien tiene cuentas, inversiones o criptomonedas fuera de España.',
        'Quien ha recibido una carta de Hacienda y no sabe cómo responder.',
      ],
      process: [
        { title: 'Revisión inicial', text: 'Revisamos tu actividad, cómo facturas y lo que has presentado hasta ahora.' },
        { title: 'Puesta en marcha', text: 'Organizamos el flujo de documentación y tu calendario de obligaciones.' },
        { title: 'Gestión continua', text: 'Preparamos y presentamos tus declaraciones y te avisamos de lo que requiera atención.' },
        { title: 'Revisión anual', text: 'Una vez al año revisamos si tu forma de operar sigue encajando a medida que crece tu negocio.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'sobre impuestos en España.' },
        intro: 'Tres puntos que los emprendedores digitales en España suelen pasar por alto.',
        blocks: [
          {
            heading: 'Facturar a clientes internacionales',
            paragraphs: [
              'Prestar servicios a empresas de otros países de la UE suele implicar facturar sin IVA español por inversión del sujeto pasivo, pero solo si estás dado de alta en el Registro de Operadores Intracomunitarios (ROI) y presentas la declaración informativa correspondiente (modelo 349).',
              'Los servicios a empresas de fuera de la UE, por regla general, tampoco llevan IVA español. Las ventas a particulares, los servicios digitales y las plataformas tienen sus propias reglas, así que conviene revisar cada fuente de ingresos.',
            ],
          },
          {
            heading: 'Autónomo o sociedad: depende de los números',
            paragraphs: [
              'El autónomo tributa en el IRPF a tipos progresivos, mientras que la sociedad paga el Impuesto sobre Sociedades y el socio vuelve a tributar cuando se reparten beneficios. Ninguna opción es mejor en abstracto.',
              'La decisión depende de tus ingresos, de cuánto necesitas sacar del negocio, de tus planes y de los costes y obligaciones adicionales que implica una sociedad.',
            ],
          },
          {
            heading: 'Los bienes en el extranjero se declaran',
            paragraphs: [
              'Si eres residente fiscal en España y tienes cuentas, valores o inmuebles en el extranjero por más de 50.000 € en alguna de esas categorías, debes presentar el modelo 720. Las criptomonedas custodiadas fuera tienen su propia declaración, el modelo 721.',
              'Son declaraciones informativas, no generan impuesto por sí mismas, pero es fácil olvidarlas y son una fuente habitual de problemas con Hacienda.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Aplicar mal el IVA a clientes de la UE', text: 'Facturar sin IVA sin estar dado de alta en el ROI, o cobrarlo cuando no corresponde, obliga a regularizar después.' },
        { title: 'Saltarse los plazos trimestrales', text: 'Presentar tarde conlleva recargos y sanciones, aunque la cantidad a ingresar sea pequeña.' },
        { title: 'Olvidarse del modelo 720', text: 'Las cuentas y brókers con sede fuera de España pueden activar la obligación de informar.' },
        { title: 'Ignorar una carta de Hacienda', text: 'Los requerimientos tienen plazo de respuesta; no contestar suele empeorar la situación.' },
      ],
      faq: [
        { q: '¿Solo asesoráis a negocios digitales?', a: 'Nuestro foco son los emprendedores y negocios digitales, pero también asesoramos a particulares y empresas en España con otro tipo de actividad, sobre todo cuando hay un componente internacional.' },
        { q: '¿Podéis sustituir a mi gestoría actual?', a: 'Sí. Revisamos lo presentado, asumimos las obligaciones pendientes y hacemos que el cambio sea lo más sencillo posible.' },
        { q: '¿Tengo que cobrar IVA a clientes de fuera de España?', a: 'Depende de dónde esté el cliente y de si es una empresa o un particular. Los servicios a empresas de fuera de España a menudo se facturan sin IVA español, pero cada caso tiene sus reglas.' },
        { q: 'He recibido un requerimiento de Hacienda. ¿Podéis ayudarme?', a: 'Sí. Revisamos la notificación, preparamos la documentación y la respuesta dentro de plazo y te orientamos sobre los siguientes pasos.' },
        { q: '¿Trabajáis con no residentes con rentas en España?', a: 'Sí. Llevamos las obligaciones fiscales de no residentes con ingresos o inmuebles en España.' },
      ],
      cta: {
        title: { lead: 'Pongamos en orden tus impuestos', accent: 'en España.' },
        text: 'Cuéntanos cómo trabajas y te decimos qué necesita tu situación.',
      },
    },
  },

  /* ----------------------------------------------------------------
     Cambio de residencia fiscal
     ---------------------------------------------------------------- */
  residency: {
    en: {
      name: 'Change of tax residency',
      meta: {
        title: 'Changing Tax Residency to or from Spain | Evolve Tax',
        description:
          'Leaving Spain or moving to it? We analyse your tax residency, tax treaties, exit tax and the Beckham Law so the change holds up.',
      },
      hero: {
        eyebrow: 'Service · Change of tax residency',
        title: { lead: 'Change your tax residency', accent: 'without surprises.' },
        intro:
          'Moving country doesn’t automatically change where you pay tax. Whether you’re leaving Spain for Dubai or elsewhere, or moving to Spain, we analyse your situation, plan the move and help you gather what you need to prove that your tax residency has really changed.',
        facts: [
          { label: 'Key test in Spain', value: '183 days + economic ties' },
          { label: 'Direction', value: 'Leaving or moving to Spain' },
          { label: 'Also reviewed', value: 'Exit tax · Beckham Law' },
          { label: 'Output', value: 'Plan and evidence file' },
        ],
      },
      included: {
        title: { lead: 'What the analysis', accent: 'covers.' },
        intro: 'A residency change that holds up is prepared in advance and documented.',
        items: [
          { title: 'Residency diagnosis', text: 'We analyse when you would stop — or start — being tax resident in Spain, based on your real situation.' },
          { title: 'Planning the move', text: 'The right timing, and what to do with your home, accounts, companies and assets.' },
          { title: 'Tax treaties', text: 'How the tie-breaker rules of the double taxation treaty apply if two countries could consider you resident.' },
          { title: 'Leaving Spain: exit tax', text: 'Whether the exit tax on shareholdings applies to you and what other tax effects leaving can have.' },
          { title: 'Moving to Spain: Beckham Law', text: 'Whether you can apply for the impatriate regime and what changes when you become resident.' },
          { title: 'Evidence file', text: 'Which documents to keep to prove your residency: visa, lease, tax residency certificate and more.' },
        ],
      },
      forWho: [
        'Spanish residents planning to move to Dubai or another country.',
        'People who have already moved and want to make sure Spain no longer considers them resident.',
        'Professionals and entrepreneurs relocating to Spain.',
        'Families where not everyone moves at the same time.',
      ],
      process: [
        { title: 'Diagnosis', text: 'We review your ties with each country: days, family, home, income and assets.' },
        { title: 'Move plan', text: 'We define the timing and the steps to take before, during and after the move.' },
        { title: 'Implementation', text: 'We coordinate the formalities in both countries and review your evidence file.' },
        { title: 'Follow-up', text: 'We review your obligations during the first years, which is when the tax authority looks most closely.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'before changing country.' },
        intro: 'Spanish tax residency has more nuances than the famous 183 days.',
        blocks: [
          {
            heading: 'It’s not just the 183 days',
            paragraphs: [
              'Under Spanish law you are tax resident if you spend more than 183 days in Spain in a calendar year, or if Spain is the main centre of your business or economic interests. Spain also presumes you are resident if your spouse and dependent minor children habitually live in Spain.',
              'Meeting a single criterion can be enough, so reducing the days you spend in Spain is not always sufficient.',
            ],
          },
          {
            heading: 'If there is a conflict, the tax treaty decides',
            paragraphs: [
              'If Spain and another country could both consider you resident, the double taxation treaty between them — where one exists, as with the UAE — sets tie-breaker rules: permanent home, centre of vital interests, habitual abode and nationality.',
              'To rely on them you need to prove your residency in the other country, usually with a tax residency certificate issued by its tax authority, among other evidence.',
            ],
          },
          {
            heading: 'Leaving has a cost, and arriving has options',
            paragraphs: [
              'If you hold significant shareholdings, the Spanish exit tax may apply when you leave: it can tax unrealised gains if you have been resident for at least 10 of the last 15 years and certain value thresholds are exceeded.',
              'If you are moving to Spain instead, from the moment you become resident you are taxed on your worldwide income — unless you qualify for the Beckham Law, which is worth analysing before you arrive.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Leaving without a plan', text: 'Moving first and analysing later can mean remaining tax resident in Spain without realising it.' },
        { title: 'Keeping the centre of your life in Spain', text: 'Keeping your home, family or main income in Spain can outweigh the days you spend abroad.' },
        { title: 'Not keeping evidence', text: 'Without documentation of your life in the new country, it’s hard to defend your residency if Spain asks.' },
        { title: 'Arriving in Spain without checking the Beckham Law', text: 'The application has a six-month deadline; once it has passed, the regime is no longer available.' },
      ],
      faq: [
        { q: 'Is spending fewer than 183 days in Spain enough to stop being resident?', a: 'Not always. Spain can also consider you resident if your main economic interests are in Spain, or presume it if your spouse and dependent minor children live there.' },
        { q: 'What is a tax residency certificate?', a: 'It’s a certificate issued by the tax authority of the country where you live — the UAE, for example — that proves your tax residency there. It’s key evidence, although on its own it isn’t always enough.' },
        { q: 'Do I have to tell the Spanish tax authority that I’m leaving?', a: 'It’s advisable to update your tax address and status. We tell you which formalities apply in your case, and when.' },
        { q: 'I’m moving to Spain. What should I check first?', a: 'Whether you can apply for the Beckham Law, what your obligations are from the moment you become resident, and whether you need to report assets held abroad.' },
        { q: 'When should I start planning?', a: 'Ideally several months before the move. Some decisions, such as the timing or what to do with your assets, are much easier before you go.' },
      ],
      cta: {
        title: { lead: 'Changing', accent: 'country?' },
        text: 'Tell us about your situation and we’ll tell you what to consider so your change of residency is solid.',
      },
    },
    es: {
      name: 'Cambio de residencia fiscal',
      meta: {
        title: 'Cambio de residencia fiscal España–Dubái | Evolve Tax',
        description:
          '¿Te vas de España o te mudas a ella? Analizamos tu residencia fiscal, los convenios, el exit tax y el régimen Beckham para que el cambio aguante.',
      },
      hero: {
        eyebrow: 'Servicio · Cambio de residencia fiscal',
        title: { lead: 'Cambia tu residencia fiscal', accent: 'sin sorpresas.' },
        intro:
          'Cambiar de país no cambia automáticamente dónde pagas impuestos. Tanto si te vas de España a Dubái u otro destino como si te mudas a España, analizamos tu situación, planificamos el traslado y te ayudamos a reunir lo necesario para acreditar que tu residencia fiscal ha cambiado de verdad.',
        facts: [
          { label: 'Regla clave en España', value: '183 días + intereses económicos' },
          { label: 'Sentido', value: 'Salir o llegar a España' },
          { label: 'También revisamos', value: 'Exit tax · Régimen Beckham' },
          { label: 'Resultado', value: 'Plan y expediente de pruebas' },
        ],
      },
      included: {
        title: { lead: 'Qué cubre', accent: 'el análisis.' },
        intro: 'Un cambio de residencia que aguanta se prepara con antelación y se documenta.',
        items: [
          { title: 'Diagnóstico de residencia', text: 'Analizamos cuándo dejarías de ser, o pasarías a ser, residente fiscal en España según tu situación real.' },
          { title: 'Planificación del traslado', text: 'El momento adecuado y qué hacer con tu vivienda, cuentas, sociedades y patrimonio.' },
          { title: 'Convenios de doble imposición', text: 'Cómo se aplican las reglas de desempate del convenio si dos países pudieran considerarte residente.' },
          { title: 'Salir de España: exit tax', text: 'Si te afecta el impuesto de salida sobre participaciones y qué otros efectos fiscales puede tener irte.' },
          { title: 'Llegar a España: régimen Beckham', text: 'Si puedes acogerte al régimen de impatriados y qué cambia al pasar a ser residente.' },
          { title: 'Expediente de pruebas', text: 'Qué documentos conservar para acreditar tu residencia: visado, contrato de alquiler, certificado de residencia fiscal y más.' },
        ],
      },
      forWho: [
        'Residentes en España que se plantean mudarse a Dubái o a otro país.',
        'Quien ya se ha mudado y quiere asegurarse de que España no le sigue considerando residente.',
        'Profesionales y emprendedores que se trasladan a España.',
        'Familias en las que no todos se mudan a la vez.',
      ],
      process: [
        { title: 'Diagnóstico', text: 'Revisamos tus vínculos con cada país: días, familia, vivienda, ingresos y patrimonio.' },
        { title: 'Plan de traslado', text: 'Definimos los plazos y los pasos antes, durante y después del cambio.' },
        { title: 'Implantación', text: 'Coordinamos los trámites en ambos países y revisamos tu expediente de pruebas.' },
        { title: 'Seguimiento', text: 'Revisamos tus obligaciones en los primeros años, que es cuando Hacienda más se fija.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'antes de cambiar de país.' },
        intro: 'La residencia fiscal en España tiene más matices que los famosos 183 días.',
        blocks: [
          {
            heading: 'No son solo los 183 días',
            paragraphs: [
              'Según la ley española, eres residente fiscal si pasas más de 183 días en España durante el año natural o si en España está el núcleo principal de tus actividades o intereses económicos. Además, se presume que eres residente si tu cónyuge no separado y tus hijos menores que dependan de ti residen habitualmente en España.',
              'Basta con cumplir uno de estos criterios, así que reducir los días que pasas en España no siempre es suficiente.',
            ],
          },
          {
            heading: 'Si hay conflicto, decide el convenio',
            paragraphs: [
              'Si España y otro país pudieran considerarte residente a la vez, el convenio para evitar la doble imposición entre ambos, si existe, como en el caso de Emiratos, establece reglas de desempate: vivienda permanente, centro de intereses vitales, lugar de estancia habitual y nacionalidad.',
              'Para aplicarlas necesitas acreditar tu residencia en el otro país, normalmente con un certificado de residencia fiscal emitido por su autoridad fiscal, entre otras pruebas.',
            ],
          },
          {
            heading: 'Salir tiene un coste y llegar tiene opciones',
            paragraphs: [
              'Si tienes participaciones relevantes, al irte puede aplicarse el exit tax español: grava las ganancias latentes si has sido residente al menos 10 de los últimos 15 años y se superan determinados umbrales de valor.',
              'Si en cambio te mudas a España, desde que pasas a ser residente tributas por tu renta mundial, salvo que puedas acogerte al régimen Beckham, algo que conviene analizar antes de llegar.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Irse sin planificar', text: 'Mudarse primero y analizar después puede suponer seguir siendo residente en España sin saberlo.' },
        { title: 'Mantener el centro de tu vida en España', text: 'Conservar vivienda, familia o ingresos principales en España puede pesar más que los días que pasas fuera.' },
        { title: 'No guardar pruebas', text: 'Sin documentación de tu vida en el nuevo país es difícil defender tu residencia si Hacienda pregunta.' },
        { title: 'Llegar a España sin mirar el régimen Beckham', text: 'La solicitud tiene un plazo de seis meses; una vez pasado, el régimen deja de estar disponible.' },
      ],
      faq: [
        { q: '¿Basta con pasar menos de 183 días en España para dejar de ser residente?', a: 'No siempre. Hacienda también puede considerarte residente si el núcleo principal de tus intereses económicos está en España, o presumirlo si tu cónyuge y tus hijos menores viven aquí.' },
        { q: '¿Qué es un certificado de residencia fiscal?', a: 'Es un certificado que emite la autoridad fiscal del país donde vives, como Emiratos, y que acredita tu residencia fiscal allí. Es una prueba clave, aunque por sí sola no siempre es suficiente.' },
        { q: '¿Tengo que comunicar a Hacienda que me voy?', a: 'Es recomendable actualizar tu domicilio y tu situación fiscal. Te indicamos qué trámites aplican en tu caso y cuándo.' },
        { q: 'Me mudo a España. ¿Qué debería revisar primero?', a: 'Si puedes acogerte al régimen Beckham, qué obligaciones tienes desde que pasas a ser residente y si debes informar de bienes en el extranjero.' },
        { q: '¿Cuándo debería empezar a planificarlo?', a: 'Idealmente, varios meses antes del traslado. Algunas decisiones, como el momento del cambio o qué hacer con el patrimonio, son mucho más fáciles antes de irte.' },
      ],
      cta: {
        title: { lead: '¿Cambias', accent: 'de país?' },
        text: 'Cuéntanos tu situación y te decimos qué tener en cuenta para que tu cambio de residencia sea sólido.',
      },
    },
  },

  /* ----------------------------------------------------------------
     Régimen Beckham (impatriados)
     ---------------------------------------------------------------- */
  /* ----------------------------------------------------------------
     Cambio de residencia fiscal España → Dubái (sub-landing de residency)
     ---------------------------------------------------------------- */
  spainDubai: {
    en: {
      name: 'Spain to Dubai tax residency',
      meta: {
        title: 'Moving Tax Residency from Spain to Dubai | Evolve Tax',
        description:
          'Leaving Spain for Dubai? We plan the move: the 183-day test, form 030, the exit tax and your UAE tax residency certificate, so the change holds up.',
      },
      hero: {
        eyebrow: 'Service · Spain → Dubai',
        title: { lead: 'Moving from Spain to Dubai', accent: 'without leaving a tax trail behind.' },
        intro:
          'Getting a residence visa in the UAE does not make you a non-resident in Spain. We plan the whole move: when you actually stop being tax resident, what you file in your last Spanish year, how you get your UAE tax residency certificate and what evidence you need if the Spanish tax authority looks into it years later.',
        facts: [
          { label: 'Spanish test', value: '183 days + economic ties' },
          { label: 'Tax year', value: 'Spain has no split year' },
          { label: 'UAE certificate', value: 'Usually 183 days in the UAE' },
          { label: 'Treaty', value: 'Spain–UAE, in force since 2007' },
        ],
      },
      included: {
        title: { lead: 'What we', accent: 'take care of.' },
        intro: 'The whole move, from the year you should leave to the file that proves it.',
        items: [
          { title: 'When to leave', text: 'We work out which year the change really takes effect, because in Spain you are resident for the full tax year or not at all.' },
          { title: 'Your ties with Spain', text: 'Days, family, home, companies, clients and assets: what has to change and what you can keep.' },
          { title: 'Exit tax', text: 'Whether the exit tax on shareholdings applies to you, how much it would be and what options you have before leaving.' },
          { title: 'Your last Spanish return', text: 'The final resident income tax return, form 030 and the reporting obligations of your last year as a resident.' },
          { title: 'Setting up in the UAE', text: 'Residence visa, Emirates ID, housing and the tax residency certificate from the Federal Tax Authority.' },
          { title: 'Evidence file', text: 'The documents that prove the change if Spain asks about it three or four years from now.' },
        ],
      },
      forWho: [
        'Entrepreneurs and digital businesses moving from Spain to Dubai.',
        'People who already moved and are not sure Spain no longer considers them resident.',
        'Founders with a Spanish company who want to keep it, sell it or wind it down before leaving.',
        'Families where one partner moves first and the rest follow later.',
      ],
      process: [
        { title: 'Diagnosis', text: 'We review your ties with Spain and the UAE and tell you which year the change can realistically take effect.' },
        { title: 'Move plan', text: 'Timing, formalities and what to do with your home, accounts, company and assets.' },
        { title: 'Implementation', text: 'We handle the Spanish side and coordinate the UAE side: licence, visa and tax residency certificate.' },
        { title: 'Follow-up', text: 'Your non-resident obligations in Spain and the UAE filings for the first years, which is when it matters most.' },
      ],
      guide: {
        title: { lead: 'What really decides', accent: 'where you pay tax.' },
        intro: 'Not the visa. Not the plane ticket. These three things.',
        blocks: [
          {
            heading: 'The 183 days are only the first test',
            paragraphs: [
              'Spain treats you as tax resident if you spend more than 183 days there in a calendar year, but also if your main centre of economic interests is in Spain, regardless of the days. The second test is the one that catches people: you can live in Dubai all year and still be considered Spanish resident if your income, your company and your assets are still essentially Spanish.',
              'There is also a presumption: if your spouse and dependent children live in Spain, you are presumed resident there unless you prove otherwise.',
            ],
          },
          {
            heading: 'Spain has no split year',
            paragraphs: [
              'In most countries you can be resident for part of the year. Spain does not work that way: you are either tax resident for the whole calendar year or you are not. That makes the date you leave decisive, and it is why moving in July or in November can change your entire tax bill for that year.',
              'In practice this means the move has to be planned before it happens, not explained afterwards.',
            ],
          },
          {
            heading: 'Dubai has to give you a certificate',
            paragraphs: [
              'Having a residence visa is not the same as being tax resident in the UAE. Since 2023 the UAE has its own definition of tax residency and the Federal Tax Authority issues a tax residency certificate, which is what lets you rely on the Spain–UAE double taxation treaty if both countries claim you.',
              'For treaty purposes that certificate usually requires real presence in the country — as a rule, 183 days — plus a home and documentation. Getting the visa and spending three months a year there is not enough.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Complete guide:', accent: 'from Spain to Dubai.' },
        intro: 'When you stop being resident, what you file in your last Spanish year, what the exit tax is, how the UAE certificate works and what evidence to keep.',
        blocks: [
          { h2: 'When you stop being tax resident in Spain', id: 'when' },
          { p: 'Spanish law gives three tests, and **any one of them** is enough to make you resident:' },
          {
            list: [
              ['More than 183 days', 'Days spent in Spain during the calendar year, including sporadic absences unless you prove tax residency elsewhere.'],
              ['Centre of economic interests', 'Spain is where the core of your activities or economic interests sits, directly or indirectly. No day count involved.'],
              ['Family presumption', 'If your spouse and minor children habitually live in Spain, you are presumed resident unless you prove otherwise.'],
            ],
          },
          { p: 'The first test is arithmetic. The second is a judgement call, and it is where most disputes happen: if you keep your Spanish company, your Spanish clients and your Spanish property while you live in Dubai, the tax authority has an argument.' },
          {
            callout: {
              title: 'Sporadic absences',
              text: 'Leaving the country is not enough on its own. To stop days abroad from counting as Spanish days, you generally need a tax residency certificate from the other country — in this case, from the UAE Federal Tax Authority.',
            },
          },

          { h2: 'The year you leave', id: 'year' },
          { p: 'Spain does not split the tax year. You are resident for the whole calendar year or for none of it, so the year of the move is either a full resident year or a full non-resident year. There is no proportion.' },
          { p: 'That single rule drives the timing of everything else: when to sell, when to take a dividend, when to close a company, when to actually fly.' },
          {
            table: {
              head: ['If you are still resident that year', 'If you are already non-resident'],
              rows: [
                ['Worldwide income taxed in Spain (IRPF)', 'Only Spanish-source income (IRNR)'],
                ['Form 720 / 721 on assets abroad, if thresholds are met', 'No form 720'],
                ['Wealth tax or solidarity tax on worldwide assets, where applicable', 'Only on assets located in Spain'],
                ['Beckham regime possible in some cases', 'Not applicable'],
              ],
            },
          },

          { h2: 'Exit tax: who it actually affects', id: 'exit-tax' },
          { p: 'The exit tax taxes the unrealised gains on your shareholdings when you stop being resident. It does **not** apply to everyone. In broad terms it applies when you have been resident in Spain for at least 10 of the last 15 tax years and either:' },
          {
            list: [
              'The market value of your shareholdings exceeds 4 million euros, or',
              'You hold more than 25% of an entity whose shareholding is worth more than 1 million euros.',
            ],
          },
          { p: 'There are deferral rules for moves within the EU/EEA and specific rules for temporary relocations. Dubai is neither, so if you are above the thresholds this needs to be on the table well before you move, not after.' },

          { h2: 'What you file in Spain after leaving', id: 'spain-after' },
          { p: 'Changing residency does not always mean cutting every tie with Spain. If you keep property, shares or any Spanish-source income, you move from IRPF to **IRNR**, non-resident income tax, which has its own forms and deadlines:' },
          {
            list: [
              ['Form 030', 'To notify the change of address and your new tax status.'],
              ['Form 210', 'Non-resident income tax on Spanish-source income: rental income, capital gains, deemed income on a property you keep for your own use.'],
              ['Final resident return', 'Your last IRPF covering the whole of your last resident year.'],
              ['Wealth tax', 'If you keep assets in Spain above the thresholds, by real obligation.'],
            ],
          },
          { p: 'If you keep a Spanish company and run it from Dubai, there is a further question: where the company is actually managed. We cover it in the guide on [a Dubai company that ends up taxed in Spain](/blog/dubai-company-taxed-in-spain).' },

          { h2: 'Becoming tax resident in the UAE', id: 'uae-side' },
          { p: 'The UAE route normally runs through a company and a residence visa. We handle that part too — see [business setup in Dubai](/services/dubai-company-setup) — but for residency purposes, what matters is what comes after the visa:' },
          {
            list: [
              ['Emirates ID and residence visa', 'The legal basis for living there, usually through your own company or an employer.'],
              ['A real home', 'A lease or property in your name, with utilities in your name.'],
              ['Physical presence', 'Days actually spent in the country, with entry and exit records to back them up.'],
              ['Tax residency certificate', 'Issued by the Federal Tax Authority; the treaty version is what you show Spain.'],
            ],
          },
          { p: 'Add the UAE obligations that come with the company: Corporate Tax registration and filing, VAT if you cross the threshold, and proper books. We deal with those in [tax management in Dubai](/services/dubai-tax-management).' },

          { h2: 'The evidence file', id: 'evidence' },
          { p: 'A residency review in Spain usually arrives three or four years after the move, when nobody remembers where anything is. The file you want to have ready:' },
          {
            list: [
              'UAE tax residency certificates for each year.',
              'Residence visa, Emirates ID and your lease or title deed.',
              'Boarding passes and passport stamps for the year of the move and the following ones.',
              'Utility bills, UAE bank statements and local card spending.',
              'Proof that your work is run from the UAE: contracts, invoices, office or coworking.',
              'Form 030 and your final Spanish resident return.',
            ],
          },
          {
            callout: {
              title: 'The mistake that costs the most',
              text: 'Moving first and asking afterwards. Almost everything on this page is decided by the date you leave and by what you do in the months before it. Once the year has closed, the options shrink.',
            },
          },
        ],
      },
      mistakes: [
        { title: 'Thinking the visa is enough', text: 'A residence visa proves you can live there. It does not prove you stopped being tax resident in Spain.' },
        { title: 'Moving in the middle of the year without planning it', text: 'Spain has no split year, so the date of the move decides how your whole year is taxed.' },
        { title: 'Keeping everything in Spain', text: 'Company, clients, home and family in Spain while you live in Dubai is the clearest way to be considered resident anyway.' },
        { title: 'Not asking for the UAE certificate', text: 'Without it, it is very hard to rely on the treaty or to neutralise sporadic absences.' },
      ],
      faq: [
        { q: 'Is it enough to spend less than 183 days in Spain?', a: 'No. Days are only one of the tests. If your main centre of economic interests stays in Spain, you can be considered resident even with very few days there.' },
        { q: 'When does the change take effect?', a: 'Spain does not split the tax year: you are resident for the whole calendar year or not at all. That is why the date you leave, and the year you choose, matter so much.' },
        { q: 'Does the exit tax apply to me?', a: 'Only if you have been resident for at least 10 of the last 15 years and your shareholdings exceed the legal thresholds — broadly 4 million euros, or 1 million with a holding above 25%. We check it before you move.' },
        { q: 'Can I keep my company in Spain?', a: 'You can, but then we have to look at where it is actually managed and how dividends are taxed once you are a non-resident. It is part of the analysis.' },
        { q: 'How long does it take to get the UAE tax residency certificate?', a: 'You first need the visa, a home and real presence in the country. The certificate is requested afterwards from the Federal Tax Authority, normally once you can show enough days in the UAE.' },
        { q: 'I already moved and did not plan any of this. Can you help?', a: 'Yes. We review what you did, see how exposed you are and put together the evidence and the filings you are missing. It is harder than planning it in advance, but it is fixable.' },
      ],
      cta: {
        title: { lead: 'Tell us when you', accent: 'plan to leave.' },
        text: 'With your dates, your business and your assets we can tell you which year the change works, what it costs and what you need to prepare.',
      },
    },
    es: {
      name: 'Residencia fiscal España → Dubái',
      meta: {
        title: 'Cambiar la residencia fiscal de España a Dubái | Evolve Tax',
        description:
          '¿Te vas de España a Dubái? Planificamos la salida: los 183 días, el modelo 030, el exit tax y el certificado de residencia fiscal de Emiratos.',
      },
      hero: {
        eyebrow: 'Servicio · España → Dubái',
        title: { lead: 'Irte de España a Dubái', accent: 'sin dejarte la residencia fiscal aquí.' },
        intro:
          'Tener el visado de residencia en Emiratos no te convierte en no residente en España. Planificamos todo el traslado: cuándo dejas de ser residente de verdad, qué presentas en tu último año español, cómo consigues el certificado de residencia fiscal emiratí y qué pruebas necesitas si Hacienda te lo mira dentro de tres años.',
        facts: [
          { label: 'Criterio español', value: '183 días + intereses económicos' },
          { label: 'Ejercicio', value: 'España no parte el año' },
          { label: 'Certificado EAU', value: 'Por norma, 183 días allí' },
          { label: 'Convenio', value: 'España–EAU, en vigor desde 2007' },
        ],
      },
      included: {
        title: { lead: 'De qué nos', accent: 'encargamos.' },
        intro: 'Todo el traslado: desde el año en el que te conviene salir hasta el expediente que lo demuestra.',
        items: [
          { title: 'Cuándo salir', text: 'Calculamos en qué ejercicio surte efecto el cambio, porque en España eres residente el año entero o no lo eres.' },
          { title: 'Tus vínculos con España', text: 'Días, familia, vivienda, sociedades, clientes y patrimonio: qué tiene que cambiar y qué puedes mantener.' },
          { title: 'Exit tax', text: 'Si te aplica el impuesto de salida por tus participaciones, cuánto sería y qué alternativas tienes antes de irte.' },
          { title: 'Tu última declaración', text: 'La última renta como residente, el modelo 030 y las obligaciones informativas de ese ejercicio.' },
          { title: 'Instalarte en Emiratos', text: 'Visado de residencia, Emirates ID, vivienda y el certificado de residencia fiscal de la Federal Tax Authority.' },
          { title: 'Expediente de prueba', text: 'La documentación que acredita el cambio si España pregunta dentro de tres o cuatro años.' },
        ],
      },
      forWho: [
        'Emprendedores y negocios digitales que se mudan de España a Dubái.',
        'Quien ya se ha ido y no tiene claro que España haya dejado de considerarle residente.',
        'Socios de una empresa española que quieren mantenerla, venderla o cerrarla antes de salir.',
        'Familias en las que uno se va primero y el resto va después.',
      ],
      process: [
        { title: 'Diagnóstico', text: 'Revisamos tus vínculos con España y con Emiratos y te decimos en qué ejercicio puede surtir efecto el cambio.' },
        { title: 'Plan de salida', text: 'Fechas, trámites y qué hacer con la vivienda, las cuentas, la sociedad y el patrimonio.' },
        { title: 'Ejecución', text: 'Llevamos la parte española y coordinamos la emiratí: licencia, visado y certificado de residencia fiscal.' },
        { title: 'Seguimiento', text: 'Tus obligaciones como no residente en España y las declaraciones en Emiratos los primeros años, que es cuando más se mira.' },
      ],
      guide: {
        title: { lead: 'Lo que de verdad decide', accent: 'dónde pagas impuestos.' },
        intro: 'No es el visado. Ni el billete de avión. Son estas tres cosas.',
        blocks: [
          {
            heading: 'Los 183 días son solo el primer criterio',
            paragraphs: [
              'España te considera residente fiscal si pasas más de 183 días aquí en el año natural, pero también si el núcleo principal de tus intereses económicos está en España, con independencia de los días. El segundo criterio es el que pilla a casi todo el mundo: puedes vivir en Dubái todo el año y seguir siendo residente español si tus ingresos, tu sociedad y tu patrimonio siguen siendo esencialmente españoles.',
              'Además hay una presunción: si tu cónyuge y tus hijos menores residen habitualmente en España, se presume que tú también, salvo prueba en contrario.',
            ],
          },
          {
            heading: 'España no parte el año',
            paragraphs: [
              'En la mayoría de los países puedes ser residente una parte del año. En España no: o eres residente fiscal todo el año natural o no lo eres. Eso convierte la fecha de salida en algo decisivo, y por eso irte en julio o en noviembre puede cambiar por completo la factura fiscal de ese ejercicio.',
              'En la práctica significa que el traslado se planifica antes, no se explica después.',
            ],
          },
          {
            heading: 'Dubái te tiene que dar un certificado',
            paragraphs: [
              'Tener el visado de residencia no es lo mismo que ser residente fiscal en Emiratos. Desde 2023 Emiratos tiene su propia definición de residencia fiscal y la Federal Tax Authority emite un certificado de residencia fiscal, que es lo que te permite acudir al convenio de doble imposición España–Emiratos si los dos países te reclaman.',
              'Para el convenio, ese certificado exige presencia real en el país (por norma, 183 días), además de vivienda y documentación. Sacarte el visado y pasar allí tres meses al año no sirve.',
            ],
          },
        ],
      },
      deepDive: {
        title: { lead: 'Guía completa:', accent: 'de España a Dubái.' },
        intro: 'Cuándo dejas de ser residente, qué presentas en tu último año, qué es el exit tax, cómo funciona el certificado emiratí y qué pruebas tienes que guardar.',
        blocks: [
          { h2: 'Cuándo dejas de ser residente fiscal en España', id: 'cuando' },
          { p: 'La ley española da tres criterios y basta con que se cumpla **uno solo** para que seas residente:' },
          {
            list: [
              ['Más de 183 días', 'Días en territorio español durante el año natural, computando las ausencias esporádicas salvo que acredites residencia fiscal en otro país.'],
              ['Núcleo de intereses económicos', 'Que en España esté el núcleo principal o la base de tus actividades o intereses económicos, de forma directa o indirecta. Aquí no se cuentan días.'],
              ['Presunción familiar', 'Si tu cónyuge no separado y tus hijos menores residen habitualmente en España, se presume que tú también, salvo prueba en contrario.'],
            ],
          },
          { p: 'El primero es aritmética. El segundo es valoración, y es donde se concentran las discusiones: si mantienes tu sociedad española, tus clientes españoles y tu vivienda mientras vives en Dubái, Hacienda tiene argumentos.' },
          {
            callout: {
              title: 'Las ausencias esporádicas',
              text: 'Irse del país no basta por sí solo. Para que los días fuera no se computen como días en España normalmente hace falta un certificado de residencia fiscal del otro país; en este caso, el de la Federal Tax Authority emiratí.',
            },
          },

          { h2: 'El año en el que te vas', id: 'ejercicio' },
          { p: 'España no fracciona el período impositivo. Eres residente todo el año natural o ninguno, así que el ejercicio de la mudanza será un año entero de residente o un año entero de no residente. No hay proporción.' },
          { p: 'Esa única regla ordena todo lo demás: cuándo vender, cuándo repartir un dividendo, cuándo cerrar una sociedad y cuándo coger el avión.' },
          {
            table: {
              head: ['Si ese año aún eres residente', 'Si ya eres no residente'],
              rows: [
                ['Tributas en IRPF por tu renta mundial', 'Solo por las rentas de fuente española (IRNR)'],
                ['Modelo 720 / 721 sobre bienes en el extranjero, si superas los límites', 'Sin modelo 720'],
                ['Patrimonio o solidaridad sobre el patrimonio mundial, cuando proceda', 'Solo por los bienes situados en España'],
                ['El régimen Beckham puede entrar en juego en algunos casos', 'No aplica'],
              ],
            },
          },

          { h2: 'Exit tax: a quién afecta de verdad', id: 'exit-tax' },
          { p: 'El impuesto de salida grava las plusvalías latentes de tus participaciones cuando dejas de ser residente. **No** le aplica a todo el mundo. A grandes rasgos, se activa si has sido residente en España al menos 10 de los últimos 15 períodos impositivos y además:' },
          {
            list: [
              'El valor de mercado de tus participaciones supera los 4 millones de euros, o',
              'Tienes más de un 25 % de una entidad y esa participación vale más de 1 millón de euros.',
            ],
          },
          { p: 'Existen reglas de aplazamiento para traslados dentro de la UE y el Espacio Económico Europeo, y reglas propias para desplazamientos temporales. Dubái no es ninguno de los dos, así que si estás por encima de los umbrales esto hay que ponerlo sobre la mesa mucho antes de irte, no después.' },

          { h2: 'Qué presentas en España después de irte', id: 'despues' },
          { p: 'Cambiar de residencia no siempre significa cortar todos los lazos con España. Si mantienes inmuebles, participaciones o cualquier renta de fuente española, pasas de IRPF a **IRNR**, con sus propios modelos y plazos:' },
          {
            list: [
              ['Modelo 030', 'Para comunicar el cambio de domicilio y tu nueva situación.'],
              ['Modelo 210', 'IRNR por rentas de fuente española: alquileres, ganancias patrimoniales e imputación de rentas del inmueble que conservas.'],
              ['Última renta como residente', 'El IRPF del último ejercicio completo en el que fuiste residente.'],
              ['Impuesto sobre el Patrimonio', 'Por obligación real, si mantienes bienes en España por encima de los límites.'],
            ],
          },
          { p: 'Si conservas una sociedad española y la diriges desde Dubái, aparece otra cuestión: dónde se dirige realmente esa sociedad. Lo explicamos en la guía sobre [la empresa de Dubái que acaba tributando en España](/es/blog/empresa-dubai-tributa-en-espana).' },

          { h2: 'Hacerte residente fiscal en Emiratos', id: 'emiratos' },
          { p: 'La vía habitual pasa por una sociedad y un visado de residencia. De esa parte también nos ocupamos nosotros (ver [crear una empresa en Dubái](/es/servicios/crear-empresa-en-dubai)), pero a efectos de residencia lo que cuenta es lo que viene después del visado:' },
          {
            list: [
              ['Emirates ID y visado de residencia', 'La base legal para vivir allí, normalmente a través de tu propia sociedad o de un empleador.'],
              ['Una vivienda real', 'Contrato de alquiler o propiedad a tu nombre, con los suministros también a tu nombre.'],
              ['Presencia física', 'Días efectivamente pasados en el país, con los registros de entradas y salidas que lo respalden.'],
              ['Certificado de residencia fiscal', 'Lo emite la Federal Tax Authority; la versión a efectos del convenio es la que le enseñas a España.'],
            ],
          },
          { p: 'A eso se suman las obligaciones emiratíes de la sociedad: registro y declaración de Corporate Tax, IVA si superas el umbral y contabilidad en condiciones. De eso hablamos en [gestión fiscal en Dubái](/es/servicios/gestion-fiscal-en-dubai).' },

          { h2: 'El expediente de prueba', id: 'pruebas' },
          { p: 'Una comprobación de residencia suele llegar tres o cuatro años después del traslado, cuando ya nadie recuerda dónde está nada. El expediente que conviene tener montado:' },
          {
            list: [
              'Certificados de residencia fiscal emiratíes de cada año.',
              'Visado de residencia, Emirates ID y contrato de alquiler o escritura.',
              'Tarjetas de embarque y sellos del pasaporte del año de la mudanza y de los siguientes.',
              'Facturas de suministros, extractos bancarios emiratíes y gasto con tarjeta local.',
              'Prueba de que trabajas desde Emiratos: contratos, facturas, oficina o coworking.',
              'Modelo 030 y tu última declaración como residente.',
            ],
          },
          {
            callout: {
              title: 'El error que más caro sale',
              text: 'Mudarse primero y preguntar después. Casi todo lo de esta página se decide con la fecha de salida y con lo que hagas en los meses anteriores. Una vez cerrado el ejercicio, las opciones se reducen.',
            },
          },
        ],
      },
      mistakes: [
        { title: 'Creer que con el visado basta', text: 'El visado acredita que puedes vivir allí. No acredita que hayas dejado de ser residente fiscal en España.' },
        { title: 'Irse a mitad de año sin planificarlo', text: 'España no parte el ejercicio, así que la fecha de salida decide cómo tributa todo ese año.' },
        { title: 'Dejarlo todo en España', text: 'Sociedad, clientes, vivienda y familia aquí mientras vives en Dubái es la forma más clara de que te sigan considerando residente.' },
        { title: 'No pedir el certificado emiratí', text: 'Sin él es muy difícil acudir al convenio o neutralizar las ausencias esporádicas.' },
      ],
      faq: [
        { q: '¿Basta con pasar menos de 183 días en España?', a: 'No. Los días son solo uno de los criterios. Si el núcleo principal de tus intereses económicos sigue en España, pueden considerarte residente aunque pases aquí muy pocos días.' },
        { q: '¿Desde cuándo surte efecto el cambio?', a: 'España no fracciona el período impositivo: eres residente todo el año natural o ninguno. Por eso importan tanto la fecha de salida y el ejercicio que elijas.' },
        { q: '¿Me aplica el exit tax?', a: 'Solo si has sido residente al menos 10 de los últimos 15 ejercicios y tus participaciones superan los umbrales legales: a grandes rasgos, 4 millones de euros, o 1 millón con una participación superior al 25 %. Lo comprobamos antes de que te vayas.' },
        { q: '¿Puedo mantener mi sociedad en España?', a: 'Puedes, pero entonces hay que mirar desde dónde se dirige de verdad y cómo tributan los dividendos cuando ya eres no residente. Forma parte del análisis.' },
        { q: '¿Cuánto se tarda en tener el certificado de residencia fiscal emiratí?', a: 'Primero necesitas el visado, una vivienda y presencia real en el país. El certificado se pide después a la Federal Tax Authority, normalmente cuando puedes acreditar días suficientes en Emiratos.' },
        { q: 'Ya me mudé y no planifiqué nada de esto, ¿podéis ayudarme?', a: 'Sí. Revisamos lo que hiciste, vemos cuánto riesgo tienes y montamos las pruebas y las declaraciones que falten. Es más difícil que planificarlo antes, pero tiene arreglo.' },
      ],
      cta: {
        title: { lead: 'Cuéntanos cuándo', accent: 'piensas irte.' },
        text: 'Con tus fechas, tu negocio y tu patrimonio te decimos en qué ejercicio funciona el cambio, qué cuesta y qué tienes que preparar.',
      },
    },
  },

  beckham: {
    en: {
      name: 'Beckham Law',
      meta: {
        title: 'Beckham Law in Spain: Impatriate Tax Regime | Evolve Tax',
        description:
          'Moving to Spain? We check whether you qualify for the Beckham Law, file the application on time and handle your returns under the impatriate regime.',
      },
      hero: {
        eyebrow: 'Service · Beckham Law (Spanish impatriate regime)',
        title: { lead: 'Beckham Law:', accent: 'move to Spain with a special tax regime.' },
        intro:
          'The special regime for people who move to Spain to work — known as the Beckham Law — lets you pay a flat rate on your employment income and keep most income from outside Spain out of Spanish tax, for up to six years. We check whether you qualify, file the application within the deadline and handle your returns under the regime.',
        facts: [
          { label: 'Employment income', value: '24% up to €600,000' },
          { label: 'Duration', value: 'Up to 6 tax years' },
          { label: 'Key requirement', value: 'Not resident in the last 5 years' },
          { label: 'Application', value: 'Form 149 within 6 months' },
        ],
      },
      included: {
        title: { lead: 'What we', accent: 'handle.' },
        intro: 'The regime is worth it, but the requirements and the deadline leave no room for mistakes.',
        items: [
          { title: 'Eligibility check', text: 'We analyse your move, your contract or role and your tax history to confirm whether you qualify.' },
          { title: 'Planning your arrival', text: 'Whether you come as an employee, remote worker, company director or entrepreneur, we review how to set it up so it fits the regime.' },
          { title: 'Application (Form 149)', text: 'We prepare and file the application within six months of the start of your activity in Spain.' },
          { title: 'Family members', text: 'We review whether your spouse and children can also benefit from the regime.' },
          { title: 'Annual return (Form 151)', text: 'Every year we prepare your return under the regime instead of the standard income tax return.' },
          { title: 'Leaving the regime', text: 'We plan what happens when the regime ends or if you stop meeting the requirements.' },
        ],
      },
      forWho: [
        'Professionals moving to Spain with an employment contract, including remote work for a foreign company.',
        'Founders and directors who move to Spain to run a company.',
        'Entrepreneurs with an innovative project who are relocating to Spain.',
        'Families relocating together who want to know the tax cost of the move.',
      ],
      process: [
        { title: 'Eligibility review', text: 'We confirm whether you meet the requirements, ideally before you arrive.' },
        { title: 'Preparing the move', text: 'We review your contract, role or project and the timing of your arrival.' },
        { title: 'Application', text: 'We file Form 149 within the six-month deadline.' },
        { title: 'Annual returns', text: 'We prepare your returns under the regime for every year it applies.' },
      ],
      guide: {
        title: { lead: 'What you should know', accent: 'about the Beckham Law.' },
        intro: 'The regime was widened in 2023, but it still has strict conditions.',
        blocks: [
          {
            heading: 'How the regime works',
            paragraphs: [
              'If you qualify, you become tax resident in Spain but pay personal income tax under non-resident rules: employment income is taxed at 24% up to €600,000 and 47% above that, and most income obtained outside Spain is not taxed in Spain.',
              'The regime applies in the year you become resident and the following five tax years. Instead of the standard return, you file Form 151.',
            ],
          },
          {
            heading: 'Who can apply',
            paragraphs: [
              'You must not have been tax resident in Spain in the previous five years, and the move must be due to one of the reasons set out in the law: an employment contract (including remote work), becoming a director of a company, carrying out an entrepreneurial activity considered innovative, or working as a highly qualified professional for startups or R&D activities.',
              'A standard freelance activity does not qualify on its own. Your spouse and children under 25 can also apply if they meet certain conditions.',
            ],
          },
          {
            heading: 'The deadline is not negotiable',
            paragraphs: [
              'The application is filed with Form 149 within six months of the start of your activity in Spain, usually counted from your registration with Spanish Social Security or the equivalent documentation.',
              'If you miss the deadline you can no longer apply for the regime for that move, so it’s worth planning before you arrive.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Applying after the deadline', text: 'The six months run from the start of your activity; once they have passed, the regime is no longer available.' },
        { title: 'Assuming freelancers qualify', text: 'Self-employment only fits in specific cases, such as an innovative entrepreneurial activity.' },
        { title: 'Ignoring the five-year rule', text: 'Having been tax resident in Spain in any of the previous five years rules out the regime.' },
        { title: 'Not planning the end of the regime', text: 'When it ends you are taxed on your worldwide income, so the transition should be prepared in advance.' },
      ],
      faq: [
        { q: 'Can digital nomads apply for the Beckham Law?', a: 'Yes, in many cases. People who move to Spain to work remotely for a company under an employment contract can qualify, as long as they meet the rest of the requirements.' },
        { q: 'I’m self-employed. Can I apply?', a: 'Only in specific cases: for example, if your activity is recognised as an innovative entrepreneurial activity, or if you are a highly qualified professional working for startups or in R&D.' },
        { q: 'How long does the regime last?', a: 'The year you become tax resident in Spain and the following five tax years, as long as you keep meeting the requirements.' },
        { q: 'Is my income from abroad taxed?', a: 'Under the regime, most income obtained outside Spain is not taxed in Spain. Employment income is treated as obtained in Spain and taxed at 24% up to €600,000.' },
        { q: 'Can my family benefit too?', a: 'Your spouse and children under 25 can also apply for the regime if they move with you and meet certain conditions.' },
      ],
      cta: {
        title: { lead: 'Moving', accent: 'to Spain?' },
        text: 'Tell us about your move and we’ll tell you whether the Beckham Law could apply to you.',
      },
    },
    es: {
      name: 'Régimen Beckham',
      meta: {
        title: 'Régimen Beckham: asesoría para impatriados | Evolve Tax',
        description:
          '¿Te mudas a España? Comprobamos si puedes acogerte al régimen Beckham, presentamos la solicitud en plazo y llevamos tus declaraciones como impatriado.',
      },
      hero: {
        eyebrow: 'Servicio · Régimen Beckham (impatriados)',
        title: { lead: 'Régimen Beckham:', accent: 'múdate a España con un régimen fiscal especial.' },
        intro:
          'El régimen especial para trabajadores desplazados a España, conocido como Ley Beckham, permite tributar a un tipo fijo por tus rendimientos del trabajo y dejar fuera de la tributación española la mayoría de rentas obtenidas fuera, durante hasta seis años. Comprobamos si cumples los requisitos, presentamos la solicitud en plazo y llevamos tus declaraciones dentro del régimen.',
        facts: [
          { label: 'Rendimientos del trabajo', value: '24 % hasta 600.000 €' },
          { label: 'Duración', value: 'Hasta 6 ejercicios' },
          { label: 'Requisito clave', value: 'No residente los últimos 5 años' },
          { label: 'Solicitud', value: 'Modelo 149 en 6 meses' },
        ],
      },
      included: {
        title: { lead: 'Qué', accent: 'hacemos.' },
        intro: 'El régimen compensa, pero los requisitos y el plazo no dejan margen de error.',
        items: [
          { title: 'Análisis de requisitos', text: 'Analizamos tu traslado, tu contrato o cargo y tu historial fiscal para confirmar si puedes acogerte.' },
          { title: 'Planificación de tu llegada', text: 'Si vienes como trabajador, en teletrabajo, como administrador o como emprendedor, revisamos cómo plantearlo para que encaje en el régimen.' },
          { title: 'Solicitud (modelo 149)', text: 'Preparamos y presentamos la solicitud dentro de los seis meses desde el inicio de tu actividad en España.' },
          { title: 'Familiares', text: 'Revisamos si tu cónyuge y tus hijos también pueden acogerse al régimen.' },
          { title: 'Declaración anual (modelo 151)', text: 'Cada año preparamos tu declaración dentro del régimen en lugar de la Renta ordinaria.' },
          { title: 'Salida del régimen', text: 'Planificamos qué ocurre cuando termina el régimen o si dejas de cumplir los requisitos.' },
        ],
      },
      forWho: [
        'Profesionales que se trasladan a España con contrato laboral, incluido el teletrabajo para una empresa extranjera.',
        'Fundadores y administradores que se mudan a España para dirigir una sociedad.',
        'Emprendedores con un proyecto innovador que se trasladan a España.',
        'Familias que se mudan juntas y quieren saber el coste fiscal del traslado.',
      ],
      process: [
        { title: 'Revisión de requisitos', text: 'Confirmamos si cumples los requisitos, idealmente antes de llegar.' },
        { title: 'Preparación del traslado', text: 'Revisamos tu contrato, cargo o proyecto y el calendario de tu llegada.' },
        { title: 'Solicitud', text: 'Presentamos el modelo 149 dentro del plazo de seis meses.' },
        { title: 'Declaraciones anuales', text: 'Preparamos tus declaraciones dentro del régimen cada año que se aplique.' },
      ],
      guide: {
        title: { lead: 'Lo que debes saber', accent: 'sobre el régimen Beckham.' },
        intro: 'El régimen se amplió en 2023, pero sigue teniendo condiciones estrictas.',
        blocks: [
          {
            heading: 'Cómo funciona el régimen',
            paragraphs: [
              'Si te acoges, pasas a ser residente fiscal en España pero tributas en el IRPF con las reglas de los no residentes: los rendimientos del trabajo tributan al 24 % hasta 600.000 € y al 47 % a partir de ahí, y la mayoría de rentas obtenidas fuera de España no tributan en España.',
              'El régimen se aplica en el año en que adquieres la residencia y en los cinco siguientes. En lugar de la Renta ordinaria, presentas el modelo 151.',
            ],
          },
          {
            heading: 'Quién puede acogerse',
            paragraphs: [
              'No debes haber sido residente fiscal en España en los cinco años anteriores, y el traslado debe deberse a alguno de los motivos que recoge la ley: un contrato de trabajo (incluido el teletrabajo), adquirir la condición de administrador de una sociedad, desarrollar una actividad emprendedora calificada como innovadora o trabajar como profesional altamente cualificado para startups o actividades de I+D.',
              'Una actividad como autónomo, por sí sola, no da acceso al régimen. Tu cónyuge y tus hijos menores de 25 años también pueden acogerse si cumplen determinadas condiciones.',
            ],
          },
          {
            heading: 'El plazo no se negocia',
            paragraphs: [
              'La solicitud se presenta con el modelo 149 dentro de los seis meses desde el inicio de tu actividad en España, que normalmente se cuenta desde el alta en la Seguridad Social española o la documentación equivalente.',
              'Si se pasa el plazo, ya no puedes acogerte al régimen por ese traslado, así que conviene planificarlo antes de llegar.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Solicitarlo fuera de plazo', text: 'Los seis meses cuentan desde el inicio de la actividad; una vez pasados, el régimen deja de estar disponible.' },
        { title: 'Dar por hecho que vale para autónomos', text: 'El trabajo por cuenta propia solo encaja en casos concretos, como una actividad emprendedora innovadora.' },
        { title: 'Olvidar la regla de los cinco años', text: 'Haber sido residente fiscal en España en alguno de los cinco años anteriores impide acogerse.' },
        { title: 'No planificar el final del régimen', text: 'Cuando termina, pasas a tributar por tu renta mundial, así que la transición conviene prepararla con tiempo.' },
      ],
      faq: [
        { q: '¿Pueden los nómadas digitales acogerse al régimen Beckham?', a: 'Sí, en muchos casos. Quien se traslada a España para teletrabajar para una empresa con contrato laboral puede acogerse, siempre que cumpla el resto de requisitos.' },
        { q: 'Soy autónomo. ¿Puedo acogerme?', a: 'Solo en casos concretos: por ejemplo, si tu actividad está reconocida como emprendedora e innovadora, o si eres un profesional altamente cualificado que trabaja para startups o en I+D.' },
        { q: '¿Cuánto dura el régimen?', a: 'El año en que adquieres la residencia fiscal en España y los cinco siguientes, siempre que sigas cumpliendo los requisitos.' },
        { q: '¿Tributan mis ingresos del extranjero?', a: 'Dentro del régimen, la mayoría de rentas obtenidas fuera de España no tributan en España. Los rendimientos del trabajo se consideran obtenidos en España y tributan al 24 % hasta 600.000 €.' },
        { q: '¿Puede acogerse también mi familia?', a: 'Tu cónyuge y tus hijos menores de 25 años también pueden acogerse si se desplazan contigo y cumplen determinadas condiciones.' },
      ],
      cta: {
        title: { lead: '¿Te mudas', accent: 'a España?' },
        text: 'Cuéntanos tu traslado y te decimos si el régimen Beckham podría aplicarse en tu caso.',
      },
    },
  },
};
