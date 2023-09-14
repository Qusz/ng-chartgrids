import customers from "./_data.js";

export const resolvers = {
  Query: {
    customers: () => customers,
    customer: (_, args) => {
      return customers.find((customer) => customer.id === args.id)
    }
  }
};