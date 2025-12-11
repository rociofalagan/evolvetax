'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isHeroHovered, setIsHeroHovered] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsLoaded(true), 100);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      title: 'Strategic Tax Planning',
      description: 'We analyze your business and personal situation to design a customized international tax structure that fits your specific needs and goals.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'Full Implementation Support',
      description: 'We guide you through every step: company incorporation, tax residency setup, banking arrangements, and all compliance requirements.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      ),
      title: 'Ongoing Tax & Accounting',
      description: 'We manage your bookkeeping, tax filings, and compliance obligations so you can focus on growing your business, not paperwork.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'One-Time Tax Consultation',
      description: 'Have a specific question about your tax structure? Book a consultation with our team to get expert guidance on your particular situation.'
    }
  ];

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
    <div className="min-h-screen">
      {/* Hero Section with City Image */}
      <section
        className="relative h-screen overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* City Background Image with Grayscale Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2400)',
            filter: isHeroHovered ? 'grayscale(0%) brightness(0.8)' : 'grayscale(100%) brightness(0.5)',
            transform: isHeroHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: isHeroHovered
              ? 'linear-gradient(to bottom, rgba(107, 44, 44, 0.3), rgba(27, 27, 27, 0.6))'
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            {/* Main Headline */}
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                fontFamily: 'var(--font-be-vietnam)',
                transitionDelay: '200ms',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Expert Tax Advisory<br />
              <span className={`transition-all duration-1000 ${isHeroHovered ? 'text-[#d4a5a5]' : 'text-white/90'}`}>
                for Digital Entrepreneurs
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '400ms',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Strategic tax structures for entrepreneurs who think global
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-5 bg-white text-[#1b1b1b] rounded-full font-bold hover:bg-[#6B2C2C] hover:text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg shadow-xl"
              >
                Get Started
              </button>
              <Link
                href="/services"
                className="px-12 py-5 bg-transparent text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-[#1b1b1b] hover:scale-105 transition-all duration-300 text-lg shadow-xl text-center"
              >
                Our Services
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className="flex flex-col items-center gap-2 text-white/70">
                <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
                <svg
                  className="w-6 h-6 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - LexFlow Style */}
      <section id="services" data-animate className="relative px-6 pt-32 pb-20 overflow-hidden">
        {/* Gradient Background - smooth transition */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #f5f3ef 0%, #ffffff 30%, #f8f6f3 100%)'
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6B2C2C 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Smooth wave transition from hero */}
        <div className="absolute top-0 left-0 right-0 h-32">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,0 L0,40 Q360,80 720,60 T1440,50 L1440,0 Z"
              fill="#1b1b1b"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Badge + Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('services')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B2C2C] hover:bg-white rounded-full mb-6 transition-all duration-300 border-2 border-[#6B2C2C] cursor-default group">
              <span className="text-sm font-semibold text-white group-hover:text-[#6B2C2C] tracking-wide transition-colors duration-300">
                How we can help
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6 tracking-tight leading-tight">
              Build smart tax structures<br />that scale with your business
            </h2>
          </div>

          {/* Clean 4 Column Grid - LexFlow Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 ${
                  visibleSections.has('services')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: visibleSections.has('services') ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-xl bg-[#eeede9] flex items-center justify-center group-hover:bg-[#6B2C2C] transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[#6B2C2C] group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    {service.icon}
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1b1b1b] mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#1b1b1b]/60 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>

                {/* Learn more link */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#6B2C2C] hover:gap-3 transition-all duration-300 text-sm font-semibold group"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* Explore Services Button - Centered */}
          <div
            className={`text-center pt-8 transition-all duration-1000 ${
              visibleSections.has('services')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1b1b1b] text-white rounded-full font-semibold hover:bg-[#6B2C2C] transition-all duration-300 group"
            >
              Explore all services
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Jurisdictions Section - Dark Theme */}
      <section id="jurisdictions" data-animate className="relative px-6 pt-20 pb-32 overflow-hidden">
        {/* Background city image - clear and visible */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2400)',
            filter: 'grayscale(100%) brightness(0.5)'
          }}
        />

        {/* Gradient fade at top - blends with previous section */}
        <div
          className="absolute top-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to bottom, #faf8f5 0%, transparent 100%)'
          }}
        />

        {/* Gradient fade at bottom - for smooth transition to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #1b1b1b 0%, transparent 100%)'
          }}
        />

        {/* Dark overlay for text readability - only center */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(27, 27, 27, 0.4) 0%, rgba(27, 27, 27, 0.6) 100%)'
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Badge + Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('jurisdictions')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6B2C2C] hover:bg-white rounded-full mb-6 transition-all duration-300 border-2 border-[#6B2C2C] cursor-default group">
              <span className="text-sm font-semibold text-white group-hover:text-[#6B2C2C] tracking-wide transition-colors duration-300">
                Jurisdictions we work with
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Global presence
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Through strategic partnerships across the globe, we provide tax solutions and company formation services in these key jurisdictions
            </p>
          </div>

          {/* Countries pills */}
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
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
            ].map((country, index) => (
              <div
                key={country.name}
                className={`bg-white px-6 py-3.5 rounded-full border-2 border-white hover:bg-[#6B2C2C] hover:border-[#6B2C2C] transition-colors duration-300 cursor-default group ${
                  visibleSections.has('jurisdictions')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleSections.has('jurisdictions')
                    ? `${200 + index * 50}ms`
                    : '0ms',
                  transitionDuration: '600ms'
                }}
              >
                <span className="text-sm font-semibold text-[#1b1b1b] group-hover:text-white flex items-center gap-2 transition-colors duration-300">
                  <span className="text-lg">{country.flag}</span>
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Divider - Wave Transition from Jurisdictions to CTA */}
      <div className="relative h-24 overflow-hidden" style={{ background: '#1b1b1b' }}>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,48 Q360,96 720,48 T1440,48 L1440,96 L0,96 Z"
            fill="#eeede9"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section id="cta" data-animate className="relative px-6 py-40 overflow-hidden">
        {/* Gradient Background - same as services section */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #f5f3ef 0%, #ffffff 30%, #f8f6f3 100%)'
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6B2C2C 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1b1b1b] mb-8 tracking-tight transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            Ready to start?
          </h2>
          <p
            className={`text-lg md:text-xl text-[#1b1b1b]/60 mb-14 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: visibleSections.has('cta') ? '200ms' : '0ms' }}
          >
            Share your details with our team and we will help you design the optimal tax structure for your business
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className={`inline-flex items-center gap-2 px-12 py-5 bg-[#1b1b1b] text-white rounded-full font-semibold text-lg hover:bg-[#6B2C2C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: visibleSections.has('cta') ? '400ms' : '0ms',
              transitionDuration: '1000ms'
            }}
          >
            Get started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Curved Divider - Wave Transition from CTA to Footer */}
      <div className="relative h-24 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f8f6f3 0%, #f5f3ef 100%)' }}>
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,48 Q360,96 720,48 T1440,48 L1440,96 L0,96 Z"
            fill="#6B2C2C"
          />
        </svg>
      </div>

      {/* Contact Modal - Apple Style */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl my-8 animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-[#1b1b1b] tracking-tight">Get in touch</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-[#1b1b1b]/60 hover:text-[#1b1b1b] hover:bg-black/5 rounded-full transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#1b1b1b] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border-0 focus:bg-white focus:ring-2 focus:ring-[#6B2C2C] focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#1b1b1b] text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border-0 focus:bg-white focus:ring-2 focus:ring-[#6B2C2C] focus:outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1b1b1b] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border-0 focus:bg-white focus:ring-2 focus:ring-[#6B2C2C] focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-[#1b1b1b] text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border-0 focus:bg-white focus:ring-2 focus:ring-[#6B2C2C] focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your business..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3.5 bg-[#1b1b1b] text-white rounded-full font-semibold hover:bg-[#6B2C2C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3.5 bg-[#f5f5f7] text-[#1b1b1b] rounded-full font-semibold hover:bg-[#e8e8ed] transition-all duration-300"
                >
                  Cancel
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl text-sm">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl text-sm">
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
