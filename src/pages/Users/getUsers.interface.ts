export interface GetUsersInterface {
    users: [{
        createdAt: string,
        email: string,
        profileImg: string | null
        __typename: string
    }]
}


export interface ReturnedUser {
    createdAt: string,
    id: string,
    name: string,
    email: string,
    profileImg: string | undefined
    __typename: string
}

export interface LoginResponse {
    login:{
        user: {
            name: string,
            email: string,
            createdAt: string
            profileImg: string
        },
        token: string
    }
}