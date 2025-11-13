'use client';

import { useState } from 'react';

export default function Contact() {
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
    setFormData({ name: '', phone: '', email: '', comments: '' });
  };

  return (
    <div className="min-h-screen bg-[#eeede9]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=80"
              alt="Professional working"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl grayscale shadow-lg"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#eeede9] rounded-2xl p-6 md:p-8 max-w-lg">
              <h1 className="text-lg md:text-xl font-bold text-[#1b1b1b] mb-2">
                Get in touch with us
              </h1>
              <p className="text-[#1b1b1b]/60 mb-6 leading-tight">
                Enter your contact details below and we'll get in touch to help take your business to the next level.
              </p>

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

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 text-sm bg-[#6B2C2C] text-[#eeede9] rounded-lg font-semibold hover:bg-[#4D1F1F] transition-all shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
