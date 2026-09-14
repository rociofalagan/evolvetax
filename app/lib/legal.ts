// Textos legales de Evolve Tax (aviso legal, privacidad, términos y cookies), en español e inglés.
// Adaptados a partir de los textos legales de Lexflow Studio (redactados por despacho de abogados).
// Antes de publicar, conviene que los revise un profesional con los datos definitivos de Evolve Tax.

import type { Lang } from './i18n';
import { legalPaths, type LegalKey } from './routes';

type Link = { label: string; href: string };

export type LegalBlock =
  | { p: string; link?: Link }
  | { h: string }
  | { list: (string | [string, string])[]; ordered?: boolean }
  | { dl: [string, string][] }
  | { note: string };

export type LegalDoc = {
  title: string;
  description: string;
  lead: string;
  sections: { id: string; title: string; blocks: LegalBlock[] }[];
  closing?: string;
};

export const legalUpdated = { en: 'September 2026', es: 'septiembre de 2026' };

export const legalUi = {
  en: { eyebrow: 'Legal', updated: 'Last updated', contents: 'Contents' },
  es: { eyebrow: 'Legal', updated: 'Última actualización', contents: 'Índice' },
};

const EMAIL = 'hello@evolvetaxdubai.com';
const WEB = 'www.evolvetaxdubai.com';

const company = {
  es: [
    ['Denominación social', 'Evolve Blueprint Consulting FZCO'],
    ['Nombre comercial', 'Evolve Tax'],
    ['Forma jurídica', 'Free Zone Company (FZCO)'],
    ['Número de licencia', '62485'],
    ['Autoridad emisora', 'Dubai Integrated Economic Zones Authority'],
    ['Actividades', 'Tax Consultant · Corporate Services Provider'],
    ['Domicilio', 'Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubái (Emiratos Árabes Unidos)'],
    ['Sitio web', WEB],
    ['Email de contacto', EMAIL],
  ] as [string, string][],
  en: [
    ['Legal name', 'Evolve Blueprint Consulting FZCO'],
    ['Trade name', 'Evolve Tax'],
    ['Legal form', 'Free Zone Company (FZCO)'],
    ['Licence number', '62485'],
    ['Issuing authority', 'Dubai Integrated Economic Zones Authority'],
    ['Activities', 'Tax Consultant · Corporate Services Provider'],
    ['Registered address', 'Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai (United Arab Emirates)'],
    ['Website', WEB],
    ['Contact email', EMAIL],
  ] as [string, string][],
};

const mail: Link = { label: EMAIL, href: `mailto:${EMAIL}` };

export const legalDocs: Record<LegalKey, Record<Lang, LegalDoc>> = {
  /* ================================================================
     AVISO LEGAL
     ================================================================ */
  notice: {
    es: {
      title: 'Aviso legal',
      description: 'Información corporativa de Evolve Tax y condiciones de uso del sitio web.',
      lead: 'Información corporativa y condiciones de uso del sitio web.',
      sections: [
        {
          id: 'condiciones-de-uso',
          title: 'Condiciones de uso del sitio web',
          blocks: [
            { p: `El acceso y uso de este sitio web (${WEB}) implica la aceptación de los términos y condiciones que se detallan a continuación. Si no estás de acuerdo con estos términos, te recomendamos que no accedas ni uses este sitio web.` },
          ],
        },
        {
          id: 'informacion-corporativa',
          title: 'Información corporativa',
          blocks: [{ p: 'De conformidad con la normativa aplicable, te informamos de los siguientes datos:' }, { dl: company.es }],
        },
        {
          id: 'objeto',
          title: 'Objeto y ámbito de aplicación',
          blocks: [
            { p: `Este Aviso Legal regula el acceso y uso del sitio web ${WEB} (en adelante, el "Sitio Web"), propiedad de Evolve Tax.` },
            { p: 'El Sitio Web tiene como objetivo principal:' },
            {
              list: [
                'Proporcionar información sobre nuestros servicios de asesoría fiscal internacional para emprendedores y negocios digitales',
                'Ofrecer contenido informativo sobre fiscalidad internacional, residencia fiscal y cumplimiento tributario',
                'Facilitar un canal de contacto para solicitar información o propuestas de servicios',
              ],
            },
            { note: 'Importante: este Aviso Legal regula únicamente el acceso y la navegación por el Sitio Web. La contratación de nuestros servicios profesionales se rige por los Términos y Condiciones y por la propuesta o carta de encargo que se acepte en cada caso.' },
          ],
        },
        {
          id: 'uso',
          title: 'Condiciones generales de uso',
          blocks: [
            { h: 'Acceso al Sitio Web' },
            { p: 'El acceso al Sitio Web es gratuito y no requiere registro previo, salvo para funcionalidades específicas que así lo requieran.' },
            { h: 'Uso permitido' },
            { p: 'Al acceder al Sitio Web, te comprometes a:' },
            {
              list: [
                'Utilizarlo de conformidad con la ley y las buenas costumbres',
                'No emplearlo para fines ilícitos o que perjudiquen a terceros',
                'No intentar acceder a áreas restringidas sin autorización',
                'No introducir virus, malware o código dañino',
                'Proporcionar información veraz cuando te comuniques con nosotros',
              ],
            },
            { h: 'Uso prohibido' },
            { p: 'Queda expresamente prohibido:' },
            {
              list: [
                'Realizar scraping, minería de datos o extracción automatizada de contenido',
                'Copiar, modificar, distribuir o reproducir el contenido sin autorización',
                'Utilizar el contenido para entrenar modelos de inteligencia artificial sin permiso expreso',
                'Intentar vulnerar las medidas de seguridad del Sitio Web',
                'Suplantar la identidad de otra persona o empresa',
                'Usar el Sitio Web para transmitir spam, publicidad no solicitada o contenido malicioso',
                'Realizar ingeniería inversa de cualquier aspecto del Sitio Web',
              ],
            },
          ],
        },
        {
          id: 'propiedad-intelectual',
          title: 'Propiedad intelectual e industrial',
          blocks: [
            { h: 'Derechos de Evolve Tax' },
            { p: 'Todos los contenidos del Sitio Web, incluyendo pero no limitándose a textos, imágenes, gráficos, logos, iconos, diseño, código fuente, estructura de navegación y cualquier otro elemento, están protegidos por derechos de propiedad intelectual e industrial.' },
            { p: 'Son propiedad de Evolve Tax o contamos con las licencias correspondientes:' },
            {
              list: [
                'La marca "Evolve Tax" y su identidad visual',
                'El diseño y la estructura del Sitio Web',
                'Artículos, guías y contenido informativo publicado',
                'Metodologías propias mencionadas',
                'Fotografías, ilustraciones y material gráfico',
              ],
            },
            { h: 'Licencia de uso limitada' },
            { p: 'Te otorgamos una licencia limitada, no exclusiva, no transferible y revocable para:' },
            {
              list: [
                'Acceder y visualizar el contenido para tu uso personal e informativo',
                'Descargar e imprimir contenido exclusivamente para uso interno no comercial',
                'Compartir enlaces a nuestras páginas (sin modificar el contenido)',
              ],
            },
            { h: 'Restricciones' },
            { p: 'No puedes, sin nuestro consentimiento previo por escrito:' },
            {
              list: [
                'Reproducir, modificar, traducir o crear obras derivadas del contenido',
                'Distribuir, vender, alquilar o licenciar el contenido a terceros',
                'Utilizar el contenido con fines comerciales',
                'Eliminar las marcas de copyright, marcas registradas u otras notificaciones',
                'Usar nuestro nombre o marca en publicidad sin autorización',
              ],
            },
            { h: 'Reclamaciones por infracción' },
            { p: 'Si consideras que algún contenido del Sitio Web infringe tus derechos de propiedad intelectual, contáctanos proporcionando:', link: mail },
            {
              list: [
                'Tus datos de contacto y documentación que acredite tu titularidad',
                'Descripción detallada del contenido que consideras infractor',
                'Ubicación exacta en el Sitio Web',
                'Declaración de buena fe de que el uso no está autorizado',
              ],
            },
          ],
        },
        {
          id: 'enlaces',
          title: 'Enlaces',
          blocks: [
            { h: 'Enlaces a sitios de terceros' },
            { p: 'Nuestro Sitio Web puede contener enlaces a sitios web de terceros (organismos públicos, redes sociales, recursos informativos, etc.). Estos enlaces se proporcionan únicamente para tu conveniencia. No controlamos ni revisamos el contenido de esos sitios y no nos responsabilizamos de su contenido, políticas de privacidad o prácticas.' },
            { h: 'Enlaces desde terceros a nuestro sitio' },
            { p: 'Puedes enlazar a nuestro Sitio Web siempre que:' },
            {
              list: [
                'El enlace sea directo y honesto (no engañoso)',
                'No impliques falsamente una relación, patrocinio o aprobación por nuestra parte',
                'No copies ni reproduzcas contenido de nuestro Sitio Web',
                'Tu sitio no contenga contenido ilegal, ofensivo o inapropiado',
              ],
            },
          ],
        },
        {
          id: 'responsabilidad',
          title: 'Exclusión de garantías y responsabilidad',
          blocks: [
            { h: 'Disponibilidad del Sitio Web' },
            { p: 'Hacemos nuestros mejores esfuerzos para que el Sitio Web esté disponible en todo momento, pero no podemos garantizar:' },
            {
              list: [
                'Acceso ininterrumpido o libre de errores',
                'Ausencia de virus u otros elementos dañinos',
                'Exactitud o actualización completa de toda la información',
                'Resultados específicos derivados del uso del Sitio Web',
              ],
            },
            { h: 'Contenido informativo' },
            { p: 'El contenido publicado en el Sitio Web (guías, preguntas frecuentes y descripciones de servicios) tiene carácter general, informativo y educativo. Aunque nos esforzamos por mantenerlo actualizado y preciso:' },
            {
              list: [
                'No constituye asesoramiento fiscal ni legal para tu situación concreta',
                'No sustituye el análisis personalizado de un profesional con toda la información de tu caso',
                'La normativa fiscal cambia con frecuencia y el contenido puede quedar desactualizado',
                'Puede contener estimaciones u opiniones que no están garantizadas',
              ],
            },
            { h: 'Limitación de responsabilidad' },
            { p: 'En la máxima medida permitida por la ley, Evolve Tax no será responsable por:' },
            {
              list: [
                'Daños directos, indirectos, incidentales o consecuenciales derivados del uso del Sitio Web',
                'Pérdida de datos, beneficios u oportunidades de negocio',
                'Contenido o conducta de terceros en el Sitio Web',
                'Decisiones tomadas basándose en la información general del Sitio Web',
                'Interrupciones, errores o fallos de seguridad',
              ],
            },
          ],
        },
        {
          id: 'datos-y-cookies',
          title: 'Protección de datos y cookies',
          blocks: [
            { h: 'Protección de datos' },
            { p: 'El tratamiento de tus datos personales cuando navegas por el Sitio Web o nos contactas se rige por nuestra Política de Privacidad.', link: { label: 'Ver Política de Privacidad →', href: legalPaths.privacy.es } },
            { h: 'Cookies' },
            { p: 'La información sobre el uso de cookies y tecnologías similares en este Sitio Web está disponible en nuestra Política de Cookies.', link: { label: 'Ver Política de Cookies →', href: legalPaths.cookies.es } },
          ],
        },
        {
          id: 'modificaciones',
          title: 'Modificaciones, duración y terminación',
          blocks: [
            { h: 'Modificaciones' },
            { p: 'Nos reservamos el derecho de modificar este Aviso Legal en cualquier momento. Los cambios entrarán en vigor desde su publicación. La fecha de última actualización siempre aparecerá al inicio de este documento. El uso continuado del Sitio Web tras las modificaciones implica tu aceptación de los nuevos términos.' },
            { h: 'Duración' },
            { p: 'Este Aviso Legal está vigente mientras el Sitio Web esté operativo.' },
            { h: 'Terminación' },
            { p: 'Podemos suspender o terminar tu acceso al Sitio Web en cualquier momento si incumples estos términos, sin necesidad de previo aviso y sin derecho a indemnización. Tras la terminación, las cláusulas sobre propiedad intelectual, limitación de responsabilidad y ley aplicable seguirán vigentes.' },
          ],
        },
        {
          id: 'disposiciones-generales',
          title: 'Disposiciones generales',
          blocks: [
            { h: 'Divisibilidad' },
            { p: 'Si alguna disposición de este Aviso Legal se declara inválida, dicha disposición se considerará modificada en la medida mínima necesaria. La invalidez de una disposición no afectará a la validez del resto.' },
            { h: 'Renuncia' },
            { p: 'El hecho de que no ejerzamos inmediatamente algún derecho bajo este Aviso Legal no constituye una renuncia a dicho derecho.' },
            { h: 'Ley aplicable y jurisdicción' },
            { p: 'Este Aviso Legal se regirá e interpretará de acuerdo con las leyes que resulten aplicables según tu ubicación y la naturaleza de la relación. Para usuarios ubicados en la Unión Europea, se aplicará la normativa de protección al consumidor correspondiente.' },
            { h: 'Resolución de controversias' },
            { p: 'En caso de controversia, intentaremos resolverla de forma amistosa mediante negociación directa. Si la negociación no prospera, las partes se someterán a los tribunales competentes según la legislación aplicable.' },
          ],
        },
        {
          id: 'contacto',
          title: 'Contacto',
          blocks: [
            { p: 'Para cualquier consulta, sugerencia o reclamación relacionada con este Aviso Legal o el Sitio Web, puedes escribirnos a:', link: mail },
            { p: 'Nos comprometemos a responder tus consultas en el menor tiempo posible y a buscar soluciones amistosas a cualquier conflicto.' },
          ],
        },
      ],
      closing: 'Al acceder y usar este Sitio Web, confirmas que has leído, entendido y aceptado este Aviso Legal.',
    },
    en: {
      title: 'Legal notice',
      description: 'Corporate information about Evolve Tax and terms of use of the website.',
      lead: 'Corporate information and terms of use of the website.',
      sections: [
        {
          id: 'terms-of-use',
          title: 'Website terms of use',
          blocks: [
            { p: `Accessing and using this website (${WEB}) implies acceptance of the terms and conditions set out below. If you do not agree with these terms, we recommend that you do not access or use this website.` },
          ],
        },
        {
          id: 'corporate-information',
          title: 'Corporate information',
          blocks: [{ p: 'In accordance with applicable regulations, we inform you of the following details:' }, { dl: company.en }],
        },
        {
          id: 'purpose',
          title: 'Purpose and scope',
          blocks: [
            { p: `This Legal Notice governs access to and use of the website ${WEB} (the "Website"), owned by Evolve Tax.` },
            { p: 'The main purpose of the Website is to:' },
            {
              list: [
                'Provide information about our international tax advisory services for digital entrepreneurs and online businesses',
                'Offer informative content on international taxation, tax residency and tax compliance',
                'Provide a contact channel to request information or service proposals',
              ],
            },
            { note: 'Important: this Legal Notice only governs access to and browsing of the Website. Engaging our professional services is governed by the Terms and Conditions and by the proposal or engagement letter accepted in each case.' },
          ],
        },
        {
          id: 'use',
          title: 'General conditions of use',
          blocks: [
            { h: 'Access to the Website' },
            { p: 'Access to the Website is free and does not require prior registration, except for specific features that may require it.' },
            { h: 'Permitted use' },
            { p: 'By accessing the Website, you agree to:' },
            {
              list: [
                'Use it in accordance with the law and good practice',
                'Not use it for unlawful purposes or in ways that harm third parties',
                'Not attempt to access restricted areas without authorisation',
                'Not introduce viruses, malware or harmful code',
                'Provide truthful information when you contact us',
              ],
            },
            { h: 'Prohibited use' },
            { p: 'The following is expressly prohibited:' },
            {
              list: [
                'Scraping, data mining or automated extraction of content',
                'Copying, modifying, distributing or reproducing content without authorisation',
                'Using the content to train artificial intelligence models without express permission',
                'Attempting to breach the Website’s security measures',
                'Impersonating another person or company',
                'Using the Website to transmit spam, unsolicited advertising or malicious content',
                'Reverse engineering any aspect of the Website',
              ],
            },
          ],
        },
        {
          id: 'intellectual-property',
          title: 'Intellectual and industrial property',
          blocks: [
            { h: 'Rights of Evolve Tax' },
            { p: 'All content on the Website, including but not limited to text, images, graphics, logos, icons, design, source code, navigation structure and any other element, is protected by intellectual and industrial property rights.' },
            { p: 'The following are owned by Evolve Tax or used under the corresponding licences:' },
            {
              list: [
                'The "Evolve Tax" brand and its visual identity',
                'The design and structure of the Website',
                'Articles, guides and informative content published',
                'Proprietary methodologies mentioned',
                'Photographs, illustrations and graphic material',
              ],
            },
            { h: 'Limited licence of use' },
            { p: 'We grant you a limited, non-exclusive, non-transferable and revocable licence to:' },
            {
              list: [
                'Access and view the content for your personal and informational use',
                'Download and print content exclusively for internal, non-commercial use',
                'Share links to our pages (without modifying the content)',
              ],
            },
            { h: 'Restrictions' },
            { p: 'Without our prior written consent, you may not:' },
            {
              list: [
                'Reproduce, modify, translate or create derivative works from the content',
                'Distribute, sell, rent or license the content to third parties',
                'Use the content for commercial purposes',
                'Remove copyright notices, trademarks or other notices',
                'Use our name or brand in advertising without authorisation',
              ],
            },
            { h: 'Infringement claims' },
            { p: 'If you believe that any content on the Website infringes your intellectual property rights, contact us providing:', link: mail },
            {
              list: [
                'Your contact details and documentation proving your ownership',
                'A detailed description of the content you consider infringing',
                'Its exact location on the Website',
                'A good-faith statement that the use is not authorised',
              ],
            },
          ],
        },
        {
          id: 'links',
          title: 'Links',
          blocks: [
            { h: 'Links to third-party sites' },
            { p: 'Our Website may contain links to third-party websites (public bodies, social networks, informational resources, etc.). These links are provided solely for your convenience. We do not control or review the content of those sites and are not responsible for their content, privacy policies or practices.' },
            { h: 'Links from third parties to our site' },
            { p: 'You may link to our Website provided that:' },
            {
              list: [
                'The link is direct and honest (not misleading)',
                'You do not falsely imply a relationship, sponsorship or endorsement by us',
                'You do not copy or reproduce content from our Website',
                'Your site does not contain illegal, offensive or inappropriate content',
              ],
            },
          ],
        },
        {
          id: 'liability',
          title: 'Disclaimer of warranties and liability',
          blocks: [
            { h: 'Website availability' },
            { p: 'We make every effort to keep the Website available at all times, but we cannot guarantee:' },
            {
              list: [
                'Uninterrupted or error-free access',
                'The absence of viruses or other harmful elements',
                'The complete accuracy or currency of all information',
                'Specific results from using the Website',
              ],
            },
            { h: 'Informative content' },
            { p: 'The content published on the Website (guides, FAQs and service descriptions) is general, informative and educational. Although we strive to keep it up to date and accurate:' },
            {
              list: [
                'It does not constitute tax or legal advice for your specific situation',
                'It does not replace a personalised analysis by a professional with all the information about your case',
                'Tax legislation changes frequently and the content may become outdated',
                'It may contain estimates or opinions that are not guaranteed',
              ],
            },
            { h: 'Limitation of liability' },
            { p: 'To the maximum extent permitted by law, Evolve Tax shall not be liable for:' },
            {
              list: [
                'Direct, indirect, incidental or consequential damages arising from the use of the Website',
                'Loss of data, profits or business opportunities',
                'Content or conduct of third parties on the Website',
                'Decisions made on the basis of the general information on the Website',
                'Interruptions, errors or security failures',
              ],
            },
          ],
        },
        {
          id: 'data-and-cookies',
          title: 'Data protection and cookies',
          blocks: [
            { h: 'Data protection' },
            { p: 'The processing of your personal data when you browse the Website or contact us is governed by our Privacy Policy.', link: { label: 'View Privacy Policy →', href: legalPaths.privacy.en } },
            { h: 'Cookies' },
            { p: 'Information about the use of cookies and similar technologies on this Website is available in our Cookie Policy.', link: { label: 'View Cookie Policy →', href: legalPaths.cookies.en } },
          ],
        },
        {
          id: 'changes',
          title: 'Changes, duration and termination',
          blocks: [
            { h: 'Changes' },
            { p: 'We reserve the right to modify this Legal Notice at any time. Changes take effect from their publication. The last updated date will always appear at the beginning of this document. Continued use of the Website after the changes implies your acceptance of the new terms.' },
            { h: 'Duration' },
            { p: 'This Legal Notice remains in force for as long as the Website is operational.' },
            { h: 'Termination' },
            { p: 'We may suspend or terminate your access to the Website at any time if you breach these terms, without prior notice and without any right to compensation. After termination, the clauses on intellectual property, limitation of liability and applicable law will remain in force.' },
          ],
        },
        {
          id: 'general-provisions',
          title: 'General provisions',
          blocks: [
            { h: 'Severability' },
            { p: 'If any provision of this Legal Notice is declared invalid, that provision shall be deemed modified to the minimum extent necessary. The invalidity of one provision shall not affect the validity of the rest.' },
            { h: 'Waiver' },
            { p: 'Our failure to immediately exercise any right under this Legal Notice does not constitute a waiver of that right.' },
            { h: 'Applicable law and jurisdiction' },
            { p: 'This Legal Notice shall be governed by and interpreted in accordance with the laws applicable according to your location and the nature of the relationship. For users located in the European Union, the corresponding consumer protection regulations shall apply.' },
            { h: 'Dispute resolution' },
            { p: 'In the event of a dispute, we will try to resolve it amicably through direct negotiation. If negotiation fails, the parties will submit to the competent courts under the applicable legislation.' },
          ],
        },
        {
          id: 'contact',
          title: 'Contact',
          blocks: [
            { p: 'For any question, suggestion or complaint related to this Legal Notice or the Website, you can write to us at:', link: mail },
            { p: 'We are committed to answering your queries as soon as possible and seeking amicable solutions to any dispute.' },
          ],
        },
      ],
      closing: 'By accessing and using this Website, you confirm that you have read, understood and accepted this Legal Notice.',
    },
  },

  /* ================================================================
     POLÍTICA DE PRIVACIDAD
     ================================================================ */
  privacy: {
    es: {
      title: 'Política de privacidad',
      description: 'Cómo Evolve Tax recopila, utiliza y protege tus datos personales.',
      lead: 'Conoce cómo tratamos y protegemos tus datos personales.',
      sections: [
        {
          id: 'introduccion',
          title: 'Tu privacidad es importante para nosotros',
          blocks: [
            { p: 'En Evolve Tax nos tomamos muy en serio la protección de tu información personal. Esta política explica de manera clara y transparente cómo recopilamos, usamos y protegemos tus datos cuando visitas nuestra web, nos contactas o trabajas con nosotros.' },
            { p: 'Somos una asesoría fiscal internacional especializada en emprendedores y negocios digitales. Nuestro trabajo implica analizar tu situación personal, fiscal y empresarial, diseñar estructuras, constituir sociedades y gestionar obligaciones tributarias, lo que requiere tratar información personal y económica.' },
          ],
        },
        {
          id: 'responsable',
          title: '¿Quién es responsable de tus datos?',
          blocks: [
            {
              dl: [
                ['Denominación social', 'Evolve Blueprint Consulting FZCO'],
                ['Nombre comercial', 'Evolve Tax'],
                ['Domicilio', 'Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubái (Emiratos Árabes Unidos)'],
                ['Email de contacto', EMAIL],
              ],
            },
          ],
        },
        {
          id: 'informacion',
          title: '¿Qué información recopilamos sobre ti?',
          blocks: [
            { p: 'Dependiendo de la fase de nuestra relación, podemos recopilar diferentes tipos de información:' },
            { h: 'Información de contacto' },
            { p: 'Nombre, email, teléfono, país de residencia y el mensaje que nos envías a través del formulario de contacto o por email.' },
            { h: 'Información identificativa' },
            { p: 'Documento de identidad o pasaporte, visados, Emirates ID, fotografías y justificantes de domicilio, necesarios para constituir sociedades, tramitar residencias y cumplir con las obligaciones de identificación de clientes (KYC) y de prevención del blanqueo de capitales.' },
            { h: 'Información fiscal y económica' },
            { p: 'Declaraciones de impuestos, ingresos, situación de residencia fiscal, patrimonio, participaciones en sociedades y cualquier otra información necesaria para analizar tu caso y presentar tus obligaciones tributarias.' },
            { h: 'Información sobre tu empresa' },
            { p: 'Documentación societaria, contabilidad, facturas, extractos bancarios, contratos y datos de socios, administradores y beneficiarios efectivos.' },
            { h: 'Accesos a plataformas' },
            { p: 'Cuando lo necesitamos para prestarte el servicio, podemos requerir acceso a portales de autoridades fiscales, software contable o banca online, mediante credenciales, autorizaciones o apoderamientos. Solo accedemos a lo estrictamente necesario.' },
            { h: 'Información financiera' },
            { p: 'Datos de facturación y datos bancarios para gestionar los cobros de nuestros servicios.' },
          ],
        },
        {
          id: 'finalidades',
          title: '¿Para qué usamos tu información?',
          blocks: [
            { h: 'Responder a tus solicitudes' },
            { p: 'Usamos los datos que nos envías por el formulario o por email para responderte, valorar si podemos ayudarte y, en su caso, prepararte una propuesta.' },
            { note: 'Base legal: aplicación de medidas precontractuales a petición tuya y nuestro interés legítimo en atender tu consulta.' },
            { h: 'Prestación de servicios' },
            { p: 'Usamos tu información para ejecutar los servicios que has contratado: analizar tu situación fiscal, diseñar estructuras, constituir sociedades, tramitar licencias, registros y visados, llevar la contabilidad y presentar declaraciones ante las autoridades fiscales.' },
            { note: 'Base legal: ejecución del contrato que firmamos contigo.' },
            { h: 'Identificación de clientes y prevención del blanqueo de capitales' },
            { p: 'Verificamos la identidad de nuestros clientes y, en su caso, de los socios y beneficiarios efectivos de sus sociedades, tal y como exige la normativa aplicable a los asesores fiscales y proveedores de servicios corporativos.' },
            { note: 'Base legal: cumplimiento de obligaciones legales.' },
            { h: 'Comunicación sobre tus servicios' },
            { p: 'Te mantenemos informado sobre el estado de tus trámites, plazos, requerimientos o cualquier tema relacionado con los servicios que te prestamos.' },
            { note: 'Base legal: ejecución del contrato y nuestro interés legítimo.' },
            { h: 'Mejora continua de nuestros servicios' },
            { p: 'Analizamos, de forma agregada y anónima, la forma en que prestamos nuestros servicios para mejorar nuestras metodologías. Nunca compartimos información identificable de clientes concretos.' },
            { note: 'Base legal: nuestro interés legítimo en mejorar la calidad.' },
            { h: 'Compartir casos de éxito' },
            { p: 'Nos gustaría poder mostrar ejemplos de nuestro trabajo (testimonios o casos). Solo lo hacemos si nos das tu autorización expresa y por escrito.' },
            { note: 'Base legal: tu consentimiento explícito, que puedes retirar en cualquier momento.' },
            { h: 'Mantenerte informado' },
            { p: 'Si eres cliente nuestro, podemos enviarte información sobre novedades fiscales, cambios normativos que te puedan afectar o nuevos servicios. Siempre puedes darte de baja.' },
            { note: 'Base legal: nuestro interés legítimo en mantener informados a nuestros clientes.' },
            { h: 'Cumplimiento legal' },
            { p: 'Como cualquier empresa, debemos cumplir con obligaciones fiscales, contables y legales que pueden requerir el tratamiento de tus datos.' },
            { note: 'Base legal: cumplimiento de obligaciones legales.' },
          ],
        },
        {
          id: 'conservacion',
          title: '¿Durante cuánto tiempo guardamos tu información?',
          blocks: [
            {
              list: [
                'Conservamos tus datos mientras dure nuestra relación contractual y, después de finalizarla, durante los plazos legalmente establecidos (entre otros, los exigidos por la normativa fiscal, mercantil y de prevención del blanqueo de capitales) para poder atender posibles reclamaciones, comprobaciones o auditorías.',
                'Si nos has contactado pero no has llegado a contratar nuestros servicios, conservaremos tus datos el tiempo necesario para atender tu solicitud y, como máximo, hasta que nos pidas que los eliminemos.',
                'Si solo te enviamos comunicaciones informativas, conservaremos tus datos hasta que te des de baja o nos pidas que los eliminemos.',
                'Las credenciales y accesos a plataformas se eliminan cuando dejan de ser necesarios para el servicio, salvo que acuerdes expresamente mantenerlos.',
              ],
            },
          ],
        },
        {
          id: 'destinatarios',
          title: '¿Con quién compartimos tu información?',
          blocks: [
            { p: 'No vendemos ni alquilamos tu información a terceros. Solo compartimos tus datos cuando es necesario para prestarte el servicio o por obligación legal:' },
            {
              list: [
                ['Autoridades y organismos públicos', 'Autoridades de zonas francas, autoridades fiscales (como la Federal Tax Authority de Emiratos o la Agencia Tributaria española), organismos de inmigración y otras administraciones, cuando el servicio lo requiere o la ley nos obliga.'],
                ['Entidades financieras', 'Bancos con los que tramitamos la apertura de cuentas a petición tuya y entidades que gestionan nuestros cobros y pagos.'],
                ['Proveedores tecnológicos', 'Alojamiento web, correo electrónico, almacenamiento en la nube y software contable o de gestión. Todos están obligados contractualmente a proteger tu información.'],
                ['Asesores profesionales', 'En casos específicos, podemos consultar con abogados, auditores u otros asesores especializados, siempre bajo acuerdos de confidencialidad.'],
              ],
            },
          ],
        },
        {
          id: 'transferencias',
          title: 'Transferencias internacionales de datos',
          blocks: [
            { p: 'Evolve Tax está establecida en Emiratos Árabes Unidos. Por eso, si resides en otro país (por ejemplo, en la Unión Europea), tus datos se tratan fuera de él. Este tratamiento es necesario para prestarte los servicios que solicitas y lo realizamos aplicando las garantías previstas en la normativa de protección de datos aplicable.' },
            { p: 'Además, algunos de nuestros proveedores tecnológicos están ubicados en otros países (especialmente en Estados Unidos). Cuando esto ocurre, nos aseguramos de que existan garantías adecuadas de protección, como las cláusulas contractuales tipo aprobadas por la Comisión Europea. Si quieres más información, escríbenos a:', link: mail },
          ],
        },
        {
          id: 'derechos',
          title: 'Tus derechos sobre tu información',
          blocks: [
            { p: 'Tienes control total sobre tus datos personales. Estos son tus derechos:' },
            {
              list: [
                ['Acceso', 'Puedes preguntarnos qué información tenemos sobre ti y recibir una copia.'],
                ['Rectificación', 'Si algún dato es incorrecto o está desactualizado, puedes pedirnos que lo corrijamos.'],
                ['Supresión', 'Puedes solicitarnos que eliminemos tu información (salvo obligación legal de conservarla).'],
                ['Oposición', 'Puedes oponerte al tratamiento de tus datos para determinadas finalidades.'],
                ['Limitación', 'Puedes pedir que limitemos el uso de tu información en determinadas circunstancias.'],
                ['Portabilidad', 'Puedes solicitar recibir tus datos en un formato electrónico estructurado.'],
              ],
            },
            { p: 'Para ejercer cualquiera de estos derechos, solo tienes que escribirnos identificándote adecuadamente:', link: mail },
            { p: 'Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la autoridad de protección de datos correspondiente según tu jurisdicción (en España, la Agencia Española de Protección de Datos).' },
          ],
        },
        {
          id: 'seguridad',
          title: '¿Cómo protegemos tu información?',
          blocks: [
            { p: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración:' },
            {
              list: [
                'Cifrado de comunicaciones y almacenamiento seguro de la documentación sensible',
                'Control de acceso estricto: solo acceden a la información las personas que realmente lo necesitan',
                'Acuerdos de confidencialidad con todo nuestro equipo y colaboradores',
                'Copias de seguridad periódicas',
                'Revisión y actualización continua de nuestras medidas de seguridad',
              ],
            },
          ],
        },
        {
          id: 'tu-responsabilidad',
          title: 'Tu responsabilidad',
          blocks: [
            { p: 'Cuando nos facilitas información, nos garantizas que:' },
            {
              list: [
                'Los datos que proporcionas son veraces, exactos y están actualizados',
                'Si nos facilitas datos de terceros (socios, familiares, empleados), les has informado y cuentas con base legal para hacerlo',
                'Nos informarás de cualquier cambio en tus datos',
              ],
            },
          ],
        },
        {
          id: 'comunicaciones',
          title: 'Comunicaciones comerciales',
          blocks: [
            { p: 'Si en algún momento no quieres seguir recibiendo nuestras comunicaciones, puedes darte de baja:' },
            {
              list: [
                'Haciendo clic en el enlace "darme de baja" que aparece en nuestros emails',
                `Enviándonos un email a ${EMAIL} indicando que no deseas recibir más comunicaciones`,
              ],
            },
          ],
        },
        {
          id: 'cookies',
          title: 'Cookies',
          blocks: [{ p: 'La información sobre cookies y tecnologías similares está disponible en nuestra Política de Cookies.', link: { label: 'Ver Política de Cookies →', href: legalPaths.cookies.es } }],
        },
        {
          id: 'cambios',
          title: 'Cambios en esta política',
          blocks: [
            { p: 'Podemos actualizar esta política de privacidad ocasionalmente para reflejar cambios en nuestras prácticas o en la normativa aplicable. Cuando hagamos cambios significativos, te lo notificaremos por email o mediante un aviso destacado en nuestra web.' },
            { p: 'Te recomendamos revisar esta política periódicamente. La fecha de la última actualización siempre aparece al inicio del documento.' },
          ],
        },
        {
          id: 'dudas',
          title: '¿Tienes dudas?',
          blocks: [{ p: 'Si tienes cualquier pregunta sobre cómo tratamos tu información personal, no dudes en contactarnos:', link: mail }],
        },
      ],
      closing: 'Esta política de privacidad ha sido redactada con un lenguaje claro y directo porque creemos que tienes derecho a entender exactamente qué hacemos con tu información.',
    },
    en: {
      title: 'Privacy policy',
      description: 'How Evolve Tax collects, uses and protects your personal data.',
      lead: 'Learn how we process and protect your personal data.',
      sections: [
        {
          id: 'introduction',
          title: 'Your privacy matters to us',
          blocks: [
            { p: 'At Evolve Tax we take the protection of your personal information very seriously. This policy explains clearly and transparently how we collect, use and protect your data when you visit our website, contact us or work with us.' },
            { p: 'We are an international tax advisory firm specialising in digital entrepreneurs and online businesses. Our work involves analysing your personal, tax and business situation, designing structures, incorporating companies and managing tax obligations, which requires processing personal and financial information.' },
          ],
        },
        {
          id: 'controller',
          title: 'Who is responsible for your data?',
          blocks: [
            {
              dl: [
                ['Legal name', 'Evolve Blueprint Consulting FZCO'],
                ['Trade name', 'Evolve Tax'],
                ['Registered address', 'Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai (United Arab Emirates)'],
                ['Contact email', EMAIL],
              ],
            },
          ],
        },
        {
          id: 'information',
          title: 'What information do we collect?',
          blocks: [
            { p: 'Depending on the stage of our relationship, we may collect different types of information:' },
            { h: 'Contact information' },
            { p: 'Name, email, phone number, country of residence and the message you send us through the contact form or by email.' },
            { h: 'Identification information' },
            { p: 'ID card or passport, visas, Emirates ID, photographs and proof of address, required to incorporate companies, process residency applications and comply with client identification (KYC) and anti-money laundering obligations.' },
            { h: 'Tax and financial situation' },
            { p: 'Tax returns, income, tax residency status, assets, shareholdings and any other information needed to analyse your case and file your tax obligations.' },
            { h: 'Information about your company' },
            { p: 'Corporate documents, accounting records, invoices, bank statements, contracts and details of shareholders, directors and ultimate beneficial owners.' },
            { h: 'Access to platforms' },
            { p: 'When needed to provide the service, we may require access to tax authority portals, accounting software or online banking through credentials, authorisations or powers of attorney. We only access what is strictly necessary.' },
            { h: 'Billing information' },
            { p: 'Billing and bank details to manage payment for our services.' },
          ],
        },
        {
          id: 'purposes',
          title: 'How do we use your information?',
          blocks: [
            { h: 'Responding to your requests' },
            { p: 'We use the data you send us through the form or by email to reply, assess whether we can help you and, where appropriate, prepare a proposal.' },
            { note: 'Legal basis: pre-contractual measures taken at your request and our legitimate interest in answering your enquiry.' },
            { h: 'Providing our services' },
            { p: 'We use your information to perform the services you have engaged: analysing your tax situation, designing structures, incorporating companies, processing licences, registrations and visas, keeping accounts and filing returns with tax authorities.' },
            { note: 'Legal basis: performance of the contract we sign with you.' },
            { h: 'Client identification and anti-money laundering' },
            { p: 'We verify the identity of our clients and, where applicable, of the shareholders and ultimate beneficial owners of their companies, as required by the regulations applicable to tax consultants and corporate service providers.' },
            { note: 'Legal basis: compliance with legal obligations.' },
            { h: 'Communication about your services' },
            { p: 'We keep you informed about the status of your filings, deadlines, requests from authorities or any matter related to the services we provide.' },
            { note: 'Legal basis: performance of the contract and our legitimate interest.' },
            { h: 'Continuous improvement' },
            { p: 'We analyse, in aggregated and anonymous form, how we deliver our services in order to improve our methodologies. We never share identifiable information about specific clients.' },
            { note: 'Legal basis: our legitimate interest in improving quality.' },
            { h: 'Sharing success stories' },
            { p: 'We would like to show examples of our work (testimonials or case studies). We only do so with your express written authorisation.' },
            { note: 'Legal basis: your explicit consent, which you can withdraw at any time.' },
            { h: 'Keeping you informed' },
            { p: 'If you are a client, we may send you information about tax updates, regulatory changes that may affect you or new services. You can always unsubscribe.' },
            { note: 'Legal basis: our legitimate interest in keeping our clients informed.' },
            { h: 'Legal compliance' },
            { p: 'Like any company, we must comply with tax, accounting and legal obligations that may require processing your data.' },
            { note: 'Legal basis: compliance with legal obligations.' },
          ],
        },
        {
          id: 'retention',
          title: 'How long do we keep your information?',
          blocks: [
            {
              list: [
                'We keep your data for as long as our contractual relationship lasts and, after it ends, for the legally required periods (including those set by tax, commercial and anti-money laundering regulations) in order to handle possible claims, reviews or audits.',
                'If you contacted us but did not engage our services, we will keep your data for as long as needed to handle your request and, at most, until you ask us to delete it.',
                'If we only send you informational communications, we will keep your data until you unsubscribe or ask us to delete it.',
                'Credentials and platform access are deleted once they are no longer needed for the service, unless you expressly agree to keep them.',
              ],
            },
          ],
        },
        {
          id: 'recipients',
          title: 'Who do we share your information with?',
          blocks: [
            { p: 'We do not sell or rent your information to third parties. We only share your data when necessary to provide the service or when required by law:' },
            {
              list: [
                ['Authorities and public bodies', 'Free zone authorities, tax authorities (such as the UAE Federal Tax Authority or the Spanish Tax Agency), immigration authorities and other public administrations, when the service requires it or the law obliges us.'],
                ['Financial institutions', 'Banks with which we process account openings at your request, and institutions that manage our payments and collections.'],
                ['Technology providers', 'Web hosting, email, cloud storage and accounting or management software. All of them are contractually bound to protect your information.'],
                ['Professional advisors', 'In specific cases, we may consult lawyers, auditors or other specialised advisors, always under confidentiality agreements.'],
              ],
            },
          ],
        },
        {
          id: 'transfers',
          title: 'International data transfers',
          blocks: [
            { p: 'Evolve Tax is established in the United Arab Emirates. Therefore, if you live in another country (for example, in the European Union), your data is processed outside that country. This processing is necessary to provide the services you request, and we carry it out applying the safeguards provided for in the applicable data protection regulations.' },
            { p: 'In addition, some of our technology providers are located in other countries (particularly the United States). When this happens, we make sure appropriate safeguards are in place, such as the standard contractual clauses approved by the European Commission. For more information, write to us at:', link: mail },
          ],
        },
        {
          id: 'rights',
          title: 'Your rights over your information',
          blocks: [
            { p: 'You have full control over your personal data. These are your rights:' },
            {
              list: [
                ['Access', 'You can ask us what information we hold about you and receive a copy.'],
                ['Rectification', 'If any data is incorrect or outdated, you can ask us to correct it.'],
                ['Erasure', 'You can ask us to delete your information (unless we are legally required to keep it).'],
                ['Objection', 'You can object to the processing of your data for certain purposes.'],
                ['Restriction', 'You can ask us to restrict the use of your information in certain circumstances.'],
                ['Portability', 'You can ask to receive your data in a structured electronic format.'],
              ],
            },
            { p: 'To exercise any of these rights, just write to us, identifying yourself appropriately:', link: mail },
            { p: 'If you believe we have not properly handled your rights, you can file a complaint with the data protection authority that corresponds to your jurisdiction (in Spain, the Spanish Data Protection Agency, AEPD).' },
          ],
        },
        {
          id: 'security',
          title: 'How do we protect your information?',
          blocks: [
            { p: 'We implement technical and organisational security measures to protect your data against unauthorised access, loss or alteration:' },
            {
              list: [
                'Encrypted communications and secure storage of sensitive documentation',
                'Strict access control: only people who really need the information can access it',
                'Confidentiality agreements with our whole team and collaborators',
                'Regular backups',
                'Continuous review and updating of our security measures',
              ],
            },
          ],
        },
        {
          id: 'your-responsibility',
          title: 'Your responsibility',
          blocks: [
            { p: 'When you provide us with information, you guarantee that:' },
            {
              list: [
                'The data you provide is true, accurate and up to date',
                'If you provide data about third parties (shareholders, family members, employees), you have informed them and have a legal basis to do so',
                'You will inform us of any change to your data',
              ],
            },
          ],
        },
        {
          id: 'communications',
          title: 'Commercial communications',
          blocks: [
            { p: 'If at any time you no longer wish to receive our communications, you can unsubscribe:' },
            {
              list: [
                'By clicking the "unsubscribe" link included in our emails',
                `By sending an email to ${EMAIL} stating that you no longer wish to receive communications`,
              ],
            },
          ],
        },
        {
          id: 'cookies',
          title: 'Cookies',
          blocks: [{ p: 'Information about cookies and similar technologies is available in our Cookie Policy.', link: { label: 'View Cookie Policy →', href: legalPaths.cookies.en } }],
        },
        {
          id: 'changes',
          title: 'Changes to this policy',
          blocks: [
            { p: 'We may update this privacy policy from time to time to reflect changes in our practices or in applicable regulations. When we make significant changes, we will notify you by email or through a prominent notice on our website.' },
            { p: 'We recommend reviewing this policy periodically. The date of the last update always appears at the beginning of the document.' },
          ],
        },
        {
          id: 'questions',
          title: 'Any questions?',
          blocks: [{ p: 'If you have any question about how we process your personal information, please contact us:', link: mail }],
        },
      ],
      closing: 'This privacy policy has been written in clear, direct language because we believe you have the right to understand exactly what we do with your information.',
    },
  },

  /* ================================================================
     TÉRMINOS Y CONDICIONES
     ================================================================ */
  terms: {
    es: {
      title: 'Términos y condiciones',
      description: 'Términos y condiciones que rigen el uso del sitio web y la contratación de los servicios de Evolve Tax.',
      lead: 'Conoce los términos que rigen el uso de nuestra web y de nuestros servicios.',
      sections: [
        {
          id: 'bienvenida',
          title: 'Bienvenido a Evolve Tax',
          blocks: [
            { p: `Al acceder o utilizar nuestro sitio web (${WEB}), solicitar información sobre nuestros servicios o contratar cualquiera de nuestros servicios de asesoría fiscal, aceptas estar vinculado por estos Términos y Condiciones.` },
            { p: 'Si no estás de acuerdo con estos Términos, por favor no utilices nuestro sitio web ni contrates nuestros servicios. Estos Términos se aplican a todos los visitantes del sitio web, solicitantes de propuestas y clientes que contraten nuestros servicios.' },
          ],
        },
        {
          id: 'empresa',
          title: 'Información de la empresa',
          blocks: [{ dl: company.es.filter(([k]) => !['Sitio web', 'Actividades'].includes(k)) }],
        },
        {
          id: 'servicios',
          title: 'Descripción de los servicios',
          blocks: [
            { p: 'Evolve Tax es una asesoría fiscal internacional especializada en emprendedores y negocios digitales. Nuestros servicios incluyen:' },
            {
              list: [
                ['Estructuración fiscal internacional', 'Análisis de la situación personal y empresarial, comparativa de jurisdicciones y hoja de ruta.'],
                ['Incorporación de empresas en Dubái', 'Constitución de sociedades, licencias, visados de residencia, apertura de cuentas y altas fiscales.'],
                ['Gestión fiscal en Dubái', 'Contabilidad, Corporate Tax, IVA y estados financieros de sociedades en Emiratos.'],
                ['Gestión fiscal en España', 'Obligaciones fiscales de autónomos, sociedades y particulares, facturación internacional y requerimientos.'],
                ['Cambio de residencia fiscal', 'Planificación y documentación de cambios de residencia fiscal desde o hacia España.'],
                ['Régimen Beckham', 'Análisis de requisitos, solicitud y declaraciones del régimen especial para trabajadores desplazados a España.'],
              ],
            },
            { note: 'Importante: el alcance específico, los entregables, los plazos y los honorarios de cada servicio se detallarán en una propuesta o carta de encargo individual que el cliente deberá aceptar antes del inicio de los trabajos.' },
          ],
        },
        {
          id: 'contratacion',
          title: 'Proceso de contratación',
          blocks: [
            {
              ordered: true,
              list: [
                ['Solicitud de información', 'El proceso comienza cuando nos contactas a través de nuestro sitio web o por email.'],
                ['Primera conversación', 'Realizamos una primera conversación, generalmente por videoconferencia, para entender tu situación, tus objetivos y tus plazos.'],
                ['Propuesta', 'Te enviamos una propuesta con la descripción del alcance, los entregables, el calendario, los honorarios y las condiciones particulares.'],
                ['Aceptación y pago', 'El contrato se perfecciona cuando aceptas formalmente la propuesta, mediante firma electrónica o física, y realizas el pago inicial.'],
              ],
            },
            { note: 'Antes de iniciar determinados servicios, en particular la constitución de sociedades, debemos completar la verificación de identidad del cliente y, en su caso, de sus socios y beneficiarios efectivos, conforme a la normativa de prevención del blanqueo de capitales.' },
          ],
        },
        {
          id: 'honorarios',
          title: 'Honorarios y condiciones de pago',
          blocks: [
            { h: 'Estructura de honorarios' },
            { p: 'Nuestros honorarios se establecen caso por caso según la complejidad y el alcance de cada servicio. Pueden consistir en un precio cerrado por proyecto, pago por fases, una cuota periódica para servicios recurrentes (como la contabilidad o la gestión fiscal) o una combinación de los anteriores.' },
            { h: 'Costes de terceros' },
            { p: 'Las tasas de autoridades de zonas francas, visados, registros, traducciones, legalizaciones u otros costes de terceros no están incluidos en nuestros honorarios, salvo que la propuesta indique lo contrario.' },
            { h: 'Formas de pago' },
            { p: 'Aceptamos pagos mediante transferencia bancaria, tarjeta de crédito o débito y otros métodos que se especificarán en la propuesta.' },
            { h: 'Plazos de pago' },
            { p: 'Se requiere un pago inicial antes de iniciar los trabajos. Los pagos posteriores se realizan según los hitos alcanzados o el calendario acordado. Los servicios recurrentes se facturan según la periodicidad pactada.' },
            { h: 'Consecuencias del impago' },
            {
              list: [
                'Nos reservamos el derecho de suspender los servicios hasta recibir el pago pendiente',
                'Podremos aplicar intereses de demora según las leyes aplicables',
                'Podemos rescindir el contrato si el impago persiste más de 30 días',
              ],
            },
          ],
        },
        {
          id: 'obligaciones-cliente',
          title: 'Obligaciones del cliente',
          blocks: [
            { p: 'Para que podamos prestarte nuestros servicios de forma efectiva, necesitas cumplir con lo siguiente:' },
            {
              list: [
                ['Información veraz y completa', 'Garantizar que toda la información y documentación que nos facilitas es precisa, completa y está actualizada. Nuestro asesoramiento se basa en ella.'],
                ['Entrega en plazo', 'Proporcionarnos la documentación con antelación suficiente para cumplir los plazos de presentación ante las autoridades.'],
                ['Comunicación de cambios', 'Informarnos de cualquier cambio relevante en tu situación personal, fiscal o empresarial: residencia, actividad, ingresos o socios.'],
                ['Colaboración activa', 'Participar en las reuniones necesarias, revisar los borradores y responder a nuestras consultas a tiempo.'],
                ['Revisión y aprobación', 'Revisar y aprobar las declaraciones y documentos antes de su presentación cuando así te lo solicitemos.'],
              ],
            },
            { note: 'Importante: el incumplimiento de estas obligaciones puede afectar a los plazos y a la calidad de los resultados. No seremos responsables de retrasos, recargos o sanciones causados por información incompleta o inexacta, o por entregas fuera de plazo.' },
          ],
        },
        {
          id: 'propiedad-intelectual',
          title: 'Propiedad intelectual',
          blocks: [
            { h: 'Entregables del cliente' },
            { p: 'Una vez recibido el pago completo de los honorarios, el cliente podrá utilizar los informes, análisis y documentos elaborados específicamente para su caso para sus propios fines.' },
            { h: 'Metodologías de Evolve Tax' },
            { p: 'Evolve Tax conserva todos los derechos sobre sus metodologías y marcos de análisis, plantillas y recursos preexistentes, conocimientos y técnicas generales, y cualquier mejora de sus metodologías. El cliente recibe una licencia no exclusiva e intransferible para su uso.' },
            { h: 'Software de terceros' },
            { p: 'Si el servicio requiere software contable u otras herramientas de terceros, el cliente será responsable de obtener y mantener las licencias correspondientes, salvo que se acuerde otra cosa.' },
          ],
        },
        {
          id: 'confidencialidad',
          title: 'Confidencialidad',
          blocks: [
            { p: 'Ambas partes nos comprometemos a mantener la confidencialidad de toda la información intercambiada durante la relación, incluyendo:' },
            {
              list: [
                'Información personal, fiscal y patrimonial del cliente',
                'Documentación societaria y contable',
                'Datos financieros y comerciales',
                'Credenciales y accesos a plataformas',
                'Cualquier información marcada como confidencial',
              ],
            },
            { p: 'Excepciones: no se considera confidencial la información que sea de dominio público, que ya conociéramos antes de la relación, que nos sea revelada legalmente por un tercero, o que debamos comunicar por requerimiento legal o a las autoridades competentes, incluidas las obligaciones de comunicación previstas en la normativa de prevención del blanqueo de capitales.' },
            { p: 'Duración: estas obligaciones permanecen vigentes durante la prestación de los servicios y durante cinco (5) años adicionales tras su finalización.' },
          ],
        },
        {
          id: 'inteligencia-artificial',
          title: 'Uso de inteligencia artificial',
          blocks: [
            { p: 'Podemos utilizar herramientas de inteligencia artificial como apoyo en la prestación de nuestros servicios, siempre bajo supervisión profesional. Nos comprometemos a:' },
            {
              list: [
                'No introducir información confidencial del cliente en herramientas de IA públicas sin autorización previa',
                'Utilizar únicamente herramientas que cumplan estándares adecuados de seguridad y privacidad',
                'Anonimizar los datos sensibles antes de procesarlos cuando sea técnicamente posible',
                'Revisar y validar profesionalmente todos los resultados generados con IA',
              ],
            },
            { p: 'El cliente reconoce que las herramientas de IA son auxiliares en nuestro trabajo profesional y que todos los entregables son revisados y validados por nuestro equipo.' },
          ],
        },
        {
          id: 'accesos',
          title: 'Acceso a plataformas y representación',
          blocks: [
            { p: 'Para prestar determinados servicios podemos necesitar acceder a portales de autoridades fiscales, software contable o banca online mediante credenciales, certificados, autorizaciones o apoderamientos que nos facilites.' },
            {
              list: [
                ['Uso limitado', 'Utilizaremos estos accesos únicamente para los fines del servicio contratado.'],
                ['Seguridad', 'Mantendremos las credenciales de forma segura y no las compartiremos con terceros no autorizados.'],
                ['Eliminación', 'Una vez finalizado el servicio, eliminaremos las credenciales y revocaremos los accesos, salvo que acuerdes expresamente mantenerlos.'],
              ],
            },
          ],
        },
        {
          id: 'garantias',
          title: 'Garantías y limitaciones',
          blocks: [
            { h: 'Nuestras garantías' },
            {
              list: [
                'Prestaremos los servicios con diligencia profesional',
                'Aplicaremos la normativa vigente en el momento de prestar el servicio',
                'Asignaremos profesionales con la experiencia adecuada',
                'Cumpliremos los plazos acordados siempre que dispongamos a tiempo de la información necesaria',
              ],
            },
            { h: 'Naturaleza del asesoramiento' },
            { p: 'Nuestro asesoramiento se basa en la información que nos proporcionas y en la normativa y los criterios administrativos vigentes en cada momento, que pueden cambiar. Las decisiones finales sobre tu situación y su implementación te corresponden a ti.' },
            { h: 'Decisiones de terceros' },
            { p: 'La concesión de licencias, visados, cuentas bancarias, certificados de residencia o regímenes fiscales especiales depende de las autoridades y entidades competentes. No podemos garantizar su resultado ni sus plazos.' },
            { h: 'Sin garantía de resultados específicos' },
            { p: 'No garantizamos un ahorro fiscal concreto ni resultados específicos. Aunque podemos proporcionar estimaciones basadas en nuestra experiencia, el resultado depende de tu situación, de la normativa y de las decisiones de las autoridades.' },
          ],
        },
        {
          id: 'responsabilidad',
          title: 'Limitación de responsabilidad',
          blocks: [
            { h: 'Límite agregado' },
            { p: 'Nuestra responsabilidad total hacia ti, por cualquier causa (contractual, extracontractual, negligencia u otra), no excederá el importe total de los honorarios que nos hayas pagado por el servicio concreto que dio origen a la reclamación.' },
            { p: 'En ningún caso seremos responsables por:' },
            {
              list: [
                'Lucro cesante o pérdida de ingresos',
                'Pérdida de oportunidades de negocio',
                'Daño a la reputación',
                'Recargos o sanciones derivados de información incompleta o inexacta facilitada por el cliente, o de entregas fuera de plazo',
                'Pérdida de datos (salvo negligencia grave)',
                'Cualquier otro daño indirecto o consecuencial',
              ],
            },
            { p: 'Plazo para reclamaciones: debes notificarnos por escrito cualquier reclamación en un plazo máximo de seis (6) meses desde la entrega del trabajo que la origina.' },
          ],
        },
        {
          id: 'terminacion',
          title: 'Duración y terminación',
          blocks: [
            { h: 'Terminación por mutuo acuerdo' },
            { p: 'Podemos terminar la relación en cualquier momento por mutuo acuerdo escrito.' },
            { h: 'Terminación con preaviso' },
            { p: 'Cualquiera de las partes puede terminar el servicio con 15 días de preaviso por escrito. El cliente pagará los servicios prestados hasta la fecha de terminación.' },
            { h: 'Terminación por incumplimiento' },
            { p: 'Podemos terminar inmediatamente si el cliente no paga dentro de los 30 días posteriores al vencimiento, incumple materialmente sus obligaciones sin corregirlo en 15 días tras la notificación, no aporta la documentación exigida por la normativa de prevención del blanqueo de capitales, o entra en insolvencia.' },
          ],
        },
        {
          id: 'casos-de-exito',
          title: 'Casos de éxito y testimonios',
          blocks: [
            { p: 'Solo compartiremos información sobre tu caso, testimonios o ejemplos de nuestro trabajo si nos das autorización expresa y por escrito.' },
            { p: 'Tú decides qué información concreta se puede compartir: tu nombre o el de tu empresa, tu sector, la situación de partida, la solución aplicada y tu testimonio.' },
            { p: 'Puedes revocar tu autorización en cualquier momento, y retiraremos el contenido de nuestros materiales lo antes posible.' },
          ],
        },
        {
          id: 'uso-web',
          title: 'Uso del sitio web',
          blocks: [
            { p: 'Te otorgamos una licencia limitada, no exclusiva y revocable para acceder y usar nuestro sitio web únicamente con fines informativos y para solicitar nuestros servicios. No puedes:' },
            {
              list: [
                'Copiar, modificar o distribuir el contenido del sitio sin autorización',
                'Realizar scraping, minería de datos o actividades similares',
                'Intentar obtener acceso no autorizado a sistemas o redes',
                'Usar el sitio para fines ilegales o no autorizados',
              ],
            },
          ],
        },
        {
          id: 'modificaciones',
          title: 'Modificaciones de estos términos',
          blocks: [
            { p: 'Podemos modificar estos Términos ocasionalmente para reflejar cambios en nuestros servicios o en la normativa aplicable. Cuando hagamos cambios significativos, te lo notificaremos por email con al menos 15 días de antelación.' },
            { p: 'Si tienes un servicio en curso, los cambios no afectarán a ese servicio, que seguirá rigiéndose por los Términos vigentes en el momento de la contratación.' },
          ],
        },
        {
          id: 'fuerza-mayor',
          title: 'Fuerza mayor',
          blocks: [
            { p: 'No seremos responsables por incumplimientos causados por circunstancias fuera de nuestro control razonable, incluyendo:' },
            {
              list: [
                'Desastres naturales, pandemias, guerras o conflictos',
                'Fallos masivos de internet, electricidad o telecomunicaciones',
                'Caídas o fallos de los sistemas de las autoridades fiscales o de las zonas francas',
                'Cambios legales o regulatorios que afecten a la prestación del servicio',
                'Fallos de proveedores críticos de tecnología',
              ],
            },
          ],
        },
        {
          id: 'ley-aplicable',
          title: 'Ley aplicable y resolución de disputas',
          blocks: [
            { p: 'Estos Términos se regirán e interpretarán conforme a las leyes que resulten aplicables según la jurisdicción del cliente y la naturaleza de los servicios prestados.' },
            { h: 'Resolución amistosa' },
            { p: 'Antes de iniciar cualquier procedimiento legal, ambas partes nos comprometemos a intentar resolver la disputa de buena fe mediante negociación directa durante al menos 30 días.' },
            { h: 'Mediación' },
            { p: 'Si la negociación directa no resuelve la disputa, las partes acuerdan intentar la mediación antes de acudir a los tribunales.' },
            { p: 'Para clientes ubicados en la Unión Europea que tengan la condición de consumidores, se aplicará la normativa de protección al consumidor correspondiente y la jurisdicción de los tribunales de su lugar de residencia cuando proceda.' },
          ],
        },
        {
          id: 'privacidad',
          title: 'Política de privacidad',
          blocks: [{ p: 'El tratamiento de datos personales se rige por nuestra Política de Privacidad, que forma parte integrante de estos Términos y Condiciones.', link: { label: 'Ver Política de Privacidad →', href: legalPaths.privacy.es } }],
        },
        {
          id: 'contacto',
          title: 'Contacto',
          blocks: [{ p: 'Si tienes preguntas sobre estos Términos, nuestros servicios o cualquier aspecto de tu caso, escríbenos a:', link: mail }],
        },
      ],
      closing: 'Al contratar nuestros servicios o usar nuestro sitio web, confirmas que has leído, entendido y aceptado estos Términos y Condiciones.',
    },
    en: {
      title: 'Terms and conditions',
      description: 'Terms and conditions governing the use of the website and the engagement of Evolve Tax services.',
      lead: 'The terms that govern the use of our website and our services.',
      sections: [
        {
          id: 'welcome',
          title: 'Welcome to Evolve Tax',
          blocks: [
            { p: `By accessing or using our website (${WEB}), requesting information about our services or engaging any of our tax advisory services, you agree to be bound by these Terms and Conditions.` },
            { p: 'If you do not agree with these Terms, please do not use our website or engage our services. These Terms apply to all website visitors, people requesting proposals and clients who engage our services.' },
          ],
        },
        {
          id: 'company',
          title: 'Company information',
          blocks: [{ dl: company.en.filter(([k]) => !['Website', 'Activities'].includes(k)) }],
        },
        {
          id: 'services',
          title: 'Description of services',
          blocks: [
            { p: 'Evolve Tax is an international tax advisory firm specialising in digital entrepreneurs and online businesses. Our services include:' },
            {
              list: [
                ['International tax structuring', 'Analysis of your personal and business situation, jurisdiction comparison and roadmap.'],
                ['Company setup in Dubai', 'Company incorporation, licences, residence visas, bank account opening and tax registrations.'],
                ['Tax management in Dubai', 'Bookkeeping, Corporate Tax, VAT and financial statements for companies in the UAE.'],
                ['Tax management in Spain', 'Tax obligations of freelancers, companies and individuals, international invoicing and tax authority requests.'],
                ['Change of tax residency', 'Planning and documentation of changes of tax residency to or from Spain.'],
                ['Beckham Law', 'Eligibility analysis, application and tax returns under the special regime for workers relocating to Spain.'],
              ],
            },
            { note: 'Important: the specific scope, deliverables, timelines and fees of each service will be detailed in an individual proposal or engagement letter, which the client must accept before work begins.' },
          ],
        },
        {
          id: 'engagement',
          title: 'Engagement process',
          blocks: [
            {
              ordered: true,
              list: [
                ['Request for information', 'The process starts when you contact us through our website or by email.'],
                ['First conversation', 'We hold a first conversation, usually by video call, to understand your situation, goals and timeline.'],
                ['Proposal', 'We send you a proposal describing the scope, deliverables, schedule, fees and specific conditions.'],
                ['Acceptance and payment', 'The contract is concluded when you formally accept the proposal, by electronic or handwritten signature, and make the initial payment.'],
              ],
            },
            { note: 'Before starting certain services, in particular company incorporation, we must complete the identity verification of the client and, where applicable, of its shareholders and ultimate beneficial owners, in accordance with anti-money laundering regulations.' },
          ],
        },
        {
          id: 'fees',
          title: 'Fees and payment terms',
          blocks: [
            { h: 'Fee structure' },
            { p: 'Our fees are set case by case according to the complexity and scope of each service. They may consist of a fixed project price, payment by phases, a recurring fee for ongoing services (such as bookkeeping or tax management), or a combination of these.' },
            { h: 'Third-party costs' },
            { p: 'Fees charged by free zone authorities, visas, registrations, translations, legalisations and other third-party costs are not included in our fees unless the proposal states otherwise.' },
            { h: 'Payment methods' },
            { p: 'We accept payment by bank transfer, credit or debit card and other methods specified in the proposal.' },
            { h: 'Payment terms' },
            { p: 'An initial payment is required before work begins. Subsequent payments are made according to milestones or the agreed schedule. Recurring services are invoiced at the agreed frequency.' },
            { h: 'Consequences of non-payment' },
            {
              list: [
                'We reserve the right to suspend services until the outstanding payment is received',
                'We may charge late-payment interest in accordance with applicable law',
                'We may terminate the contract if non-payment continues for more than 30 days',
              ],
            },
          ],
        },
        {
          id: 'client-obligations',
          title: 'Client obligations',
          blocks: [
            { p: 'For us to provide our services effectively, you need to:' },
            {
              list: [
                ['Provide true and complete information', 'Ensure that all information and documentation you provide is accurate, complete and up to date. Our advice is based on it.'],
                ['Deliver on time', 'Provide documentation far enough in advance to meet filing deadlines with the authorities.'],
                ['Report changes', 'Inform us of any relevant change in your personal, tax or business situation: residency, activity, income or shareholders.'],
                ['Collaborate actively', 'Attend the necessary meetings, review drafts and answer our questions on time.'],
                ['Review and approve', 'Review and approve returns and documents before they are filed when we ask you to.'],
              ],
            },
            { note: 'Important: failure to meet these obligations may affect timelines and the quality of the results. We will not be liable for delays, surcharges or penalties caused by incomplete or inaccurate information or late delivery.' },
          ],
        },
        {
          id: 'intellectual-property',
          title: 'Intellectual property',
          blocks: [
            { h: 'Client deliverables' },
            { p: 'Once fees have been paid in full, the client may use the reports, analyses and documents prepared specifically for their case for their own purposes.' },
            { h: 'Evolve Tax methodologies' },
            { p: 'Evolve Tax retains all rights to its methodologies and analytical frameworks, pre-existing templates and resources, general know-how and techniques, and any improvements to its methodologies. The client receives a non-exclusive, non-transferable licence to use them.' },
            { h: 'Third-party software' },
            { p: 'If the service requires accounting software or other third-party tools, the client is responsible for obtaining and maintaining the corresponding licences, unless otherwise agreed.' },
          ],
        },
        {
          id: 'confidentiality',
          title: 'Confidentiality',
          blocks: [
            { p: 'Both parties undertake to keep confidential all information exchanged during the relationship, including:' },
            {
              list: [
                'The client’s personal, tax and asset information',
                'Corporate and accounting documentation',
                'Financial and commercial data',
                'Credentials and platform access',
                'Any information marked as confidential',
              ],
            },
            { p: 'Exceptions: information that is in the public domain, that we already knew before the relationship, that is lawfully disclosed to us by a third party, or that we must disclose by legal requirement or to the competent authorities — including reporting obligations under anti-money laundering regulations — is not considered confidential.' },
            { p: 'Duration: these obligations remain in force while the services are provided and for five (5) additional years after they end.' },
          ],
        },
        {
          id: 'artificial-intelligence',
          title: 'Use of artificial intelligence',
          blocks: [
            { p: 'We may use artificial intelligence tools to support the provision of our services, always under professional supervision. We undertake to:' },
            {
              list: [
                'Not enter confidential client information into public AI tools without prior authorisation',
                'Only use tools that meet appropriate security and privacy standards',
                'Anonymise sensitive data before processing it whenever technically possible',
                'Professionally review and validate all AI-generated output',
              ],
            },
            { p: 'The client acknowledges that AI tools are auxiliary to our professional work and that all deliverables are reviewed and validated by our team.' },
          ],
        },
        {
          id: 'platform-access',
          title: 'Access to platforms and representation',
          blocks: [
            { p: 'To provide certain services we may need to access tax authority portals, accounting software or online banking using credentials, certificates, authorisations or powers of attorney that you provide.' },
            {
              list: [
                ['Limited use', 'We will use this access only for the purposes of the service engaged.'],
                ['Security', 'We will keep credentials secure and will not share them with unauthorised third parties.'],
                ['Removal', 'Once the service ends, we will delete credentials and revoke access unless you expressly agree to keep them.'],
              ],
            },
          ],
        },
        {
          id: 'warranties',
          title: 'Warranties and limitations',
          blocks: [
            { h: 'Our warranties' },
            {
              list: [
                'We will provide the services with professional diligence',
                'We will apply the regulations in force at the time the service is provided',
                'We will assign professionals with the appropriate experience',
                'We will meet the agreed deadlines provided we receive the necessary information on time',
              ],
            },
            { h: 'Nature of our advice' },
            { p: 'Our advice is based on the information you provide and on the laws and administrative criteria in force at any given time, which may change. Final decisions about your situation and their implementation are yours.' },
            { h: 'Third-party decisions' },
            { p: 'The granting of licences, visas, bank accounts, residency certificates or special tax regimes depends on the competent authorities and institutions. We cannot guarantee their outcome or timing.' },
            { h: 'No guarantee of specific results' },
            { p: 'We do not guarantee any specific tax saving or result. Although we may provide estimates based on our experience, the outcome depends on your situation, the law and the decisions of the authorities.' },
          ],
        },
        {
          id: 'liability',
          title: 'Limitation of liability',
          blocks: [
            { h: 'Aggregate limit' },
            { p: 'Our total liability to you for any cause (contractual, non-contractual, negligence or otherwise) shall not exceed the total fees you have paid us for the specific service giving rise to the claim.' },
            { p: 'In no event shall we be liable for:' },
            {
              list: [
                'Loss of profits or revenue',
                'Loss of business opportunities',
                'Reputational damage',
                'Surcharges or penalties resulting from incomplete or inaccurate information provided by the client, or from late delivery',
                'Loss of data (except in cases of gross negligence)',
                'Any other indirect or consequential damage',
              ],
            },
            { p: 'Claims period: you must notify us in writing of any claim within six (6) months of delivery of the work giving rise to it.' },
          ],
        },
        {
          id: 'termination',
          title: 'Duration and termination',
          blocks: [
            { h: 'Termination by mutual agreement' },
            { p: 'We may end the relationship at any time by mutual written agreement.' },
            { h: 'Termination with notice' },
            { p: 'Either party may terminate the service with 15 days’ written notice. The client will pay for the services provided up to the termination date.' },
            { h: 'Termination for breach' },
            { p: 'We may terminate immediately if the client fails to pay within 30 days of the due date, materially breaches their obligations without remedying the breach within 15 days of notice, fails to provide the documentation required by anti-money laundering regulations, or becomes insolvent.' },
          ],
        },
        {
          id: 'success-stories',
          title: 'Success stories and testimonials',
          blocks: [
            { p: 'We will only share information about your case, testimonials or examples of our work with your express written authorisation.' },
            { p: 'You decide what specific information can be shared: your name or your company’s, your sector, the starting situation, the solution applied and your testimonial.' },
            { p: 'You may revoke your authorisation at any time, and we will remove the content from our materials as soon as possible.' },
          ],
        },
        {
          id: 'website-use',
          title: 'Use of the website',
          blocks: [
            { p: 'We grant you a limited, non-exclusive and revocable licence to access and use our website solely for informational purposes and to request our services. You may not:' },
            {
              list: [
                'Copy, modify or distribute the site’s content without authorisation',
                'Carry out scraping, data mining or similar activities',
                'Attempt to gain unauthorised access to systems or networks',
                'Use the site for illegal or unauthorised purposes',
              ],
            },
          ],
        },
        {
          id: 'changes',
          title: 'Changes to these terms',
          blocks: [
            { p: 'We may modify these Terms from time to time to reflect changes in our services or in applicable regulations. When we make significant changes, we will notify you by email at least 15 days in advance.' },
            { p: 'If you have a service in progress, the changes will not affect that service, which will continue to be governed by the Terms in force when it was engaged.' },
          ],
        },
        {
          id: 'force-majeure',
          title: 'Force majeure',
          blocks: [
            { p: 'We shall not be liable for failures caused by circumstances beyond our reasonable control, including:' },
            {
              list: [
                'Natural disasters, pandemics, wars or conflicts',
                'Widespread internet, power or telecommunications failures',
                'Outages or failures of tax authority or free zone systems',
                'Legal or regulatory changes affecting the provision of the service',
                'Failures of critical technology providers',
              ],
            },
          ],
        },
        {
          id: 'applicable-law',
          title: 'Applicable law and dispute resolution',
          blocks: [
            { p: 'These Terms shall be governed by and interpreted in accordance with the laws applicable according to the client’s jurisdiction and the nature of the services provided.' },
            { h: 'Amicable resolution' },
            { p: 'Before starting any legal proceedings, both parties undertake to try to resolve the dispute in good faith through direct negotiation for at least 30 days.' },
            { h: 'Mediation' },
            { p: 'If direct negotiation does not resolve the dispute, the parties agree to attempt mediation before going to court.' },
            { p: 'For clients located in the European Union who qualify as consumers, the corresponding consumer protection regulations and the jurisdiction of the courts of their place of residence shall apply where appropriate.' },
          ],
        },
        {
          id: 'privacy',
          title: 'Privacy policy',
          blocks: [{ p: 'The processing of personal data is governed by our Privacy Policy, which forms an integral part of these Terms and Conditions.', link: { label: 'View Privacy Policy →', href: legalPaths.privacy.en } }],
        },
        {
          id: 'contact',
          title: 'Contact',
          blocks: [{ p: 'If you have questions about these Terms, our services or any aspect of your case, write to us at:', link: mail }],
        },
      ],
      closing: 'By engaging our services or using our website, you confirm that you have read, understood and accepted these Terms and Conditions.',
    },
  },

  /* ================================================================
     POLÍTICA DE COOKIES
     ================================================================ */
  cookies: {
    es: {
      title: 'Política de cookies',
      description: 'Qué cookies utiliza el sitio web de Evolve Tax y cómo puedes gestionarlas.',
      lead: 'Conoce qué cookies utilizamos y cómo gestionarlas.',
      sections: [
        {
          id: 'uso',
          title: 'Uso de cookies en nuestro sitio',
          blocks: [
            { p: 'En Evolve Tax queremos ser transparentes sobre las cookies y tecnologías similares que puede utilizar nuestro sitio web.' },
            { p: 'Esta Política de Cookies forma parte de nuestra Política de Privacidad y explica qué son las cookies, cuáles utilizamos, para qué las usamos y cómo puedes controlarlas.' },
          ],
        },
        {
          id: 'que-son',
          title: '¿Qué son las cookies?',
          blocks: [
            { p: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un periodo de tiempo, para que no tengas que volver a configurarlas cada vez que regresas.' },
            { p: 'Además de las cookies tradicionales, existen tecnologías similares:' },
            {
              list: [
                ['Píxeles de seguimiento', 'pequeñas imágenes invisibles insertadas en páginas web o emails'],
                ['Almacenamiento local', 'datos guardados directamente en tu navegador'],
                ['Web beacons', 'fragmentos de código que recopilan información sobre tu navegación'],
              ],
            },
            { p: 'En esta política, cuando hablamos de "cookies" nos referimos a todas estas tecnologías.' },
          ],
        },
        {
          id: 'cookies-que-usamos',
          title: '¿Qué cookies utilizamos?',
          blocks: [
            { p: 'Actualmente, nuestro sitio web no utiliza cookies analíticas, publicitarias ni de redes sociales, y no instala cookies de terceros con fines de seguimiento.' },
            { p: 'Únicamente podrían utilizarse cookies o tecnologías de almacenamiento estrictamente necesarias para el funcionamiento técnico y la seguridad del sitio, que no requieren tu consentimiento.' },
            { note: 'Si en el futuro incorporamos cookies analíticas, publicitarias o de otro tipo que requieran consentimiento, te lo pediremos a través de un panel de configuración antes de instalarlas y actualizaremos esta política con el detalle de cada una.' },
            { h: 'Enlaces a redes sociales' },
            { p: 'Nuestro sitio incluye enlaces a nuestros perfiles de LinkedIn. Son enlaces simples: no cargan contenido de la red social ni instalan sus cookies hasta que haces clic y visitas su web, momento en el que se aplican sus propias políticas.' },
          ],
        },
        {
          id: 'tipos',
          title: 'Tipos de cookies',
          blocks: [
            { p: 'Para que sepas qué significa cada categoría, estos son los tipos de cookies que existen:' },
            { h: 'Según su duración' },
            {
              list: [
                ['Cookies de sesión', 'se eliminan automáticamente cuando cierras el navegador.'],
                ['Cookies persistentes', 'permanecen en tu dispositivo durante un tiempo determinado, que puede ir de días a años.'],
              ],
            },
            { h: 'Según quién las gestiona' },
            {
              list: [
                ['Cookies propias', 'las crea y gestiona directamente el titular del sitio web.'],
                ['Cookies de terceros', 'las crean y gestionan empresas externas que prestan servicios al sitio web.'],
              ],
            },
            { h: 'Según su finalidad' },
            {
              list: [
                ['Estrictamente necesarias', 'imprescindibles para que el sitio funcione y sea seguro. No se pueden desactivar.'],
                ['Analíticas', 'miden cómo se usa el sitio: páginas visitadas, tiempo de permanencia o fuentes de tráfico.'],
                ['De funcionalidad', 'recuerdan preferencias como el idioma o la región.'],
                ['De publicidad', 'permiten mostrar anuncios relevantes y medir campañas.'],
                ['De redes sociales', 'permiten compartir contenido y medir la interacción con redes sociales.'],
              ],
            },
          ],
        },
        {
          id: 'gestion',
          title: '¿Cómo puedo gestionar las cookies?',
          blocks: [
            { p: 'Puedes gestionar las cookies directamente desde la configuración de tu navegador:' },
            {
              list: [
                ['Google Chrome', 'Menú (tres puntos) → Configuración → Privacidad y seguridad → Cookies de terceros.'],
                ['Mozilla Firefox', 'Menú (tres líneas) → Ajustes → Privacidad y seguridad.'],
                ['Safari', 'Ajustes → Privacidad → Gestionar datos de sitios web.'],
                ['Microsoft Edge', 'Menú (tres puntos) → Configuración → Cookies y permisos del sitio.'],
              ],
            },
            { h: 'Navegación privada' },
            { p: 'La mayoría de navegadores ofrecen un modo de navegación privada que no guarda cookies persistentes. Las cookies de sesión sí se utilizan mientras dura la sesión.' },
            { h: 'Herramientas anti-seguimiento' },
            { p: 'Existen extensiones que bloquean rastreadores, como Ghostery, Privacy Badger o uBlock Origin.' },
            { h: 'Dispositivos móviles' },
            {
              list: [
                ['iOS (iPhone/iPad)', 'Ajustes → Safari → activa "Bloquear todas las cookies" o "Evitar rastreo entre sitios".'],
                ['Android', 'Chrome → Configuración → Configuración de sitios → Cookies de terceros.'],
              ],
            },
          ],
        },
        {
          id: 'consecuencias',
          title: 'Consecuencias de desactivar las cookies',
          blocks: [
            { p: 'Si decides desactivar ciertas cookies, es posible que:' },
            {
              list: [
                'Algunas funcionalidades del sitio no estén disponibles',
                'Tengas que volver a introducir tus preferencias cada vez que visites el sitio',
                'Ciertos contenidos no se muestren correctamente',
              ],
            },
            { p: 'Las cookies estrictamente necesarias no se pueden desactivar si quieres usar el sitio web.' },
          ],
        },
        {
          id: 'actualizaciones',
          title: 'Actualizaciones de esta política',
          blocks: [
            { p: 'Podemos actualizar esta Política de Cookies para reflejar cambios en las cookies que utilizamos o por razones legales. Cuando hagamos cambios significativos, lo indicaremos en la fecha de última actualización al inicio de este documento. Te recomendamos revisarla periódicamente.' },
          ],
        },
        {
          id: 'mas-informacion',
          title: 'Más información',
          blocks: [
            { p: 'Para más información sobre cómo tratamos tus datos personales, consulta nuestra Política de Privacidad.', link: { label: 'Ver Política de Privacidad →', href: legalPaths.privacy.es } },
            { p: 'También puedes obtener más información sobre las cookies en la guía sobre el uso de cookies de la Agencia Española de Protección de Datos (AEPD).' },
          ],
        },
        {
          id: 'preguntas',
          title: '¿Tienes preguntas?',
          blocks: [{ p: 'Si tienes cualquier duda sobre nuestra Política de Cookies, puedes escribirnos a:', link: mail }],
        },
      ],
      closing: 'Esta Política de Cookies forma parte integrante de nuestros Términos y Condiciones y de nuestra Política de Privacidad.',
    },
    en: {
      title: 'Cookie policy',
      description: 'Which cookies the Evolve Tax website uses and how you can manage them.',
      lead: 'Learn which cookies we use and how to manage them.',
      sections: [
        {
          id: 'use',
          title: 'Use of cookies on our site',
          blocks: [
            { p: 'At Evolve Tax we want to be transparent about the cookies and similar technologies our website may use.' },
            { p: 'This Cookie Policy is part of our Privacy Policy and explains what cookies are, which ones we use, what we use them for and how you can control them.' },
          ],
        },
        {
          id: 'what-are-cookies',
          title: 'What are cookies?',
          blocks: [
            { p: 'Cookies are small text files stored on your device (computer, tablet or phone) when you visit a website. They allow the site to remember your actions and preferences for a period of time, so you don’t have to set them again every time you return.' },
            { p: 'In addition to traditional cookies, there are similar technologies:' },
            {
              list: [
                ['Tracking pixels', 'small invisible images embedded in web pages or emails'],
                ['Local storage', 'data saved directly in your browser'],
                ['Web beacons', 'snippets of code that collect information about your browsing'],
              ],
            },
            { p: 'In this policy, "cookies" refers to all of these technologies.' },
          ],
        },
        {
          id: 'cookies-we-use',
          title: 'Which cookies do we use?',
          blocks: [
            { p: 'Our website currently does not use analytics, advertising or social media cookies, and does not install third-party tracking cookies.' },
            { p: 'Only cookies or storage technologies that are strictly necessary for the technical operation and security of the site may be used, and these do not require your consent.' },
            { note: 'If in the future we add analytics, advertising or other cookies that require consent, we will ask for it through a settings panel before installing them and will update this policy with the details of each one.' },
            { h: 'Links to social networks' },
            { p: 'Our site includes links to our LinkedIn profiles. These are plain links: they do not load content from the social network or install its cookies until you click and visit its website, at which point its own policies apply.' },
          ],
        },
        {
          id: 'types',
          title: 'Types of cookies',
          blocks: [
            { p: 'So that you know what each category means, these are the types of cookies that exist:' },
            { h: 'By duration' },
            {
              list: [
                ['Session cookies', 'deleted automatically when you close your browser.'],
                ['Persistent cookies', 'remain on your device for a set period, which can range from days to years.'],
              ],
            },
            { h: 'By who manages them' },
            {
              list: [
                ['First-party cookies', 'created and managed directly by the website owner.'],
                ['Third-party cookies', 'created and managed by external companies that provide services to the website.'],
              ],
            },
            { h: 'By purpose' },
            {
              list: [
                ['Strictly necessary', 'essential for the site to work and be secure. They cannot be disabled.'],
                ['Analytics', 'measure how the site is used: pages visited, time spent or traffic sources.'],
                ['Functionality', 'remember preferences such as language or region.'],
                ['Advertising', 'allow relevant ads to be shown and campaigns to be measured.'],
                ['Social media', 'allow content to be shared and interaction with social networks to be measured.'],
              ],
            },
          ],
        },
        {
          id: 'manage',
          title: 'How can I manage cookies?',
          blocks: [
            { p: 'You can manage cookies directly from your browser settings:' },
            {
              list: [
                ['Google Chrome', 'Menu (three dots) → Settings → Privacy and security → Third-party cookies.'],
                ['Mozilla Firefox', 'Menu (three lines) → Settings → Privacy & Security.'],
                ['Safari', 'Settings → Privacy → Manage Website Data.'],
                ['Microsoft Edge', 'Menu (three dots) → Settings → Cookies and site permissions.'],
              ],
            },
            { h: 'Private browsing' },
            { p: 'Most browsers offer a private browsing mode that does not keep persistent cookies. Session cookies are still used for the duration of the session.' },
            { h: 'Anti-tracking tools' },
            { p: 'There are extensions that block trackers, such as Ghostery, Privacy Badger or uBlock Origin.' },
            { h: 'Mobile devices' },
            {
              list: [
                ['iOS (iPhone/iPad)', 'Settings → Safari → turn on "Block All Cookies" or "Prevent Cross-Site Tracking".'],
                ['Android', 'Chrome → Settings → Site settings → Third-party cookies.'],
              ],
            },
          ],
        },
        {
          id: 'consequences',
          title: 'Consequences of disabling cookies',
          blocks: [
            { p: 'If you decide to disable certain cookies:' },
            {
              list: [
                'Some features of the site may not be available',
                'You may have to re-enter your preferences each time you visit',
                'Some content may not display correctly',
              ],
            },
            { p: 'Strictly necessary cookies cannot be disabled if you want to use the website.' },
          ],
        },
        {
          id: 'updates',
          title: 'Updates to this policy',
          blocks: [
            { p: 'We may update this Cookie Policy to reflect changes in the cookies we use or for legal reasons. When we make significant changes, we will show it in the last updated date at the beginning of this document. We recommend reviewing it periodically.' },
          ],
        },
        {
          id: 'more-information',
          title: 'More information',
          blocks: [
            { p: 'For more information about how we process your personal data, see our Privacy Policy.', link: { label: 'View Privacy Policy →', href: legalPaths.privacy.en } },
            { p: 'You can also find more information about cookies in the cookie guide published by the Spanish Data Protection Agency (AEPD).' },
          ],
        },
        {
          id: 'questions',
          title: 'Any questions?',
          blocks: [{ p: 'If you have any questions about our Cookie Policy, write to us at:', link: mail }],
        },
      ],
      closing: 'This Cookie Policy forms an integral part of our Terms and Conditions and our Privacy Policy.',
    },
  },
};
