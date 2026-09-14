// Contenido de las landings de servicio (SEO), en inglés y español.
// Cada servicio tiene su propia URL en cada idioma (ver routes.ts).

import type { Lang } from './i18n';
import type { ServiceKey } from './routes';

type Accent = { lead: string; accent: string };

export type ServiceContent = {
  name: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: Accent; intro: string; facts: { label: string; value: string }[] };
  included: { title: Accent; intro: string; items: { title: string; text: string }[] };
  forWho: string[];
  process: { title: string; text: string }[];
  guide: { title: Accent; intro: string; blocks: { heading: string; paragraphs: string[] }[] };
  mistakes: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  cta: { title: Accent; text: string };
};

// Fecha de última revisión que se muestra en cada landing (y en los datos estructurados).
export const servicesUpdated = { iso: '2026-09-14', en: 'September 2026', es: 'septiembre de 2026' };

export const serviceUi = {
  en: {
    home: 'Home',
    services: 'Services',
    primary: 'Tell us about your case',
    secondary: 'See what’s included',
    includedEyebrow: 'What’s included',
    forWhoEyebrow: 'Who it’s for',
    forWhoTitle: { lead: 'Is this', accent: 'for you?' },
    processEyebrow: 'How it works',
    processTitle: { lead: 'Step by', accent: 'step.' },
    guideEyebrow: 'Guide',
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
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    primary: 'Cuéntanos tu caso',
    secondary: 'Ver qué incluye',
    includedEyebrow: 'Qué incluye',
    forWhoEyebrow: 'Para quién es',
    forWhoTitle: { lead: '¿Es para', accent: 'ti?' },
    processEyebrow: 'Cómo funciona',
    processTitle: { lead: 'Paso a', accent: 'paso.' },
    guideEyebrow: 'Guía',
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
        title: 'International Tax Structuring for Digital Businesses | Evolve Tax',
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
        title: 'Estructuración fiscal internacional para negocios digitales | Evolve Tax',
        description:
          'Estructuración fiscal internacional para emprendedores y negocios digitales: residencia fiscal, estructura societaria y comparativa de jurisdicciones con números reales.',
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
      name: 'Company setup in Dubai',
      meta: {
        title: 'Company Setup in Dubai for Entrepreneurs | Evolve Tax',
        description:
          'Set up your company in a Dubai free zone in around 14 days: licence, residence visa and bank account, with the tax structure and compliance planned from day one.',
      },
      hero: {
        eyebrow: 'Service · Company setup in Dubai',
        title: { lead: 'Set up your company in Dubai,', accent: 'the right way.' },
        intro:
          'We incorporate your company in the free zone that best fits your activity and handle the whole process: licence, residence visa and bank account. And unlike a simple formation agent, we look at the tax side from day one, so the structure makes sense both in the UAE and in the country you come from.',
        facts: [
          { label: 'Setup time', value: '≈ 14 days' },
          { label: 'Free zones', value: 'Any, based on your activity' },
          { label: 'Includes', value: 'Licence · Visa · Bank' },
          { label: 'Afterwards', value: 'Accounting & taxes' },
        ],
      },
      included: {
        title: { lead: 'What the setup', accent: 'includes.' },
        intro: 'Everything you need for your company to operate, not just the licence.',
        items: [
          { title: 'Free zone and activity choice', text: 'We help you choose the free zone and licensed activities that match what you actually do, to avoid restrictions later.' },
          { title: 'Company incorporation', text: 'Name reservation, application, documentation and incorporation until the licence is issued.' },
          { title: 'Residence visa and Emirates ID', text: 'If you’re going to live in the UAE, we guide you through the residence visa linked to your company and the Emirates ID.' },
          { title: 'Corporate bank account', text: 'We prepare your file and support you through account opening, one of the steps where most delays happen.' },
          { title: 'Tax registrations', text: 'Corporate Tax registration and, where applicable, VAT registration, so you start compliant.' },
          { title: 'Tax structure check', text: 'We review how the company fits with your personal tax situation before you incorporate.' },
        ],
      },
      forWho: [
        'Digital entrepreneurs who want to run their business from the UAE.',
        'Freelancers and consultants with international clients who are moving to Dubai.',
        'Founders who want a UAE company as part of a well-designed international structure.',
        'Anyone who wants the whole process handled end to end.',
      ],
      process: [
        { title: 'Analysis and free zone', text: 'We review your activity and situation and choose the free zone and licence that fit.' },
        { title: 'Documentation', text: 'We tell you exactly what’s needed and prepare the application with you.' },
        { title: 'Incorporation', text: 'We file the application and follow it up until the licence is issued — around 14 days in total.' },
        { title: 'Visa, bank and registrations', text: 'Residence visa, bank account and tax registrations, so the company is ready to operate.' },
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
            heading: 'A company in Dubai doesn’t change your personal tax residency',
            paragraphs: [
              'Having a UAE company doesn’t make you non-resident where you live today. If you still live in Spain, for example, or the company is effectively managed from Spain, both you and the company can be taxed there.',
              'That’s why we check your personal tax residency before incorporating, not after.',
            ],
          },
        ],
      },
      mistakes: [
        { title: 'Choosing the free zone on price alone', text: 'The cheapest licence may not cover your activity or may limit how you can operate.' },
        { title: 'Underestimating the bank account', text: 'Opening the account can take longer than the incorporation itself if the file isn’t well prepared.' },
        { title: 'Forgetting about Corporate Tax', text: 'Many free zone companies don’t register or keep accounts because they assume they pay nothing, and end up with penalties.' },
        { title: 'Running it from another country', text: 'Setting up in Dubai while you keep living in and managing the business from Spain can make the company taxable in Spain.' },
      ],
      faq: [
        { q: 'How long does it take to set up a company in Dubai?', a: 'Incorporation usually takes around 14 days once we have the documentation. The residence visa and bank account come afterwards and depend on each case.' },
        { q: 'Which free zone is best?', a: 'There isn’t one best free zone for everyone. Almost any can work; we recommend one based on your activity, your budget and whether you need visas.' },
        { q: 'Do I need to live in Dubai to have a company there?', a: 'No, but if you don’t live there, where the company is managed from needs careful analysis, because it determines where the company pays tax.' },
        { q: 'Does a free zone company pay taxes?', a: 'Free zone companies are subject to Corporate Tax and must register and file returns. Depending on the type of income and whether the requirements are met, part of the income may be taxed at 0%.' },
        { q: 'Can you handle the accounting afterwards?', a: 'Yes. Once the company is set up we can take care of the bookkeeping, Corporate Tax and VAT.' },
      ],
      cta: {
        title: { lead: 'Ready to set up', accent: 'your company?' },
        text: 'Tell us what you do and we’ll tell you how we’d structure it and which free zone fits you.',
      },
    },
    es: {
      name: 'Incorporación de empresas en Dubái',
      meta: {
        title: 'Crear empresa en Dubái para emprendedores | Evolve Tax',
        description:
          'Crea tu empresa en una free zone de Dubái en unos 14 días: licencia, visado de residencia y cuenta bancaria, con la estructura fiscal y el cumplimiento pensados desde el primer día.',
      },
      hero: {
        eyebrow: 'Servicio · Incorporación de empresas en Dubái',
        title: { lead: 'Crea tu empresa en Dubái,', accent: 'bien hecha.' },
        intro:
          'Constituimos tu sociedad en la free zone que mejor encaja con tu actividad y nos encargamos de todo el proceso: licencia, visado de residencia y cuenta bancaria. Y a diferencia de un simple agente de constitución, miramos la parte fiscal desde el primer día, para que la estructura tenga sentido tanto en Emiratos como en el país del que vienes.',
        facts: [
          { label: 'Plazo de constitución', value: '≈ 14 días' },
          { label: 'Free zones', value: 'Cualquiera, según tu actividad' },
          { label: 'Incluye', value: 'Licencia · Visado · Banco' },
          { label: 'Después', value: 'Contabilidad e impuestos' },
        ],
      },
      included: {
        title: { lead: 'Qué incluye', accent: 'la constitución.' },
        intro: 'Todo lo que necesitas para que la empresa opere, no solo la licencia.',
        items: [
          { title: 'Elección de free zone y actividad', text: 'Te ayudamos a elegir la free zone y las actividades de la licencia que encajan con lo que haces de verdad, para evitar limitaciones después.' },
          { title: 'Constitución de la sociedad', text: 'Reserva de nombre, solicitud, documentación y constitución hasta que se emite la licencia.' },
          { title: 'Visado de residencia y Emirates ID', text: 'Si vas a vivir en Emiratos, te acompañamos en el visado de residencia vinculado a tu empresa y en el Emirates ID.' },
          { title: 'Cuenta bancaria de empresa', text: 'Preparamos tu expediente y te acompañamos en la apertura de la cuenta, uno de los pasos donde más retrasos hay.' },
          { title: 'Altas fiscales', text: 'Registro en el Corporate Tax y, si corresponde, en el IVA, para que empieces cumpliendo.' },
          { title: 'Revisión de la estructura fiscal', text: 'Revisamos cómo encaja la sociedad con tu situación fiscal personal antes de constituir.' },
        ],
      },
      forWho: [
        'Emprendedores digitales que quieren operar su negocio desde Emiratos.',
        'Freelancers y consultores con clientes internacionales que se mudan a Dubái.',
        'Fundadores que quieren una sociedad emiratí dentro de una estructura internacional bien diseñada.',
        'Quien quiere que alguien se encargue de todo el proceso de principio a fin.',
      ],
      process: [
        { title: 'Análisis y free zone', text: 'Revisamos tu actividad y tu situación y elegimos la free zone y la licencia que encajan.' },
        { title: 'Documentación', text: 'Te decimos exactamente qué hace falta y preparamos la solicitud contigo.' },
        { title: 'Constitución', text: 'Presentamos la solicitud y hacemos el seguimiento hasta que se emite la licencia: unos 14 días en total.' },
        { title: 'Visado, banco y altas', text: 'Visado de residencia, cuenta bancaria y registros fiscales, para que la empresa esté lista para operar.' },
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
      mistakes: [
        { title: 'Elegir la free zone solo por precio', text: 'La licencia más barata puede no cubrir tu actividad o limitar cómo puedes operar.' },
        { title: 'Subestimar la cuenta bancaria', text: 'La apertura de la cuenta puede tardar más que la propia constitución si el expediente no está bien preparado.' },
        { title: 'Olvidarse del Corporate Tax', text: 'Muchas sociedades de free zone no se registran ni llevan contabilidad porque creen que no pagan nada, y acaban con sanciones.' },
        { title: 'Dirigirla desde otro país', text: 'Montar en Dubái mientras sigues viviendo y gestionando el negocio desde España puede hacer que la sociedad tribute en España.' },
      ],
      faq: [
        { q: '¿Cuánto se tarda en crear una empresa en Dubái?', a: 'La constitución suele tardar unos 14 días desde que tenemos la documentación. El visado de residencia y la cuenta bancaria vienen después y dependen de cada caso.' },
        { q: '¿Qué free zone es la mejor?', a: 'No hay una free zone mejor para todo el mundo. Prácticamente cualquiera puede servir; te recomendamos una según tu actividad, tu presupuesto y si necesitas visados.' },
        { q: '¿Tengo que vivir en Dubái para tener allí una empresa?', a: 'No, pero si no vives allí hay que analizar bien desde dónde se dirige la sociedad, porque eso determina dónde tributa.' },
        { q: '¿Se pagan impuestos con una sociedad de free zone?', a: 'Las sociedades de free zone están sujetas al Corporate Tax y deben registrarse y presentar declaración. Según el tipo de rentas y si se cumplen los requisitos, parte de los ingresos puede tributar al 0 %.' },
        { q: '¿Podéis llevar después la contabilidad?', a: 'Sí. Una vez constituida la empresa podemos encargarnos de la contabilidad, el Corporate Tax y el IVA.' },
      ],
      cta: {
        title: { lead: '¿Montamos', accent: 'tu empresa?' },
        text: 'Cuéntanos a qué te dedicas y te decimos cómo lo estructuraríamos y qué free zone encaja contigo.',
      },
    },
  },

  /* ----------------------------------------------------------------
     Gestión fiscal en Dubái
     ---------------------------------------------------------------- */
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
        title: 'Gestión fiscal en Dubái: contabilidad, Corporate Tax e IVA | Evolve Tax',
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
  spainTax: {
    en: {
      name: 'Tax management in Spain',
      meta: {
        title: 'Tax Advisor in Spain for Digital Entrepreneurs | Evolve Tax',
        description:
          'Tax advice and management in Spain for freelancers, companies and digital businesses: quarterly and annual returns, international invoicing, Form 720 and tax authority requests.',
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
        title: 'Asesoría fiscal en España para negocios digitales | Evolve Tax',
        description:
          'Asesoría y gestión fiscal en España para autónomos, sociedades y negocios digitales: declaraciones trimestrales y anuales, facturación internacional, modelo 720 y requerimientos de Hacienda.',
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
          'Leaving Spain for Dubai or another country, or moving to Spain? We analyse your tax residency, tax treaties, exit tax and the Beckham Law so the change holds up.',
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
        title: 'Cambio de residencia fiscal: salir o llegar a España | Evolve Tax',
        description:
          '¿Te vas de España a Dubái u otro país, o te mudas a España? Analizamos tu residencia fiscal, los convenios, el exit tax y el régimen Beckham para que el cambio aguante.',
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
        title: 'Régimen Beckham: tributar como impatriado en España | Evolve Tax',
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
