'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import SecurityFeatures from '@/components/home/SecurityFeatures';
import Services from '@/components/home/Services';
import Categories from '@/components/home/Categories';
import Testimonials from '@/components/home/Testimonials';
import ContactInfo from '@/components/contact/ContactInfo';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SecurityFeatures />
      {/* <Services /> */}
      <Categories />
      <Testimonials />
      {/* <ContactInfo /> */}
    </main>
  );
}
