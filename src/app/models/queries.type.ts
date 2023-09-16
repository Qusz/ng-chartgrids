import type { Customer } from './customer.type';

type CommonQueryProperties = {
  loading: boolean;
  networkStatus: number;
};

export type GenderData = {
  gender: string | null;
};

export type PointOfRegistrationData = {
  pointOfRegistration: string | null;
};

export type RegisteredDateData = {
  registeredDate: string | number | null;
};

export type CommonQueryData = GenderData | PointOfRegistrationData | RegisteredDateData;

export type CustomersQuery = {
  data: {
    customers: Customer[] | null;
  };
} & CommonQueryProperties;

export type GendersQuery = {
  data: {
    customers: GenderData[];
  };
} & CommonQueryProperties;

export type PointOfRegistrartionQuery = {
  data: {
    customers: PointOfRegistrationData[];
  };
} & CommonQueryProperties;

export type RegistrationDateQuery = {
  data: {
    customers: RegisteredDateData[];
  };
} & CommonQueryProperties;
