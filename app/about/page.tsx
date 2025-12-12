'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* Background Image with Grayscale Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400)',
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
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '200ms',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              <span className={`transition-all duration-1000 ${isHeroHovered ? 'text-[#d4a5a5]' : 'text-white/90'}`}>
                About Us
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '400ms',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              A boutique tax advisory firm built for digital entrepreneurs who want to scale smarter
            </p>

            {/* Scroll Indicator */}
            <div
              className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
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

      {/* About EvolveTax Section */}
      <section
        id="about-evolvetax"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-[#eeede9]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has('about-evolvetax')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="inline-block mb-4">
              <div className="h-px w-16 bg-[#6B2C2C] mb-6 mx-auto"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6 tracking-tight">
              About EvolveTax
            </h2>
            <p className="text-xl md:text-2xl text-[#1b1b1b]/60 leading-relaxed max-w-3xl mx-auto">
              Built for entrepreneurs who refuse to settle
            </p>
          </div>

          {/* Main Statement */}
          <div
            className={`max-w-4xl mx-auto mb-20 text-center transition-all duration-1000 ${
              visibleSections.has('about-evolvetax')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-2xl md:text-3xl font-bold text-[#1b1b1b] leading-tight mb-6">
              We are not a traditional tax firm.
            </p>
            <p className="text-lg md:text-xl text-[#1b1b1b]/70 leading-relaxed">
              We are a strategic partner for digital entrepreneurs who want to build global businesses without the bureaucratic nonsense. We help you structure smart, stay compliant, and keep more of what you earn — so you can focus on what actually matters: growing your business and living the life you designed.
            </p>
          </div>

          {/* Who We Work With - Cards Grid */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1b1b1b] mb-10 text-center">
              Who we work with
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  title: 'Digital Entrepreneurs',
                  description: 'SaaS, e-commerce, consulting, agencies, content creators',
                  delay: '300ms'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'High-Income Freelancers',
                  description: 'Contractors and consultants with international clients',
                  delay: '400ms'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: 'Online Business Owners',
                  description: 'Scaling globally and optimizing tax structures',
                  delay: '500ms'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Dubai Relocators',
                  description: 'Entrepreneurs setting up their business in the UAE',
                  delay: '600ms'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                  style={{
                    opacity: visibleSections.has('about-evolvetax') ? 1 : 0,
                    transform: visibleSections.has('about-evolvetax') ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: visibleSections.has('about-evolvetax') ? item.delay : '0ms'
                  }}
                >
                  <div className="w-14 h-14 bg-[#6B2C2C]/10 rounded-xl flex items-center justify-center mb-4 text-[#6B2C2C] group-hover:bg-[#6B2C2C] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#1b1b1b] mb-2 group-hover:text-[#6B2C2C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#1b1b1b]/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Us Different */}
          <div
            className={`bg-white rounded-3xl p-10 md:p-16 shadow-lg transition-all duration-1000 ${
              visibleSections.has('about-evolvetax')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1b1b1b] mb-8 text-center">
                What makes us different
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    number: '01',
                    title: 'No Corporate BS',
                    description: 'We speak your language, not tax jargon. Clear, direct communication about what matters for your business.'
                  },
                  {
                    number: '02',
                    title: 'Strategic, Not Transactional',
                    description: "We are not just filling out forms. We design structures that support your vision and scale with your growth."
                  },
                  {
                    number: '03',
                    title: 'Built for Speed',
                    description: 'Digital entrepreneurs move fast. So do we. No endless meetings, no bureaucratic delays.'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-5xl font-bold text-[#6B2C2C]/20 mb-4">{item.number}</div>
                    <h4 className="text-xl font-bold text-[#1b1b1b] mb-3">{item.title}</h4>
                    <p className="text-[#1b1b1b]/70 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section
        id="meet-rocio"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-white"
      >
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.has('meet-rocio')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-[#6B2C2C] mb-6 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6 tracking-tight">
            Our Team
          </h2>
          <p className="text-xl md:text-2xl text-[#1b1b1b]/60 leading-relaxed max-w-3xl mx-auto">
            Meet the people behind EvolveTax
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div
            className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ${
              visibleSections.has('meet-rocio')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
                <img
                  src="/photo%20linkedin%20v3.png"
                  alt="Rocío Falagán - Founder of EvolveTax"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-4 tracking-tight">
                Rocío Falagán
              </h3>
              <p className="text-xl text-[#6B2C2C] font-semibold mb-6">
                Founder & CEO
              </p>

              <div className="space-y-5 text-base text-[#1b1b1b]/70 leading-relaxed">
                <p>
                  I spent nearly 8 years working in tax advisory across consulting firms and law firms in Spain and Dubai. I saw how the traditional model worked — and more importantly, how it didn't work for the entrepreneurs I wanted to serve.
                </p>

                <p>
                  Seven months ago, I made the decision to leave it all behind and build something different. Something that actually makes sense for digital entrepreneurs who don't fit the corporate mold.
                </p>

                <p>
                  EvolveTax exists because I believe tax planning should be a tool for freedom, not a bureaucratic nightmare. My clients aren't looking for someone to just "do their taxes." They're building global businesses and need a strategic partner who understands their vision.
                </p>

                <p>
                  I help digital entrepreneurs optimize their business structures so they can scale faster, keep more of what they earn, and build the freedom they actually want — not just talk about it.
                </p>

                <p className="italic text-[#1b1b1b] font-medium pt-2">
                  Beyond tax strategy, I also share my journey of entrepreneurship, growth, and reinvention. Because I believe that building a business you love starts with building yourself first.
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/rociofalagan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B2C2C] text-white rounded-full font-semibold hover:bg-[#8B3C3C] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-[#eeede9]"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6 tracking-tight transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            Ready to build your global business?
          </h2>
          <p
            className={`text-lg md:text-xl text-[#1b1b1b]/70 mb-10 leading-relaxed transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Let's discuss your business structure and create a plan that actually works for you
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-12 py-5 bg-[#6B2C2C] text-white rounded-full font-semibold text-lg hover:bg-[#8B3C3C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
