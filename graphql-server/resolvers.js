import { data } from './_data.js';

export const resolvers = {
  Query: {
    customers: () => data,
    customer: (_, args) => {
      return data.find((customer) => customer.id === args.id);
    }
  }
};
