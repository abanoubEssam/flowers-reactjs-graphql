import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation SignUp($input:signUpInput) {
    signUp(input: $input) {
        user{
            name
            email
        }
        token
  }
}
`;