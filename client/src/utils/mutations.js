import { gql } from '@apollo/client';

export const LOGIN_USER = gql`mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            id
        }
    }
}`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            id
        }
    }
}`

export const SAVE_BOOK = gql`
mutation Mutation($title: String!, $bookId: ID!, $image: String!, $link: String!, $authors: [String!], $description: String!) {
    saveBook(title: $title, bookId: $bookId, image: $image, link: $link, authors: $authors, description: $description) {
        bookCount
        savedBooks {
            bookId
            title
        }
    }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        id
    }
}`