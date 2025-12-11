'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    // Fetch articles from Notion
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err: any) {
        console.error('Error fetching articles:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

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
        {/* City Background Image with Grayscale Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400)',
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
              Tax Insights & Strategies<br />
              <span className={`transition-all duration-1000 ${isHeroHovered ? 'text-[#d4a5a5]' : 'text-white/90'}`}>
                for Global Entrepreneurs
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
              Expert insights on international tax planning, jurisdiction selection, and business structuring
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

      {/* Articles Section */}
      <section
        id="articles"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-[#eeede9]"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleSections.has('articles')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-lg md:text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
              Stay updated with the latest insights on international tax planning and business structuring
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#6B2C2C]"></div>
              <p className="mt-4 text-[#1b1b1b]/70">Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 bg-red-50 rounded-2xl p-8">
              <p className="text-red-600">Failed to load articles. Please try again later.</p>
            </div>
          )}

          {/* No Articles State */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-12 bg-[#eeede9] rounded-2xl p-8">
              <p className="text-[#1b1b1b]/70 text-lg">No articles published yet. Check back soon!</p>
            </div>
          )}

          {/* Articles Grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  visibleSections.has('articles')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: visibleSections.has('articles') ? `${index * 100}ms` : '0ms'
                }}
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#6B2C2C] text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date */}
                  <p className="text-sm text-[#1b1b1b]/60 mb-3">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1b1b1b] mb-3 group-hover:text-[#6B2C2C] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#1b1b1b]/70 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[#6B2C2C] font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        data-animate
        className="relative px-6 py-32 overflow-hidden bg-white"
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6 tracking-tight transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
          >
            Ready to optimize your tax strategy?
          </h2>
          <p
            className={`text-lg md:text-xl text-[#1b1b1b]/70 mb-10 leading-relaxed transition-all duration-1000 ${
              visibleSections.has('cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Schedule a consultation to discuss your specific situation
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
