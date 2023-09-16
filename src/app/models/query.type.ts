import type { Customer } from './customer.type';

type CommonQueryProperties = {
  loading: boolean;
  networkStatus: number;
};

export type CustomersQuery = {
  data: {
    customers: Customer[] | null;
  };
} & CommonQueryProperties;

export type GendersQuery = {
  data: {
    customers: {
      genders: string[] | null;
    };
  };
} & CommonQueryProperties;

export type PointOfRegistrartionQuery = {
  data: {
    customers: {
      pointOfRegistration: string[] | null;
    };
  };
} & CommonQueryProperties;

export type RegistrationDateQuery = {
  data: {
    customers: {
      registeredDate: string[] | number[] | null;
    };
  };
} & CommonQueryProperties;
