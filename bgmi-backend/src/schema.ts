import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Player {
    id: ID!
    username: String!
    email: String!
    phone: String!
    team: String
    level: Int!
    experience: String
  }

  input PlayerInput {
    username: String!
    email: String!
    phone: String!
    team: String
    level: Int!
    experience: String
  }

  type Query {
    players: [Player!]!
  }

  type Mutation {
    registerPlayer(input: PlayerInput!): Player!
  }
`;