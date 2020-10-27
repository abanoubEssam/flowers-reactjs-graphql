export interface User {
	__typename: string;
	email:      string;
	id:         string;
	name:       string;
	createdAt:  string;
	profileImg: any;
}

export interface UserGraphModel {
	getUsers: User[];
}
