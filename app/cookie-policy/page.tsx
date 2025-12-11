import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
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
          <p className="text-gray-700 leading-relaxed mb-4">
            At Evolve Tax, we use cookies and similar technologies to enhance your experience on our website,
            understand how you interact with our content, and optimize our services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy is part of our{' '}
            <Link href="/privacy-policy" className="text-[#6B2C2C] hover:underline font-semibold">
              Privacy Policy
            </Link>{' '}
            and explains what cookies are, which ones we use, what we use them for, and how you can control them.
          </p>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            1. What are cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
            a website. They allow the site to remember your actions and preferences over a period of time, so you
            don't have to reconfigure them each time you return.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In addition to traditional cookies, we also use similar technologies such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li><strong>Tracking pixels:</strong> small invisible images embedded in web pages or emails</li>
            <li><strong>Local storage:</strong> data saved directly in your browser</li>
            <li><strong>Web beacons:</strong> code fragments that collect information about your browsing</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            In this policy, when we refer to "cookies," we mean all of these technologies.
          </p>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            2. What types of cookies do we use?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We use different types of cookies based on their function and duration:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1. By duration</h3>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Session cookies</h4>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are automatically deleted when you close your browser. They allow you to navigate the site smoothly
            during a visit.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Persistent cookies</h4>
          <p className="text-gray-700 leading-relaxed mb-8">
            These remain on your device for a specified period (which can range from days to years) and are activated
            each time you visit our site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2. By who manages them</h3>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">First-party cookies</h4>
          <p className="text-gray-700 leading-relaxed mb-6">
            These are created and managed directly by us from www.evolvetaxdubai.com.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Third-party cookies</h4>
          <p className="text-gray-700 leading-relaxed">
            These are created and managed by external companies that provide us with services (such as Google Analytics,
            advertising providers, etc.).
          </p>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            3. What do we use cookies for?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            We use cookies for different purposes. Below we explain each one:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1. Strictly necessary cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>What do they do?</strong> These are essential for the website to function properly. They enable
            basic navigation, security, and access to protected areas.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Can I disable them?</strong> No. Without these cookies, the site would not work properly. They
            are activated automatically when you access the site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">Examples of use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Remember that you have accepted cookies</li>
            <li>Keep your session active while navigating through different pages</li>
            <li>Protect the site from malicious attacks</li>
            <li>Ensure contact forms work correctly</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2. Performance and analytical cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>What do they do?</strong> They help us understand how visitors interact with our site: which pages
            they visit, how long they stay, which links they click, etc.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Can I disable them?</strong> Yes. You can reject or disable them at any time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">Examples of use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4 leading-relaxed">
            <li>Count visits and traffic sources</li>
            <li>Know which tax planning content is most popular</li>
            <li>Identify technical errors</li>
            <li>Measure the effectiveness of our educational content on international taxation</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Services used:</strong> Google Analytics, Hotjar (or other web analytics services)
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.3. Functionality cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>What do they do?</strong> They remember your preferences and choices to offer you a more
            personalized experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Can I disable them?</strong> Yes. If you disable them, some enhanced features may not be available.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">Examples of use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Remember your preferred language</li>
            <li>Remember your region or location</li>
            <li>Personalize the tax content we show you</li>
            <li>Remember display settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.4. Advertising and marketing cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>What do they do?</strong> They allow us to show relevant ads about our tax advisory services when
            you visit other websites, and measure the effectiveness of our advertising campaigns.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Can I disable them?</strong> Yes. You can reject them completely.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">Examples of use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4 leading-relaxed">
            <li>Show you ads about our services on other websites</li>
            <li>Prevent you from seeing the same ad repeatedly</li>
            <li>Measure how many people click on our ads</li>
            <li>Create similar audiences for our campaigns targeting digital entrepreneurs and international business owners</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Services used:</strong> Google Ads, Facebook Pixel, LinkedIn Insight Tag, Meta Pixel
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">3.5. Social media cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>What do they do?</strong> They allow you to share our content on social media and help us
            understand how you interact with our social posts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Can I disable them?</strong> Yes. If you disable them, you won't be able to share content
            directly from our site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">Examples of use:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4 leading-relaxed">
            <li>"Share" buttons on LinkedIn, Twitter, Facebook</li>
            <li>Integrated social media widgets</li>
            <li>Tracking interactions with social content</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            <strong>Services used:</strong> LinkedIn, Facebook, Twitter/X, Instagram
          </p>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            4. Specific cookies we use
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Below you will find a detailed list of the cookies we currently use:
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
            <p className="text-amber-900 leading-relaxed">
              <strong>Note:</strong> This list is updated periodically. You can access the most current information
              in the cookie settings panel on our website.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Strictly necessary cookies:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li><strong>Cookie consent:</strong> Saves your preference regarding cookie usage</li>
            <li><strong>Session cookie:</strong> Maintains your active session during navigation</li>
            <li><strong>Security cookies:</strong> Protect against CSRF and XSS attacks</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytical cookies:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li><strong>Google Analytics (_ga, _gid, _gat):</strong> Measure traffic and behavior on the site</li>
            <li><strong>Hotjar:</strong> Records heat maps and session recordings (anonymized)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing cookies:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li><strong>Google Ads:</strong> Conversion tracking and remarketing</li>
            <li><strong>Facebook Pixel:</strong> Measurement and optimization of Facebook/Instagram campaigns</li>
            <li><strong>LinkedIn Insight Tag:</strong> Conversion tracking on LinkedIn</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            5. How can I manage cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            You have several options to control and manage cookies:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.1. Cookie settings panel</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The easiest way is to use our cookie settings panel that appears when you visit our site for the first
            time. There you can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Accept all cookies</li>
            <li>Reject all cookies (except strictly necessary ones)</li>
            <li>Customize your selection by choosing which categories you accept</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            You can change your preferences at any time by clicking on the "Cookie Settings" link found in the
            footer of our website.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.2. Browser settings</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            You can also manage cookies directly from your browser settings. Here's how to do it in the most popular
            browsers:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Google Chrome</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 leading-relaxed">
                <li>Click on the menu (three vertical dots) → Settings</li>
                <li>Go to Privacy and security → Cookies and other site data</li>
                <li>Choose your cookie preferences</li>
              </ol>
              <p className="text-gray-700 mt-2">
                More information:{' '}
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B2C2C] hover:underline"
                >
                  https://support.google.com/chrome/answer/95647
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 leading-relaxed">
                <li>Click on the menu (three lines) → Settings</li>
                <li>Go to Privacy and security</li>
                <li>In the Cookies and site data section, adjust your preferences</li>
              </ol>
              <p className="text-gray-700 mt-2">
                More information:{' '}
                <a
                  href="https://support.mozilla.org/kb/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B2C2C] hover:underline"
                >
                  https://support.mozilla.org/kb/cookies
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Safari</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 leading-relaxed">
                <li>Go to Preferences → Privacy</li>
                <li>Select your preferences in "Cookies and website data"</li>
              </ol>
              <p className="text-gray-700 mt-2">
                More information:{' '}
                <a
                  href="https://support.apple.com/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B2C2C] hover:underline"
                >
                  https://support.apple.com/guide/safari/sfri11471/mac
                </a>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 leading-relaxed">
                <li>Click on the menu (three dots) → Settings</li>
                <li>Go to Privacy, search and services</li>
                <li>In Tracking prevention, adjust your preferences</li>
              </ol>
              <p className="text-gray-700 mt-2">
                More information:{' '}
                <a
                  href="https://support.microsoft.com/microsoft-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B2C2C] hover:underline"
                >
                  https://support.microsoft.com/microsoft-edge
                </a>
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.3. Private browsing or incognito mode</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Most browsers offer a private browsing mode that does not save persistent cookies. However, session
            cookies are used during the session.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">5.4. Anti-tracking tools</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            There are extensions and tools that help you block tracking:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li><strong>Ghostery:</strong> Blocks trackers and third-party cookies</li>
            <li><strong>Privacy Badger:</strong> From the Electronic Frontier Foundation</li>
            <li><strong>uBlock Origin:</strong> Blocks ads and trackers</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            6. Cookies on mobile devices
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you access our website from a mobile device, cookies are also used. You can manage them as follows:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">iOS (iPhone/iPad)</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-8 ml-4 leading-relaxed">
            <li>Go to Settings → Safari</li>
            <li>Enable "Block all cookies" or configure as you prefer</li>
            <li>You can also enable "Prevent cross-site tracking"</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Android</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 leading-relaxed">
            <li>Open Chrome (or another browser)</li>
            <li>Go to Settings → Site settings → Cookies</li>
            <li>Choose your preferences</li>
          </ol>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            7. Consequences of disabling cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you decide to disable certain cookies, it is possible that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li>Some website functionalities may not be available</li>
            <li>You may have to re-enter your preferences each time you visit the site</li>
            <li>Certain content may not display correctly</li>
            <li>The browsing experience will be less personalized</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Strictly necessary cookies cannot be disabled if you want to use the website, as they are essential for
            its basic operation.
          </p>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            8. How long do we keep the information?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The time we keep information collected through cookies varies depending on the type:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4 leading-relaxed">
            <li><strong>Session cookies:</strong> Deleted when closing the browser</li>
            <li><strong>Analytical cookies:</strong> Generally up to 24-26 months</li>
            <li><strong>Marketing cookies:</strong> Between 30 days and 24 months, depending on the service</li>
            <li><strong>Functionality cookies:</strong> Up to 12 months generally</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can consult specific information about each cookie in our cookie settings panel.
          </p>
        </section>

        {/* Section 9 */}
        <section id="section-9" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            9. Updates to this policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Cookie Policy occasionally to reflect changes in the cookies we use or for legal
            reasons.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When we make significant changes, we will indicate this in the "last updated" date at the beginning of
            this document.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We recommend reviewing this policy periodically to stay informed about how we use cookies.
          </p>
        </section>

        {/* Section 10 */}
        <section id="section-10" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
            10. More information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have questions about our Cookie Policy, you can contact us:
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@evolvetaxdubai.com" className="text-[#6B2C2C] hover:underline">
              hello@evolvetaxdubai.com
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more information about how we process your personal data, please consult our{' '}
            <Link href="/privacy-policy" className="text-[#6B2C2C] hover:underline font-semibold">
              Privacy Policy
            </Link>.
          </p>
        </section>

        {/* Final Notice */}
        <div className="bg-gray-100 border-l-4 border-[#6B2C2C] p-8 mb-12">
          <p className="text-gray-800 text-lg leading-relaxed text-center">
            This Cookie Policy is an integral part of our{' '}
            <Link href="/terms-and-conditions" className="text-[#6B2C2C] hover:underline font-semibold">
              Terms and Conditions
            </Link>{' '}
            and our{' '}
            <Link href="/privacy-policy" className="text-[#6B2C2C] hover:underline font-semibold">
              Privacy Policy
            </Link>.
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
