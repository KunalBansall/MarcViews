'use client';

import { useState } from 'react';
import { Handshake, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Partners() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    servicesInterested: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual form submission
      console.log('Partner submission:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        servicesInterested: '',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 outline-none text-sm transition-all duration-300 hover:border-white/20';
  const labelClasses = 'block text-sm font-medium text-white/80 mb-2';

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl text-green-600 font-bold mb-4 ">
            Partner With Us
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Join our network of trusted partners and help us deliver exceptional IT and cybersecurity solutions to clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-green-600">Why Partner With MarcViews?</h2>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-green-600/10 rounded-lg">
                  <Handshake className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Strategic Growth</h3>
                  <p className="text-white/80">
                    Expand your business reach and tap into new markets with our comprehensive partner program and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-green-600/10 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Trusted Collaboration</h3>
                  <p className="text-white/80">
                    Build long-term relationships with a company that values integrity, transparency, and mutual success.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-green-600/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Resources & Support</h3>
                  <p className="text-white/80">
                    Access to marketing materials, technical resources, and dedicated support to help you succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Become a Partner</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                <p className="text-white/80 mb-6">We've received your partnership request. Our team will contact you shortly.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2 text-sm font-medium text-green-600 hover:text-white hover:bg-green-600/10 rounded-lg transition-colors duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={inputClasses}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className={inputClasses}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="servicesInterested" className={labelClasses}>
                    Services You're Interested In
                  </label>
                  <select
                    id="servicesInterested"
                    className={inputClasses}
                    value={formData.servicesInterested}
                    onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })}
                  >
                    <option value="">Select services</option>
                    <option value="cybersecurity">Cybersecurity Solutions</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other (please specify in notes)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={inputClasses}
                    value={formData.servicesInterested}
                    onChange={(e) => setFormData({ ...formData, servicesInterested: e.target.value })}
                    placeholder="Tell us about your business and how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-accent-teal hover:bg-accent-teal/90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partnership Request</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
