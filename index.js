let { ApolloServer, gql } = require('apollo-server');
let typeDefs = require('./schema/jokes');
let resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})