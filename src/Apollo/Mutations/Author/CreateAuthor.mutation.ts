import { gql } from "@apollo/client";

export const CREATE_AUTHOR = gql`
mutation CreateAuthor($name:String! , $age: Int! , $breed: String! , $profileImg: Upload!) {
    createAuthor(input: {name: $name , age: $age , breed: $breed , profileImg:$profileImg}) {
        id
        name
        age
        breed
  }
}
`;