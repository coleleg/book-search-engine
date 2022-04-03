import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
        id
        username
        email
        password
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
}`