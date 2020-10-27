import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation SignUp($email:String! , $name: String! , $password: String! , $profileImg: Upload) {
    signUp(input: {email: $email , name: $name , password: $password , profileImg:$profileImg}) {
        user{
            email
            name
            id
        }
        token
  }
}
`;