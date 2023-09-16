import { gql } from 'apollo-angular';

export const GET_DATES_OF_REGISTRATION = gql`
  query GetCustomers {
    customers {
      registeredDate
    }
  }
`;
