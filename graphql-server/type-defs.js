export const typeDefs = `#graphql
  type Customer {
    id: ID!
    name: String!
    birthDate: String
    location: String
    email: String
    jobTitle: String
    jobType: String
    gender: String,
    phoneNumber: String!
    registeredDate: String!
    pointOfRegistration: String!
  }

  type Query {
    customers: [Customer!]!,
    customer(id: ID!): Customer!
  }
`;
