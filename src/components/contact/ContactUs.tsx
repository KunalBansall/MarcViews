"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, RotateCcw, CheckCircle, AlertCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  companyName: string
  inquiry: string
  signUpForUpdates: boolean
}

const locations = [
  {
    city: "Toronto, Canada (HQ)",
    email: "contact@marcviews.com",
    phone: "+1-416-820-0689",
    address: "111 Queen St. East, South Building, Suite 450, Toronto, M5C 1S2",
    timezone: "All times are in EST",
    closedToday: true,
  },
  {
    city: "Mississauga, ON",
    email: "contact@marcviews.com",
    phone: "+1-416-820-0689",
    address: "90 Burnhamthorpe Road West, Suite 1400, Mississauga, ON",
    timezone: "All times are in EST",
    closedToday: true,
  },
  {
    city: "Noida, UP, India (Service Delivery Center)",
    email: "sales@marcviews.com",
    phone: "WhatsApp",
    address: "Suite 004, B-41, S3V Business Park, Sector 63, Noida, Gautam Buddha Nagar, Uttar Pradesh, India",
    timezone: "All times are in IST",
    closedToday: true,
  },
]

export default function ContactUsStandalone() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    inquiry: "",
    signUpForUpdates: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccessMessage(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSuccessMessage("Your message has been sent successfully! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        inquiry: "",
        signUpForUpdates: false,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again."
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      inquiry: "",
      signUpForUpdates: false,
    })
    setError(null)
    setSuccessMessage(null)
  }

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Contact Form */}
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 flex-1">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              {successMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
             <h3 className="text-lg font-semibold text-gray-500 mb-6">Fill out the form below and we'll get back to you within 24 hours.</h3> 
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-semibold">Name*</label>
                    <input
                      className="w-full p-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-slate-400"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-semibold">Email*</label>
                    <input
                      type="email"
                      className="w-full p-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-slate-400"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-semibold">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-slate-400"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-semibold">Company Name</label>
                    <input
                      className="w-full p-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-slate-400"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2 text-sm font-semibold">How can we help you?*</label>
                  <textarea
                    className="w-full p-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 placeholder:text-slate-400 resize-none"
                    rows={5}
                    required
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    placeholder="Tell us about your project, goals, and how we can help you achieve them..."
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg mb-20">
                  <input
                    type="checkbox"
                    id="signUpForUpdates"
                    className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                    checked={formData.signUpForUpdates}
                    onChange={(e) => setFormData({ ...formData, signUpForUpdates: e.target.checked })}
                  />
                  <label htmlFor="signUpForUpdates" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    Keep me updated with news, insights, and promotions. You can unsubscribe at any time.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="sm:flex-initial px-8 py-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-all duration-200 font-semibold flex items-center justify-center gap-3"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Location Information */}
          <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6">Our Locations</h2>

            <div className="space-y-6 flex-1">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{location.city}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">{location.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-green-600 hover:text-green-700 transition-colors font-medium text-sm"
                      >
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <a
                        href={location.phone !== "WhatsApp" ? `tel:${location.phone}` : "#"}
                        className="text-green-600 hover:text-green-700 transition-colors font-medium text-sm"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Clock className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{location.timezone}</span>
                    </div>

                    {location.closedToday && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Closed Today
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
