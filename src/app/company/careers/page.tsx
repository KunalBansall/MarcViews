'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

type CareerFormData = {
  name: string;
  email: string;
  phone: string;
  linkedinProfile: string;
  position: string;
  resumeUrl: string;
  userId?: string;
};

export default function CareersPage() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState<CareerFormData>({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    phone: "",
    linkedinProfile: "",
    position: "",
    resumeUrl: "",
    userId: session?.user?.id,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call to submit the form
      console.log('Submitting career application:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSuccessMessage("Your application has been submitted successfully!");
      setFormData({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        phone: "",
        linkedinProfile: "",
        position: "",
        resumeUrl: "",
        userId: session?.user?.id,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-accent/20 to-accent-purple/20 p-8 backdrop-blur-sm rounded-xl">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold text-green-500 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. If
              you're passionate about technology and innovation, we'd love to
              hear from you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Current Openings Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-500">
              Current Openings
            </h2>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Senior Software Engineer
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Join our engineering team to build cutting-edge solutions that
                  help protect businesses from cyber threats.
                </p>
                <ul className="text-white/90 space-y-2">
                  {[
                    "5+ years of experience in software development",
                    "Strong knowledge of security best practices",
                    "Experience with cloud platforms",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Security Analyst
                </h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  Help us analyze and respond to security incidents, and develop
                  strategies to prevent future threats.
                </p>
                <ul className="text-white/90 space-y-2">
                  {[
                    "3+ years of experience in cybersecurity",
                    "Knowledge of security tools and frameworks",
                    "Strong analytical and problem-solving skills",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form Section */}
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-green-500 mb-6">
              Apply Now
            </h2>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  label: "Name",
                  type: "text",
                  value: formData.name,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value }),
                },
                {
                  label: "Email",
                  type: "email",
                  value: formData.email,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value }),
                },
                {
                  label: "Phone",
                  type: "tel",
                  value: formData.phone,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, phone: e.target.value }),
                },
                {
                  label: "LinkedIn Profile",
                  type: "url",
                  value: formData.linkedinProfile,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({
                      ...formData,
                      linkedinProfile: e.target.value,
                    }),
                },
                {
                  label: "Position Applied For",
                  type: "text",
                  value: formData.position,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, position: e.target.value }),
                },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-white/90 mb-2 font-medium">
                    {field.label}*
                  </label>
                  <input
                    type={field.type}
                    required
                    className="w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </div>
              ))}

              <div>
                <label className="block text-white/90 mb-2 font-medium">
                  Resume (Google Drive Link)*
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
                  value={formData.resumeUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, resumeUrl: e.target.value })
                  }
                />
                <p className="text-sm text-white/60 mt-2">
                  Please provide a shareable Google Drive link to your resume
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
            <p className="text-sm mt-4 text-white/60 text-center">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
