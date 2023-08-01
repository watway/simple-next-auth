import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  // theme: {
  //   logo: `${process.env.NEXTAUTH_URL}/vercel.svg`,
  // },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // const authResponse = await fetch('/users/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(credentials),
        // });

        // if (!authResponse.ok) {
        //   return null;
        // }
        // const user = await authResponse.json();

        return {
          id: '1',
          name: 'Admin',
          email: 'admin@admin.com',
          randomKey: 'hey cool',
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log('Session callback', { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log('JWT callback', { token, user });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
