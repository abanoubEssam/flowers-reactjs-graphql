import { gql } from "apollo-boost";

export const CREATE_USER = gql`
mutation SignUp($input:signUpInput) {
    signUp(input: $input) {
        user{
            _id
            name
            email
        }
        token
  }
}
`;