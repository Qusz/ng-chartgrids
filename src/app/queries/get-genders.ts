import { gql } from 'apollo-angular';

export const GET_GENDERS = gql`
  query GetCustomers {
    customers {
      sex
    }
  }
`;
