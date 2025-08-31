import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import CTASection from '@/components/about/CTASection';

export const metadata: Metadata = {
  title: 'About Us | MarcViews',
  description: 'Learn more about MarcViews, our mission, values, and the team behind our success. Discover how we help businesses grow in the digital age.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
