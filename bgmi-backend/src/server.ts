import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import responseTime from 'response-time';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { Express } from 'express-serve-static-core';

async function startApolloServer() {
  const app: Express = express();

  app.use(cors());

  app.use(responseTime((req: Request, res: Response, time: number) => {
    console.log(`Request to ${req.originalUrl} took ${time.toFixed(2)}ms`);
  }));

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();

  server.applyMiddleware({
    app: app as any,
    path: '/graphql'
  });

  await mongoose.connect('mongodb://localhost:27017/bgmi_registration');
  console.log('Connected to MongoDB');

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
  });

  return { server, app };
}

startApolloServer().catch((error) => {
  console.error('Failed to start server:', error);
});
