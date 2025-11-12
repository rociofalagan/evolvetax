export default function Contact() {
  return (
    <div className="min-h-screen bg-[#eeede9]">
      {/* Hero */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1b1b1b] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-[#1b1b1b]/70 max-w-3xl mx-auto">
            Schedule a free consultation and discover how we can help optimize your tax structure
          </p>
        </div>
      </section>

      <div className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10">
            <h2 className="text-3xl font-bold text-[#1b1b1b] mb-8">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F]"
                >
                  <option value="">Select a service...</option>
                  <option value="tax-structuring">Tax Structuring</option>
                  <option value="dubai-setup">Dubai Setup</option>
                  <option value="tax-advisory">Tax Advisory</option>
                  <option value="audit-compliance">Audit & Compliance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1b1b1b] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-6 py-4 bg-[#eeede9] text-[#1b1b1b] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#78586F] resize-none"
                  placeholder="Tell us about your business and tax optimization needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-12 py-5 bg-[#78586F] text-[#eeede9] rounded-full font-bold text-lg hover:bg-[#78586F]/90 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              <p className="text-sm text-[#1b1b1b]/60 text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10">
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#78586F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b] mb-1">Email</h4>
                    <p className="text-[#1b1b1b]/70">info@evolvetax.com</p>
                    <p className="text-sm text-[#1b1b1b]/50 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#78586F] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b] mb-1">WhatsApp</h4>
                    <p className="text-[#1b1b1b]/70">+971 XX XXX XXXX</p>
                    <p className="text-sm text-[#1b1b1b]/50 mt-1">Mon-Fri, 9AM-6PM GST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b] mb-1">Office</h4>
                    <p className="text-[#1b1b1b]/70">Dubai, UAE</p>
                    <p className="text-sm text-[#1b1b1b]/50 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10">
              <h3 className="text-2xl font-bold text-[#1b1b1b] mb-6">Business Hours</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-[#1b1b1b]/10">
                  <span className="text-[#1b1b1b]/70">Monday - Friday</span>
                  <span className="font-semibold text-[#1b1b1b]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#1b1b1b]/10">
                  <span className="text-[#1b1b1b]/70">Saturday</span>
                  <span className="font-semibold text-[#1b1b1b]">By Appointment</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1b1b1b]/70">Sunday</span>
                  <span className="font-semibold text-[#1b1b1b]">Closed</span>
                </div>
              </div>

              <p className="text-sm text-[#1b1b1b]/60 mt-6">
                All times are Gulf Standard Time (GST/UTC+4)
              </p>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#1b1b1b]/10">
              <h3 className="text-2xl font-bold mb-4 text-[#1b1b1b]">Quick Questions?</h3>
              <p className="text-[#1b1b1b]/70 mb-6">
                Check out our resources page for common questions and guides
              </p>
              <a
                href="/resources"
                className="inline-block px-8 py-4 bg-[#78586F] text-[#eeede9] rounded-full font-semibold hover:bg-[#78586F]/90 transition-all"
              >
                Browse Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
