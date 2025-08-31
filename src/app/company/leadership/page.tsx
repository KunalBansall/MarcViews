import { Linkedin } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Leadership - MarcViews Networks',
  description: 'Meet our visionary leaders who drive innovation and excellence in cybersecurity.',
};

const leadershipTeam = [
  {
    name: 'Kumar Shanu',
    title: 'Chief Information Security Officer (CISO)',
    bio: 'With over 15 years of experience in cybersecurity, Kumar leads our security strategy and operations. His expertise includes threat intelligence, risk management, and security architecture.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop',
    linkedin: 'https://www.linkedin.com/in/kumarshanu',
    quote: '\"Guarding the digital frontiers, we defend against cyber threats with unwavering expertise, innovative solutions, and a relentless commitment to safeguarding your digital world.\"',
  },
  {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer (CTO)',
    bio: 'Sarah brings 12+ years of experience in technology leadership, specializing in cloud architecture and digital transformation. She oversees our technical vision and product development.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop',
    linkedin: 'https://www.linkedin.com',
    quote: '\"Technology should work for people, not the other way around. We build solutions that are as intuitive as they are powerful.\"',
  },
  {
    name: 'Michael Chen',
    title: 'VP of Engineering',
    bio: 'Michael leads our engineering team with a focus on building scalable and reliable security solutions. His expertise spans across network security, cryptography, and secure software development.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop',
    linkedin: 'https://www.linkedin.com',
    quote: '\"Security isn\'t a feature, it\'s a fundamental requirement. We engineer our solutions with security at their core.\"',
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-accent/20 to-accent-purple/20 p-8 backdrop-blur-sm rounded-xl">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-5">
            Leadership
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Meet our visionary leaders who drive innovation and excellence in
            cybersecurity.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="space-y-16">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <div className="relative overflow-hidden aspect-square rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-lg text-green-500 mb-4">
                    {member.title}
                  </p>
                  <p className="text-white/90 italic mb-6 border-l-4 border-green-500 pl-4 py-2">
                    {member.quote}
                  </p>
                  <p className="text-white/90 mb-6">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-accent-teal/10 text-green-500 hover:bg-green-500/20 transition-colors duration-300 rounded-lg"
                  >
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              {index < leadershipTeam.length - 1 && (
                <div className="border-t border-white/10 my-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-accent/10 to-accent-purple/10 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-6 text-lg text-white/90 max-w-2xl mx-auto">
            Interested in working with our talented team? Explore our open positions and become part of our mission to secure the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-teal hover:bg-accent-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/contact/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent-teal text-base font-medium rounded-md text-accent-teal bg-transparent hover:bg-accent-teal/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-teal transition-colors"
            >
              Contact HR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
