import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})



/*
import { NextApiRequest, NextApiResponse } from 'next'

// JWT (Storage)
// Next Auth (Social - Github, Facebook, Google)
// Cognito, Auth0

export default (request: NextApiRequest,response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Rodrigo' }
  ]

  return response.json(users);
}

// Serverless 
*/