const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Task {
    id: String!
    task: String!
  }

  type Query {
    list: [Task]
  }
`;

const list = [
            {
              id: "123-1",
              task: "shopping"
            },
            {
              id: "123-2",
              task: "feed cat"
            },
            {
              id: "123-3",
              task: "clean kitchen"
            }
          ]
        
const resolvers = {
    Query: {
      list: () => list.map(task => task)
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
