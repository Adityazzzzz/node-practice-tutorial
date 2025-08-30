// this will tell what will be the structure of your data

const {gql} = require('graphql-tag');

/*
String
int 
Float
Boolean
id -> unique
*/

/*
1. type Product - (we create object)
This defines a GraphQL object type named Product.
It describes what fields a Product will have, and their types

2. type Query
This defines the entry points (queries) that clients can run.


Product defines the structure of your data.
Query defines how you can fetch that data (list or by ID).
*/ 

const typeDefs = gql`
    type Product{
        id: ID!
        title: String!
        category: String!
        price: Float!
        inStock: Boolean!
    }
    
    type Query{
        products: [Product!]!
        product(id: ID!) : Product
    }
`
module.exports = typeDefs;
