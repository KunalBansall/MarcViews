'use client';

import { AuthProvider } from "@/context/AuthContext";
import { AppProvider } from "@/context/AppContext";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';

// Dynamically import ContactUs with no SSR to avoid hydration issues
const ContactUs = dynamic(() => import('@/components/contact/ContactUs'), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  
  // This ensures we only show the contact form on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  // Check if the current route is not the contact page to avoid duplicate content
  const showContactUs = mounted && !window.location.pathname.includes('/contact');

  return (
    <SessionProvider>
      <AuthProvider>
        <AppProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
              {showContactUs && <ContactUs />}
            </main>
            <Footer />
          </div>
        </AppProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
