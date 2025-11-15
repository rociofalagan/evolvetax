'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí puedes añadir la lógica para enviar el formulario
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', email: '', comments: '' });
  };

  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-0">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#1b1b1b] mb-6 leading-[0.75] tracking-tight">
            <span className="block" style={{ fontFamily: 'var(--font-be-vietnam)' }}>Your Business Evolves.</span>
            <span className="block italic font-normal text-[32px] md:text-[56px] -mt-2 md:-mt-3" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Your tax strategy should too</span>
          </h1>

          <p className="text-[19px] md:text-[21px] text-[#1b1b1b]/60 mb-8 font-light leading-tight italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            International tax advisory to power your global business ambitions
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-transparent text-[#1b1b1b] border-2 border-[#1b1b1b] rounded-full font-semibold hover:bg-[#6B2C2C] hover:text-[#eeede9] hover:border-[#6B2C2C] transition-all text-base"
            >
              Explore Our Services
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block px-8 py-3 bg-transparent text-[#1b1b1b] border-2 border-[#1b1b1b] rounded-full font-semibold hover:bg-[#6B2C2C] hover:text-[#eeede9] hover:border-[#6B2C2C] transition-all text-base"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&auto=format&fit=crop&q=80"
            alt="City skyline"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Comprehensive tax solutions tailored for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Tax Structuring
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Optimal tax structure design maximizing efficiency and international legal compliance.
            </p>
            <Link href="/services" className="text-[#6B2C2C] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Dubai Setup
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Complete guidance through establishing your company in Dubai from start to finish.
            </p>
            <Link href="/services" className="text-[#6B2C2C] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1b1b1b] mb-4">
              Tax Advisory
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed mb-6">
              Ongoing tax consultation and strategic planning for sustainable business growth.
            </p>
            <Link href="/services" className="text-[#6B2C2C] font-semibold hover:underline">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-[#6B2C2C] text-[#eeede9] rounded-full font-semibold hover:bg-[#6B2C2C]/90 transition-all"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="px-6 pt-24 pb-12 bg-[#eeede9]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto mb-12">
            <hr className="border-t border-[#1b1b1b]/10" />
          </div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
              Jurisdictions we work with
            </h2>
            <p className="text-lg text-[#1b1b1b]/70 max-w-3xl mx-auto mb-8">
              Through our strategic alliances with different partners accross the world, we cover the following jurisdictions:
            </p>
            <div className="w-full max-w-5xl mx-auto">
              <img
                src="/Mapa mundo - granate.svg"
                alt="World map showing jurisdictions"
                className="w-full h-auto"
              />
            </div>

            {/* Countries list */}
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {['Spain', 'Portugal', 'Cyprus', 'Malta', 'Estonia', 'United States', 'United Arab Emirates', 'Hong Kong', 'Paraguay', 'Panama'].map((country) => (
                <div key={country} className="flex items-center gap-2 justify-center">
                  <div className="w-2 h-2 bg-[#6B2C2C] rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-[#1b1b1b]/70 whitespace-nowrap">{country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pt-4 pb-24 bg-[#eeede9]">
        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-t border-[#1b1b1b]/10" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Ready to take action?
          </h2>
          <p className="text-lg text-[#1b1b1b]/70 mb-10">
            Leave us your details and we'll personally reach out to assess your case and guide you forward.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-12 py-5 bg-[#6B2C2C] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#6B2C2C]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#eeede9] rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#1b1b1b] hover:text-[#6B2C2C] transition-colors -mt-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#1b1b1b] text-sm font-semibold mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-white border-2 border-[#DED9D3] focus:border-[#6B2C2C] focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#1b1b1b] text-sm font-semibold mb-1.5">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-white border-2 border-[#DED9D3] focus:border-[#6B2C2C] focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1b1b1b] text-sm font-semibold mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-white border-2 border-[#DED9D3] focus:border-[#6B2C2C] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-[#1b1b1b] text-sm font-semibold mb-1.5">
                  Comments
                </label>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-white border-2 border-[#DED9D3] focus:border-[#6B2C2C] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your business and tax needs..."
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-2.5 text-sm bg-[#6B2C2C] text-[#eeede9] rounded-lg font-semibold hover:bg-[#4D1F1F] transition-all shadow-lg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 text-sm bg-transparent text-[#1b1b1b] border-2 border-[#1b1b1b] rounded-lg font-semibold hover:bg-[#1b1b1b] hover:text-[#eeede9] transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
