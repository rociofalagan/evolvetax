import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Legal Notice</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Last Updated */}
        <p className="text-gray-500 text-sm mb-12">Last updated: December 2025</p>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-gray-700 leading-relaxed text-lg">
            Access to and use of this website implies acceptance of the terms and conditions detailed below.
            If you do not agree with these terms, we recommend that you do not access or use this website.
          </p>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            1. Corporate Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            In accordance with applicable regulations, we inform you of the following details:
          </p>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p><strong className="text-gray-900">Legal name:</strong> Evolve Blueprint Consulting FZCO</p>
            <p><strong className="text-gray-900">Trade name:</strong> Evolve Tax</p>
            <p><strong className="text-gray-900">Registered address:</strong> Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
            <p><strong className="text-gray-900">Website:</strong> <a href="https://www.evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">www.evolvetaxdubai.com</a></p>
            <p><strong className="text-gray-900">Contact email:</strong> <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a></p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            2. Purpose and Scope of Application
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This Legal Notice governs access to and use of the website www.evolvetaxdubai.com (hereinafter, the "Website"), owned by Evolve Tax.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">The main purpose of the Website is to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Provide information about our international tax advisory and business structuring services</li>
            <li>Offer educational content on international taxation, UAE company formation, and tax optimization</li>
            <li>Facilitate a contact channel for inquiries and service requests</li>
            <li>Share resources on international tax planning for digital entrepreneurs, e-commerce, SaaS, and consultants</li>
          </ul>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
            <p className="text-amber-900 leading-relaxed">
              <strong>Important:</strong> This Legal Notice governs only access to and navigation of the Website.
              The engagement of our professional services is governed by the specific Terms and Conditions formalized
              upon acceptance of each Service Proposal.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            3. General Conditions of Use
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1. Website Access</h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Access to the Website is free and does not require prior registration, except for specific functionalities
            that require it (such as requesting an initial consultation, downloading resources, newsletter subscription, etc.).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2. Permitted Use</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">By accessing the Website, you agree to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Use it in accordance with the law and good practices</li>
            <li>Not use it for unlawful purposes or purposes that harm third parties</li>
            <li>Not attempt to access restricted areas without authorization</li>
            <li>Not introduce viruses, malware, or harmful code</li>
            <li>Provide truthful information when communicating with us or requesting our services</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3. Prohibited Use</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The following is expressly prohibited:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Performing scraping, data mining, or automated content extraction</li>
            <li>Copying, modifying, distributing, or reproducing content without authorization</li>
            <li>Using content to train AI models without express permission</li>
            <li>Attempting to breach the Website's security measures</li>
            <li>Impersonating another person or company</li>
            <li>Using the Website to transmit spam, unsolicited advertising, or malicious content</li>
            <li>Reverse engineering any aspect of the Website</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            4. Intellectual and Industrial Property
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1. Evolve Tax Rights</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            All content on the Website, including but not limited to texts, images, graphics, logos, icons, design,
            source code, navigation structure, databases, and any other elements, are protected by intellectual and
            industrial property rights.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">The following are owned by Evolve Tax or we have the corresponding licenses for their use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>The "Evolve Tax" brand and its visual identity (including logo mark and logotype)</li>
            <li>The Website's design and structure</li>
            <li>Articles, guides, and educational content on international taxation</li>
            <li>Success stories and testimonials (with client authorization)</li>
            <li>Proprietary tax structuring methodologies</li>
            <li>Photographs, illustrations, and graphic material</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2. Limited Use License</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">We grant you a limited, non-exclusive, non-transferable, and revocable license to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Access and view Website content for your personal and informational use</li>
            <li>Download and print content exclusively for non-commercial internal use</li>
            <li>Share links to our pages (without modifying the content)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.3. Restrictions</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">You may NOT, without our prior written consent:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Reproduce, modify, translate, or create derivative works from the content</li>
            <li>Distribute, sell, rent, or license the content to third parties</li>
            <li>Use the content for commercial purposes</li>
            <li>Remove copyright marks, trademarks, or other notices</li>
            <li>Use our name or brand in advertising without authorization</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.4. User Content</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">If you submit content to the Website (inquiries, testimonials, comments, etc.), you declare that:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>You have all necessary rights to that content</li>
            <li>It does not infringe third-party rights</li>
            <li>You grant us a non-exclusive license to use that content in connection with our services (always respecting your privacy)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">4.5. Infringement Claims</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you believe that any content on the Website infringes your intellectual property rights,
            contact us at <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a> providing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Your contact details and documentation proving your ownership</li>
            <li>Detailed description of the content you consider infringing</li>
            <li>Exact location on the Website</li>
            <li>Good faith statement that the use is not authorized</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            5. Links (Hyperlinks)
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1. Links to Third-Party Sites</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our Website may contain links to third-party websites (tax resources, tax authorities, jurisdiction information,
            company formation tools, etc.).
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">These links are provided solely for your convenience. We do not control or review the content of those sites and, therefore:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>We are not responsible for the content, privacy policies, or practices of third parties</li>
            <li>The inclusion of a link does not imply approval or association with that site</li>
            <li>Access to third-party sites is at your own risk</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2. Links from Third Parties to Our Site</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">You may link to our Website from your own site provided that:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>The link is direct and honest (not misleading)</li>
            <li>You do not falsely imply a relationship, sponsorship, or endorsement by us</li>
            <li>You do not copy or reproduce content from our Site</li>
            <li>Your site does not contain illegal, offensive, or inappropriate content</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to request the removal of any link that does not comply with these conditions.
          </p>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            6. Disclaimer of Warranties and Liability
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1. Website Availability</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">We make our best efforts to ensure the Website is available 24/7, but we cannot guarantee:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Uninterrupted or error-free access</li>
            <li>Absence of viruses or other harmful elements</li>
            <li>Accuracy or complete updating of all information</li>
            <li>Specific results from using the Website</li>
          </ul>
          <p className="text-gray-700 mb-8 leading-relaxed">
            We may suspend, modify, or discontinue any aspect of the Website without prior notice.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2. Informational Content</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Content published on the Website (articles, guides, jurisdiction information) is informational and educational in nature.
            Although we strive to keep information current and accurate:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>It does not constitute specific tax or legal advice for your particular situation</li>
            <li>It does not replace personalized professional consultation</li>
            <li>Tax laws change frequently and may become outdated</li>
            <li>Each tax situation is unique and requires individualized analysis</li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
            <p className="text-blue-900 leading-relaxed">
              <strong>Important:</strong> Information on the Website should not be considered definitive tax advice.
              You should always consult with a professional before making tax or business structuring decisions.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.3. Limitation of Liability</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">To the maximum extent permitted by law, Evolve Tax shall not be liable for:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Direct, indirect, incidental, or consequential damages arising from use of the Website</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Tax or business decisions made based solely on Website information</li>
            <li>Changes in tax regulations subsequent to content publication</li>
            <li>Interruptions, errors, or security failures</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">6.4. Security</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">We implement reasonable security measures to protect the Website and the information you share, but:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>We cannot guarantee absolute security</li>
            <li>We are not responsible for security breaches caused by third parties</li>
            <li>We recommend you take your own precautions (antivirus, secure passwords, etc.)</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            7. Personal Data Protection
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The processing of your personal data when you navigate the Website or contact us is governed by our{' '}
            <Link href="/privacy-policy" className="text-[#6B2C2C] hover:underline font-semibold">Privacy Policy</Link>,
            which you can consult at any time.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            By using the Website, you accept that we process your data in accordance with said policy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For any inquiry regarding the processing of your personal data, you can contact us at{' '}
            <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a>.
          </p>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            8. Cookies
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This Website uses cookies and similar technologies to improve your browsing experience, analyze site usage,
            and personalize content.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can consult detailed information about what cookies we use, for what purpose, and how to manage them
            in our <Link href="/cookie-policy" className="text-[#6B2C2C] hover:underline font-semibold">Cookie Policy</Link>.
          </p>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            9. Modifications
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We reserve the right to modify this Legal Notice at any time. Changes will take effect from their
            publication on the Website.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The last update date will always appear at the beginning of this document.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend you review this Legal Notice periodically. Continued use of the Website after modifications
            implies your acceptance of the new terms.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            10. Duration and Termination
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This Legal Notice is in effect as long as the Website is operational.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may suspend or terminate your access to the Website at any time if you breach these terms,
            without prior notice and without right to compensation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Upon termination, clauses regarding intellectual property, limitation of liability, and applicable law
            shall remain in effect.
          </p>
        </section>

        {/* Section 11 */}
        <section id="section-11" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            11. Severability
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If any provision of this Legal Notice is declared invalid or unenforceable, such provision shall be
            deemed modified to the minimum extent necessary to make it valid.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The invalidity of one provision shall not affect the validity of the rest of the Legal Notice.
          </p>
        </section>

        {/* Section 12 */}
        <section id="section-12" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            12. Waiver
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The fact that we do not immediately exercise any right under this Legal Notice does not constitute
            a waiver of such right.
          </p>
        </section>

        {/* Section 13 */}
        <section id="section-13" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            13. Applicable Law and Jurisdiction
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This Legal Notice shall be governed and interpreted in accordance with the laws of the United Arab Emirates
            and the applicable regulations in the IFZA free zone (International Free Zone Authority).
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            For users located in the European Union, corresponding consumer protection regulations shall apply.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">13.1. Dispute Resolution</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">In case of controversy or disagreement related to this Legal Notice:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>We will attempt to resolve it amicably through direct negotiation</li>
            <li>If negotiation is unsuccessful, the parties shall submit to the competent courts of Dubai, United Arab Emirates</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">13.2. Alternative Dispute Resolution</h3>
          <p className="text-gray-700 leading-relaxed">
            Users residing in the European Union may access the European Commission's online dispute resolution platform:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B2C2C] hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </section>

        {/* Section 14 */}
        <section id="section-14" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            14. Contact
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For any inquiry, suggestion, or complaint related to this Legal Notice or the Website, you can contact us:
          </p>
          <div className="space-y-3 text-gray-700 mb-6 leading-relaxed">
            <p><strong className="text-gray-900">Email:</strong> <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">hello@evolvetaxdubai.com</a></p>
            <p><strong className="text-gray-900">Website:</strong> <a href="https://www.evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">www.evolvetaxdubai.com</a></p>
            <p><strong className="text-gray-900">Address:</strong> Building A1, IFZA Business Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We commit to responding to your inquiries as quickly as possible and seeking amicable solutions to any conflict.
          </p>
        </section>

        {/* Final Notice */}
        <div className="bg-gray-100 border-l-4 border-[#6B2C2C] p-8 mb-12">
          <p className="text-gray-800 text-lg leading-relaxed text-center">
            By accessing and using this Website, you confirm that you have read, understood, and accepted this Legal Notice.
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
