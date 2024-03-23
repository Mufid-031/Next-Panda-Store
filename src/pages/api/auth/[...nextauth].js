import { signIn } from "@/lib/firebase/service";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { compare } from "bcrypt";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await signIn(email);
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
      callbacks: {
        async jwt({ token, user, account }) {
          if (account?.providers === "credentials") {
            token.email = user.email;
            token.user = user;
          }

          return token;
        },
        async session({ session, token }) {
          if ("email" in token) {
            session.user.email = token.email;
          }
          return session;
        },
      },
      pages: {
        signIn: "/login",
      },
    }),
  ],
};

export default NextAuth(authOptions);
