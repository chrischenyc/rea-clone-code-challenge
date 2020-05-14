const resolvers = {
  Query: {
    search: (suburb) => [
      { id: 'sdj23', price: 1200000, address: '12 York Street' },
      { id: 'sdj24', price: 750000, address: '668 Inkerman Road' },
    ],
  },
};

module.exports = resolvers;
