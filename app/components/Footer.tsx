import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 py-16 bg-[#eeede9] border-t border-[#1b1b1b]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img
              src="/transparente.svg"
              alt="EvolveTax Logo"
              className="w-40 mb-6"
            />
            <p className="text-[#1b1b1b]/70 leading-relaxed max-w-md">
              International tax advisory specialized in Dubai and digital businesses. Expert guidance for entrepreneurs worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-[#1b1b1b] font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[#1b1b1b]/70 hover:text-[#78586F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#1b1b1b]/70 hover:text-[#78586F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#1b1b1b]/70 hover:text-[#78586F] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-[#1b1b1b]/70 hover:text-[#78586F] transition-colors">
                  Clients
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1b1b1b] font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-[#1b1b1b]/70">
              <p>Email: info@evolvetax.com</p>
              <p>WhatsApp: +971 XX XXX XXXX</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1b1b1b]/10 pt-8 text-center text-[#1b1b1b]/60">
          <p>&copy; 2024 EvolveTax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
