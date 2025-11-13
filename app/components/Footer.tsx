import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-16 bg-[#1B1B1B]">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="/transparente.svg"
              alt="EvolveTax Logo"
              className="w-12 h-12 brightness-0 invert"
            />
            <h3 className="text-2xl font-bold text-[#EEEDE9]">EVOLVE TAX</h3>
          </div>
          <p className="text-[#EEEDE9]/70 text-lg ml-15">Tax, Simplified</p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Services */}
          <div>
            <h4 className="text-[#EEEDE9] font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#tax-advisory" className="text-[#EEEDE9]/70 hover:text-[#EEEDE9] transition-colors flex items-start gap-2">
                  <span>•</span>
                  <span>Tax Advisory</span>
                </Link>
              </li>
              <li>
                <Link href="/services#dubai-setup" className="text-[#EEEDE9]/70 hover:text-[#EEEDE9] transition-colors flex items-start gap-2">
                  <span>•</span>
                  <span>Dubai Setup</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[#EEEDE9] font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about#team" className="text-[#EEEDE9]/70 hover:text-[#EEEDE9] transition-colors flex items-start gap-2">
                  <span>•</span>
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link href="/about#approach" className="text-[#EEEDE9]/70 hover:text-[#EEEDE9] transition-colors flex items-start gap-2">
                  <span>•</span>
                  <span>Approach</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#EEEDE9] font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-[#EEEDE9]/70">
              <li>
                <a href="mailto:info@evolvetax.com" className="hover:text-[#EEEDE9] transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+971XXXXXXXX" className="hover:text-[#EEEDE9] transition-colors">
                  Phone
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EEEDE9] transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#EEEDE9]/10">
          <p className="text-[#EEEDE9]/60 text-center">
            © 2025 Evolve Tax. Dubai & EU.
          </p>
        </div>
      </div>
    </footer>
  );
}
