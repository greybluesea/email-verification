import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
/* import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"; */

import prisma from "@/prisma/prismaClient";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (
          user &&
          (await bcrypt.compare(credentials.password, user.hashedPassword))
        )
          return user;
        else return null;

        /////////
        /*  const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const userWithJWT = await res.json();

        if (res.ok && userWithJWT) return userWithJWT;
        else return null; */
      },
    }),
    /*  GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }), */
  ],
  // debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    /*  async jwt({ token, user }) {
      // console.log(token, user);
      return { ...token, ...user };
    },
    async session({ session, token }) {
      console.log(session, token);
      session.user = token as any;
      return session;
    }, */

    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.

      session.user.id = token.sub as any;

      return session;
    },
  },
};
