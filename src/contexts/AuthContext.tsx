'use client';

import { createContext, useContext, useMemo } from 'react';
import { SessionProvider, useSession } from 'next-auth/react';

type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SessionProvider>
  );
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  
  const value = useMemo(() => {
    const user = session?.user ? {
      id: session.user.id || '',
      name: session.user.name || null,
      email: session.user.email || null,
      role: (session.user as any).role || 'user',
    } : null;

    return {
      user,
      isAuthenticated: !!user,
      isLoading: status === 'loading',
      isAdmin: (user?.role === 'admin'),
    };
  }, [session, status]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
