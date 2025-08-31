import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Default values for development
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET || 'your-secret-key-here';
const NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
    };
    accessToken?: string;
  }
  
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    role?: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    accessToken?: string;
  }
}

// Log environment variables for debugging (remove in production)
console.log('API_URL:', API_URL);
console.log('NEXTAUTH_URL:', NEXTAUTH_URL);

export const authOptions: AuthOptions = {
  secret: NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const response = await axios.post(
            `${API_URL}/api/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          if (response.data) {
            return {
              id: response.data.user._id,
              name: response.data.user.name,
              email: response.data.user.email,
              role: response.data.user.role,
              token: response.data.token,
            } as User;
          }
          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.sub || '';
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
