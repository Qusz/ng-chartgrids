import { gql } from 'apollo-angular';

export const GET_POINTS_OF_REGISTRATION = gql`
  query GetCustomers {
    customers {
      pointOfRegistration
    }
  }
`;
