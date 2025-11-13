import Link from 'next/link';

export default function Clients() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Founder, TechFlow SaaS",
      industry: "Software as a Service",
      savings: "$250K+",
      quote: "EvolveTax made setting up our SaaS company in Dubai incredibly smooth. The tax savings are significant and the team was professional throughout the entire process.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "CEO, Global Ventures Ltd",
      industry: "Investment & Trading",
      savings: "$180K+",
      quote: "The expertise and attention to detail from EvolveTax gave us confidence in our international expansion. Highly recommended for anyone looking to optimize their business structure.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Director, Digital Marketing Agency",
      industry: "Digital Marketing",
      savings: "$200K+",
      quote: "Professional, efficient, and knowledgeable. EvolveTax helped us save over $200K in taxes in the first year alone while maintaining full compliance.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Founder, E-commerce Empire",
      industry: "E-commerce",
      savings: "$320K+",
      quote: "Setting up in Dubai seemed daunting until we found EvolveTax. They handled everything seamlessly and our business is now operating at peak efficiency.",
      rating: 5
    },
    {
      name: "Amina Al-Rashid",
      role: "CEO, Consulting Group",
      industry: "Business Consulting",
      savings: "$150K+",
      quote: "As a consultant myself, I appreciate expertise when I see it. EvolveTax delivered beyond expectations with their strategic approach and deep knowledge.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Founder, FinTech Startup",
      industry: "Financial Technology",
      savings: "$275K+",
      quote: "The combination of technical tax knowledge and understanding of the FinTech space made EvolveTax the perfect partner for our Dubai expansion.",
      rating: 5
    }
  ];

  const industries = [
    { name: "Software & SaaS", count: "150+" },
    { name: "E-commerce", count: "120+" },
    { name: "Digital Marketing", count: "95+" },
    { name: "Consulting", count: "80+" },
    { name: "FinTech", count: "65+" },
    { name: "Real Estate", count: "50+" },
    { name: "Trading & Investment", count: "40+" },
    { name: "Other", count: "100+" }
  ];

  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1b1b1b] mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Real results from entrepreneurs who transformed their businesses with EvolveTax
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6B2C2C] mb-2">600+</div>
            <div className="text-[#1b1b1b]/70">Companies Established</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6B2C2C] mb-2">$300M+</div>
            <div className="text-[#1b1b1b]/70">Total Tax Savings</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6B2C2C] mb-2">98%</div>
            <div className="text-[#1b1b1b]/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6B2C2C] mb-2">10+</div>
            <div className="text-[#1b1b1b]/70">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
              Specialized expertise across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-[#eeede9] rounded-2xl p-6 text-center border border-[#1b1b1b]/5">
                <h3 className="font-bold text-[#1b1b1b] mb-2">{industry.name}</h3>
                <p className="text-[#6B2C2C] font-semibold">{industry.count} clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#6B2C2C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#1b1b1b]/70 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-[#1b1b1b]/10 pt-6">
                <p className="font-bold text-[#1b1b1b] mb-1">{testimonial.name}</p>
                <p className="text-sm text-[#1b1b1b]/60 mb-2">{testimonial.role}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#1b1b1b]/50">{testimonial.industry}</span>
                  <span className="text-sm font-semibold text-[#6B2C2C]">Saved {testimonial.savings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1b1b]">
            Join Our Success Stories
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 mb-10">
            Start your journey to tax optimization and business growth
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-[#6B2C2C] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#6B2C2C]/90 transition-all shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
