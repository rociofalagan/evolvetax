import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1b1b1b] mb-6">
            About EvolveTax
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Your trusted partner in international tax optimization and Dubai business setup
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-[#1b1b1b]/10">
          <h2 className="text-3xl font-bold text-[#1b1b1b] mb-6">Our Mission</h2>
          <p className="text-lg text-[#1b1b1b]/70 leading-relaxed mb-4">
            At EvolveTax, we empower digital entrepreneurs and global businesses to optimize their tax structures legally and efficiently. We believe that smart tax planning should be accessible to businesses of all sizes.
          </p>
          <p className="text-lg text-[#1b1b1b]/70 leading-relaxed">
            With over a decade of experience and more than 600 successful company setups in Dubai, we've helped entrepreneurs save over $300 million in taxes while maintaining full compliance with international regulations.
          </p>
        </div>
      </section>

      {/* Team / Expertise */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
              Expert Team
            </h2>
            <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
              Our team brings together decades of combined experience in international tax law
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-[#eeede9] rounded-3xl p-10 border border-[#1b1b1b]/10">
              <div className="w-16 h-16 bg-[#78586F] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">International Tax Specialists</h3>
              <p className="text-[#1b1b1b]/70 leading-relaxed">
                Certified tax advisors with deep expertise in cross-border tax structures, international compliance, and strategic tax planning for digital businesses.
              </p>
            </div>

            <div className="bg-[#eeede9] rounded-3xl p-10 border border-[#1b1b1b]/10">
              <div className="w-16 h-16 bg-[#78586F] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">Dubai Specialists</h3>
              <p className="text-[#1b1b1b]/70 leading-relaxed">
                On-the-ground expertise in Dubai's regulatory landscape, free zones, and business setup procedures. We navigate local requirements seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Certifications & Credentials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Certified Tax Advisors",
              desc: "All our advisors hold international tax certifications and maintain continuing education"
            },
            {
              title: "Dubai Licensed",
              desc: "Fully licensed to operate in Dubai with official government partnerships"
            },
            {
              title: "10+ Years Experience",
              desc: "Over a decade of proven success in international tax structuring"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10 text-center">
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-4">{item.title}</h3>
              <p className="text-[#1b1b1b]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1b1b]">
              Why Choose EvolveTax?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Proven Track Record", desc: "600+ successful company setups and $300M+ in tax savings" },
              { title: "Fast & Efficient", desc: "Your Dubai company ready in just 14 days" },
              { title: "Full Compliance", desc: "100% legal and compliant with international regulations" },
              { title: "Personalized Service", desc: "Tailored solutions for your unique business needs" },
              { title: "Transparent Pricing", desc: "No hidden fees, clear pricing from day one" },
              { title: "Ongoing Support", desc: "Continuous advisory and support after setup" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#78586F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#eeede9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1b1b1b] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#1b1b1b]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
          Ready to Work Together?
        </h2>
        <p className="text-xl text-[#1b1b1b]/70 mb-10 max-w-2xl mx-auto">
          Let's discuss how we can help optimize your business tax structure
        </p>
        <Link
          href="/contact"
          className="inline-block px-12 py-5 bg-[#78586F] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#78586F]/90 transition-all"
        >
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}
