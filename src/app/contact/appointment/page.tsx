'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, ArrowRight, CheckCircle } from 'lucide-react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sampleService = {
    title: 'Consultation',
    duration: '30 mins',
    price: 'Free',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual form submission
      console.log('Appointment submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          notes: '',
        });
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = 'w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 outline-none text-sm transition-all duration-300 hover:border-white/20';
  const labelClasses = 'flex items-center text-sm font-medium text-white/80 mb-2';

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-green-500 mb-4">
            Book an Appointment
          </h1>
          <p className="text-lg text-white/80">
            Schedule a consultation with our experts. We'll get back to you shortly to confirm your appointment.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <div className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 mb-8">
            <div className="flex-shrink-0 bg-accent-teal/10 p-3 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-accent-teal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                {sampleService.title}
              </h3>
              <div className="flex items-center mt-1 text-sm text-white/70">
                <Clock className="h-4 w-4 mr-1" />
                <span>{sampleService.duration}</span>
                <span className="mx-2">•</span>
                <span className="font-medium text-accent-teal">
                  {sampleService.price}
                </span>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
              {error}
            </div>
          )}

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>
                    <User className="h-4 w-4 mr-2 text-accent-teal" />
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClasses}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className={labelClasses}>
                    <Mail className="h-4 w-4 mr-2 text-accent-teal" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>
                  <Phone className="h-4 w-4 mr-2 text-accent-teal" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className={inputClasses}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>
                    <Calendar className="h-4 w-4 mr-2 text-accent-teal" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    className={inputClasses}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className={labelClasses}>
                    <Clock className="h-4 w-4 mr-2 text-accent-teal" />
                    Preferred Time *
                  </label>
                  <select
                    required
                    className={inputClasses}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Select a time</option>
                    {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((time) => (
                      <option key={time} value={time}>
                        {time} AM
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClasses}>
                  <FileText className="h-4 w-4 mr-2 text-accent-teal" />
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  className={inputClasses}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your project or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-accent-teal hover:bg-accent-teal/90 text-white py-4 px-6 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 bg-accent-teal/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-10 w-10 text-accent-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Appointment Requested!
              </h3>
              <p className="text-white/80 text-center mb-6">
                We've received your request and will contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="px-6 py-2 text-sm font-medium text-accent-teal hover:text-white hover:bg-accent-teal/10 rounded-lg transition-colors duration-300"
              >
                Book Another Appointment
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
            By booking an appointment, you agree to our terms of service and privacy policy.
          </div>
        </div>
      </div>
    </div>
  );
}
