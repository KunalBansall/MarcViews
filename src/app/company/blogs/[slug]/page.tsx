import { Metadata } from 'next';
import Link from 'next/link';

const blogPosts = [
  {
    slug: "agentic-security-operation-center",
    date: "February 19, 2025",
    categories: "Agents, AI, Critical Infrastructure, Incident Response, SOC Center, Threat Hunting, Vulnerabilities",
    title: "Agentic Security Operation Center (SOC)",
    author: "Kumar Shanu | CISO | Toronto",
    content: `
      <p>In today's rapidly evolving threat landscape, traditional Security Operations Centers (SOCs) are no longer sufficient. Enter the Agentic SOC - a new paradigm that leverages artificial intelligence and autonomous agents to detect and respond to threats in real-time.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">The Evolution of SOCs</h2>
      <p>The traditional SOC model, while effective in its time, struggles to keep up with the volume and sophistication of modern cyber threats. Analysts are often overwhelmed with alerts, leading to alert fatigue and potential security gaps.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">What Makes an Agentic SOC Different?</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Autonomous threat detection and response</li>
        <li>Continuous learning and adaptation</li>
        <li>Reduced mean time to detect (MTTD) and respond (MTTR)</li>
        <li>24/7/365 operation without human fatigue</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Key Benefits</h2>
      <p>By implementing an Agentic SOC, organizations can achieve unprecedented levels of security posture while reducing operational costs and improving efficiency.</p>
    `
  },
  {
    slug: "trump-presidency-impact",
    date: "January 20, 2025",
    categories: "Opinion",
    title: "Opinion: How Trump Presidency will impact our lives?",
    author: "Kumar Shanu, CISO & CTO, MarcViews Networks, Toronto",
    content: `
      <p>As we enter a new political era, it's crucial to analyze how the Trump administration's policies might impact the technology and cybersecurity landscape.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Cybersecurity Policy Shifts</h2>
      <p>The new administration has signaled a strong focus on national cybersecurity, with potential implications for both public and private sectors. We might see increased regulation in critical infrastructure protection and data privacy.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Technology and Trade Relations</h2>
      <p>Trade policies could significantly impact the global technology supply chain, affecting everything from hardware procurement to software development partnerships.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">What This Means for Businesses</h2>
      <p>Organizations should prepare for potential regulatory changes and consider how shifting policies might affect their security posture and compliance requirements.</p>
    `
  },
  {
    slug: "sirix-partnership",
    date: "November 26, 2024",
    categories: "AI, Partnerships",
    title: "New Partnership with Sirix Monitoring for Physical Security",
    author: "MarcViews Team, Toronto",
    content: `
      <p>We're excited to announce our strategic partnership with Sirix Monitoring, a leader in physical security solutions, to deliver comprehensive security services that bridge the gap between physical and cyber security.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Integrated Security Solutions</h2>
      <p>This partnership allows us to offer clients a unified security platform that combines our cybersecurity expertise with Sirix's advanced physical security monitoring capabilities.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Unified security dashboard</li>
        <li>AI-powered threat detection across physical and digital assets</li>
        <li>24/7 monitoring and response</li>
        <li>Seamless integration with existing security infrastructure</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Benefits for Our Clients</h2>
      <p>Clients can now benefit from a truly holistic security approach, with coordinated responses to both physical and cyber threats from a single provider.</p>
    `
  },
  {
    slug: "siem-vs-datalake",
    date: "November 25, 2024",
    categories: "AI, Cloud, Critical Infrastructure, Incident Response, SOC Center, Threat Hunting",
    title: "SIEM vs Data Lake: A complementary relationship",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    content: `
      <p>In the world of security information management, the debate between SIEM (Security Information and Event Management) and Data Lake solutions often arises. However, these technologies are not mutually exclusive but rather complementary components of a robust security architecture.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Understanding the Differences</h2>
      <p>SIEM solutions excel at real-time event correlation and alerting, while Data Lakes provide scalable storage and advanced analytics capabilities for historical data analysis.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">The Power of Integration</h2>
      <p>By integrating SIEM with a Data Lake, organizations can achieve both real-time threat detection and long-term security analytics, enabling more effective threat hunting and compliance reporting.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Implementation Considerations</h2>
      <p>We discuss best practices for implementing this integrated approach, including data retention policies, access controls, and performance optimization.</p>
    `
  },
  {
    slug: "incident-response-planning",
    date: "November 20, 2024",
    categories: "Incident Response, Plans",
    title: "Good preparation is essential, an Incident Response (IR) Planning",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    content: `
      <p>In today's threat landscape, having a well-defined Incident Response (IR) plan is not optional—it's a business imperative. This post outlines the key components of an effective IR plan and how to implement them.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">The Six Phases of Incident Response</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Preparation</li>
        <li>Identification</li>
        <li>Containment</li>
        <li>Eradication</li>
        <li>Recovery</li>
        <li>Lessons Learned</li>
      </ol>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Key Components of an IR Plan</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Clear roles and responsibilities</li>
        <li>Communication protocols</li>
        <li>Documentation requirements</li>
        <li>Legal and regulatory considerations</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Testing and Maintenance</h2>
      <p>An IR plan is only as good as its most recent test. Regular tabletop exercises and simulations are essential for ensuring your team is prepared when a real incident occurs.</p>
    `
  },
  {
    slug: "protecting-digital-attack-surface",
    date: "October 13, 2024",
    categories: "AI",
    title: "Protecting Digital Attack Surface in Gen-AI world",
    author: "Kumar Shanu, CISO, MarcViews Networks, Toronto",
    content: `
      <p>As organizations increasingly adopt Generative AI technologies, the digital attack surface is expanding in unexpected ways. This post explores the unique security challenges posed by AI systems and how to mitigate them.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">The Evolving Threat Landscape</h2>
      <p>AI systems introduce new attack vectors, including model poisoning, data exfiltration through AI outputs, and prompt injection attacks. Understanding these threats is the first step in defending against them.</p>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Key Security Considerations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Data privacy and protection in AI training</li>
        <li>Model security and integrity</li>
        <li>API security for AI services</li>
        <li>Monitoring AI system behavior</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-4">Best Practices for AI Security</h2>
      <p>We outline practical steps organizations can take to secure their AI implementations, including secure development practices, continuous monitoring, and incident response planning specific to AI systems.</p>
    `
  }
];

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | MarcViews Networks`,
    description: post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.split('|')[0].trim()],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
          <p className="text-xl mb-8">The requested blog post could not be found.</p>
          <Link 
            href="/company/blogs" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-teal hover:bg-accent-teal/90"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-b from-primary to-secondary-dark text-white">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/company/blogs" 
          className="inline-flex items-center text-accent-teal hover:underline mb-8"
        >
          ← Back to All Posts
        </Link>
        
        <article>
          <div className="mb-8">
            <span className="text-sm text-accent-teal">{post.date}</span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.split(',').map((category, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full"
                >
                  {category.trim()}
                </span>
              ))}
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal font-bold mr-3">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">{post.author.split('|')[0].trim()}</p>
                <p className="text-xs text-white/60">
                  {post.author.includes('|') ? post.author.split('|').slice(1).join('|').trim() : 'MarcViews Team'}
                </p>
              </div>
            </div>
          </div>
          
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4">Share this post</h3>
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://marcviews.com/company/blogs/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-teal transition-colors"
                aria-label="Share on Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://marcviews.com/company/blogs/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-teal transition-colors"
                aria-label="Share on LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
