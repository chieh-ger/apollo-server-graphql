let { ApolloServer, gql } = require('apollo-server');
let typeDefs = require('./schema/jokes');
let resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
});

server.listen(3200).then((URL) => {
    console.log(`Ready on 3200`);
})