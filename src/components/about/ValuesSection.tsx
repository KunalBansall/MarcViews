'use client';

import { motion } from 'framer-motion';
import { Target, HeartHandshake, Lightbulb, Users, Award } from 'lucide-react';

const values = [
  {
    icon: <Target className="h-8 w-8 text-indigo-600" />,
    title: 'Our Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.'
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-blue-600" />,
    title: 'Our Vision',
    description: 'To be the most trusted partner for businesses seeking to transform and thrive through technology and innovation.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-green-600" />,
    title: 'Innovation',
    description: 'We embrace change and continuously seek new ways to solve problems and create value for our clients.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and building strong partnerships with our clients and each other.'
  },
  {
    icon: <Award className="h-8 w-8 text-orange-600" />,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality solutions and exceeding expectations in everything we do.'
  },
];

import { Variants } from 'framer-motion';

const fadeInUp: Variants = {
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

export default function ValuesSection() {
  return (
    <section id="our-values" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            These principles guide everything we do and form the foundation of our company culture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-12 md:px-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-700 transition-colors"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
