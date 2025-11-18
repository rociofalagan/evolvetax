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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', comments: '' });

      // Cerrar el modal después de 2 segundos
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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

          <p className="text-[19px] md:text-[21px] text-[#1b1b1b]/60 mb-8 font-light leading-[0.9] italic" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            International tax advisory for digital entrepreneurs ready to optimize their structure
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
              Start your Journey here
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
      <section className="px-6 pt-24 pb-12 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto mb-12">
          <hr className="border-t border-[#1b1b1b]/10" />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            Our Services
          </h2>
          <div className="text-lg text-[#1b1b1b]/60 max-w-6xl mx-auto space-y-3">
            <p>
              At Evolve Tax, we specialize in one thing: helping digital entrepreneurs structure their businesses intelligently from a tax perspective.
            </p>
            <p>
              We don't just give you advice. We implement, manage, and support your structure so you can focus on what you do best: running your business.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-5">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1b1b1b] mb-3 text-center">
              Strategic Tax Planning
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed text-sm text-center">
              We analyze your business and design the optimal international tax structure for you.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-5">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1b1b1b] mb-3 text-center">
              Full Implementation
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed text-sm text-center">
              We guide you through every step: company incorporation, tax residency, banking, and compliance setup.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-5">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1b1b1b] mb-3 text-center">
              Ongoing Management
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed text-sm text-center">
              We manage your accounting and tax filings while you focus on growth.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 mx-auto mb-5">
              <svg className="w-12 h-12 text-[#6B2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1b1b1b] mb-3 text-center">
              Ad-hoc Tax Advisory
            </h3>
            <p className="text-[#1b1b1b]/70 leading-relaxed text-sm text-center">
              Book a consultation with our team to address specific tax queries.
            </p>
          </div>
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
            <p className="text-lg text-[#1b1b1b]/70 max-w-5xl mx-auto mb-8">
              Through our strategic alliances with different partners accross the world, we cover the following jurisdictions:
            </p>
            <div className="w-full max-w-3xl mx-auto">
              <img
                src="/Mapa mundo - granate.svg"
                alt="World map showing jurisdictions"
                className="w-full h-auto"
              />
            </div>

            {/* Countries list */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {[
                { name: 'Spain', flag: '🇪🇸' },
                { name: 'Portugal', flag: '🇵🇹' },
                { name: 'Cyprus', flag: '🇨🇾' },
                { name: 'Malta', flag: '🇲🇹' },
                { name: 'Estonia', flag: '🇪🇪' },
                { name: 'United States', flag: '🇺🇸' },
                { name: 'United Arab Emirates', flag: '🇦🇪' },
                { name: 'Hong Kong', flag: '🇭🇰' },
                { name: 'Paraguay', flag: '🇵🇾' },
                { name: 'Panama', flag: '🇵🇦' }
              ].map((country) => (
                <div
                  key={country.name}
                  className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#6B2C2C] transition-all hover:-translate-y-0.5 cursor-default group"
                >
                  <span className="text-base font-semibold text-[#1b1b1b] group-hover:text-[#eeede9] transition-colors flex items-center gap-2">
                    <span className="text-xl">{country.flag}</span>
                    {country.name}
                  </span>
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
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-2.5 text-sm bg-[#6B2C2C] text-[#eeede9] rounded-lg font-semibold hover:bg-[#4D1F1F] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 text-sm bg-transparent text-[#1b1b1b] border-2 border-[#1b1b1b] rounded-lg font-semibold hover:bg-[#1b1b1b] hover:text-[#eeede9] transition-all"
                >
                  Cancel
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
