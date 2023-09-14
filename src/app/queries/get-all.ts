import { gql } from 'apollo-angular';

export const GET_ALL_CUSTOMERS = gql`
  query GetCustomers {
    customers {
      id
      name
      birthDate
      location
      email
      sex
      phoneNumber
      jobTitle
      jobType
      registeredDate
      pointOfRegistration
    }
  }
`;
