import nextAuth, { type NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/routes/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: any) => {
        const filePath = path.join(process.cwd(), "users.json");
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const users = JSON.parse(jsonData);

        const user = users.find(
          (u: { username: string; password: string }) =>
            u.username === credentials.username &&
            u.password === credentials.password
        );

        if (user) {
          return { id: user.username, name: user.name };
        } else {
          return null
        }
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
