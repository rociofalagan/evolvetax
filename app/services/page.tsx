import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6">
            Comprehensive Tax Solutions for Digital Entrepreneurs
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            From initial strategy to full implementation and ongoing management. Everything you need to structure your business intelligently and stay compliant.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">

          {/* Service 1: Strategic Tax Planning */}
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-12 h-12 mx-auto mb-6">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-[#1b1b1b] mb-6">
              Strategic Tax Planning
            </h2>

            <p className="text-base text-[#1b1b1b]/70 mb-6 leading-relaxed">
              This is where everything begins. Before you incorporate anything or move anywhere, you need a clear strategy.
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1b1b1b] mb-4">What's included:</h3>
              <ul className="space-y-2 text-sm text-[#1b1b1b]/70">
                <li>✓ Deep-dive analysis of your current business structure and tax situation</li>
                <li>✓ Custom tax optimization strategy tailored to your business model and goals</li>
                <li>✓ Jurisdiction comparison (Dubai vs. alternatives) based on your specific needs</li>
                <li>✓ Risk assessment and compliance roadmap</li>
                <li>✓ Clear implementation plan with timeline and next steps</li>
              </ul>
            </div>
          </div>

          {/* Service 2: Full Implementation */}
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-12 h-12 mx-auto mb-6">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-[#1b1b1b] mb-6">
              Full Implementation
            </h2>

            <p className="text-base text-[#1b1b1b]/70 mb-6 leading-relaxed">
              You've got the plan. Now it's time to execute.
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1b1b1b] mb-4">What's included:</h3>
              <ul className="space-y-2 text-sm text-[#1b1b1b]/70">
                <li>✓ Company incorporation in Dubai (or your chosen jurisdiction)</li>
                <li>✓ Tax residency planning and setup</li>
                <li>✓ Business licensing and regulatory approvals</li>
                <li>✓ Banking relationships and account opening support</li>
                <li>✓ Compliance framework setup (accounting systems, reporting structures)</li>
                <li>✓ Documentation and legal paperwork management</li>
                <li>✓ Hand-holding through every step until your structure is fully operational</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Ongoing Management */}
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-12 h-12 mx-auto mb-6">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-[#1b1b1b] mb-6">
              Ongoing Management
            </h2>

            <p className="text-base text-[#1b1b1b]/70 mb-6 leading-relaxed">
              Your structure is set up. Now what? We handle everything so you can focus on what actually makes you money: running your business.
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1b1b1b] mb-4">What's included:</h3>
              <ul className="space-y-2 text-sm text-[#1b1b1b]/70">
                <li>✓ Monthly bookkeeping and accounting</li>
                <li>✓ Quarterly and annual tax filings (UAE, Spain, and other jurisdictions as needed)</li>
                <li>✓ Compliance monitoring to ensure you're always up to date</li>
                <li>✓ Financial reporting so you know where your business stands</li>
                <li>✓ Tax optimization review to ensure your structure continues to work as your business evolves</li>
                <li>✓ Direct access to me for questions and ongoing support</li>
              </ul>
            </div>
          </div>

          {/* Service 4: Ad-hoc Tax Advisory */}
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-12 h-12 mx-auto mb-6">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-[#1b1b1b] mb-6">
              Ad-hoc Tax Advisory
            </h2>

            <p className="text-base text-[#1b1b1b]/70 mb-6 leading-relaxed">
              Sometimes you don't need a full restructuring or ongoing management. You just need a clear answer to a specific question.
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1b1b1b] mb-4">What's included:</h3>
              <ul className="space-y-2 text-sm text-[#1b1b1b]/70">
                <li>✓ Specific tax questions answered by an expert</li>
                <li>✓ Quick structure reviews and second opinions</li>
                <li>✓ Transaction-specific advice (asset sales, business acquisitions, etc.)</li>
                <li>✓ Scenario planning for business decisions with tax implications</li>
                <li>✓ Compliance clarifications</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <hr className="border-t border-[#1b1b1b]/10 mb-12" />
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-[#1b1b1b]/70 mb-8">
              Let's discuss your specific situation and find the right solution for your business.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-[#6B2C2C] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#6B2C2C]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Your Journey Here
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
