import { gql } from '@apollo/client';

export const LOGIN_QUERY = gql`
query Login($input:loginInput) {
    login(input: $input) {
    token
    user{
      email
      profileImg
      createdAt
    }
    
  }
}
`;


