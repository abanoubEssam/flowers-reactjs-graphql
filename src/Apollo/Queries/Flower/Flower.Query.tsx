import { gql } from '@apollo/client';

export const GET_FLOWERS = gql`
query Flowers{
    flowers{
        id
        name
        price
        imgs
    }
}
`;