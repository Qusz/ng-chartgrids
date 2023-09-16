import { Customer } from './customer.type';

export type DataProcessorSettings = {
  data: Customer[];
  keySelector: (item: Customer) => string | number;
  countKey: string;
  valueKey: string;
};
