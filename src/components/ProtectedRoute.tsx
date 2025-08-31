'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
}

export default function ProtectedRoute({ 
  children, 
  requiredRole = 'admin' 
}: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      // Redirect to login with callback URL
      const callbackUrl = encodeURIComponent(pathname || '/admin/dashboard');
      router.push(`/admin/login?callbackUrl=${callbackUrl}`);
    } else if (requiredRole === 'admin' && (session.user as any)?.role !== 'admin') {
      router.push('/unauthorized');
    }
  }, [session, status, router, requiredRole, pathname]);

  // Show loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // If no session or incorrect role, don't render children
  if (!session || (requiredRole === 'admin' && (session.user as any)?.role !== 'admin')) {
    return null;
  }

  // User is authenticated and has the required role
  return <>{children}</>;
}
