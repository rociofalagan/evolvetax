'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
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
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'strategic-planning',
      title: 'Strategic Tax Planning',
      description: 'This is where everything begins. Before you incorporate anything or move anywhere, you need a clear strategy.',
      items: [
        'Deep-dive analysis of your current business structure and tax situation',
        'Custom tax optimization strategy tailored to your business model and goals',
        'Jurisdiction comparison (Dubai vs. alternatives) based on your specific needs',
        'Risk assessment and compliance roadmap',
        'Clear implementation plan with timeline and next steps'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2400',
      imagePosition: 'right'
    },
    {
      id: 'implementation',
      title: 'Full Implementation Support',
      description: 'You\'ve got the plan. Now it\'s time to execute.',
      items: [
        'Company incorporation in Dubai (or your chosen jurisdiction)',
        'Tax residency planning and setup',
        'Business licensing and regulatory approvals',
        'Banking relationships and account opening support',
        'Compliance framework setup (accounting systems, reporting structures)',
        'Documentation and legal paperwork management',
        'Hand-holding through every step until your structure is fully operational'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400',
      imagePosition: 'left'
    },
    {
      id: 'ongoing',
      title: 'Ongoing Tax & Accounting',
      description: 'Your structure is set up. Now what? We handle everything so you can focus on what actually makes you money: running your business.',
      items: [
        'Monthly bookkeeping and accounting',
        'Quarterly and annual tax filings (UAE, Spain, and other jurisdictions as needed)',
        'Compliance monitoring to ensure you\'re always up to date',
        'Financial reporting so you know where your business stands',
        'Tax optimization review to ensure your structure continues to work as your business evolves',
        'Direct access to me for questions and ongoing support'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2400',
      imagePosition: 'right'
    },
    {
      id: 'consultation',
      title: 'One-Time Tax Consultation',
      description: 'Sometimes you don\'t need a full restructuring or ongoing management. You just need a clear answer to a specific question.',
      items: [
        'Specific tax questions answered by an expert',
        'Quick structure reviews and second opinions',
        'Transaction-specific advice (asset sales, business acquisitions, etc.)',
        'Scenario planning for business decisions with tax implications',
        'Compliance clarifications'
      ],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2400',
      imagePosition: 'left'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Similar to homepage */}
      <section
        className="relative h-screen overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* City Background Image with Grayscale Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400)',
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
              Comprehensive Tax Solutions<br />
              <span className={`transition-all duration-1000 ${isHeroHovered ? 'text-[#d4a5a5]' : 'text-white/90'}`}>
                for Digital Entrepreneurs
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
              From initial strategy to full implementation and ongoing management. Everything you need to structure your business intelligently and stay compliant.
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

      {/* Services Sections - Two Column Layout with Alternating Images */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          data-animate
          className="relative px-6 py-32 overflow-hidden bg-[#eeede9]"
        >
          <div className="max-w-7xl mx-auto">
            <div
              className={`flex flex-col ${
                service.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center transition-all duration-1000 ${
                visibleSections.has(service.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-xl text-[#1b1b1b]/70 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* What's included */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1b1b1b] mb-6">
                    What's included:
                  </h3>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-base text-[#1b1b1b]/70 leading-relaxed"
                        style={{
                          opacity: visibleSections.has(service.id) ? 1 : 0,
                          transform: visibleSections.has(service.id) ? 'translateX(0)' : 'translateX(-20px)',
                          transition: `all 0.6s ease ${i * 100}ms`
                        }}
                      >
                        <span className="flex-shrink-0 mt-1 text-[#6B2C2C] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div
                className="flex-1 w-full"
                style={{
                  opacity: visibleSections.has(service.id) ? 1 : 0,
                  transform: visibleSections.has(service.id)
                    ? 'scale(1)'
                    : 'scale(0.95)',
                  transition: 'all 1s ease 200ms'
                }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-[#eeede9]"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b1b1b] mb-6 tracking-tight transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            Ready to take the next step?
          </h2>
          <p
            className={`text-lg md:text-xl text-[#1b1b1b]/70 mb-10 leading-relaxed transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Let's discuss your specific situation and find the right solution for your business.
          </p>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-12 py-5 bg-[#1b1b1b] text-white rounded-full font-semibold text-lg hover:bg-[#6B2C2C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Start Your Journey Here
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
