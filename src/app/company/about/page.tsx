import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-green-600 sm:text-5xl md:text-6xl">
            About MarcViews
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Delivering innovative security solutions to protect your digital assets.
          </p>
        </div>

        <div className="mt-16 prose prose-lg text-gray-500 mx-auto">
          <h2 className="text-2xl font-bold text-green-600">Our Story</h2>
          <p>
            Founded with a vision to revolutionize digital security, MarcViews has grown from a small startup 
            to a trusted partner for businesses seeking comprehensive security solutions. Our journey has been 
            driven by a commitment to excellence and a passion for innovation.
          </p>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12">Our Mission</h2>
          <p>
            We empower organizations to navigate the complex landscape of digital security with confidence. 
            Through cutting-edge technology and expert guidance, we help businesses protect their most 
            valuable assets in an increasingly connected world.
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-12">Our Values</h2>
          <ul role="list" className="list-disc pl-5 space-y-2 mt-6">
            <li><span className="font-medium">Integrity:</span> We maintain the highest ethical standards in all our interactions.</li>
            <li><span className="font-medium">Innovation:</span> We continuously explore new ways to solve security challenges.</li>
            <li><span className="font-medium">Excellence:</span> We strive for the highest quality in everything we do.</li>
            <li><span className="font-medium">Collaboration:</span> We believe in the power of working together to achieve the best results.</li>
          </ul>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900">Want to learn more about our services?</h3>
            <p className="mt-2">
              Discover how MarcViews can help secure your business.
            </p>
            <div className="mt-4">
              <a
                href="/services"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
