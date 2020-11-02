import { gql } from "@apollo/client";

export const CREATE_FLOWER = gql`
mutation CreateFlower($name:String! , $price: Int! , $imgs: [Upload!]!) {
    createFlower(input: { name: $name , price: $price , imgs:$imgs}) {
            name
            price
            id
  }
}
`;