'use client';

import { motion, Variants } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Kunal Bansal',
    role: 'Founder of ActiveHub FitTracker',
    content:
      'ActiveHub FitTracker has been a passion project where we built a complete gym management platform from scratch. Leading the product vision and development gave me the opportunity to combine full-stack engineering with solving real problems for gym owners and members.',
    avatar: '',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ankit Sharma',
    role: 'Founder of Qnnect.in',
    content:
      'At Qnnect.in, we’re creating a platform similar to Topmate that empowers creators and professionals to monetize their expertise. It’s been incredible to build a product that bridges meaningful connections while ensuring a smooth user experience.',
    avatar: '',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kunal Bansal',
    role: 'Founder of Near-By Link',
    content:
      'Near-By Link is our full-stack real estate marketplace that simplifies property discovery and listings. As the founder, I focused on delivering a modern, fast, and user-friendly experience for buyers and sellers, ensuring smooth search, secure authentication, and image-driven listings.',
    avatar: '',
    rating: 5,
  }
];

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

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
            >
              <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-200 transition-colors">
                <Quote className="h-12 w-12 opacity-20" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {testimonial.avatar && testimonial.avatar !== '' ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-lg font-medium">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center md:text-left md:flex items-center justify-between">
              <div className="md:max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to experience the difference?</h3>
                <p className="text-indigo-100 text-lg">Join thousands of satisfied clients who trust MarcViews with their business needs.</p>
              </div>
              <div className="mt-6 md:mt-0 flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full opacity-10"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500 rounded-full opacity-10"></div>
        </motion.div>
        
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                className="opacity-60 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="h-12 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-medium">
                  Client {i}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
