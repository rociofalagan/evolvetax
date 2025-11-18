'use client';

import { useState } from 'react';

export default function Contact() {
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

      // Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
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
                    disabled={isSubmitting}
                    className="w-full px-6 py-2.5 text-sm bg-[#6B2C2C] text-[#eeede9] rounded-lg font-semibold hover:bg-[#4D1F1F] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
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
        </div>
      </div>
    </div>
  );
}
