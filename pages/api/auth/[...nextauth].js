import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 3, // email is valid for 3 days
      //from: "no-reply@example.com" //This can be the business email
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  async redirect({ url, baseUrl }) {
    // Allows relative callback URLs
    if (url.startsWith("/")) return `${baseUrl}${url}`;
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url;
    return baseUrl;
  },
});
