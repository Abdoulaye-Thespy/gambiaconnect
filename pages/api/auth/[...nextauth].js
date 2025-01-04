import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add your own logic here to validate the credentials
        // This is a simple example, you should use a more secure method in production
        if (credentials.username === 'admin' && credentials.password === 'G7@q!Lz4$pF2#vX9') {
          return { id: 1, name: 'Admin', email: 'admin@example.com' }
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // Make sure this is set in your .env file
})

