import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Cyber Assessments',
      description: 'Comprehensive security assessments to identify vulnerabilities and protect your digital assets.',
      href: '/services/cyber-assessments'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless and secure migration of your infrastructure and applications to the cloud.',
      href: '/services/cloud-migration'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance to develop and implement effective security strategies for your business.',
      href: '/services/consulting'
    },
    {
      title: 'Physical Security',
      description: 'End-to-end physical security solutions to protect your premises and assets.',
      href: '/services/physical-security'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-green-600 sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your business needs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="mt-4">
                <a
                  href={service.href}
                  className="text-green-600 hover:text-green-800 font-medium"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
