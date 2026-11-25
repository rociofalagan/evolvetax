import type { PostKey } from '../routes';
import type { PostContent } from './types';

// Artículos del blog en español.
export const postsEs: Record<PostKey, PostContent> = {
  /* ------------------------------------------------------------------ */
  uaeTax: {
    metaTitle: 'Sistema fiscal de Emiratos 2026: Corporate Tax e IVA',
    metaDescription:
      'Corporate Tax, IVA, reglas de las free zones y lo que sigue sin tributar en Emiratos en 2026, explicado para quien opera su negocio desde Dubái.',
    title: 'El sistema fiscal de Emiratos en 2026: Corporate Tax, IVA y lo que sigue sin tributar',
    excerpt:
      'Emiratos ya no es una jurisdicción sin impuestos para las empresas. Así funcionan hoy el Corporate Tax, el régimen de las free zones, el IVA y la tributación personal, y qué implica si tienes un negocio digital.',
    tags: ['Corporate Tax', 'IVA', 'Free zones', 'Dubái'],
    takeaways: [
      'Las personas físicas siguen sin pagar impuesto sobre la renta por su salario o sus inversiones.',
      'Las sociedades pagan un 9 % de Corporate Tax sobre la base imponible que supera 375.000 AED, también las de free zone salvo que puedan aplicar el 0 %.',
      'El IVA del 5 % se aplica a la mayoría de bienes y servicios, con registro obligatorio a partir de 375.000 AED de operaciones sujetas.',
      'Registrarse, llevar contabilidad y presentar declaraciones es obligatorio aunque no haya impuesto a pagar.',
    ],
    body: [
      { p: `Durante años, Emiratos fue sinónimo de “sin impuestos”. Esa imagen cambió en 2018 con la llegada del IVA y, sobre todo, en 2023 con el Corporate Tax federal. Emiratos sigue siendo una de las jurisdicciones más competitivas del mundo, pero hoy tiene un sistema fiscal real, con registros, plazos y sanciones.` },
      { p: `Esta guía resume los principales impuestos que afectan a emprendedores y negocios digitales que operan desde Emiratos.` },

      { h2: `Tributación personal: sigue sin haber impuesto sobre la renta`, id: 'tributacion-personal' },
      { p: `Emiratos no grava con un impuesto sobre la renta los salarios, dividendos, intereses o ganancias de capital que obtienen las personas físicas. Tampoco existe un impuesto federal sobre el patrimonio ni sobre sucesiones.` },
      { p: `La excepción es la actividad empresarial: las personas físicas que desarrollan una actividad empresarial o profesional en Emiratos quedan sujetas al Corporate Tax cuando la facturación de esa actividad supera 1 millón de AED en un año natural.` },
      { callout: { title: `Certificado de residencia fiscal`, text: `Para acreditar que eres residente fiscal en Emiratos, por ejemplo ante la Hacienda del país del que te has ido, puedes solicitar un certificado de residencia fiscal. Como regla general, lo obtienen las personas que pasan al menos 183 días en Emiratos en un periodo de 12 meses, o al menos 90 días si además cumplen otras condiciones, como tener visado de residencia y vivienda permanente o empleo en el país.` } },

      { h2: `Corporate Tax: 9 % a partir de 375.000 AED`, id: 'corporate-tax' },
      { p: `El Corporate Tax federal se aplica a los ejercicios iniciados a partir del 1 de junio de 2023. Los tipos generales son:` },
      { table: { head: ['Base imponible', 'Tipo'], rows: [['Hasta 375.000 AED', '0 %'], ['Más de 375.000 AED', '9 %']] } },
      { p: `Los grandes grupos multinacionales con una facturación consolidada de al menos 750 millones de euros están sujetos además, desde 2025, a un impuesto mínimo complementario del 15 %.` },
      { p: `Todos los sujetos pasivos deben registrarse en la Federal Tax Authority (FTA) y presentar una declaración anual en los nueve meses siguientes al cierre de su ejercicio, **aunque la cuota a pagar sea cero**.` },
      { h3: `Small Business Relief` },
      { p: `Los negocios residentes con ingresos de hasta 3 millones de AED pueden acogerse al Small Business Relief y considerarse sin base imponible en los periodos que terminen a más tardar el 31 de diciembre de 2026. Hay que solicitarlo en la declaración, y no está disponible para las sociedades de free zone cualificadas ni para miembros de grandes grupos multinacionales.` },

      { h2: `Sociedades de free zone: el 0 % no es automático`, id: 'free-zones' },
      { p: `Las sociedades de free zone están sujetas al Corporate Tax como cualquier otra. Sin embargo, pueden aplicar un tipo del 0 % sobre sus rentas cualificadas si cumplen los requisitos para ser **Qualifying Free Zone Person**:` },
      {
        list: [
          `Mantener sustancia suficiente en la free zone: activos, empleados y gastos operativos`,
          `Obtener rentas cualificadas, como las de operaciones con otras sociedades de free zone o de determinadas actividades cualificadas`,
          `Mantener los ingresos no cualificados por debajo del umbral de minimis: el 5 % de los ingresos totales o 5 millones de AED, lo que sea menor`,
          `Formular estados financieros auditados y cumplir la normativa de precios de transferencia`,
        ],
      },
      { p: `Las rentas que no cumplen tributan al 9 %. Si se dejan de cumplir las condiciones, la sociedad pierde el 0 % en ese periodo y en los cuatro siguientes. Por eso importa elegir bien la estructura y saber dónde están tus clientes. Lo explicamos en detalle en [Free zone o mainland en Dubái](/es/blog/free-zone-o-mainland-dubai).` },

      { h2: `IVA: 5 % en la mayoría de bienes y servicios`, id: 'iva' },
      { p: `El IVA se aplica en Emiratos desde el 1 de enero de 2018 con un tipo general del 5 %. Algunas operaciones tributan al 0 %, como determinadas exportaciones de servicios, y otras están exentas, como ciertos servicios financieros y la vivienda residencial.` },
      {
        list: [
          [`Registro obligatorio`, `cuando las operaciones sujetas superan 375.000 AED en los últimos 12 meses o se prevé superarlos en los próximos 30 días.`],
          [`Registro voluntario`, `posible a partir de 187.500 AED.`],
          [`Declaraciones`, `normalmente trimestrales, cada una con su plazo de presentación y pago.`],
        ],
      },
      { p: `Los negocios no residentes que prestan servicios a consumidores en Emiratos, como los servicios digitales, pueden tener que registrarse con independencia del umbral. Si vendes productos digitales, lee nuestra guía sobre el [IVA en productos digitales y cursos online](/es/blog/iva-productos-digitales-cursos-online).` },

      { h2: `Otras obligaciones a tener en cuenta`, id: 'otras-obligaciones' },
      {
        list: [
          [`Impuestos especiales`, `sobre productos concretos como el tabaco, las bebidas energéticas y las bebidas azucaradas.`],
          [`Titularidad real`, `las sociedades deben mantener actualizado un registro de sus beneficiarios efectivos.`],
          [`Conservación de registros`, `la documentación contable y fiscal debe conservarse al menos siete años.`],
          [`Factura electrónica`, `Emiratos ha anunciado la implantación progresiva de la factura electrónica obligatoria, empezando por las empresas más grandes.`],
        ],
      },

      { h2: `Qué significa para un negocio digital`, id: 'negocio-digital' },
      { p: `Emiratos sigue siendo un lugar muy competitivo para un negocio internacional: sin impuesto sobre la renta personal, con un Corporate Tax del 9 % y un umbral generoso y, para las sociedades de free zone bien estructuradas, un 0 % sobre las rentas cualificadas.` },
      { p: `Pero “competitivo” no significa “sin obligaciones”. Toda sociedad debe estar registrada, llevar la contabilidad en orden y presentar a tiempo, que es justo lo que cubre nuestra [gestión fiscal en Dubái](/es/servicios/gestion-fiscal-en-dubai), igual que nos encargamos de la [incorporación de empresas en Dubái](/es/servicios/crear-empresa-en-dubai). Y trasladar tu empresa a Dubái no cambia dónde pagas impuestos tú: eso depende de tu propia residencia fiscal, como explicamos en [¿Tributa en España una empresa de Dubái?](/es/blog/empresa-dubai-tributa-en-espana)` },
    ],
    faq: [
      { q: '¿Dubái está libre de impuestos para las empresas?', a: 'Ya no. Desde 2023, las sociedades pagan un 9 % de Corporate Tax sobre la base imponible que supera 375.000 AED. Las de free zone pueden pagar un 0 % sobre las rentas cualificadas si cumplen los requisitos.' },
      { q: '¿Se paga impuesto sobre la renta por el salario en Emiratos?', a: 'No. Emiratos no grava los rendimientos del trabajo, los dividendos ni las ganancias de capital de las personas físicas.' },
      { q: '¿Tengo que registrarme en el Corporate Tax si no tengo beneficios?', a: 'Sí. El registro y la declaración anual son obligatorios para los sujetos pasivos aunque no haya cuota a pagar.' },
      { q: '¿Cuándo es obligatorio registrarse en el IVA de Emiratos?', a: 'Cuando tus operaciones sujetas superan 375.000 AED en los últimos 12 meses o se prevé que superen esa cantidad en los próximos 30 días.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  beckham: {
    metaTitle: 'Ley Beckham 2026: requisitos, tipos y cómo solicitarla',
    metaDescription:
      'Quién puede acogerse a la Ley Beckham tras la reforma de 2023, el tipo fijo del 24 %, qué rentas extranjeras quedan fuera y el plazo de seis meses.',
    title: 'Ley Beckham en España: requisitos, tipos y cómo solicitarla',
    excerpt:
      'La Ley Beckham permite a quien se muda a España tributar a un tipo fijo del 24 % por sus rendimientos del trabajo durante hasta seis años. Te explicamos quién puede acogerse tras la reforma de 2023, cómo tributan las rentas y el plazo que no puedes saltarte.',
    tags: ['Ley Beckham', 'Mudarse a España', 'Residencia fiscal', 'Teletrabajo'],
    takeaways: [
      'Los rendimientos del trabajo tributan al 24 % hasta 600.000 € y al 47 % por encima.',
      'La mayoría de rentas obtenidas fuera de España no tributan en España mientras se aplica el régimen.',
      'Dura el año en que pasas a ser residente y los cinco siguientes.',
      'No debes haber sido residente fiscal en España en los cinco años anteriores.',
      'La solicitud (modelo 149) se presenta en los seis meses siguientes al inicio de tu actividad en España.',
    ],
    body: [
      { p: `Cuando alguien se muda a España, lo habitual es que pase a ser residente fiscal y empiece a tributar por su renta mundial a tipos progresivos que, según la comunidad autónoma, pueden llegar al 47 % o más. El régimen especial para trabajadores desplazados a España, conocido popularmente como Ley Beckham por el futbolista que fue uno de sus beneficiarios más conocidos, ofrece una alternativa muy distinta.` },
      { p: `Desde 2023, el régimen también está abierto a teletrabajadores, administradores de sociedades y emprendedores, lo que lo ha hecho especialmente relevante para profesionales digitales.` },

      { h2: `Cómo funciona la Ley Beckham`, id: 'como-funciona' },
      { p: `Si cumples los requisitos, pasas a ser residente fiscal en España pero tributas en el IRPF con las reglas de los no residentes. En la práctica, esto significa que:` },
      {
        list: [
          `Los rendimientos del trabajo tributan a un tipo fijo del 24 % hasta 600.000 € al año, y al 47 % por el exceso.`,
          `Todos los rendimientos del trabajo obtenidos mientras se aplica el régimen se consideran obtenidos en España.`,
          `La mayoría de las demás rentas obtenidas fuera de España, como dividendos, intereses o ganancias de capital extranjeros, no tributan en España.`,
          `Las rentas del capital de fuente española tributan a los tipos del ahorro.`,
          `A efectos del Impuesto sobre el Patrimonio, en general solo se tienen en cuenta los bienes situados en España.`,
        ],
      },
      { p: `En lugar de la Renta ordinaria, los contribuyentes acogidos al régimen presentan el **modelo 151**.` },

      { h2: `Quién puede acogerse tras la reforma de 2023`, id: 'requisitos' },
      { p: `La Ley de Startups, en vigor desde 2023, flexibilizó los requisitos. Para acogerte debes:` },
      {
        olist: [
          `No haber sido residente fiscal en España en los cinco periodos impositivos anteriores al desplazamiento (antes eran diez).`,
          `Desplazarte a España por alguno de los motivos que recoge la ley.`,
          `No obtener rentas a través de un establecimiento permanente en España, salvo en casos concretos como las actividades emprendedoras cualificadas.`,
        ],
      },
      { p: `El desplazamiento debe deberse a alguno de estos motivos:` },
      {
        list: [
          [`Un contrato de trabajo`, `con un empleador español o extranjero, incluido el teletrabajo realizado desde España por medios telemáticos.`],
          [`Adquirir la condición de administrador de una sociedad`, `con algunos límites si la sociedad es patrimonial.`],
          [`Una actividad emprendedora`, `calificada como innovadora y de especial interés económico para España.`],
          [`Un trabajo como profesional altamente cualificado`, `para startups o para actividades de formación, investigación, desarrollo e innovación.`],
        ],
      },
      { callout: { title: `¿Y los autónomos?`, text: `Una actividad como autónomo, por sí sola, no da acceso al régimen. Los autónomos solo pueden beneficiarse por vías concretas, como una actividad emprendedora reconocida como innovadora.` } },

      { h2: `La familia también puede acogerse`, id: 'familia' },
      { p: `La reforma extendió también el régimen al cónyuge, o al otro progenitor de tus hijos, y a los hijos menores de 25 años, o de cualquier edad si tienen discapacidad, siempre que se desplacen contigo o durante el primer periodo impositivo y cumplan condiciones adicionales sobre sus rentas.` },

      { h2: `Cómo solicitarla: el modelo 149 y el plazo de seis meses`, id: 'como-solicitarla' },
      { p: `La solicitud se presenta con el modelo 149 en un plazo de **seis meses** desde el inicio de tu actividad en España. Esa fecha suele ser la del alta en la Seguridad Social española o, si sigues en el sistema de seguridad social de tu país de origen, la que figura en el certificado correspondiente.` },
      { p: `El plazo es estricto: una vez pasado, ya no puedes acogerte al régimen por ese desplazamiento. Por eso conviene analizar tu caso antes de llegar, no después.` },
      { p: `También puedes renunciar al régimen más adelante: la renuncia se presenta en noviembre y diciembre del año anterior a aquel en que deba surtir efecto.` },

      { h2: `¿Compensa? Una comparación sencilla`, id: 'comparacion' },
      { p: `Imagina un teletrabajador que se muda a España con un salario de 120.000 € y algunas rentas de inversiones en el extranjero:` },
      {
        table: {
          head: ['', 'Régimen general', 'Ley Beckham'],
          rows: [
            ['Tributación del salario', 'Tipos progresivos que pueden llegar al 47 % o más según la comunidad', 'Tipo fijo del 24 %'],
            ['Dividendos e intereses extranjeros', 'Tributan en España', 'En general no tributan en España'],
            ['Impuesto sobre el Patrimonio', 'Patrimonio mundial', 'En general solo bienes en España'],
          ],
        },
      },
      { p: `El régimen no es automáticamente mejor para todo el mundo: quien tiene rentas más bajas, deducciones que solo existen en el régimen general o planes de quedarse en España muchos años debería comparar ambas opciones con números reales.` },

      { h2: `Antes de mudarte`, id: 'antes-de-mudarte' },
      { p: `La Ley Beckham es uno de los regímenes más atractivos de Europa, pero los requisitos y el plazo no dejan margen de error. Si estás planeando el traslado, revisa cómo encaja el régimen en tu [cambio de residencia fiscal](/es/servicios/cambio-de-residencia-fiscal) o mira cómo trabajamos las [solicitudes del régimen Beckham](/es/servicios/regimen-beckham).` },
    ],
    faq: [
      { q: '¿Pueden los nómadas digitales acogerse a la Ley Beckham?', a: 'Sí, si se trasladan a España para teletrabajar para una empresa con contrato laboral y cumplen el resto de requisitos. Los autónomos, en general, necesitan hacerlo por otra vía.' },
      { q: '¿Cuánto dura la Ley Beckham?', a: 'El año en que adquieres la residencia fiscal en España y los cinco periodos impositivos siguientes.' },
      { q: '¿Cuál es el plazo para solicitar la Ley Beckham?', a: 'Seis meses desde el inicio de tu actividad en España, mediante el modelo 149.' },
      { q: '¿Tributan las rentas extranjeras con la Ley Beckham?', a: 'La mayoría de rentas obtenidas fuera de España no tributan en España dentro del régimen. Los rendimientos del trabajo, en cambio, se consideran obtenidos en España y tributan al 24 % hasta 600.000 €.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  llc: {
    metaTitle: 'LLC en EE. UU.: transparencia fiscal y no residentes',
    metaDescription:
      'Una LLC americana suele ser transparente: Estados Unidos puede no gravarla, pero tu país de residencia sí te grava a ti. Qué implica en España.',
    title: 'LLC en Estados Unidos: por qué es fiscalmente transparente y no te libra de pagar impuestos',
    excerpt:
      'Muchos emprendedores abren una LLC americana pensando que así no pagan impuestos. En realidad, la LLC suele ser transparente: Estados Unidos no la grava, pero tu país de residencia te grava a ti. Te explicamos cómo funciona y qué vigilar.',
    tags: ['LLC', 'Estados Unidos', 'Estructuras internacionales', 'Transparencia fiscal'],
    takeaways: [
      'A efectos fiscales federales, una LLC de un solo socio es transparente por defecto: sus rentas son de su propietario.',
      'Un propietario extranjero sin actividad en Estados Unidos a menudo no paga impuesto federal allí, pero sí tiene obligaciones de información.',
      'Tu país de residencia normalmente gravará los beneficios de la LLC como si los hubieras obtenido tú directamente.',
      'En España, las LLC transparentes se han tratado en general como entidades en atribución de rentas.',
    ],
    body: [
      { p: `La Limited Liability Company americana se ha vuelto enormemente popular entre los emprendedores digitales. Se constituye rápido, es barata de mantener, abre la puerta a bancos y pasarelas de pago estadounidenses y, sobre todo, tiene fama de “no pagar impuestos”.` },
      { p: `Ahí empieza el problema. Una LLC no elimina los impuestos: en la mayoría de casos, simplemente los traslada a tu país de residencia.` },

      { h2: `Qué es una LLC americana`, id: 'que-es-una-llc' },
      { p: `Una LLC es una sociedad constituida conforme a las leyes de un estado de Estados Unidos, como Delaware, Wyoming o Nuevo México. Igual que una sociedad anónima, limita la responsabilidad de sus socios, pero su tratamiento fiscal es muy flexible. A efectos del impuesto federal:` },
      {
        list: [
          [`LLC de un solo socio`, `se trata por defecto como una entidad ignorada (disregarded entity): el IRS no tiene en cuenta la sociedad y atribuye sus rentas al propietario.`],
          [`LLC de varios socios`, `se trata por defecto como una partnership: las rentas fluyen a los socios.`],
          [`Opción`, `la LLC puede elegir tributar como corporation presentando el formulario 8832.`],
        ],
      },

      { h2: `Por qué muchos propietarios extranjeros no pagan impuestos en Estados Unidos`, id: 'sin-impuesto-en-eeuu' },
      { p: `Si el propietario no es residente fiscal en Estados Unidos y la LLC no tiene una actividad efectivamente conectada con el país (sin oficina, empleados ni agentes dependientes allí), sus rentas en general no están sujetas al impuesto federal sobre la renta. Estados Unidos entiende que esa renta es del propietario extranjero y se ha obtenido fuera.` },
      { p: `De ahí viene la idea de que la LLC “no paga impuestos”. Pero eso solo describe la parte estadounidense.` },
      { callout: { title: `Las obligaciones de información siguen existiendo`, text: `Una LLC de un solo socio con propietario extranjero debe presentar cada año el formulario 5472 junto con un formulario 1120 pro forma para informar de las operaciones con su propietario. La sanción por no presentarlo parte de 25.000 dólares. Además, los estados cobran tasas anuales o franchise taxes.` } },

      { h2: `Transparencia fiscal: tributas en tu país`, id: 'transparencia' },
      { p: `Como la LLC es transparente, la mayoría de países de residencia “miran a través” de ella. Si vives en un país que grava a sus residentes por su renta mundial, los beneficios de la LLC normalmente tributarán allí como si los hubieras obtenido tú personalmente, **los retires o no**.` },
      { p: `Cada país califica las entidades extranjeras con sus propios criterios. Algunos siguen el tratamiento estadounidense y consideran la LLC transparente; otros comparan sus características jurídicas con las sociedades locales y pueden tratarla como una sociedad, lo que cambia cómo y cuándo tributan las rentas.` },
      { h3: `El caso de España` },
      { p: `La Administración tributaria española ha tratado en general las LLC americanas fiscalmente transparentes como entidades en régimen de atribución de rentas. En la práctica, un socio residente en España debe incluir las rentas de la LLC en su IRPF según su naturaleza, por ejemplo como rendimientos de actividades económicas, que tributan a tipos progresivos.` },
      { p: `Por tanto, montar una LLC no reduce la factura fiscal de un residente en España. Además, puede añadir complejidad: declaraciones en Estados Unidos, obligaciones de información en España sobre cuentas y bienes en el extranjero y posibles obligaciones de Seguridad Social por la actividad que desarrollas.` },

      { h2: `Errores habituales con las LLC`, id: 'errores' },
      {
        list: [
          [`Pensar que no hay que presentar nada`, `el formulario 5472 y los requisitos estatales se aplican aunque no haya impuesto en Estados Unidos.`],
          [`No declarar las rentas en tu país`, `transparencia significa que la renta es tuya, aunque se quede en la cuenta de la LLC.`],
          [`Creer que nadie se va a enterar`, `el intercambio de información entre administraciones tributarias hace cada vez más fácil detectar estructuras no declaradas.`],
          [`Usar la LLC para ignorar tu residencia`, `si vives realmente en un país, se aplican sus normas estés donde esté tu empresa.`],
        ],
      },

      { h2: `Cuándo puede tener sentido una LLC`, id: 'cuando-tiene-sentido' },
      { p: `Una LLC no es una mala herramienta. Puede ser útil para vender a clientes estadounidenses, acceder a bancos y pasarelas de pago de Estados Unidos o formar parte de una estructura internacional bien diseñada y correctamente declarada en el país de residencia del propietario.` },
      { p: `La clave es decidir en función de tu residencia fiscal real, no de lo que le funcionó a otra persona. Si te planteas una LLC o ya la tienes, una revisión de [estructuración fiscal internacional](/es/servicios/estructuracion-fiscal-internacional) te dirá cómo tributa de verdad en tu caso.` },
    ],
    faq: [
      { q: '¿Una LLC americana paga impuestos?', a: 'Una LLC de un solo socio no residente y sin actividad en Estados Unidos en general no paga impuesto federal sobre la renta allí, pero su propietario normalmente tributa en su país de residencia.' },
      { q: '¿Una LLC está libre de impuestos para un residente en España?', a: 'No. España ha tratado en general las LLC transparentes como entidades en atribución de rentas, por lo que el socio tributa en su IRPF por los beneficios.' },
      { q: '¿Qué es el formulario 5472?', a: 'Una declaración informativa anual que deben presentar las LLC de un solo socio con propietario extranjero, junto con un formulario 1120 pro forma, para informar de las operaciones con su propietario.' },
      { q: '¿Es mejor una empresa en Dubái que una LLC?', a: 'Una empresa en Dubái es una entidad sujeta a sus propias normas fiscales. Que tenga sentido depende de dónde vives y desde dónde se dirige realmente la sociedad.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  digitalVat: {
    metaTitle: 'IVA en productos digitales y cursos online (UE, UK, EAU)',
    metaDescription:
      'Dónde se paga el IVA al vender e-books, software o cursos online: reglas de la UE, Reino Unido y Emiratos, el umbral de 10.000 € y la ventanilla única.',
    title: 'IVA en productos digitales y cursos online: cómo funciona en la UE, Reino Unido y Emiratos',
    excerpt:
      'Si vendes e-books, plantillas, software o cursos online, el IVA depende de dónde está tu cliente, no de dónde está tu empresa. Te explicamos las reglas de la UE, Reino Unido y Emiratos, la ventanilla única (OSS) y los errores que más caros salen.',
    tags: ['IVA', 'Productos digitales', 'Cursos online', 'OSS', 'E-commerce'],
    takeaways: [
      'En las ventas B2C de servicios digitales en la UE, el IVA se aplica al tipo del país del cliente.',
      'Los vendedores de la UE solo pueden aplicar su IVA nacional por debajo de 10.000 € anuales de ventas B2C transfronterizas; los de fuera de la UE no tienen umbral.',
      'La ventanilla única (OSS) permite declarar el IVA de toda la UE en una sola declaración trimestral.',
      'Las ventas B2B a empresas registradas en el IVA suelen aplicar la inversión del sujeto pasivo.',
      'Los marketplaces y las plataformas merchant of record pueden gestionar el IVA por ti.',
    ],
    body: [
      { p: `Vender productos digitales tiene una ventaja enorme: puedes vender a cualquiera y en cualquier lugar. También tiene una consecuencia menos evidente: **el IVA sigue al cliente**. Un curso online vendido a un consumidor en Alemania lleva IVA alemán; el mismo curso vendido a un consumidor en Francia lleva IVA francés, esté tu empresa en España, en Dubái o en Estados Unidos.` },

      { h2: `Qué se considera un servicio digital`, id: 'servicios-digitales' },
      { p: `A efectos de IVA, los servicios prestados por vía electrónica son los que se entregan por internet con una intervención humana mínima. Ejemplos habituales:` },
      {
        list: [
          `E-books, plantillas, presets y archivos descargables`,
          `Cursos online grabados y contenido de membresías`,
          `Software, aplicaciones y suscripciones SaaS`,
          `Streaming y contenidos digitales`,
        ],
      },
      { p: `Los servicios con una intervención humana significativa, como una consultoría individual por videollamada, no son servicios prestados por vía electrónica y pueden seguir reglas diferentes.` },
      { callout: { title: `Eventos online en directo`, text: `Desde el 1 de enero de 2025, servicios como clases en directo, webinars o eventos virtuales prestados a consumidores de la UE tributan donde se encuentra el cliente, igual que el resto de servicios digitales.` } },

      { h2: `B2B o B2C: la primera pregunta`, id: 'b2b-b2c' },
      {
        list: [
          [`Clientes empresa (B2B)`, `si el cliente es una empresa registrada en el IVA de otro país, en general facturas sin IVA y el cliente lo declara por inversión del sujeto pasivo. Comprueba el número de IVA (en la UE, a través de VIES) y guarda la prueba.`],
          [`Consumidores (B2C)`, `aplicas el IVA del país donde se encuentra el consumidor.`],
        ],
      },

      { h2: `Vender a consumidores de la UE`, id: 'ue' },
      { h3: `Si tu negocio está establecido en la UE` },
      { p: `Los vendedores de la UE pueden aplicar el IVA de su país a las ventas B2C transfronterizas de servicios digitales mientras esas ventas no superen **10.000 € al año** en el conjunto de la UE. Por encima de ese umbral, deben aplicar el tipo de IVA del país de cada cliente.` },
      { h3: `Si tu negocio está fuera de la UE` },
      { p: `Las empresas establecidas fuera de la UE, por ejemplo una sociedad de Emiratos o una LLC americana, **no tienen umbral**: deben aplicar el IVA del país del cliente desde la primera venta a un consumidor de la UE.` },
      { h3: `La ventanilla única (OSS)` },
      { p: `Para no tener que registrarte en el IVA de cada país, puedes usar la ventanilla única: te registras en un solo país de la UE y presentas una declaración trimestral que incluye el IVA de todos los países. Las empresas de la UE usan el régimen de la Unión y las de fuera de la UE que venden servicios digitales, el régimen exterior a la Unión.` },
      { p: `Además, debes conservar pruebas de dónde se encuentra cada cliente, como la dirección de facturación, la dirección IP o el país de la tarjeta de pago.` },

      { h2: `Vender a consumidores del Reino Unido`, id: 'reino-unido' },
      { p: `El Reino Unido aplica reglas parecidas. Las empresas establecidas fuera del país que venden servicios digitales a consumidores británicos deben registrarse en el IVA británico desde la primera venta y aplicar su IVA, actualmente del 20 % en el tipo general.` },

      { h2: `Vender a consumidores de Emiratos`, id: 'emiratos' },
      { p: `Emiratos aplica un IVA del 5 % a los servicios electrónicos prestados a consumidores del país. Los proveedores no residentes de servicios digitales a consumidores emiratíes pueden tener que registrarse con independencia del umbral. Si tu empresa está en Emiratos, lee nuestro resumen del [sistema fiscal de Emiratos](/es/blog/sistema-fiscal-emiratos-arabes-unidos).` },

      { h2: `Marketplaces y plataformas merchant of record`, id: 'plataformas' },
      {
        list: [
          [`Tiendas de aplicaciones y marketplaces`, `cuando intervienen en la venta y fijan sus condiciones, en general se consideran el proveedor a efectos de IVA y son quienes lo repercuten.`],
          [`Plataformas merchant of record`, `servicios como Paddle o Lemon Squeezy venden al cliente en su propio nombre y gestionan el IVA; tú facturas a la plataforma.`],
          [`Tu propia web con Stripe o similar`, `el vendedor eres tú: calcular, repercutir y declarar el IVA es tu responsabilidad, aunque la herramienta te ayude a calcularlo.`],
        ],
      },

      { h2: `Checklist rápido para negocios digitales`, id: 'checklist' },
      {
        olist: [
          `Identifica si cada venta es B2B o B2C.`,
          `Recoge y guarda pruebas de la ubicación del cliente.`,
          `Comprueba si te afecta el umbral de 10.000 € de la UE, o si tienes umbral siquiera.`,
          `Regístrate en la ventanilla única si vendes a consumidores de la UE.`,
          `Revisa las reglas de otros mercados donde tengas clientes, como Reino Unido o Emiratos.`,
          `Mantén tus facturas y registros coherentes con lo que declaras.`,
        ],
      },
      { p: `El IVA de los productos digitales es una de las áreas donde más errores se acumulan en silencio. Si vendes online desde España, nuestra [gestión fiscal en España](/es/servicios/gestion-fiscal-en-espana) cubre la facturación internacional; si tu empresa está en Emiratos, consulta la [gestión fiscal en Dubái](/es/servicios/gestion-fiscal-en-dubai).` },
    ],
    faq: [
      { q: '¿Tengo que cobrar IVA en los cursos online?', a: 'Sí, en las ventas a consumidores. Los cursos grabados son servicios digitales que tributan donde está el cliente, y las clases online en directo a consumidores de la UE también tributan en el país del cliente desde 2025.' },
      { q: '¿Una empresa de Dubái tiene que cobrar IVA europeo?', a: 'Sí, si vende servicios digitales a consumidores de la UE. Los vendedores de fuera de la UE no tienen umbral y pueden usar el régimen exterior de la ventanilla única.' },
      { q: '¿Qué es el umbral de 10.000 €?', a: 'El límite anual de ventas B2C transfronterizas de servicios digitales dentro de la UE por debajo del cual un vendedor establecido en la UE puede aplicar el IVA de su país.' },
      { q: '¿Cobro IVA a clientes que son empresas?', a: 'En general no, si el cliente es una empresa registrada en el IVA de otro país: se aplica la inversión del sujeto pasivo. Comprueba siempre su número de IVA.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  dubaiInSpain: {
    metaTitle: '¿Tributa en España una empresa de Dubái? Guía 2026',
    metaDescription:
      'Una empresa de Dubái dirigida desde España puede tributar en España. Cómo funcionan la sede de dirección efectiva, el establecimiento permanente y la TFI.',
    title: '¿Tributa en España una empresa de Dubái? La sede de dirección efectiva explicada',
    excerpt:
      'Montar una empresa en Dubái mientras vives en España es una de las estructuras más habituales, y más arriesgadas, entre emprendedores digitales. Te explicamos cuándo tributa la sociedad en España y cómo saber si tu estructura se sostiene.',
    tags: ['Dubái', 'España', 'Residencia fiscal', 'Sede de dirección efectiva'],
    takeaways: [
      'Una sociedad extranjera es residente fiscal en España si su sede de dirección efectiva está en España.',
      'Si diriges la empresa desde España, puede tributar por el Impuesto sobre Sociedades español y no al 9 %.',
      'Aunque la sociedad sea residente fuera, un establecimiento permanente o la transparencia fiscal internacional pueden traer rentas a España.',
      'La residencia fiscal del propietario es el punto de partida del análisis.',
    ],
    body: [
      { p: `La idea es tentadora: montar una empresa en Dubái, facturar a través de ella y pagar un 9 %, o un 0 %, en lugar de los tipos españoles. El problema es que el lugar donde está registrada una sociedad es solo uno de los factores que determinan dónde tributa. Si la persona que la dirige vive en España, Hacienda puede considerar que la sociedad es, en realidad, española.` },

      { h2: `¿Cuándo es residente fiscal en España una sociedad?`, id: 'residencia-sociedades' },
      { p: `Según la Ley del Impuesto sobre Sociedades, una entidad es residente en España si cumple cualquiera de estos tres requisitos:` },
      { olist: [`Se ha constituido conforme a las leyes españolas.`, `Tiene su domicilio social en España.`, `Tiene su sede de dirección efectiva en España.`] },
      { p: `Una sociedad de Dubái no cumple los dos primeros. Lo que importa es el tercero: la sede de dirección efectiva está donde se lleva realmente la dirección y el control del conjunto de sus actividades.` },

      { h2: `Qué significa “dirección efectiva” en la práctica`, id: 'direccion-efectiva' },
      { p: `El análisis se centra en la realidad, no en los papeles. Algunas preguntas relevantes:` },
      {
        list: [
          `¿Dónde se toman las decisiones estratégicas y comerciales clave?`,
          `¿Desde dónde se negocian y firman los contratos?`,
          `¿Quién opera las cuentas bancarias y desde dónde?`,
          `¿Dónde trabajan de verdad los administradores y el equipo?`,
          `¿Tiene la sociedad oficina, personal y actividad reales en Emiratos?`,
        ],
      },
      { p: `Si la respuesta a la mayoría de estas preguntas es “desde mi casa en Madrid”, lo más probable es que la sociedad se dirija desde España, digan lo que digan los documentos.` },
      { callout: { title: `¿Y el convenio entre España y Emiratos?`, text: `El convenio para evitar la doble imposición entre España y Emiratos resuelve los casos en los que una sociedad podría ser residente en ambos países. Como regla general, se considera residente donde está su sede de dirección efectiva. El convenio no ayuda si la sociedad se dirige, de hecho, desde España.` } },

      { h2: `Qué pasa si la sociedad se dirige desde España`, id: 'consecuencias' },
      { p: `Si Hacienda concluye que la sociedad es residente en España, tributará por su beneficio mundial en el Impuesto sobre Sociedades español, con las obligaciones de declaración correspondientes y, posiblemente, recargos, intereses de demora y sanciones por los ejercicios no declarados.` },

      { h2: `Otras dos vías por las que las rentas vuelven a España`, id: 'otros-riesgos' },
      { h3: `Establecimiento permanente` },
      { p: `Aunque la sociedad sea realmente residente en Emiratos, puede tener un establecimiento permanente en España si desarrolla su actividad a través de un lugar fijo de negocios en España o de una persona que concluye habitualmente contratos en su nombre. Los beneficios atribuibles a ese establecimiento tributan en España.` },
      { h3: `Transparencia fiscal internacional` },
      { p: `Las normas españolas de transparencia fiscal internacional pueden imputar al socio residente en España determinadas rentas obtenidas por una sociedad extranjera controlada que tributa poco. Cuando la sociedad no dispone de medios materiales y personales suficientes, la imputación puede alcanzar a toda su renta.` },

      { h2: `Primero va tu propia residencia`, id: 'residencia-propietario' },
      { p: `Nada de esto puede analizarse sin mirar al propietario. Si eres residente fiscal en España, el salario y los dividendos que recibes de la sociedad de Dubái tributan en España, y es probable que la dirección de la sociedad también esté aquí. Por eso el primer paso siempre es analizar tu [cambio de residencia fiscal](/es/servicios/cambio-de-residencia-fiscal) antes de decidir sobre la sociedad. Si el plan es mudarte, lo explicamos paso a paso en la guía de [cómo cambiar la residencia fiscal de España a Dubái](/es/servicios/cambiar-residencia-fiscal-espana-dubai).` },

      { h2: `Cuándo sí tiene sentido una empresa en Dubái`, id: 'cuando-funciona' },
      { p: `Una empresa en Dubái funciona cuando tiene sustancia real y se dirige de verdad desde Emiratos, normalmente porque su propietario se ha mudado allí y el negocio opera desde allí. En ese escenario, el sistema fiscal emiratí puede aplicarse correctamente. Si estás diseñando ese paso, nuestra [estructuración fiscal internacional](/es/servicios/estructuracion-fiscal-internacional) compara las opciones con números reales.` },
    ],
    faq: [
      { q: '¿Puedo vivir en España y tener una empresa en Dubái?', a: 'Puedes, pero si la diriges desde España, lo más probable es que la sociedad se considere residente fiscal en España y tribute aquí.' },
      { q: '¿Qué es la sede de dirección efectiva?', a: 'El lugar donde se lleva realmente la dirección y el control del conjunto de las actividades de la sociedad, que se analiza a partir de los hechos y no de los documentos.' },
      { q: '¿Me protege el convenio entre España y Emiratos?', a: 'Solo si la sociedad se dirige de verdad desde Emiratos. Si se dirige desde España, el convenio en general apunta a España.' },
      { q: '¿Y si me mudo a Dubái?', a: 'Entonces el análisis cambia, pero tienes que poder demostrar que tu residencia fiscal personal se ha trasladado de verdad y que la sociedad se dirige desde Emiratos.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  freeZone: {
    metaTitle: 'Free zone o mainland en Dubái: cuál te conviene',
    metaDescription:
      'Free zone o mainland en Dubái: dónde puedes operar, cuánto cuesta cada opción, visados, oficina y cómo les afecta el Corporate Tax.',
    title: 'Free zone o mainland en Dubái: qué tipo de empresa te conviene',
    excerpt:
      'Las sociedades de free zone y de mainland se diferencian en dónde pueden operar, cuánto cuestan, cuántos visados permiten y cómo les afecta el Corporate Tax. Así puedes elegir la opción adecuada para un negocio digital o internacional.',
    tags: ['Dubái', 'Free zones', 'Mainland', 'Crear empresa', 'Corporate Tax'],
    takeaways: [
      'Ambas permiten el 100 % de propiedad extranjera en la mayoría de actividades.',
      'Las de free zone suelen ser más rápidas y baratas de constituir y encajan con negocios con clientes internacionales.',
      'Las de mainland pueden operar libremente en todo Emiratos, también con consumidores y organismos públicos locales.',
      'Ambas están sujetas al Corporate Tax; solo las de free zone pueden aplicar el 0 % sobre rentas cualificadas.',
    ],
    body: [
      { p: `Una de las primeras decisiones al montar una empresa en Dubái es elegir entre una sociedad de free zone y una de mainland. Las dos son válidas, las dos permiten el 100 % de propiedad extranjera en la mayoría de actividades y las dos pueden darte acceso a un visado de residencia. La diferencia está en dónde puedes operar, cuánto cuesta y cómo tributa.` },

      { h2: `Qué es una sociedad de free zone`, id: 'free-zone' },
      { p: `Las free zones son zonas económicas especiales con su propia autoridad, normas de licencias y paquetes. En Emiratos hay decenas, desde zonas generalistas hasta otras centradas en sectores concretos.` },
      { p: `Las sociedades de free zone están pensadas para operar internacionalmente y dentro de su free zone. Vender directamente al mercado local emiratí es más limitado: según la actividad, puede requerir un distribuidor local, una sucursal en mainland o un permiso específico.` },

      { h2: `Qué es una sociedad de mainland`, id: 'mainland' },
      { p: `Una sociedad de mainland tiene su licencia del departamento económico del emirato; en Dubái, el Department of Economy and Tourism. Puede operar en todo Emiratos, también con consumidores y organismos públicos locales. Desde 2021, la mayoría de actividades comerciales ya no exigen un socio local.` },

      { h2: `Free zone o mainland de un vistazo`, id: 'comparacion' },
      {
        table: {
          head: ['', 'Free zone', 'Mainland'],
          rows: [
            ['Propiedad extranjera', '100 %', '100 % en la mayoría de actividades'],
            ['Dónde puedes operar', 'Internacionalmente y dentro de la free zone; en el mercado local con límites', 'En todo Emiratos'],
            ['Oficina', 'Son habituales los paquetes flexi-desk u oficina compartida', 'Normalmente exige un contrato de oficina física'],
            ['Constitución', 'Normalmente más rápida y sencilla', 'Normalmente con más pasos'],
            ['Corporate Tax', '9 %, con posible 0 % sobre rentas cualificadas', '0 % hasta 375.000 AED y 9 % a partir de ahí'],
          ],
        },
      },

      { h2: `Cómo les afecta el Corporate Tax`, id: 'corporate-tax' },
      { p: `Los dos tipos de sociedad están sujetos al Corporate Tax emiratí: 0 % sobre la base imponible hasta 375.000 AED y 9 % a partir de ahí.` },
      { p: `La diferencia es que las sociedades de free zone pueden aplicar un tipo del 0 % sobre sus rentas cualificadas si cumplen los requisitos de Qualifying Free Zone Person, entre ellos tener sustancia real y mantener los ingresos no cualificados por debajo del 5 % de los ingresos totales o de 5 millones de AED. Las rentas de operaciones con consumidores del mainland emiratí, en general, no son cualificadas. Explicamos el marco completo en nuestra guía del [sistema fiscal de Emiratos](/es/blog/sistema-fiscal-emiratos-arabes-unidos).` },

      { h2: `¿Cuál encaja con un negocio digital?`, id: 'cual-elegir' },
      {
        list: [
          [`Elige free zone si`, `tus clientes están sobre todo fuera de Emiratos, vendes online a nivel internacional o quieres una constitución rápida y económica.`],
          [`Elige mainland si`, `vas a vender directamente a consumidores o empresas de Emiratos, trabajar con organismos públicos o necesitas presencia física en el mercado local.`],
        ],
      },
      { p: `Prácticamente cualquier free zone puede servir para un negocio digital: la adecuada depende de las actividades de la licencia que necesitas, del número de visados y de tu presupuesto.` },

      { h2: `Antes de decidir`, id: 'antes-de-decidir' },
      { p: `Elegir entre free zone y mainland no es solo una cuestión jurídica: afecta a tus impuestos, a tu visado y a cómo vas a operar durante años. Y recuerda que montar una empresa en Dubái no cambia, por sí solo, tu residencia fiscal personal. Si quieres que nos encarguemos de todo el proceso, consulta nuestra [incorporación de empresas en Dubái](/es/servicios/crear-empresa-en-dubai), y si vas a hacerlo desde España lee antes [crear una empresa en Dubái desde España](/es/blog/crear-empresa-en-dubai-desde-espana).` },
    ],
    faq: [
      { q: '¿Una sociedad de free zone puede trabajar con clientes en Dubái?', a: 'Puede trabajar libremente con otras sociedades de free zone y con clientes internacionales. Vender directamente al mercado del mainland emiratí es más limitado y puede requerir permisos o estructuras adicionales.' },
      { q: '¿Una sociedad de free zone está libre de impuestos?', a: 'No. Está sujeta al Corporate Tax, pero puede aplicar un 0 % sobre las rentas cualificadas si cumple los requisitos.' },
      { q: '¿Necesito un socio local para una sociedad de mainland?', a: 'Para la mayoría de actividades comerciales no, desde 2021, aunque algunas actividades reguladas siguen teniendo requisitos específicos.' },
      { q: '¿Cuánto se tarda en crear una sociedad de free zone?', a: 'La constitución suele tardar unos 14 días desde que la documentación está lista; el visado de residencia y la cuenta bancaria vienen después.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  dubaiCost: {
    metaTitle: 'Cuánto cuesta crear una empresa en Dubái en 2026',
    metaDescription:
      'Una sociedad de free zone con un visado cuesta 15.000–20.000 AED, unos 3.900–5.200 €, el primer año. Qué cubre cada línea y qué dejan fuera los presupuestos.',
    title: '¿Cuánto cuesta crear una empresa en Dubái?',
    excerpt:
      'Una sociedad de free zone con un visado de residencia suele costar entre 15.000 y 20.000 AED el primer año. Te explicamos qué significa cada línea del presupuesto, qué falta en la mayoría y qué se paga cada año.',
    tags: ['Dubái', 'Crear empresa', 'Costes', 'Free zones'],
    takeaways: [
      'Como referencia, una sociedad de free zone con un visado de residencia cuesta entre 15.000 y 20.000 AED el primer año.',
      'Esa cifra cubre la licencia comercial, la establishment card y el visado, no la cuenta bancaria ni la contabilidad.',
      'Las sociedades de mainland cuestan más porque exigen alquiler de oficina física.',
      'La licencia es solo una parte: después vienen renovaciones, contabilidad, Corporate Tax y requisitos del banco.',
    ],
    body: [
      { p: `“¿Cuánto cuesta crear una empresa en Dubái?” es la primera pregunta de todo el mundo, y la respuesta honesta es que depende de cuatro cosas: la vía (free zone o mainland), cuántas actividades cubre la licencia, cuántos visados de residencia necesitas y si necesitas oficina física.` },
      { p: `Aquí tienes los conceptos que componen cualquier presupuesto, con rangos orientativos de mercado para 2026, para que puedas leer una propuesta y entender qué estás pagando.` },

      { h2: `La respuesta corta`, id: 'respuesta-corta' },
      { callout: { title: '15.000 – 20.000 AED en un primer año típico', text: 'Una sociedad de free zone con un visado de residencia suele quedar en esa horquilla, incluyendo la licencia comercial, la establishment card y el visado. Una licencia sin visados cuesta menos; una sociedad de mainland cuesta más porque exige alquiler de oficina física.' } },
      { p: `Las free zones compiten en precio y en lo que incluyen, así que dos presupuestos por “la misma” empresa pueden parecer muy distintos. Los paquetes más baratos suelen limitar el número de actividades, la cuota de visados o el tipo de oficina. Una licencia que no cubre lo que vendes de verdad es el ahorro más caro que existe.` },

      { h2: `Cuánto es eso en euros`, id: 'euros' },
      { p: `Casi todos los presupuestos llegan en dírhams y cuesta hacerse una idea. El dírham está anclado al dólar, así que el cambio con el euro se mueve poco y sirve una referencia estable:` },
      {
        table: {
          head: ['En dírhams', 'Aproximadamente'],
          rows: [
            ['15.000 AED', '≈ 3.900 €'],
            ['20.000 AED', '≈ 5.200 €'],
            ['25.000 AED', '≈ 6.500 €'],
            ['50.000 AED', '≈ 13.000 €'],
          ],
        },
      },
      { p: `Cálculo orientativo a 0,26 € por dírham. Compruébalo el día que vayas a pagar, porque la cifra exacta depende del cambio de ese momento y de la comisión de tu banco.` },

      { h2: `Qué hace que el precio suba o baje`, id: 'que-cambia' },
      { p: `Dos presupuestos muy distintos suelen explicarse por estas seis decisiones. Ninguna es cuestión de gusto: cada una cambia lo que la empresa puede hacer.` },
      {
        table: {
          head: ['Decisión', 'Efecto en el precio'],
          rows: [
            ['Licencia sin visados', 'La vía más barata: el visado es buena parte del coste del primer año'],
            ['Cada visado adicional', 'Suma por persona y, pasado cierto número, obliga a una oficina mayor'],
            ['Más actividades en la licencia', 'Varias free zones cobran por actividad o por grupo de actividades'],
            ['Mainland en vez de free zone', 'Más caro: exige contrato de oficina física registrado con Ejari'],
            ['Oficina física en vez de flexi-desk', 'El alquiler pasa a ser la partida más grande del presupuesto'],
            ['Socio persona jurídica', 'Añade legalización y traducción de la documentación societaria'],
          ],
        },
      },

      { h2: `Gastos de constitución que se pagan una vez`, id: 'unicos' },
      {
        list: [
          ['Reserva de nombre y aprobación inicial', 'una tasa única al constituir.'],
          ['Establishment card', 'necesaria antes de que la empresa pueda patrocinar cualquier visado.'],
          ['Legalización y traducción de documentos', 'solo si hay socio persona jurídica o documentos extranjeros.'],
          ['Honorarios profesionales', 'lo que cobra tu asesor por llevar el proceso, acordado por escrito.'],
        ],
      },

      { h2: `Visados de residencia`, id: 'visados' },
      { p: `Cada visado de residencia incluye el permiso de entrada, el cambio de estatus, la prueba médica, el Emirates ID y el sellado, y se renueva cada dos o tres años. El seguro médico es obligatorio para los titulares de visado y se paga aparte.` },
      { p: `El primer visado suele estar incluido en la horquilla de 15.000 – 20.000 AED. Cada visado adicional suma coste y, a partir de cierto número, además necesitas una oficina mayor.` },

      { h2: `Los costes que no aparecen en casi ningún presupuesto`, id: 'ocultos' },
      { callout: { title: 'Pregunta por esto antes de firmar', text: 'Los saldos mínimos que exige el banco, la contabilidad y las declaraciones de Corporate Tax, el alta y las declaraciones de IVA, las cuentas auditadas si quieres aplicar el 0 % de free zone, el seguro médico y la renovación anual de licencia, establishment card y visados.' } },
      { p: `No son extras inventados por los asesores: es lo que mantiene la sociedad en regla una vez tienes la licencia enmarcada en la pared. Nuestra guía del [sistema fiscal de Emiratos](/es/blog/sistema-fiscal-emiratos-arabes-unidos) explica las obligaciones en detalle.` },

      { h2: `Qué se paga cada año`, id: 'anual' },
      {
        list: [
          ['Renovación de la licencia', 'similar a la tasa inicial.'],
          ['Renovación de visados', 'cada dos o tres años, según el tipo de visado.'],
          ['Contabilidad y Corporate Tax', 'una cuota recurrente, según tu volumen de operaciones.'],
          ['Declaraciones de IVA', 'si tus operaciones sujetas superan 375.000 AED.'],
        ],
      },

      { h2: `Cómo gastar menos sin hacer chapuzas`, id: 'ahorrar' },
      {
        olist: [
          `Da de alta solo las actividades que realmente facturas y añade más cuando las necesites.`,
          `Empieza con la cuota de visados que necesitas ahora, no con la que quizá necesites en dos años.`,
          `Compara el coste total del primer año, no el precio de la licencia.`,
          `Pide por escrito el coste de renovación antes de firmar nada.`,
          `Decide la estructura antes de pagarla: mover una sociedad después cuesta mucho más que montarla bien.`,
        ],
      },

      { h2: `Qué pedir por escrito antes de pagar`, id: 'antes-de-pagar' },
      { p: `Un presupuesto serio responde a estas seis preguntas sin que tengas que insistir. Si alguna se queda sin contestar, ya sabes dónde va a aparecer la sorpresa.` },
      {
        olist: [
          `El coste total del primer año, no solo el precio de la licencia.`,
          `Qué actividades concretas quedan cubiertas por la licencia que te proponen.`,
          `Cuántas cuotas de visado incluye el paquete y qué cuesta cada visado extra.`,
          `El coste de renovación del segundo año, línea a línea.`,
          `Qué tasas se pagan directamente a la autoridad y cuáles son honorarios del asesor.`,
          `Qué no está incluido: banco, contabilidad, Corporate Tax, IVA y seguro médico.`,
        ],
      },

      { h2: `¿Y si lo montas desde España?`, id: 'desde-espana' },
      { p: `El coste de la licencia es el mismo vivas donde vivas, pero el presupuesto real cambia: hay que contar la apostilla y la traducción jurada si el socio es una sociedad española, y al menos un viaje para cerrar visado y banco. Y, sobre todo, hay que mirar qué sigues debiendo declarar aquí. Lo contamos en [crear una empresa en Dubái desde España](/es/blog/crear-empresa-en-dubai-desde-espana).` },
      { p: `Si quieres un presupuesto por escrito para tu caso, con la free zone adecuada, las actividades y el coste total del primer año, mira nuestro servicio de [incorporación de empresas en Dubái](/es/servicios/crear-empresa-en-dubai), o lee antes [free zone o mainland](/es/blog/free-zone-o-mainland-dubai) si todavía estás decidiendo la vía.` },
    ],
    faq: [
      { q: '¿Cuál es la forma más barata de crear una empresa en Dubái?', a: 'Una licencia de free zone sin visados es la vía más barata, porque el visado es buena parte del coste. Solo compensa si la licencia cubre tus actividades y no necesitas la residencia emiratí.' },
      { q: '¿Cuánto cuesta mantener una empresa en Dubái al año?', a: 'Hay que contar la renovación de la licencia, la establishment card, la renovación de visados cuando toque y la contabilidad y el Corporate Tax. En una sociedad pequeña de free zone, el coste recurrente suele ser parecido al de la licencia del primer año más el trabajo de cumplimiento.' },
      { q: '¿Hay capital social mínimo?', a: 'La mayoría de free zones indican un capital social en la licencia, pero no exigen desembolsarlo en una cuenta bancaria. Varía según la free zone y la actividad.' },
      { q: '¿El precio incluye la cuenta bancaria?', a: 'No. Abrir la cuenta es un proceso aparte, con sus propios requisitos, y algunos bancos piden un saldo mínimo que no tiene nada que ver con el coste de constitución.' },
      { q: '¿Cuánto cuesta crear una empresa en Dubái en euros?', a: 'La horquilla de referencia de 15.000 a 20.000 AED equivale a unos 3.900 a 5.200 euros, con un cambio orientativo de 0,26 € por dírham. Como el dírham está anclado al dólar, esa referencia se mueve poco, pero conviene comprobar el cambio el día del pago.' },
      { q: '¿Puedo crear la empresa sin viajar a Dubái?', a: 'La constitución y la licencia sí se gestionan en remoto. El visado de residencia exige estar en Emiratos para la prueba médica y el Emirates ID, y la mayoría de bancos siguen pidiendo una reunión presencial para abrir la cuenta.' },
      { q: '¿Cuánto más cara es una empresa de mainland?', a: 'Depende sobre todo de la oficina: el mainland exige un contrato de alquiler físico registrado con Ejari, y ese alquiler suele convertirse en la partida más grande del presupuesto. Las free zones resuelven ese punto con paquetes flexi-desk incluidos en la licencia.' },
      { q: '¿El precio incluye la contabilidad y el Corporate Tax?', a: 'No. El presupuesto de constitución cubre licencia, establishment card y visado. La contabilidad, el alta y las declaraciones de Corporate Tax y, si corresponde, el IVA son un servicio recurrente aparte, y conviene presupuestarlo desde el primer día.' },
    ],
  },
  /* ------------------------------------------------------------------ */
  dubaiFromSpain: {
    metaTitle: 'Crear una empresa en Dubái desde España: guía 2026',
    metaDescription:
      'Qué pasos puedes dar desde España para abrir una empresa en Dubái, qué documentos te piden, cuánto tarda y por qué tu residencia fiscal decide si funciona.',
    title: 'Crear una empresa en Dubái desde España: lo que nadie te cuenta antes de firmar',
    excerpt:
      'Constituir la sociedad es la parte fácil y se puede hacer casi entera desde España. Lo difícil, y lo que decide si la estructura aguanta, es el orden en que haces las cosas y qué sigues debiendo a Hacienda mientras tanto.',
    tags: ['Dubái', 'España', 'Crear empresa', 'Residencia fiscal'],
    takeaways: [
      'Puedes ser propietario de una sociedad emiratí viviendo en España: no hace falta mudarse para constituirla.',
      'Si sigues siendo residente fiscal en España, esa empresa no te ahorra impuestos; puede incluso complicártelos.',
      'El orden correcto es decidir la residencia fiscal primero y constituir después, no al revés.',
      'Casi todo el trámite se hace en remoto, pero el visado y la mayoría de bancos siguen exigiendo viajar.',
    ],
    body: [
      { p: `Casi todas las semanas hablamos con alguien que vive en España, factura a clientes de fuera y ha leído que montar una empresa en Dubái le va a bajar los impuestos. La parte técnica es sencilla: sí, puedes constituir una sociedad emiratí sin moverte de Madrid o de Valencia. La pregunta correcta es otra: qué te cambia realmente, y en qué orden hay que hacer las cosas.` },
      { p: `Esta guía recorre el proceso desde el lado español: qué puedes hacer en remoto, qué te van a pedir, cuánto tarda y qué sigues debiendo declarar aquí mientras la empresa está allí.` },

      { h2: `Sí, puedes constituirla sin mudarte`, id: 'sin-mudarte' },
      { p: `No existe ningún requisito de residencia para ser socio de una sociedad emiratí. Las free zones admiten el 100 % de propiedad extranjera y tramitan expedientes de no residentes todos los días. La reserva de nombre, la aprobación inicial, la firma de la documentación y la emisión de la licencia se pueden gestionar en remoto, con poderes y documentación digitalizada.` },
      { p: `Lo que no se resuelve en remoto es el visado de residencia emiratí, que exige estar físicamente en el país para la prueba médica y la biometría del Emirates ID, y la cuenta bancaria, que en la mayoría de bancos sigue pasando por una entrevista presencial.` },

      { h2: `El error de orden que lo estropea todo`, id: 'orden' },
      { callout: { title: 'Primero la residencia, después la empresa', text: 'Una sociedad en Dubái no cambia por sí sola dónde pagas tus impuestos. Si tú sigues siendo residente fiscal en España, Hacienda sigue gravando tu renta mundial, y la empresa emiratí puede acabar tributando también aquí. Decidir la residencia fiscal antes de constituir cuesta una consulta; descubrirlo tres años después cuesta una inspección.' } },
      { p: `El problema de fondo es que la mayoría de agentes de constitución venden licencias, no asesoramiento fiscal. Te montan la sociedad en catorce días, te cobran y se van. Nadie te pregunta dónde vives, dónde tomas las decisiones de la empresa ni dónde están tus clientes, que es justo lo que determina dónde tributa.` },
      { p: `Si tu plan incluye mudarte de verdad, el proceso tiene su propio recorrido y sus propias pruebas: lo explicamos en [cambiar la residencia fiscal de España a Dubái](/es/servicios/cambiar-residencia-fiscal-espana-dubai).` },

      { h2: `Qué puedes hacer desde España y qué exige viajar`, id: 'remoto' },
      {
        table: {
          head: ['Trámite', '¿En remoto?'],
          rows: [
            ['Elegir free zone, actividades y forma jurídica', 'Sí'],
            ['Reserva de nombre y aprobación inicial', 'Sí'],
            ['Firma de la documentación de constitución', 'Sí, con poderes y firma digital o legalizada'],
            ['Emisión de la licencia comercial', 'Sí'],
            ['Establishment card', 'Sí'],
            ['Visado de residencia: médico, Emirates ID y sellado', 'No: hay que estar en Emiratos'],
            ['Cuenta bancaria de empresa', 'Casi siempre no: la mayoría de bancos piden reunión presencial'],
            ['Alta en Corporate Tax e IVA', 'Sí'],
          ],
        },
      },
      { p: `En la práctica, lo habitual es constituir en remoto y organizar un único viaje de unos días para cerrar visado y banco. Si no necesitas el visado de residencia porque no vas a mudarte, puedes quedarte solo con la licencia, pero entonces conviene revisar antes para qué te sirve realmente la sociedad.` },

      { h2: `Documentación que te van a pedir desde España`, id: 'documentacion' },
      {
        list: [
          `Pasaporte español con al menos seis meses de validez`,
          `Fotografía reciente tipo carné con fondo blanco`,
          `Justificante de domicilio en España: un recibo de suministros o un certificado de empadronamiento`,
          `Un CV breve o perfil de la empresa, que piden algunas free zones según la actividad`,
          `Escrituras y documentación societaria legalizadas con la Apostilla de La Haya, si el socio es una sociedad española`,
          `Poder notarial, si prefieres no desplazarte para firmar`,
        ],
      },
      { p: `La legalización es el paso que más retrasa los expedientes españoles: una apostilla y su traducción jurada pueden sumar un par de semanas si no se piden con tiempo. Si el socio eres tú como persona física, te lo ahorras.` },

      { h2: `Cuánto tarda y cuánto cuesta`, id: 'plazos' },
      { p: `La licencia suele emitirse en unos catorce días desde que el expediente está completo. El visado añade de una a tres semanas más, y la cuenta bancaria depende del banco y de lo bien preparado que vaya el expediente de compliance.` },
      { p: `En coste, una sociedad de free zone con un visado de residencia se mueve en una horquilla de 15.000 a 20.000 AED el primer año, unos 3.900 a 5.200 euros. Desglosamos cada línea en [cuánto cuesta crear una empresa en Dubái](/es/blog/cuanto-cuesta-crear-una-empresa-en-dubai).` },

      { h2: `Lo que sigues debiendo declarar en España`, id: 'obligaciones-espana' },
      { p: `Mientras seas residente fiscal en España, tener una sociedad en Emiratos no te saca del sistema español: te añade obligaciones informativas. Las más habituales:` },
      {
        list: [
          [`Declaración de bienes en el extranjero`, `el modelo 720 obliga a informar de valores, cuentas e inmuebles fuera de España cuando cada bloque supera los 50.000 euros.`],
          [`Inversión en el exterior`, `la constitución de una sociedad extranjera por un residente se declara ante el Registro de Inversiones Exteriores.`],
          [`Transacciones con el exterior`, `la declaración ETE del Banco de España, según el volumen de operaciones y saldos con el extranjero.`],
          [`Transparencia fiscal internacional`, `si la sociedad obtiene determinadas rentas pasivas y no tiene medios materiales y humanos propios, sus beneficios pueden imputarse directamente en tu IRPF aunque no repartas dividendos.`],
        ],
      },
      { p: `Y, por encima de todo, la residencia de la propia sociedad: si se dirige efectivamente desde España, Hacienda puede considerarla residente aquí y gravar su beneficio mundial. Lo desarrollamos en [¿tributa en España una empresa de Dubái?](/es/blog/empresa-dubai-tributa-en-espana).` },

      { h2: `Cuándo tiene sentido y cuándo no`, id: 'cuando' },
      { p: `Tiene sentido cuando hay una razón de negocio real detrás y cuando el plan personal acompaña:` },
      {
        olist: [
          `Te vas a mudar de verdad a Emiratos y quieres que la estructura esté montada antes de llegar.`,
          `Tienes clientes o proveedores en Oriente Medio y necesitas una entidad local para operar.`,
          `Formas parte de una estructura internacional ya existente y la pieza emiratí encaja en ella.`,
        ],
      },
      { p: `No tiene sentido si sigues viviendo en España, diriges el negocio desde aquí y tus clientes están aquí: en ese escenario la sociedad emiratí no reduce la factura fiscal, añade coste de mantenimiento y crea un riesgo que antes no tenías.` },
      { p: `Si no estás seguro de en cuál de los dos casos estás, eso es exactamente lo que resolvemos en el [diagnóstico inicial](/es#contact), y si ya lo tienes claro puedes ver cómo trabajamos la [constitución de empresas en Dubái](/es/servicios/crear-empresa-en-dubai).` },
    ],
    faq: [
      { q: '¿Puedo crear una empresa en Dubái desde España sin viajar?', a: 'Sí. La constitución y la licencia se pueden gestionar en remoto con poderes y documentación digitalizada. El visado de residencia y, en la mayoría de bancos, la apertura de cuenta sí exigen estar en Emiratos, así que lo habitual es constituir en remoto y hacer un único viaje para cerrar esas dos cosas.' },
      { q: '¿Tengo que darme de baja en España para abrir una empresa en Dubái?', a: 'No. Puedes ser socio de una sociedad emiratí siendo residente fiscal en España. Otra cosa es que te convenga: si sigues siendo residente aquí, tu renta mundial tributa en España y la sociedad puede acabar tributando también.' },
      { q: '¿Hay que declarar en España una empresa en Dubái?', a: 'Sí, mientras seas residente fiscal español. Según el caso aplican el modelo 720, la declaración de inversión exterior, la declaración ETE del Banco de España y, si se dan los requisitos, la transparencia fiscal internacional.' },
      { q: '¿Cuánto tarda el proceso completo desde España?', a: 'La licencia suele estar en unos catorce días desde que el expediente está completo. Sumando visado y cuenta bancaria, lo razonable es contar entre cuatro y ocho semanas en total, y algo más si hay documentos que apostillar.' },
      { q: '¿Necesito una gestoría en España y otra en Dubái?', a: 'No necesariamente. Lo que sí necesitas es que alguien mire las dos partes a la vez: la emiratí y la española. Si cada asesor solo ve su lado, los errores aparecen justo en la costura.' },
      { q: '¿Puede ser socia mi sociedad española?', a: 'Sí, las free zones admiten socios persona jurídica. Añade legalización con Apostilla y traducción de la documentación societaria, y conviene revisar antes qué efectos tiene en España tener una filial emiratí.' },
    ],
  },
};
