import { data } from './_data';

export const resolvers = {
  Query: {
    customers: () => data,
    customer: (_, args) => {
      return data.find((customer) => customer.id === args.id);
    }
  }
};
