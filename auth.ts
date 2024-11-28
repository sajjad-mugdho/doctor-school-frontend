import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],

  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log(session, token);
      session.user.id = token.sub;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
