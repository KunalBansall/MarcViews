import React from 'react';

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Security Consulting
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Expert guidance to develop and implement effective security strategies.
          </p>
        </div>

        <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Security Consulting Services</h2>
          <p>
            Our security consulting services help organizations develop and implement 
            comprehensive security strategies tailored to their specific needs and risks.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8">Our Services</h3>
          <ul role="list" className="list-disc pl-5 space-y-2">
            <li>Security program development</li>
            <li>Risk management and compliance</li>
            <li>Security architecture design</li>
            <li>Incident response planning</li>
            <li>Security awareness training</li>
          </ul>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Get Expert Advice</h3>
            <p className="mt-2">
              Need security expertise? Contact our team to discuss your consulting needs.
            </p>
            <div className="mt-4">
              <a
                href="/contact/general"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
