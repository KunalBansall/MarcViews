import Link from 'next/link';

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-accent/20 to-accent-purple/20 p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <h1 className="text-5xl text-green-500 font-bold mb-5">
            Managed IT Services FAQs
          </h1>
          <p className="text-xl text-white/90">
            Please reach us at{" "}
            <a
              href="mailto:contact@marcviews.com"
              className="text-green-500 hover:text-green-400 transition-colors duration-300"
            >
              contact@marcviews.com
            </a>{" "}
            if you cannot find an answer to your question.
          </p>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6">
          {[
            {
              question: "What is Managed IT Services?",
              answer: "Managed IT Services is a comprehensive approach where an external IT service provider takes responsibility for managing an organization's IT infrastructure and operations. This includes tasks like network management, cybersecurity, cloud services, and help desk support.",
            },
            {
              question: "Why Should I Consider Managed IT Services?",
              answer: (
                <ul className="space-y-3">
                  {[
                    "Cost-Effective: Reduces IT expenses by outsourcing to experts.",
                    "Increased Productivity: Focus on core business operations, not IT issues.",
                    "Enhanced Security: Proactive security measures to protect your data.",
                    "Scalability: Easily adapt to changing business needs.",
                    "Expert Support: 24/7 access to skilled IT professionals.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-accent-teal rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              question: "What services are included in your managed IT services?",
              answer: "Our managed IT services include network monitoring, data backup and recovery, cybersecurity solutions, cloud services, help desk support, IT consulting, and more. We tailor our services to meet your specific business needs.",
            },
            {
              question: "How do you ensure the security of our data?",
              answer: "We implement multi-layered security measures including firewalls, endpoint protection, encryption, regular security audits, and employee training. Our team stays updated with the latest security threats and best practices to keep your data secure.",
            },
            {
              question: "What is your response time for support requests?",
              answer: "We offer 24/7/365 support with different response times based on the severity of the issue. Critical issues are addressed immediately, while lower priority requests are handled during standard business hours.",
            },
            {
              question: "Can you help with cloud migration?",
              answer: "Yes, we specialize in cloud migration services. We help businesses transition to the cloud smoothly, whether you're moving to Microsoft 365, AWS, Azure, or other cloud platforms. Our team handles everything from planning to execution and ongoing management.",
            },
            {
              question: "Do you provide cybersecurity training for employees?",
              answer: "Yes, we offer comprehensive cybersecurity awareness training for employees. Our training programs cover topics like phishing awareness, password security, data protection, and best practices for remote work security.",
            },
            {
              question: "How do you handle data backup and disaster recovery?",
              answer: "We implement automated, encrypted backup solutions with regular testing to ensure data integrity. Our disaster recovery plans are customized for each client to minimize downtime and data loss in case of emergencies.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-accent-teal mb-2">
                {faq.question}
              </h3>
              <div className="text-white/90">
                {typeof faq.answer === 'string' ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-accent/10 to-accent-purple/10 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 text-lg text-white/90 max-w-2xl mx-auto">
            Our team is here to help. Contact us today to learn more about how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact/general"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-teal hover:bg-accent-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent-teal text-base font-medium rounded-md text-accent-teal bg-transparent hover:bg-accent-teal/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
