const {ApolloServer} = require('@apollo/server')
const {startStandaloneServer} = require('@apollo/server/standalone')

const typeDefs = require("../src/graphql/schema");
const resolvers = require("../src/graphql/resolvers");

async function startserver(){
    const server = new ApolloServer({
        typeDefs,
        resolvers,

    })
    const {url} = await startStandaloneServer(server,{
        listen:{
            port:4000
        },
    });

    console.log(`server ready at ${url}`)
}

startserver();