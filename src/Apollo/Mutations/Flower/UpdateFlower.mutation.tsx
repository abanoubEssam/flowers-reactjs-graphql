import { gql } from "@apollo/client";

export const UPDATE_FLOWER = gql`
mutation UpdateFlower($id: ID! , $name:String! , $price: Int! , $imgs: [Upload!]!) {
    updateFlower(id: $id , input: { name: $name , price: $price , imgs:$imgs}) {
            name
            price
            id
  }
}
`;