const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: _id
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    } 

    type 
`