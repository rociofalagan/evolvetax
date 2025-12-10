'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-1.5' : 'py-3'
    }`}>
      {/* Apple-style backdrop blur background */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-[#eeede9]/95 backdrop-blur-xl shadow-sm border-b border-black/5'
            : 'bg-black/20 backdrop-blur-md'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-all duration-300">
            <img
              src="/transparente.svg"
              alt="EvolveTax Logo"
              className={`w-auto transition-all duration-500 hover:scale-110 ${
                scrolled ? 'h-11' : 'h-16'
              }`}
              style={{
                filter: scrolled
                  ? 'none'
                  : 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (scrolled) {
                  e.currentTarget.style.filter = 'brightness(1.2) drop-shadow(0 4px 12px rgba(107, 44, 44, 0.3))';
                } else {
                  e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 4px 16px rgba(255,255,255,0.8))';
                }
              }}
              onMouseLeave={(e) => {
                if (scrolled) {
                  e.currentTarget.style.filter = 'none';
                } else {
                  e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.3))';
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  scrolled
                    ? 'text-[#1b1b1b] hover:bg-black/5'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-3 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm ${
                scrolled
                  ? 'bg-[#6B2C2C] text-white hover:bg-[#8B3C3C]'
                  : 'bg-white text-[#1b1b1b] hover:bg-white/90'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#1b1b1b] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-4 rounded-2xl bg-[#eeede9]/95 backdrop-blur-xl border border-black/5">
            <div className="flex flex-col gap-1 px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-[#1b1b1b] hover:bg-black/5 font-medium transition-colors text-base rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 mx-2 px-5 py-3 bg-[#6B2C2C] text-white rounded-full font-semibold hover:bg-[#8B3C3C] transition-all text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
