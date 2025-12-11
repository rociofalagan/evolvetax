import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Last Updated */}
        <p className="text-gray-500 text-sm mb-12">Last updated: December 2025</p>

        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Evolve Tax we take the protection of your personal information very seriously. This policy clearly
            and transparently explains how we collect, use, and protect your data when you work with us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are a boutique international tax advisory firm specializing in helping digital entrepreneurs,
            e-commerce businesses, SaaS companies, content creators, consultants, and crypto professionals optimize
            their tax structure through UAE company formation and international tax planning. Our work involves
            analyzing your personal and business tax situation, designing tax-efficient structures, and implementing
            compliance solutions.
          </p>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Who is responsible for your data?
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p><strong className="text-gray-900">Legal name:</strong> Evolve Blueprint Consulting FZCO</p>
            <p><strong className="text-gray-900">Trade name:</strong> Evolve Tax</p>
            <p><strong className="text-gray-900">Registered address:</strong> Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
            <p><strong className="text-gray-900">Contact email for privacy matters:</strong> <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a></p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            What information do we collect about you?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Depending on the stage of our relationship, we may collect different types of information:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Identification and contact information</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Full name, date of birth, nationality, passport number, email, phone, residential address. This
            information is necessary to: understand your personal tax situation, manage your UAE company
            incorporation, process residence visas, and comply with KYC (Know Your Customer) requirements from
            banks and authorities.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal tax information</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Current tax residency, history of tax residencies, previous tax returns (from Spain, US, or other
            jurisdictions), tax residency certificates, information about pending tax obligations. We need this
            information to design appropriate tax structures and assess double taxation risks or tax residency changes.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Information about your business</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Business model, revenue sources, location of clients and operations, current corporate structure,
            turnover volume, margins, financial projections. This information is essential to assess which tax
            structure is most appropriate for your specific situation and ensure compliance with Economic Substance
            Requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial and asset information</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Your business's financial statements, bank statements, information about significant assets, investments,
            loans. We need this information to: prepare annual financial statements, manage Corporate Tax in UAE,
            advise you on tax optimization, and comply with banking due diligence requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Identification documents</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Copies of your passport, identity documents, proof of address, academic or professional certificates
            (when necessary for specific licenses). These documents are required by UAE authorities for company
            incorporation, obtaining commercial licenses, and residence visas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment information</h3>
          <p className="text-gray-700 leading-relaxed">
            Billing data, banking information for transfers. We only collect the minimum necessary to manage payments
            for our professional services.
          </p>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            What do we use your information for?
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Provision of tax advisory services</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use your information to execute the services you have contracted:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Analysis of your current tax situation and optimal structure design</li>
            <li>UAE company incorporation and license management</li>
            <li>Processing of residence visas</li>
            <li>Opening corporate bank accounts</li>
            <li>Accounting management and financial statement preparation</li>
            <li>Filing tax returns (Corporate Tax, VAT)</li>
            <li>Ongoing tax advisory on cross-border operations</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Performance of the contract we sign with you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Sharing information with necessary third parties</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            To implement your structure and manage compliance, we must share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Free zone authorities in Dubai (IFZA, DMCC, DIFC) for company incorporation</li>
            <li>UAE Immigration Department for visa processing</li>
            <li>Banks in UAE for corporate account opening (subject to their KYC processes)</li>
            <li>Federal Tax Authority (FTA) of UAE for tax registration and return filing</li>
            <li>Local accounting partners in UAE when we outsource bookkeeping services</li>
            <li>Local tax advisors we partner up with for certain technical matters</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Performance of contract and compliance with legal obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication about your projects</h3>
          <p className="text-gray-700 leading-relaxed mb-4">We keep you informed about:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Status of your company, license, or visa processing</li>
            <li>Tax return filing deadlines</li>
            <li>Changes in tax legislation that may affect your structure</li>
            <li>Annual license and visa renewals</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Performance of contract and our legitimate interest in maintaining effective communication.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Improvement of our services</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We analyze (in aggregated and completely anonymous form) the results of our projects to improve our tax
            analysis and business structuring methodologies. We never share identifiable information about specific clients.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Our legitimate interest in improving the quality of our services.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Sharing success stories</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            We would like to be able to showcase the results we achieve with our clients (testimonials, descriptions
            of implemented structures, results obtained). Given the highly sensitive nature of tax information, we
            only do so if you give us your express written authorization. You decide exactly what information can be
            shared and how.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Your explicit consent, which you can withdraw at any time.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Keeping you informed about relevant content</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you are our client, we may send you information about: changes in international tax legislation, new
            tax optimization opportunities, educational content on UAE taxation, or relevant success stories. You can
            always unsubscribe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Our legitimate interest in keeping our clients informed about topics
            relevant to their tax situation.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized service proposals</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When you request information or a proposal, we use the data you provide to create an offer tailored to
            your specific tax situation and business model.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Legal basis:</strong> Your request for information and our legitimate interest in responding appropriately.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal compliance</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            As a regulated company in UAE, we must comply with tax, accounting, and legal obligations that may
            require processing your data. This includes: compliance with anti-money laundering (AML) regulations,
            Economic Substance Regulations, and our own tax obligations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Legal basis:</strong> Compliance with legal obligations.
          </p>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            How long do we keep your information?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We retain your data for the duration of our contractual relationship and, after completion:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li><strong>Tax and accounting documents:</strong> Minimum 5 years (per UAE regulations and international best practices)</li>
            <li><strong>Documents related to company incorporation:</strong> 5 years after service completion</li>
            <li><strong>Correspondence and communications:</strong> 3 years after completion</li>
            <li><strong>Contact information for commercial communications:</strong> until you ask us to delete it</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            These periods are established to handle potential claims, tax audits, or authority requirements.
          </p>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Who do we share your information with?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We do not sell or rent your information to third parties. We only share your data when necessary to
            provide the service or by legal obligation:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Authorities and entities in UAE</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Free zones (IFZA, DMCC, DIFC, etc.), Immigration Department, Federal Tax Authority (FTA), banks in UAE.
            These entities require your information to process company incorporation, licenses, visas, bank accounts,
            and tax compliance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional partners</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Local accountants in UAE (for bookkeeping and audit services), tax advisors in other jurisdictions (when
            we need to coordinate tax aspects outside Spain/UAE/US), complementary service providers (domiciliation,
            virtual office). All work under strict confidentiality agreements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology providers</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            We use third-party tools for: secure cloud storage, project management, client communication, accounting
            software. All our providers are contractually obligated to protect your information and meet appropriate
            security standards.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial entities</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            To manage payments for our services and make necessary transfers (payment of government fees, etc.).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax and judicial authorities</h3>
          <p className="text-gray-700 leading-relaxed">
            When required by law to provide information (court orders, automatic exchange of tax information between
            jurisdictions, reporting obligations).
          </p>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            International data transfers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Due to the nature of our services, your information may be transferred and processed in different jurisdictions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li><strong>United Arab Emirates:</strong> Where our company is domiciled and main services are provided</li>
            <li><strong>European Union:</strong> For clients resident in EU or when using European technology providers</li>
            <li><strong>United States:</strong> Some technology providers are located in US</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            When transferring data outside the EU, we ensure appropriate safeguards exist through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Standard contractual clauses approved by the European Commission</li>
            <li>Providers certified under recognized protection frameworks</li>
            <li>Transfer impact assessments when necessary</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            If you want more information about specific transfers or a copy of applicable safeguards, write to us at{' '}
            <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
              hello@evolvetaxdubai.com
            </a>.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Your rights over your information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            You have control over your personal data. These are your rights:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Access</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can ask us what information we have about you and receive a copy.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Rectification</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            If any data is incorrect or outdated, you can ask us to correct it.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Deletion</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can request that we delete your information. Please note that in many cases we have legal obligation
            to retain tax and accounting documentation for established periods.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Objection</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can object to our processing your data for certain purposes (for example, commercial communications
            about new services).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Restriction</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can ask us to restrict the use of your information in certain circumstances.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Portability</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can request to receive your data in structured electronic format to transfer it to another service provider.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Withdraw consent</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            When processing is based on your consent, you can withdraw it at any time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>To exercise any of these rights:</strong> simply write to us at{' '}
            <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
              hello@evolvetaxdubai.com
            </a>{' '}
            with proper identification (copy of passport or ID).
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you believe we have not properly attended to your rights, you can file a complaint with the
            corresponding data protection authority according to your jurisdiction (for EU residents, your country's
            authority; for UAE residents, the UAE Data Office).
          </p>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            How do we protect your information?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Given the highly sensitive nature of tax information, we implement robust technical and organizational
            security measures:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical measures</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Encryption of communications (TLS/SSL) and storage of sensitive data</li>
            <li>Multi-factor authentication for system access</li>
            <li>Encrypted and periodic backups</li>
            <li>Security monitoring and threat detection</li>
            <li>Continuous system updates and security patches</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational measures</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Strict access control: only people who truly need it access your information</li>
            <li>Confidentiality agreements with all our team and collaborators</li>
            <li>Internal data protection and information security policies</li>
            <li>Regular training of our team in data protection</li>
            <li>Continuous review and update of our security measures</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Your responsibility
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you provide us with information, you guarantee that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>The data you provide is true, accurate, and up to date</li>
            <li>You have the right to provide the information (especially relevant if sharing information about companies, partners, or employees)</li>
            <li>You will immediately inform us of any material changes in your tax or personal situation</li>
            <li>You will maintain the confidentiality of any access credentials we provide you</li>
          </ul>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Commercial communications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If at any time you no longer want to receive our communications about tax content, new services, or
            success stories, you can unsubscribe at any time:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>By clicking the "unsubscribe" link that appears in all our emails</li>
            <li>
              By sending us an email to{' '}
              <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
                hello@evolvetaxdubai.com
              </a>{' '}
              indicating you do not wish to receive more communications
            </li>
          </ul>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Changes to this policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this privacy policy occasionally to reflect changes in our practices, services, or
            applicable regulations. When we make significant changes, we will notify you by email or through a
            prominent notice on our website at least 30 days in advance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend reviewing this policy periodically. The date of last update always appears at the beginning
            of the document.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            Have questions?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about how we handle your personal information, don't hesitate to contact us:
          </p>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
                hello@evolvetaxdubai.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
            </p>
          </div>
        </section>

        {/* Final Notice */}
        <div className="bg-gray-100 border-l-4 border-[#6B2C2C] p-8 mb-12">
          <p className="text-gray-800 text-lg leading-relaxed text-center">
            This privacy policy has been written in clear and direct language because we believe you have the right
            to understand exactly what we do with your information.
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
