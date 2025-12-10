import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 pt-8 pb-12 bg-[#6B2C2C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/transparente.svg"
              alt="EvolveTax Logo"
              className="w-40 h-40 brightness-0 invert"
            />
          </div>

          {/* Center - Legal Links */}
          <div className="flex-1">
            <h4 className="text-white font-bold text-base mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-white hover:text-white/80 transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side - Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@evolvetaxdubai.com"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@evolvetaxdubai.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/evolvetaxdubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
