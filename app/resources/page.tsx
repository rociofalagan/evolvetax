import Link from 'next/link';

export default function Resources() {
  const articles = [
    {
      title: "Complete Guide to Dubai Free Zones 2024",
      category: "Guides",
      date: "November 10, 2024",
      excerpt: "Everything you need to know about choosing the right free zone for your business in Dubai.",
      readTime: "12 min read"
    },
    {
      title: "UAE Corporate Tax: What You Need to Know",
      category: "Tax Updates",
      date: "November 5, 2024",
      excerpt: "Understanding the new UAE corporate tax regulations and how they affect your business.",
      readTime: "8 min read"
    },
    {
      title: "Digital Nomad Tax Strategies for 2024",
      category: "Tips",
      date: "October 28, 2024",
      excerpt: "Smart tax planning strategies for location-independent entrepreneurs.",
      readTime: "10 min read"
    },
    {
      title: "How to Structure Your SaaS Business in Dubai",
      category: "Case Studies",
      date: "October 20, 2024",
      excerpt: "Real-world example of optimizing a SaaS company's tax structure through Dubai setup.",
      readTime: "15 min read"
    },
    {
      title: "Tax Treaties: Maximizing Benefits",
      category: "Advanced",
      date: "October 15, 2024",
      excerpt: "Leveraging UAE's extensive tax treaty network for international business.",
      readTime: "12 min read"
    },
    {
      title: "Common Tax Mistakes to Avoid",
      category: "Tips",
      date: "October 8, 2024",
      excerpt: "Top mistakes entrepreneurs make when structuring their international tax affairs.",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1b1b1b] mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Expert guidance, tax updates, and practical strategies for international business
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-[#1b1b1b]/10">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 bg-[#78586F] text-[#1b1b1b] rounded-full text-sm font-semibold">Featured</span>
            <span className="text-[#1b1b1b]/60">November 10, 2024</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-4">
            Complete Guide to Dubai Free Zones 2024
          </h2>
          <p className="text-lg text-[#1b1b1b]/70 mb-8">
            A comprehensive overview of Dubai's free zones, comparing benefits, costs, and requirements to help you choose the perfect location for your business.
          </p>
          <div className="flex items-center gap-6">
            <button className="px-8 py-4 bg-[#78586F] text-[#eeede9] rounded-full font-semibold hover:bg-[#78586F]/90 transition-all">
              Read Full Guide
            </button>
            <span className="text-[#1b1b1b]/60">15 min read</span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1b1b1b] mb-6">Latest Articles</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-[#1b1b1b]/10 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#78586F] font-semibold text-sm">{article.category}</span>
                <span className="text-[#1b1b1b]/60 text-sm">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1b1b1b] mb-3">{article.title}</h3>
              <p className="text-[#1b1b1b]/70 mb-4 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#1b1b1b]/60 text-sm">{article.date}</span>
                <button className="text-[#78586F] font-semibold hover:underline">Read →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1b1b]">
            Stay Updated
          </h2>
          <p className="text-xl text-[#1b1b1b]/70 mb-10">
            Get the latest tax updates and strategies delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-[#eeede9] text-[#1b1b1b] focus:outline-none focus:ring-2 focus:ring-[#78586F]"
            />
            <button className="px-8 py-4 bg-[#78586F] text-[#eeede9] rounded-full font-bold hover:bg-[#78586F]/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
