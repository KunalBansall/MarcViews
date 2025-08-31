'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { formService } from '@/lib/formService';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    inquiry: '',
    signUpForUpdates: true,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const result = await formService.submitContactForm({
        ...formData,
        signUpForUpdates: !!formData.signUpForUpdates,
      });

      if (result.success) {
        setSuccess(true);
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          inquiry: '',
          signUpForUpdates: true,
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors';
  const labelClasses = 'block text-sm font-medium text-white/80 mb-1';

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-accent/20 to-accent-purple/20 p-8 backdrop-blur-sm rounded-xl">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl">
            Have questions or want to learn more about our services? Our team is here to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-green-500 mb-6">Send Us a Message</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-white/80 mb-6">We've received your message and will get back to you soon.</p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2 text-sm font-medium text-green-500 hover:text-white hover:bg-green-500/10 rounded-lg transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className={labelClasses}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your company (optional)"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry" className={labelClasses}>
                    Your Message *
                  </label>
                  <textarea
                    id="inquiry"
                    name="inquiry"
                    required
                    rows={5}
                    value={formData.inquiry}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="signUpForUpdates"
                      name="signUpForUpdates"
                      type="checkbox"
                      checked={formData.signUpForUpdates}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/20 bg-white/5 text-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="signUpForUpdates" className="text-white/80">
                      Sign up for our newsletter to receive updates and offers
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-green-500 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/80">Our Location</h4>
                    <p className="mt-1 text-sm text-white/60">
                      123 Tech Street<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-500 hover:underline text-sm mt-1 inline-block"
                    >
                      View on map
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/80">Call Us</h4>
                    <p className="mt-1 text-sm text-white/60">
                      +1 (415) 555-2671
                    </p>
                    <p className="text-sm text-white/60">Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/80">Email Us</h4>
                    <p className="mt-1 text-sm text-white/60">
                      <a 
                        href="mailto:info@marcviews.com" 
                        className="text-green-500 hover:text-white hover:bg-green-500/10 rounded-lg transition-colors"
                      >
                        info@marcviews.com
                      </a>
                    </p>
                    <p className="text-sm text-white/60">For general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/80">Support Email</h4>
                    <p className="mt-1 text-sm text-white/60">
                      <a 
                        href="mailto:support@marcviews.com" 
                        className="text-green-500 hover:text-white hover:bg-green-500/10 rounded-lg transition-colors"
                      >
                        support@marcviews.com
                      </a>
                    </p>
                    <p className="text-sm text-white/60">For technical support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-white/60">
                  For urgent matters outside business hours, please call our 24/7 support line at +1 (415) 555-2671.
                </p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-green-500 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/marcviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/marcviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-500 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/marcviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-500 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7v-2.333C7 8.09 3.878 6.087 0 3.622 1.645.687 3.737.164 5.236 0 6.708 1.125 8.215 2.945 8.215 5v2.333H16v6.987A6.986 6.986 0 0022 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/marcviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-green-500 transition-colors"
                  aria-label="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white/5 rounded-xl overflow-hidden
        ">
          <div className="aspect-w-16 aspect-h-9 w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035075409663!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQzJzMxLjgiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="MarcViews Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
