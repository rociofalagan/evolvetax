export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Evolve<span className="text-blue-600">Tax</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Asesoramiento fiscal internacional para emprendedores y negocios digitales
          </p>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
            Optimiza tu estructura fiscal y establece tu negocio en Dubai con expertos en fiscalidad internacional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Agenda una Consulta
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
            >
              Nuestros Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Soluciones integrales de estructuración fiscal para negocios digitales
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Estructuración Fiscal
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Diseñamos la estructura fiscal óptima para tu negocio, maximizando la eficiencia y el cumplimiento legal internacional.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Setup en Dubai
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Te acompañamos en todo el proceso de establecimiento de tu empresa en Dubai, desde la constitución hasta la operación.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Negocios Digitales
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Especialistas en la optimización fiscal de ecommerce, SaaS, marketing digital y otros modelos de negocio online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
            ¿Por qué Dubai?
          </h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Ventajas competitivas para tu negocio internacional
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">0% Impuesto sobre Sociedades</h3>
                <p className="text-slate-600">Para ingresos hasta 375,000 AED en zonas francas</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">0% Impuesto sobre la Renta</h3>
                <p className="text-slate-600">Sin impuestos personales para residentes</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Hub Internacional</h3>
                <p className="text-slate-600">Acceso estratégico a mercados globales y talento internacional</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Infraestructura de Primera</h3>
                <p className="text-slate-600">Tecnología avanzada, logística eficiente y calidad de vida excepcional</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">100% Propiedad Extranjera</h3>
                <p className="text-slate-600">Control total de tu empresa sin necesidad de socios locales</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-slate-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Residencia Flexible</h3>
                <p className="text-slate-600">Opciones de visa de residencia para emprendedores e inversores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="px-4 py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para optimizar tu estructura fiscal?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a establecer tu negocio en Dubai
          </p>
          <a
            href="mailto:info@evolvetax.com"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Contactar Ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Evolve<span className="text-blue-400">Tax</span>
              </h3>
              <p className="text-slate-400">
                Asesoramiento fiscal internacional especializado en Dubai y negocios digitales.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-slate-400">
                <p>Email: info@evolvetax.com</p>
                <p>WhatsApp: +971 XX XXX XXXX</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Estructuración fiscal</li>
                <li>Setup empresarial en Dubai</li>
                <li>Consultoría para negocios digitales</li>
                <li>Planificación internacional</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 EvolveTax. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
