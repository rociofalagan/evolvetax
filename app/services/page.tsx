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
      <section className="px-6 py-20 md:py-24 bg-[#eeede9]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-16 text-center">
            Our Services
          </h1>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Service 01: International Tax Structuring */}
            <div>
              <p className="text-lg font-bold text-[#6B2C2C] mb-2">01</p>
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
                International Tax Structuring
              </h3>
              <p className="text-lg font-semibold text-[#1b1b1b] mb-4">
                Strategy Before Setup
              </p>
              <p className="text-[#1b1b1b]/70 text-base leading-relaxed mb-6">
                We analyze your business model, revenue streams, and personal goals to design your most tax-efficient international structure.
              </p>
              <h4 className="text-base font-bold text-[#1b1b1b] mb-3">What we deliver:</h4>
              <ul className="space-y-2 text-[#1b1b1b]/70 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Comprehensive business and income analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Jurisdiction comparison tailored to your specific case</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Entity structure design (single or multi-company)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Personal tax residency planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Substance requirements roadmap</span>
                </li>
              </ul>
              <p className="text-[#1b1b1b] font-semibold text-sm">
                <span className="text-[#6B2C2C]">The outcome:</span> A clear, compliant structure that maximizes your tax efficiency.
              </p>
            </div>

            {/* Service 02: Structure Implementation */}
            <div>
              <p className="text-lg font-bold text-[#6B2C2C] mb-2">02</p>
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
                Structure Implementation
              </h3>
              <p className="text-lg font-semibold text-[#1b1b1b] mb-4">
                From Plan to Reality
              </p>
              <p className="text-[#1b1b1b]/70 text-base leading-relaxed mb-6">
                Once your strategy is defined, we handle the complete implementation—whether in the UAE or through our trusted international partners.
              </p>
              <h4 className="text-base font-bold text-[#1b1b1b] mb-3">UAE Setup (We Manage In-House):</h4>
              <ul className="space-y-2 text-[#1b1b1b]/70 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Free zone selection and license application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Company incorporation and trade license</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>UAE residence visa and Emirates ID processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Bank account opening coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span>Office and PRO services</span>
                </li>
              </ul>
              <h4 className="text-base font-bold text-[#1b1b1b] mb-3">Other Jurisdictions:</h4>
              <p className="text-[#1b1b1b]/70 text-sm leading-relaxed mb-6">
                We coordinate with vetted partners for setups in Estonia, Singapore, US, and other jurisdictions.
              </p>
              <p className="text-[#1b1b1b] font-semibold text-sm">
                <span className="text-[#6B2C2C]">The result:</span> Your company operational and compliant, hassle-free.
              </p>
            </div>

            {/* Service 03: Ongoing Tax Advisory & Compliance */}
            <div>
              <p className="text-lg font-bold text-[#6B2C2C] mb-2">03</p>
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
                Ongoing Tax Advisory & Compliance
              </h3>
              <p className="text-lg font-semibold text-[#1b1b1b] mb-4">
                Run Your Business, We'll Handle the Rest
              </p>
              <p className="text-[#1b1b1b]/70 text-base leading-relaxed mb-6">
                Focus on growth while we manage your tax and accounting obligations.
              </p>
              <h4 className="text-base font-bold text-[#1b1b1b] mb-3">Our services:</h4>
              <ul className="space-y-2 text-[#1b1b1b]/70 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span><strong className="text-[#1b1b1b]">Tax compliance:</strong> UAE Corporate Tax and VAT registration, filings, and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span><strong className="text-[#1b1b1b]">Monthly bookkeeping:</strong> Real-time, organized financial records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span><strong className="text-[#1b1b1b]">Financial statements:</strong> Annual report preparation to UAE standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B2C2C] mt-1">•</span>
                  <span><strong className="text-[#1b1b1b]">Proactive advisory:</strong> Quarterly reviews and year-round support</span>
                </li>
              </ul>
              <p className="text-[#1b1b1b] font-semibold text-sm">
                <span className="text-[#6B2C2C]">The peace of mind:</span> Always compliant, always optimized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
