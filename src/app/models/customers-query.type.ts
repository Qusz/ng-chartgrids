import type { Customer } from './customer.type';

export type CustomersQuery = {
  data: {
    customers: Customer[] | null;
  };
  loading: boolean;
  networkStatus: number;
};
