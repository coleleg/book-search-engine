const { gql } = require('apollo-server-express');

const typeDefs = gql`
scalar Date
    type User {
        id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    } 

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input savedBook {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs;