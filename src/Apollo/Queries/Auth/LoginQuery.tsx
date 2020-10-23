import { gql } from "apollo-boost";

export const LOGIN_QUERY = gql`
query Login($input:loginInput) {
    login(input: $input) {
    token
    user{
      _id
      email
      profileImg
      createdAt
    }
    
  }
}
`;


export const GET_USERS = gql`
query GetUsers{
    getUsers{
        email
        createdAt
        profileImg
    }
}
`;