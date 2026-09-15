// Todos los textos de la web, en inglés (base, en "/") y español (en "/es").
// Para cambiar un texto, edítalo aquí en los dos idiomas.

import type { ServiceKey } from './routes';

export type Lang = 'en' | 'es';

export const locales: Lang[] = ['en', 'es'];

export const homePath: Record<Lang, string> = { en: '/', es: '/es' };

type Accent = { lead: string; accent: string };

export type NavItem = { name: string; id?: string; href?: string };

const en = {
  meta: {
    title: 'International Tax Advisory for Digital Entrepreneurs | Evolve Tax',
    description:
      'International tax advisory for digital entrepreneurs: tax structuring, company setup in Dubai, tax management in Spain and the UAE, residency changes and the Beckham Law.',
    ogAlt: 'Evolve Tax — International tax advisory for digital businesses',
    locale: 'en_GB',
  },
  nav: {
    items: [
      { name: 'About', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Process', id: 'process' },
      { name: 'FAQ', id: 'faq' },
      { name: 'Blog', href: '/blog' },
    ] as NavItem[],
    cta: 'Book diagnosis →',
    home: 'Evolve Tax — home',
    open: 'Open menu',
    close: 'Close menu',
    switchLabel: 'Versión en español',
  },
  hero: {
    eyebrow: 'International tax advisory · Digital businesses',
    title: { lead: 'Your business is already international.', accent: 'Your taxes should be too.' } as Accent,
    text: 'Tax advice for digital entrepreneurs and online businesses: international structuring, company setup in Dubai, tax management in Spain and the UAE, and changes of tax residency — from the initial strategy to the returns every quarter.',
    primary: 'Book your initial diagnosis',
    secondary: 'Tell us about your case',
    bullets: ['8+ years in tax advisory', 'Spain, the UAE and beyond', 'Strategy, setup and ongoing compliance'],
    card: {
      label: 'Your structure',
      title: 'in order.',
      rows: [
        { label: 'Corporate Tax · UAE', detail: 'Annual return', status: 'Filed' },
        { label: 'VAT · UAE', detail: 'Quarterly', status: 'Filed' },
        { label: 'Income tax · Spain', detail: 'Annual return', status: 'Filed' },
        { label: 'Tax residency', detail: 'Change of country', status: 'Reviewed' },
      ],
      note: { lead: 'We set it up', accent: 'and then we run it.' } as Accent,
    },
  },
  about: {
    eyebrow: 'About us',
    title: { lead: 'A small firm,', accent: 'on purpose.' } as Accent,
    paragraphs: [
      'Evolve Tax was born from almost a decade in tax advisory, across consulting and law firms in Spain and Dubai. There we saw that the traditional model doesn’t fit people who sell online, work with clients in several countries and move fast.',
      'So we work differently: direct contact, plain language and structures built to last, not just to get by.',
    ],
    pillars: [
      { title: 'No jargon', text: 'We explain what matters for your business in plain words.' },
      { title: 'Strategy, not paperwork', text: 'We don’t just fill in forms: we design structures that grow with you.' },
      { title: 'At your pace', text: 'No endless meetings or unnecessary bureaucracy. Clear, fast answers.' },
    ],
    photoAlt: 'Rocío Falagán, founder of Evolve Tax',
    role: 'Founder',
  },
  audience: {
    eyebrow: 'Who we work with',
    title: { lead: 'For those already playing', accent: 'away from home.' } as Accent,
    text: 'Digital entrepreneurs, online businesses and professionals whose taxes no longer fit in a single country.',
    items: [
      { title: 'Digital entrepreneurs', text: 'SaaS, e-commerce, agencies, info-products and content creators with income from several countries.' },
      { title: 'International freelancers', text: 'Consultants and professionals invoicing clients abroad who want to get it right from day one.' },
      { title: 'Changing country', text: 'Leaving Spain for Dubai or elsewhere, or moving to Spain — with the numbers done before you move.' },
      { title: 'Companies in Spain and the UAE', text: 'Businesses that need their accounting and taxes up to date, with no surprises.' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: { lead: 'What we do,', accent: 'exactly.' } as Accent,
    text: 'Six services you can hire separately or combine, depending on where you are and where you’re going.',
    items: [
      { key: 'structuring' as ServiceKey, title: 'International tax structuring', text: 'Before you incorporate anything or move anywhere, you need a strategy. We analyse your situation and compare options with real numbers.', tags: ['Tax residency', 'Company structure', 'Jurisdictions'] },
      { key: 'dubai' as ServiceKey, title: 'Company setup in Dubai', text: 'Incorporation in any free zone in around 14 days, with residence visa, bank account and tax registrations.', tags: ['Free zone', 'Visa', 'Banking'] },
      { key: 'uaeTax' as ServiceKey, title: 'Tax management in Dubai', text: 'Bookkeeping, Corporate Tax and VAT for your company in the UAE, with every deadline under control.', tags: ['Bookkeeping', 'Corporate Tax', 'VAT'] },
      { key: 'spainTax' as ServiceKey, title: 'Tax management in Spain', text: 'Tax advice and returns in Spain for freelancers and companies, with international invoicing in mind.', tags: ['Freelancers & companies', 'International VAT', 'Form 720'] },
      { key: 'residency' as ServiceKey, title: 'Change of tax residency', text: 'Leaving Spain or moving to it: we plan the change with you and help you prove it.', tags: ['183 days', 'Tax treaties', 'Exit tax'] },
      { key: 'beckham' as ServiceKey, title: 'Beckham Law', text: 'The special tax regime for people moving to Spain: eligibility, application and annual returns.', tags: ['24% flat rate', 'Form 149', 'Up to 6 years'] },
    ],
    learnMore: 'Learn more',
    oneOff: { lead: 'Just need to review a specific situation?', link: 'Start with an initial diagnosis.' },
    band: { lead: 'Most firms set up your structure and disappear.', accent: 'We stay.' } as Accent,
    bandCta: 'Book your initial diagnosis',
  },
  process: {
    eyebrow: 'Process',
    title: { lead: 'How we', accent: 'work.' } as Accent,
    text: 'Four steps, no surprises. You always know where your structure stands.',
    steps: [
      { title: 'Initial diagnosis', text: 'In a one-hour call you tell us your situation and we review it together.' },
      { title: 'Proposal', text: 'If you need us to go further, we send you a proposal with a clear scope and fees.' },
      { title: 'Implementation', text: 'We put the structure in place: company, residency, bank accounts and accounting system.' },
      { title: 'Ongoing support', text: 'Bookkeeping, taxes and periodic reviews so your structure keeps working as you grow.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: { lead: 'What people', accent: 'ask us.' } as Accent,
    textLead: 'Can’t find your question?',
    textLink: 'Write to us',
    items: [
      {
        q: 'Is this legal?',
        a: 'Yes. Tax optimisation means choosing, within the law, the structure that best fits your reality. We only work with structures you can explain and defend, with real substance behind them.',
      },
      {
        q: 'Is opening a company in Dubai enough to stop paying tax in Spain?',
        a: 'No. If you still live in Spain or the company is managed from there, it will usually be taxed in Spain. Your personal tax residency and the company’s are analysed before taking any step — that’s why we always start with a diagnosis.',
      },
      {
        q: 'How are you different from a traditional accountant?',
        a: 'An accountant files your taxes. We design the structure, set it up and then maintain it: strategy and day-to-day compliance in one place.',
      },
      {
        q: 'Do you only work with Dubai?',
        a: 'No. We advise on international taxation in general, with a special focus on Spain and the UAE: tax management in Spain, company setup and compliance in Dubai, residency changes and the Beckham Law for people moving to Spain.',
      },
      {
        q: 'Do you work with clients who don’t live in Spain?',
        a: 'Yes. We work remotely with clients in Spain, the UAE and other countries.',
      },
      {
        q: 'How much does it cost?',
        a: 'We start with an initial diagnosis: a one-hour call for 397 USD. If you then need us to go further, we send you a proposal with clear fees before any work starts.',
      },
      {
        q: 'What languages do you work in?',
        a: 'English and Spanish.',
      },
    ],
  },
  diagnosis: {
    eyebrow: 'Initial diagnosis',
    title: { lead: 'Start with a', accent: 'diagnosis.' } as Accent,
    text: 'Before designing anything, we need to understand your case. In a one-hour call you tell us your situation and we review it together: what you have, what risks there are and which options make sense for you.',
    includes: [
      'One-hour video call',
      'You tell us about your personal and business situation',
      'We review it together: risks, options and priorities',
      'You leave knowing your next steps',
    ],
    priceLabel: 'Initial diagnosis',
    priceNote: 'One-hour video call',
    button: 'Book your initial diagnosis',
    secure: 'Secure payment with Stripe',
    altLead: 'Not sure yet?',
    altLink: 'Write to us first',
  },
  contact: {
    eyebrow: 'Start here',
    title: { lead: 'Shall we talk about', accent: 'your case?' } as Accent,
    text: 'Prefer to write first? Tell us about your situation. We review every request personally and tell you how we can help.',
    bullets: [
      { title: 'Direct contact', text: 'You speak with the person handling your case, not a call centre.' },
      { title: 'Confidentiality', text: 'Your information is only used to analyse your situation.' },
      { title: 'Clear proposal', text: 'Scope and fees in writing before we start.' },
    ],
    booking: 'Book a call →',
    form: {
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@email.com',
      phone: 'Phone (optional)',
      phonePh: '+34 / +971…',
      residence: 'Where do you live now?',
      residencePh: 'Spain, Dubai, other…',
      need: 'What do you need?',
      needPh: 'Choose an option',
      needs: [
        'International tax structuring',
        'Setting up a company in Dubai',
        'Tax management in Dubai (accounting, Corporate Tax, VAT)',
        'Tax management in Spain',
        'Changing my tax residency',
        'Beckham Law',
        'A one-off consultation',
        'Other / not sure yet',
      ],
      comments: 'Tell us about your situation',
      commentsPh: 'What you do, where you invoice and what you want to achieve.',
      submit: 'Send request',
      sending: 'Sending…',
      error: 'Something went wrong. Please try again or email us at',
      successTitle: 'Received. Thank you.',
      successText: 'We read every request personally and will get back to you as soon as we’ve reviewed it.',
      privacy: 'Your details are only used to reply to your request. More information in our',
      privacyLink: 'Privacy Policy',
    },
  },
  footer: {
    blurb: 'International tax advisory for digital entrepreneurs and online businesses.',
    navigation: 'Navigation',
    legal: 'Legal',
    contact: 'Contact',
    rights: 'All rights reserved.',
    location: 'Dubai · United Arab Emirates',
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    title: 'Asesoría fiscal internacional para emprendedores digitales | Evolve Tax',
    description:
      'Asesoría fiscal internacional para emprendedores digitales: estructuración, empresas en Dubái, gestión fiscal en España y Emiratos, cambios de residencia y régimen Beckham.',
    ogAlt: 'Evolve Tax — Asesoría fiscal internacional para negocios digitales',
    locale: 'es_ES',
  },
  nav: {
    items: [
      { name: 'Quiénes somos', id: 'about' },
      { name: 'Servicios', id: 'services' },
      { name: 'Proceso', id: 'process' },
      { name: 'FAQ', id: 'faq' },
      { name: 'Blog', href: '/es/blog' },
    ],
    cta: 'Reservar diagnóstico →',
    home: 'Evolve Tax — inicio',
    open: 'Abrir menú',
    close: 'Cerrar menú',
    switchLabel: 'English version',
  },
  hero: {
    eyebrow: 'Asesoría fiscal internacional · Negocios digitales',
    title: { lead: 'Tu negocio ya es internacional.', accent: 'Tu fiscalidad, también.' },
    text: 'Asesoramiento fiscal para emprendedores y negocios digitales: estructuración internacional, empresas en Dubái, gestión fiscal en España y Emiratos y cambios de residencia fiscal, desde la estrategia inicial hasta las declaraciones de cada trimestre.',
    primary: 'Reserva tu diagnóstico inicial',
    secondary: 'Cuéntanos tu caso',
    bullets: ['+8 años en asesoría fiscal', 'España, Emiratos y más allá', 'Estrategia, implantación y día a día'],
    card: {
      label: 'Tu estructura',
      title: 'en orden.',
      rows: [
        { label: 'Corporate Tax · EAU', detail: 'Declaración anual', status: 'Presentado' },
        { label: 'IVA · EAU', detail: 'Trimestral', status: 'Presentado' },
        { label: 'IRPF · España', detail: 'Declaración anual', status: 'Presentada' },
        { label: 'Residencia fiscal', detail: 'Cambio de país', status: 'Revisada' },
      ],
      note: { lead: 'Te la montamos', accent: 'y después te la llevamos.' },
    },
  },
  about: {
    eyebrow: 'Quiénes somos',
    title: { lead: 'Una asesoría pequeña,', accent: 'a propósito.' },
    paragraphs: [
      'Evolve Tax nace de casi una década en asesoría fiscal, entre consultoras y despachos de España y Dubái. Allí vimos que el modelo tradicional no encaja con quien factura online, trabaja con clientes de varios países y se mueve rápido.',
      'Por eso trabajamos distinto: trato directo, lenguaje claro y estructuras pensadas para durar, no para salir del paso.',
    ],
    pillars: [
      { title: 'Sin jerga', text: 'Te explicamos lo que importa para tu negocio con palabras normales.' },
      { title: 'Estrategia, no trámites', text: 'No rellenamos formularios: diseñamos estructuras que crecen contigo.' },
      { title: 'A tu ritmo', text: 'Sin reuniones eternas ni burocracia innecesaria. Respuestas claras y rápidas.' },
    ],
    photoAlt: 'Rocío Falagán, fundadora de Evolve Tax',
    role: 'Fundadora',
  },
  audience: {
    eyebrow: 'Con quién trabajamos',
    title: { lead: 'Para quien ya juega', accent: 'fuera de casa.' },
    text: 'Emprendedores, negocios digitales y profesionales cuya fiscalidad ya no cabe en un solo país.',
    items: [
      { title: 'Emprendedores digitales', text: 'SaaS, e-commerce, agencias, infoproductos y creadores de contenido con ingresos en varios países.' },
      { title: 'Freelancers internacionales', text: 'Consultores y profesionales que facturan a clientes de fuera y quieren hacerlo bien desde el principio.' },
      { title: 'Quien cambia de país', text: 'Te vas de España a Dubái u otro destino, o te mudas a España, con los números hechos antes de mover nada.' },
      { title: 'Empresas en España y Emiratos', text: 'Sociedades que necesitan la contabilidad y los impuestos al día, sin sustos.' },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: { lead: 'Qué hacemos,', accent: 'exactamente.' },
    text: 'Seis servicios que puedes contratar por separado o combinar, según dónde estás y a dónde vas.',
    items: [
      { key: 'structuring', title: 'Estructuración fiscal internacional', text: 'Antes de constituir nada o mudarte a ningún sitio, necesitas una estrategia. Analizamos tu situación y comparamos opciones con números reales.', tags: ['Residencia fiscal', 'Estructura societaria', 'Jurisdicciones'] },
      { key: 'dubai', title: 'Incorporación de empresas en Dubái', text: 'Constitución en cualquier free zone en unos 14 días, con visado de residencia, cuenta bancaria y altas fiscales.', tags: ['Free zone', 'Visado', 'Banca'] },
      { key: 'uaeTax', title: 'Gestión fiscal en Dubái', text: 'Contabilidad, Corporate Tax e IVA de tu sociedad en Emiratos, con todos los plazos bajo control.', tags: ['Contabilidad', 'Corporate Tax', 'IVA'] },
      { key: 'spainTax', title: 'Gestión fiscal en España', text: 'Asesoría y declaraciones en España para autónomos y sociedades, con la facturación internacional en mente.', tags: ['Autónomos y sociedades', 'IVA internacional', 'Modelo 720'] },
      { key: 'residency', title: 'Cambio de residencia fiscal', text: 'Salir de España o llegar a ella: planificamos el cambio contigo y te ayudamos a acreditarlo.', tags: ['183 días', 'Convenios', 'Exit tax'] },
      { key: 'beckham', title: 'Régimen Beckham', text: 'El régimen fiscal especial para quien se traslada a España: requisitos, solicitud y declaraciones anuales.', tags: ['Tipo fijo del 24 %', 'Modelo 149', 'Hasta 6 años'] },
    ],
    learnMore: 'Saber más',
    oneOff: { lead: '¿Solo necesitas revisar una situación concreta?', link: 'Empieza por un diagnóstico inicial.' },
    band: { lead: 'La mayoría te monta la estructura y desaparece.', accent: 'Nosotros nos quedamos.' },
    bandCta: 'Reserva tu diagnóstico inicial',
  },
  process: {
    eyebrow: 'Proceso',
    title: { lead: 'Cómo', accent: 'trabajamos.' },
    text: 'Cuatro pasos, sin sorpresas. Sabes en todo momento en qué punto está tu estructura.',
    steps: [
      { title: 'Diagnóstico inicial', text: 'En una llamada de una hora nos cuentas tu situación y la analizamos juntos.' },
      { title: 'Propuesta', text: 'Si necesitas que vayamos más allá, te enviamos una propuesta con el alcance y los honorarios claros.' },
      { title: 'Implantación', text: 'Ponemos en marcha la estructura: sociedad, residencia, cuentas y sistema contable.' },
      { title: 'Acompañamiento', text: 'Contabilidad, impuestos y revisiones periódicas para que la estructura siga funcionando mientras creces.' },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: { lead: 'Lo que', accent: 'nos preguntan.' },
    textLead: '¿Tu duda no está aquí?',
    textLink: 'Escríbenos',
    items: [
      {
        q: '¿Esto es legal?',
        a: 'Sí. Optimizar es elegir, dentro de la ley, la estructura que mejor encaja con tu realidad. Solo trabajamos con estructuras que puedes explicar y defender, con sustancia real detrás.',
      },
      {
        q: '¿Basta con abrir una empresa en Dubái para dejar de tributar en España?',
        a: 'No. Si sigues viviendo en España o la sociedad se gestiona desde aquí, lo normal es que tribute en España. Tu residencia fiscal y la de la sociedad se analizan antes de dar ningún paso, y por eso siempre empezamos por el diagnóstico.',
      },
      {
        q: '¿En qué os diferenciáis de una gestoría?',
        a: 'Una gestoría presenta tus impuestos. Nosotros diseñamos la estructura, la ponemos en marcha y después la mantenemos: la estrategia y el día a día en el mismo sitio.',
      },
      {
        q: '¿Solo trabajáis con Dubái?',
        a: 'No. Asesoramos en fiscalidad internacional en general, con especial foco en España y Emiratos: gestión fiscal en España, constitución y cumplimiento en Dubái, cambios de residencia y régimen Beckham para quien se muda a España.',
      },
      {
        q: '¿Trabajáis con clientes que no viven en España?',
        a: 'Sí. Trabajamos en remoto con clientes en España, en Emiratos y en otros países.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Empezamos con un diagnóstico inicial: una llamada de una hora por 397 USD. Si después necesitas que vayamos más allá, te enviamos una propuesta con honorarios claros antes de empezar nada.',
      },
      {
        q: '¿En qué idioma trabajáis?',
        a: 'En español y en inglés.',
      },
    ],
  },
  diagnosis: {
    eyebrow: 'Diagnóstico inicial',
    title: { lead: 'Empieza por un', accent: 'diagnóstico.' },
    text: 'Antes de diseñar nada, necesitamos entender tu caso. En una llamada de una hora nos cuentas tu situación y la analizamos juntos: qué tienes, qué riesgos hay y qué opciones tienen sentido para ti.',
    includes: [
      'Videollamada de una hora',
      'Nos cuentas tu situación personal y de negocio',
      'La analizamos juntos: riesgos, opciones y prioridades',
      'Sales sabiendo cuáles son tus siguientes pasos',
    ],
    priceLabel: 'Diagnóstico inicial',
    priceNote: 'Videollamada de 1 hora',
    button: 'Reserva tu diagnóstico inicial',
    secure: 'Pago seguro con Stripe',
    altLead: '¿Aún no lo tienes claro?',
    altLink: 'Escríbenos antes',
  },
  contact: {
    eyebrow: 'Empieza aquí',
    title: { lead: '¿Hablamos de', accent: 'tu caso?' },
    text: '¿Prefieres escribirnos antes? Cuéntanos tu situación. Revisamos cada solicitud personalmente y te decimos cómo podemos ayudarte.',
    bullets: [
      { title: 'Trato directo', text: 'Hablas con quien lleva tu caso, no con un call center.' },
      { title: 'Confidencialidad', text: 'Tu información solo se usa para analizar tu situación.' },
      { title: 'Propuesta clara', text: 'Alcance y honorarios por escrito antes de empezar.' },
    ],
    booking: 'Reservar llamada →',
    form: {
      name: 'Nombre',
      namePh: 'Tu nombre',
      email: 'Email',
      emailPh: 'tu@email.com',
      phone: 'Teléfono (opcional)',
      phonePh: '+34 / +971…',
      residence: '¿Dónde resides ahora?',
      residencePh: 'España, Dubái, otro…',
      need: '¿Qué necesitas?',
      needPh: 'Elige una opción',
      needs: [
        'Estructuración fiscal internacional',
        'Crear empresa en Dubái',
        'Gestión fiscal en Dubái (contabilidad, Corporate Tax, IVA)',
        'Gestión fiscal en España',
        'Cambiar mi residencia fiscal',
        'Régimen Beckham',
        'Una consulta puntual',
        'Otro / aún no lo sé',
      ],
      comments: 'Cuéntanos tu situación',
      commentsPh: 'A qué te dedicas, dónde facturas y qué quieres conseguir.',
      submit: 'Enviar solicitud',
      sending: 'Enviando…',
      error: 'No se ha podido enviar. Inténtalo de nuevo o escríbenos a',
      successTitle: 'Recibido. Gracias.',
      successText: 'Leemos cada solicitud personalmente y te escribimos en cuanto la revisemos.',
      privacy: 'Tus datos solo se usan para responder a tu solicitud. Más información en nuestra',
      privacyLink: 'Política de privacidad',
    },
  },
  footer: {
    blurb: 'Asesoría fiscal internacional para emprendedores y negocios digitales.',
    navigation: 'Navegación',
    legal: 'Legal',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    location: 'Dubái · Emiratos Árabes Unidos',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, es };
