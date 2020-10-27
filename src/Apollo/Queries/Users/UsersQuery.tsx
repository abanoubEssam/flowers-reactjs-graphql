import { gql } from '@apollo/client';

export const GET_USERS = gql`
	query GetUsers($page: Int, $limit: Int) {
		getUsers(page: $page, limit: $limit) {
			email
			id
			name
			createdAt
			profileImg
		}
	}
`;
