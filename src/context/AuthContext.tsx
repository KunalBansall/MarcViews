import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: { name: string; email: string; password: string }) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check for an auth token in cookies/localStorage
        // and validate it with your backend
        const token = localStorage.getItem('authToken');
        
        if (token) {
          // Here you would typically validate the token with your backend
          // and fetch the user data
          // const userData = await api.getCurrentUser();
          // setUser(userData);
        }
      } catch (error) {
        console.error('Auth check failed', error);
        // Clear invalid token
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // In a real app, you would make an API call to your backend
      // const { token, user } = await api.login(email, password);
      // localStorage.setItem('authToken', token);
      // setUser(user);
      
      // Mock successful login for now
      setUser({
        id: 'user-123',
        name: 'John Doe',
        email: email,
      });
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const register = async (userData: { name: string; email: string; password: string }) => {
    try {
      // In a real app, you would make an API call to your backend
      // const { token, user } = await api.register(userData);
      // localStorage.setItem('authToken', token);
      // setUser(user);
      
      // Mock successful registration for now
      setUser({
        id: 'user-123',
        name: userData.name,
        email: userData.email,
      });
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  const logout = () => {
    // In a real app, you would also invalidate the token on the server
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
