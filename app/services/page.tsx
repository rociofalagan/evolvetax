import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Tax Advisory",
      description: "Expert guidance on complex tax matters for individuals and businesses operating internationally.",
      features: [
        "International tax planning",
        "Cross-border tax strategy",
        "Compliance advisory",
        "Tax risk management"
      ]
    },
    {
      title: "Tax Declaration",
      description: "Comprehensive tax filing services ensuring accuracy and compliance with local and international regulations.",
      features: [
        "Corporate tax returns",
        "Individual tax filings",
        "VAT declarations",
        "Quarterly reporting"
      ]
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your financial structure and minimize tax liabilities legally.",
      features: [
        "Long-term tax strategy",
        "Structure optimization",
        "Investment tax planning",
        "Succession planning"
      ]
    },
    {
      title: "Audit & Compliance",
      description: "Ensure your business meets all regulatory requirements with our comprehensive audit services.",
      features: [
        "Tax compliance audits",
        "Regulatory compliance",
        "Internal controls review",
        "Risk assessment"
      ]
    },
    {
      title: "Business Consultation",
      description: "Tailored tax solutions for businesses of all sizes, from startups to established enterprises.",
      features: [
        "Business structure planning",
        "Dubai company setup",
        "Free zone registration",
        "Ongoing business support"
      ]
    },
    {
      title: "Individual Consultation",
      description: "Personalized tax advice for high-net-worth individuals and digital nomads.",
      features: [
        "Personal tax optimization",
        "Residency planning",
        "Investment structuring",
        "Wealth management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1b1b1b] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Comprehensive tax solutions designed for the modern global entrepreneur
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">{service.title}</h3>
              <p className="text-[#1b1b1b]/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#1b1b1b]/70">
                    <span className="text-[#78586F] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
              Your Journey to Dubai
            </h2>
            <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
              A transparent, streamlined 8-step process from first contact to full operation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Contact', desc: 'Free consultation to understand your needs' },
              { step: '02', title: 'Custom Quote', desc: 'Tailored proposal for your business' },
              { step: '03', title: 'Company Name', desc: 'Reserve your preferred company name' },
              { step: '04', title: 'Documentation', desc: 'Prepare and verify all required documents' },
              { step: '05', title: 'Legal Process', desc: 'Handle all legal incorporation procedures' },
              { step: '06', title: 'Company Ready', desc: 'Your Dubai company is officially registered' },
              { step: '07', title: 'Bank Accounts', desc: 'Set up business banking accounts' },
              { step: '08', title: 'Launch', desc: 'Your business is ready to operate' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-6">
                  <span className="text-6xl font-bold text-[#78586F]/30">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1b1b1b] mb-3">{item.title}</h3>
                <p className="text-[#1b1b1b]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1b1b]">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 mb-10">
            Let's discuss which service is right for your business
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#78586F] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#78586F]/90 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
