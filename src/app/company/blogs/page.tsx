import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - MarcViews Networks',
  description: 'Latest insights and updates from MarcViews Networks',
};

const blogPosts = [
  {
    date: "February 19, 2025",
    categories: "Agents, AI, Critical Infrastructure, Incident Response, SOC Center, Threat Hunting, Vulnerabilities",
    title: "Agentic Security Operation Center (SOC)",
    author: "Kumar Shanu | CISO | Toronto",
    slug: "agentic-security-operation-center"
  },
  {
    date: "January 20, 2025",
    categories: "Opinion",
    title: "Opinion: How Trump Presidency will impact our lives?",
    author: "Kumar Shanu, CISO & CTO, MarcViews Networks, Toronto",
    slug: "trump-presidency-impact"
  },
  {
    date: "November 26, 2024",
    categories: "AI, Partnerships",
    title: "New Partnership with Sirix Monitoring for Physical Security",
    author: "MarcViews Team, Toronto",
    slug: "sirix-partnership"
  },
  {
    date: "November 25, 2024",
    categories: "AI, Cloud, Critical Infrastructure, Incident Response, SOC Center, Threat Hunting",
    title: "SIEM vs Data Lake: A complementary relationship",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    slug: "siem-vs-datalake"
  },
  {
    date: "November 20, 2024",
    categories: "Incident Response, Plans",
    title: "Good preparation is essential, an Incident Response (IR) Planning",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    slug: "incident-response-planning"
  },
  {
    date: "October 13, 2024",
    categories: "AI",
    title: "Protecting Digital Attack Surface in Gen-AI world",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    slug: "protecting-digital-attack-surface"
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl text-green-500 font-bold mb-5">
            Our Blogs
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights, updates, and thought leadership on cybersecurity and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-primary-accent/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent-teal/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-green-500">{post.date}</span>
                  <span className="text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded">
                    {post.categories.split(',')[0].trim()}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-green-500 transition-colors">
                  <Link href={`/company/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-white/70 mb-4">{post.author}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/company/blogs/${post.slug}`}
                    className="text-green-500 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <nav className="flex space-x-4 text-green-500">
            <button className="px-4 py-2 bg-accent-teal/10 text-green-500 rounded-md hover:bg-accent-teal/20 transition-colors">
              ← Previous
            </button>
            <button className="px-4 py-2 bg-accent-teal/10 text-green-500 rounded-md hover:bg-accent-teal/20 transition-colors">
              Next →
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
