'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-indigo-600" />,
    title: 'Our Office',
    description: '123 Business Ave, Suite 100',
    detail: 'New York, NY 10001, USA',
    link: 'https://maps.google.com',
    linkText: 'View on map',
  },
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: 'Email Us',
    description: 'Have a question?',
    detail: 'info@marcviews.com',
    link: 'mailto:info@marcviews.com',
    linkText: 'Send us an email',
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 5pm',
    detail: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    linkText: 'Call us now',
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-600" />,
    title: 'Business Hours',
    description: 'We are open',
    detail: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
  },
];

import { Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 h-full">
      <h3 className="text-lg font-medium text-gray-900 mb-6">
        We'd love to hear from you
      </h3>
      
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.title}
            className="flex items-start"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-opacity-10">
                {item.icon}
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-1 text-sm font-medium text-gray-900 whitespace-pre-line">
                {item.detail}
              </p>
              {item.link && (
                <Link
                  href={item.link}
                  className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {item.linkText}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Need help?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Check out our <Link href="/faq" className="text-indigo-600 hover:text-indigo-500 font-medium">FAQ page</Link> for answers to common questions.
        </p>
        <p className="text-sm text-gray-600">
          Or join our community on <Link href="https://discord.gg/example" className="text-indigo-600 hover:text-indigo-500 font-medium">Discord</Link> to chat with other users and our support team.
        </p>
      </div>
    </div>
  );
}
