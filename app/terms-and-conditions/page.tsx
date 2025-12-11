import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Last Updated */}
        <p className="text-gray-500 text-sm mb-12">Last updated: December 2025</p>

        {/* Section 1 */}
        <section id="section-1" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Evolve Tax. By accessing or using our website (www.evolvetaxdubai.com), requesting information
            about our services, or engaging any of our international tax advisory services, you agree to be bound by
            these Terms and Conditions (the "Terms").
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you do not agree with these Terms, please do not use our website or engage our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These Terms apply to all website visitors, proposal requesters, and clients who engage our services.
          </p>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            2. Company Information
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p><strong className="text-gray-900">Legal name:</strong> Evolve Blueprint Consulting FZCO</p>
            <p><strong className="text-gray-900">Trade name:</strong> Evolve Tax</p>
            <p><strong className="text-gray-900">Registered address:</strong> Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
            <p><strong className="text-gray-900">Contact email:</strong> <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a></p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            3. Description of Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Evolve Tax is a boutique international tax advisory firm specializing in helping digital entrepreneurs,
            e-commerce businesses, SaaS companies, content creators, consultants, and crypto professionals optimize
            their tax structures through UAE company formation and international tax planning. Our services include:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1. International Tax Structuring</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Comprehensive analysis of your business model and tax situation to design tax-efficient structures. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Analysis of your business model, revenue sources, and current structure</li>
            <li>Evaluation of applicable tax jurisdictions (Spain, UAE, US, and others)</li>
            <li>Design of optimal tax structure considering tax residency, corporate structure, and tax treaties</li>
            <li>Identification of tax risks and regulatory compliance requirements</li>
            <li>Personalized international tax strategy proposal</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2. Structure Implementation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            End-to-end management of UAE company formation and establishment of the recommended structure. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Selection of Dubai free zone (IFZA, DMCC, DIFC, or others based on needs)</li>
            <li>Company incorporation and commercial license obtainment</li>
            <li>Residence visa management (for you and/or employees)</li>
            <li>Corporate bank account opening in UAE</li>
            <li>Coordination with partners for complementary services (domiciliation, virtual office, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3. Ongoing Tax Advisory and Compliance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ongoing tax advisory services and regulatory compliance management. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>UAE tax advisory: Corporate Tax, VAT, Economic Substance Regulations</li>
            <li>Accounting management and financial statement preparation</li>
            <li>Tax return filing (Corporate Tax Return, VAT returns)</li>
            <li>Annual license and visa renewals</li>
            <li>Ad-hoc tax consultations on cross-border operations</li>
            <li>Coordination with tax advisors in other jurisdictions when necessary</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.4. Additional Services</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Based on specific needs:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Tax due diligence for acquisitions or investments</li>
            <li>Exit planning or restructuring</li>
            <li>Economic substance compliance advisory</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <p className="text-amber-900 leading-relaxed">
              <strong>Important:</strong> The specific scope, deliverables, timelines, and fees for each project
              will be detailed in an individual Service Proposal that must be accepted by the client before work begins.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            4. Nature of Services and Important Disclaimers
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1. Professional Advice</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our services constitute professional tax advice based on our knowledge and experience in international
            taxation, particularly in Spain, UAE, and US jurisdictions. However, each situation is unique and advice
            is provided based on the information you provide to us.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2. No Guarantee of Specific Tax Results</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While we design optimized tax structures, we cannot guarantee specific tax savings or concrete results,
            as these depend on multiple factors including: your implementation of the strategy, changes in your
            business model, changes in tax legislation, tax authority interpretation, and future personal circumstances.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3. Constantly Changing Legislation</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Tax laws change constantly. Our advice is based on legislation in effect at the time of service delivery.
            We are not responsible for subsequent legislative changes that may affect the implemented structure,
            although we offer ongoing update and adaptation services.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.4. Coordination with Other Advisors</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            For situations involving jurisdictions outside our core expertise (Spain, UAE, US), we will work with
            you to coordinate with local tax advisors. We maintain responsibility for the advice we provide directly,
            but not for third-party advice.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.5. Compliance is Client's Responsibility</h3>
          <p className="text-gray-700 leading-relaxed">
            While we advise you on compliance obligations, you are legally responsible to tax authorities for meeting
            all applicable tax obligations. Our role is to guide you, but the final responsibility is yours.
          </p>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            5. Engagement Process
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1. Initial Consultation</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            The process begins when you contact us requesting information. We will conduct an initial consultation
            (typically via video conference) to understand your situation, business model, tax objectives, and
            relevant personal circumstances.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2. Service Proposal</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based on the information gathered, we will send you a Service Proposal that includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Detailed description of service scope</li>
            <li>Specific deliverables and estimated timelines</li>
            <li>Total fees and payment structure</li>
            <li>Particular engagement conditions</li>
            <li>Information required from you</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3. Acceptance and Signature</h3>
          <p className="text-gray-700 leading-relaxed">
            The contract is finalized when you formally accept the Service Proposal through electronic or physical
            signature, and make the initial payment as agreed.
          </p>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            6. Fees and Payment Conditions
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1. Fee Structure</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our fees are established on a case-by-case basis depending on work complexity. The structure may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Fixed project fee (typical for initial structuring and company formation)</li>
            <li>Monthly retainer (for ongoing compliance services)</li>
            <li>Hourly rate for ad-hoc consultations</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2. Additional Expenses</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Fees do not include third-party expenses such as: government fees (licenses, visas), company incorporation
            costs, banking fees, document translation/apostille costs, or external partner fees (local accountants in
            UAE, complementary service providers). These expenses are billed separately or paid directly by you as agreed.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3. Payment Methods</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We accept payments via international bank transfer, credit/debit card, and other methods specified in
            the Service Proposal.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.4. Payment Terms</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Terms will be established in the Proposal. Generally:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>An initial payment (50%) is required before starting work</li>
            <li>Subsequent payments are made upon achieving milestones</li>
            <li>For ongoing services (compliance), monthly advance payment</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.5. Consequences of Non-Payment</h3>
          <p className="text-gray-700 leading-relaxed mb-3">In case of payment delay:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>We reserve the right to suspend services</li>
            <li>We may apply late payment interest according to applicable laws</li>
            <li>We may terminate the contract if non-payment persists for more than 30 days</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.6. Additional Work</h3>
          <p className="text-gray-700 leading-relaxed">
            Any service exceeding the scope defined in the Proposal will be considered additional work and billed
            separately upon prior written agreement.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            7. Client Obligations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            For us to provide effective tax advisory services, you need to fulfill the following obligations:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1. Complete and Truthful Information</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Provide us with complete, accurate, and updated information about: your personal tax situation, business
            model, current corporate structure, revenue sources, relevant assets, tax residency, and any other
            information we request for tax analysis.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2. Documentation</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Provide timely all required documentation: passports, tax residency certificates, previous tax returns,
            financial statements, relevant contracts, existing corporate documents, and any other necessary documents.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">7.3. Timely Communication</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Respond to our inquiries within reasonable time, participate in follow-up meetings, and immediately notify
            us of any material changes in your situation (residence change, business changes, new revenue sources, etc.).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">7.4. Implementation of Recommendations</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            If you decide to implement our recommendations, do so completely and correctly. Partial or incorrect
            implementations may generate tax risks not contemplated in our analysis.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">7.5. Tax Obligation Compliance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comply with all tax obligations in applicable jurisdictions, including filing returns and paying taxes
            within established deadlines.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <p className="text-amber-900 leading-relaxed">
              <strong>Important:</strong> Failure to meet these obligations may affect the quality of advice, generate
              additional tax risks, and impact delivery timelines. We will not be responsible for consequences arising
              from incomplete, inaccurate, or late information.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            8. Confidentiality
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">8.1. Confidential Information</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We recognize that the information you share with us is highly sensitive. We commit to maintaining absolute
            confidentiality about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Your personal and business tax situation</li>
            <li>Financial, asset, and corporate information</li>
            <li>Details about your business model and operations</li>
            <li>Tax strategies designed and implemented</li>
            <li>Any information marked as confidential or that should reasonably be considered as such</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">8.2. Exceptions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Information is not considered confidential if:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>It is in the public domain without breach on our part</li>
            <li>We legitimately knew it before the engagement</li>
            <li>We must disclose it by legal, judicial, or tax authority requirement</li>
            <li>You expressly authorize us to disclose it</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">8.3. Personal Data Protection</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            The processing of your personal data is governed by our{' '}
            <Link href="/privacy-policy" className="text-[#6B2C2C] hover:underline font-semibold">
              Privacy Policy
            </Link>, which you can consult on our website. We comply with all applicable data protection regulations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">8.4. Duration</h3>
          <p className="text-gray-700 leading-relaxed">
            These confidentiality obligations remain in effect during service delivery and indefinitely after
            engagement completion.
          </p>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            9. Intellectual Property
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">9.1. Project Deliverables</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Upon receipt of full payment, we transfer ownership of specific project deliverables: personalized tax
            analysis, structure proposal, implemented structure documentation, and any other agreed deliverables.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">9.2. Evolve Tax Methodologies and Know-How</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Evolve Tax retains all rights to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Our tax analysis and structuring methodologies</li>
            <li>Proprietary templates, frameworks, and tools</li>
            <li>General knowledge, experience, and techniques</li>
            <li>Any improvements to our methodologies derived from the project</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">9.3. Use of General Knowledge</h3>
          <p className="text-gray-700 leading-relaxed">
            We may reuse general knowledge, experiences, and techniques developed during your engagement for other
            clients, provided we do not disclose your specific confidential information.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            10. Warranties and Limitations
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">10.1. Our Warranties</h3>
          <p className="text-gray-700 leading-relaxed mb-3">We warrant that:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>We will provide services with expected professional diligence</li>
            <li>We will apply our best knowledge and experience in international taxation</li>
            <li>Advice will be based on current legislation and best practices</li>
            <li>We will maintain ongoing updates on relevant tax legislation changes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">10.2. Nature of Advice</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Services are consultative and professional in nature. We provide analysis, recommendations, and tax
            strategies, but you are solely responsible for final implementation decisions and results obtained.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">10.3. No Guarantee of Authority Acceptance</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            While we design structures complying with applicable legislation, we cannot guarantee that tax authorities
            in any jurisdiction will not challenge the structure in the future, given the different possible
            interpretations of tax law and changes in administrative criteria.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">10.4. Exclusion of Other Warranties</h3>
          <p className="text-gray-700 leading-relaxed">
            Except for warranties expressly stated, we provide no other implied warranties.
          </p>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            11. Limitation of Liability
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">11.1. Liability Cap</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our total liability to you, for any cause related to the engagement (contractual, non-contractual,
            negligence, or other), shall not exceed the total amount of fees you have paid us for the specific
            project that gave rise to the claim.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">11.2. Exclusion of Indirect Damages</h3>
          <p className="text-gray-700 leading-relaxed mb-3">We shall not be liable for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Loss of profits or expected tax savings</li>
            <li>Loss of business opportunities</li>
            <li>Reputational damage</li>
            <li>Tax penalties arising from subsequent legislative changes</li>
            <li>Any other indirect or consequential damages</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">11.3. Exceptions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">These limitations DO NOT apply to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Damages caused intentionally or by gross negligence</li>
            <li>Breach of confidentiality obligations</li>
            <li>Any other liability that cannot legally be limited</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">11.4. Claims Period</h3>
          <p className="text-gray-700 leading-relaxed">
            You must notify us in writing of any claim within a maximum of twelve (12) months from when you had or
            should have had knowledge of the facts giving rise to the claim.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            12. Duration and Termination
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">12.1. Duration</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            The engagement duration will be specified in the Service Proposal. For ongoing compliance services, the
            relationship continues while both parties wish, subject to termination under these conditions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">12.2. Termination by Client</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            You may terminate the engagement with 30 days' written notice. In such case:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>You will pay for services rendered until the termination date</li>
            <li>We will deliver work completed up to that point</li>
            <li>You will pay reasonable expenses already incurred with third parties</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">12.3. Termination by Evolve Tax</h3>
          <p className="text-gray-700 leading-relaxed mb-3">We may terminate the engagement immediately if:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>You do not pay within 30 days after due date</li>
            <li>You materially breach your obligations</li>
            <li>You provide materially false or incomplete information</li>
            <li>A conflict of interest arises that cannot be resolved</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">12.4. Consequences of Termination</h3>
          <p className="text-gray-700 leading-relaxed mb-3">Upon termination:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Confidentiality obligations remain in effect</li>
            <li>You must pay all outstanding fees</li>
            <li>Intellectual property rights will be governed per Section 9</li>
          </ul>
        </section>

        {/* Section 13 */}
        <section id="section-13" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            13. Success Stories and Testimonials
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">13.1. Prior Authorization Required</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We will only share information about your project, testimonials, or success stories if you give us
            express written authorization. Given the sensitive nature of tax information, we will not assume
            implied consent.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">13.2. Control Over Shared Information</h3>
          <p className="text-gray-700 leading-relaxed mb-3">You decide what information can be shared:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Your name/company name</li>
            <li>Description of tax challenge</li>
            <li>Implemented solution</li>
            <li>Testimonials or quotes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">13.3. Aggregated and Anonymous Information</h3>
          <p className="text-gray-700 leading-relaxed">
            We may use completely anonymized and aggregated information (without possibility of identifying you) to
            communicate general insights about international taxation, UAE business structuring, or market trends.
          </p>
        </section>

        {/* Section 14 */}
        <section id="section-14" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            14. Website Use
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">14.1. Use License</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We grant you a limited, non-exclusive, and revocable license to access and use our website solely for
            informational purposes and to request our services.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">14.2. Restrictions</h3>
          <p className="text-gray-700 leading-relaxed mb-3">You may NOT:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Copy, modify, or distribute content without authorization</li>
            <li>Perform scraping or automated data extraction</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Use the site for illegal purposes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">14.3. Educational Content</h3>
          <p className="text-gray-700 leading-relaxed">
            Educational content about international taxation published on our website is general informational in
            nature and does not constitute specific tax advice for your situation. For personalized advice, you must
            engage our services.
          </p>
        </section>

        {/* Section 15 */}
        <section id="section-15" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            15. Modifications to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may modify these Terms occasionally. When we make significant changes, we will notify you by email at
            least 30 days in advance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have an ongoing engagement, changes will not affect that specific engagement, which will continue
            to be governed by the Terms in effect at the time of engagement.
          </p>
        </section>

        {/* Section 16 */}
        <section id="section-16" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            16. Force Majeure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We shall not be liable for breaches caused by circumstances beyond our reasonable control, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Natural disasters, pandemics, wars</li>
            <li>Sudden changes in tax legislation that radically affect the structure</li>
            <li>Government system failures (tax portals, commercial registries)</li>
            <li>Third-party delays (banks, authorities, partners)</li>
          </ul>
        </section>

        {/* Section 17 */}
        <section id="section-17" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            17. General Provisions
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">17.1. Entire Agreement</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            These Terms, together with the accepted Service Proposal and Privacy Policy, constitute the entire
            agreement between the parties.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">17.2. Severability</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            If any part of these Terms is declared invalid, the remainder remains in force.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">17.3. Assignment</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You may not transfer your rights or obligations without our prior consent. We may subcontract specific
            services to qualified partners (accountants in UAE, specialists in specific jurisdictions), maintaining
            full responsibility.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">17.4. Relationship Between Parties</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We are independent contractors. These Terms do not create a partnership, joint venture, agency, or
            employment relationship. Nor does it constitute an attorney-client relationship.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">17.5. Notices</h3>
          <p className="text-gray-700 leading-relaxed mb-3">All official communications must be in writing:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>
              For Evolve Tax:{' '}
              <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
                hello@evolvetaxdubai.com
              </a>
            </li>
            <li>For the client: the email provided in the Service Proposal</li>
          </ul>
        </section>

        {/* Section 18 */}
        <section id="section-18" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            18. Governing Law and Dispute Resolution
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">18.1. Governing Law</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            These Terms shall be governed and interpreted in accordance with the laws of the United Arab Emirates
            and applicable regulations in the IFZA free zone (International Free Zone Authority).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">18.2. EU Consumer Protection</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            For clients located in the European Union, corresponding consumer protection regulations shall apply
            when legally applicable.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">18.3. Amicable Resolution</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Before initiating any legal proceedings, both parties commit to attempting to resolve the dispute in
            good faith through direct negotiation for at least 30 days.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">18.4. Mediation</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            If negotiation does not resolve the dispute, the parties agree to attempt mediation before resorting
            to courts or arbitration.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">18.5. Jurisdiction</h3>
          <p className="text-gray-700 leading-relaxed">
            For disputes not resolved amicably, the parties submit to the competent courts of Dubai, United Arab
            Emirates, without prejudice to the rights of EU-resident consumers.
          </p>
        </section>

        {/* Section 19 */}
        <section id="section-19" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            19. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have questions about these Terms, our services, or any aspect of your engagement, contact us:
          </p>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
                hello@evolvetaxdubai.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a href="https://www.evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
                www.evolvetaxdubai.com
              </a>
            </p>
          </div>
        </section>

        {/* Final Notice */}
        <div className="bg-gray-100 border-l-4 border-[#6B2C2C] p-8 mb-12">
          <p className="text-gray-800 text-lg leading-relaxed text-center">
            By engaging our services or using our website, you confirm that you have read, understood, and accepted
            these Terms and Conditions.
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block text-[#6B2C2C] hover:text-[#8B3C3C] font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
