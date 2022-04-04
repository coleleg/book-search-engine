import { gql } from '@apollo/client';

export const LOGIN_USER = gql`mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            id
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
    }
}`;

export const SAVE_BOOK = gql`
mutation Mutation($input: savedBook) {
    saveBook(input: $input) {
        username
        id
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        } 
    }
}
`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
        id
        username
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}`;