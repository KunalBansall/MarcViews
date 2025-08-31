'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function AboutHero() {

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Our Story
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              variants={fadeInUp}
            >
              Empowering Businesses Through <span className="text-indigo-600">Innovation</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600"
              variants={fadeInUp}
            >
              At MarcViews, we believe in the power of technology to transform businesses. 
              Since our founding in 2015, we've been helping companies of all sizes 
              navigate the digital landscape and achieve their goals.
            </motion.p>
            
            <motion.div 
              className="pt-4 flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <a
                href="#our-values"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Our Values
              </a>
              <a
                href="#our-team"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Meet the Team
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-w-4 aspect-h-3">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              {/* In a real app, you would use an actual image here */}
              {/* <Image
                src="/images/about-hero.jpg"
                alt="Our team at work"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              /> */}
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
