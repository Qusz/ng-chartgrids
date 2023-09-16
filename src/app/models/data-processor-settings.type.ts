import type { CommonQueryData } from './queries.type';

export type DataProcessorSettings = {
  data: CommonQueryData[];
  keySelector: (item: any) => string | number;
  countKey: string;
  valueKey: string;
};
