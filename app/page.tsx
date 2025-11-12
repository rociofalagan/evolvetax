import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1b1b1b] mb-6 leading-[0.9] max-w-6xl mx-auto tracking-tight">
            Your Business Evolves.<br />Your Tax Strategy Should Too.
          </h1>

          <p className="text-xl md:text-2xl text-[#1b1b1b]/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Smart tax strategies for entrepreneurs and businesses thinking beyond borders
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-[#78586F] text-[#eeede9] rounded-full font-semibold hover:bg-[#78586F]/90 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 bg-transparent text-[#1b1b1b] border-2 border-[#1b1b1b] rounded-full font-semibold hover:bg-[#1b1b1b] hover:text-[#eeede9] transition-all text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#78586F] mb-3">10+</div>
              <div className="text-lg text-[#1b1b1b]/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#78586F] mb-3">600+</div>
              <div className="text-lg text-[#1b1b1b]/70">Companies Established</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#78586F] mb-3">330+</div>
              <div className="text-lg text-[#1b1b1b]/70">Tax Optimizations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#78586F] mb-3">$300M+</div>
              <div className="text-lg text-[#1b1b1b]/70">Saved in Taxes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Comprehensive tax solutions tailored for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#78586F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Tax Structuring
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Optimal tax structure design maximizing efficiency and international legal compliance.
            </p>
            <Link href="/services" className="text-[#78586F] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#78586F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Dubai Setup
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Complete guidance through establishing your company in Dubai from start to finish.
            </p>
            <Link href="/services" className="text-[#78586F] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#78586F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Tax Advisory
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Ongoing tax consultation and strategic planning for sustainable business growth.
            </p>
            <Link href="/services" className="text-[#78586F] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-[#78586F] text-[#eeede9] rounded-full font-semibold hover:bg-[#78586F]/90 transition-all"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
              Why Choose EvolveTax?
            </h2>
            <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
              Trusted by hundreds of entrepreneurs worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#78586F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">Fast Setup</h3>
              <p className="text-[#1b1b1b]/70 leading-relaxed">
                Your Dubai company ready in just 14 days with our streamlined process
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#78586F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">100% Compliant</h3>
              <p className="text-[#1b1b1b]/70 leading-relaxed">
                Full compliance with international tax regulations and Dubai legal framework
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">Expert Team</h3>
              <p className="text-[#1b1b1b]/70 leading-relaxed">
                Certified tax advisors with decades of international tax law experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Success stories from entrepreneurs who transformed their businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#78586F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              "EvolveTax made setting up our SaaS company in Dubai incredibly smooth. The tax savings are significant and the team was professional throughout."
            </p>
            <div>
              <p className="font-bold text-[#1b1b1b]">Sarah Mitchell</p>
              <p className="text-sm text-[#1b1b1b]/60">Founder, TechFlow SaaS</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#78586F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              "The expertise and attention to detail from EvolveTax gave us confidence in our international expansion. Highly recommended!"
            </p>
            <div>
              <p className="font-bold text-[#1b1b1b]">Marcus Chen</p>
              <p className="text-sm text-[#1b1b1b]/60">CEO, Global Ventures Ltd</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#78586F]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              "Professional, efficient, and knowledgeable. EvolveTax helped us save over $200K in taxes in the first year alone."
            </p>
            <div>
              <p className="font-bold text-[#1b1b1b]">Elena Rodriguez</p>
              <p className="text-sm text-[#1b1b1b]/60">Director, Digital Marketing Agency</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/clients"
            className="inline-block text-[#78586F] font-semibold text-lg hover:underline"
          >
            View More Success Stories →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Ready to Optimize Your Tax Structure?
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 mb-10">
            Schedule a free consultation and discover how we can help you establish your business in Dubai
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#78586F] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#78586F]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
