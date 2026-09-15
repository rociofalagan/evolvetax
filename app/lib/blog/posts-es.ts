import type { PostKey } from '../routes';
import type { PostContent } from './types';

// Artículos del blog en español.
export const postsEs: Record<PostKey, PostContent> = {
  /* ------------------------------------------------------------------ */
  uaeTax: {
    metaTitle: 'Sistema fiscal de Emiratos 2026: Corporate Tax, IVA e impuestos personales',
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
      { p: `Pero “competitivo” no significa “sin obligaciones”. Toda sociedad debe estar registrada, llevar la contabilidad en orden y presentar a tiempo, que es justo lo que cubre nuestra [gestión fiscal en Dubái](/es/servicios/gestion-fiscal-en-dubai). Y trasladar tu empresa a Dubái no cambia dónde pagas impuestos tú: eso depende de tu propia residencia fiscal, como explicamos en [¿Tributa en España una empresa de Dubái?](/es/blog/empresa-dubai-tributa-en-espana)` },
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
    metaTitle: 'LLC en Estados Unidos: transparencia fiscal e impuestos para no residentes',
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
    metaTitle: 'IVA en productos digitales y cursos online: UE, Reino Unido y Emiratos',
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
    metaTitle: '¿Tributa en España una empresa de Dubái? La sede de dirección efectiva',
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
      { p: `Nada de esto puede analizarse sin mirar al propietario. Si eres residente fiscal en España, el salario y los dividendos que recibes de la sociedad de Dubái tributan en España, y es probable que la dirección de la sociedad también esté aquí. Por eso el primer paso siempre es analizar tu [cambio de residencia fiscal](/es/servicios/cambio-de-residencia-fiscal) antes de decidir sobre la sociedad.` },

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
    metaTitle: 'Free zone o mainland en Dubái: qué empresa te conviene',
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
      { p: `Elegir entre free zone y mainland no es solo una cuestión jurídica: afecta a tus impuestos, a tu visado y a cómo vas a operar durante años. Y recuerda que montar una empresa en Dubái no cambia, por sí solo, tu residencia fiscal personal. Si quieres que nos encarguemos de todo el proceso, consulta nuestra [incorporación de empresas en Dubái](/es/servicios/crear-empresa-en-dubai).` },
    ],
    faq: [
      { q: '¿Una sociedad de free zone puede trabajar con clientes en Dubái?', a: 'Puede trabajar libremente con otras sociedades de free zone y con clientes internacionales. Vender directamente al mercado del mainland emiratí es más limitado y puede requerir permisos o estructuras adicionales.' },
      { q: '¿Una sociedad de free zone está libre de impuestos?', a: 'No. Está sujeta al Corporate Tax, pero puede aplicar un 0 % sobre las rentas cualificadas si cumple los requisitos.' },
      { q: '¿Necesito un socio local para una sociedad de mainland?', a: 'Para la mayoría de actividades comerciales no, desde 2021, aunque algunas actividades reguladas siguen teniendo requisitos específicos.' },
      { q: '¿Cuánto se tarda en crear una sociedad de free zone?', a: 'La constitución suele tardar unos 14 días desde que la documentación está lista; el visado de residencia y la cuenta bancaria vienen después.' },
    ],
  },
};
