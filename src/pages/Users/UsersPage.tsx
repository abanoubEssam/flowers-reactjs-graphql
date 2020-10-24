import { useQuery } from '@apollo/client';
import React from 'react';
import { Spinner, Table } from 'reactstrap';
import { GET_USERS } from '../../Apollo/Queries/Users/UsersQuery';
import { ReturnedUser } from './getUsers.interface';

export interface UsersPageProps {

}

const UsersPage: React.FC<UsersPageProps> = () => {

    const { data, loading, error } = useQuery(GET_USERS)

    const renderUsers = () => {
        return <>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Profile Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.getUsers.map((user: ReturnedUser, index: number) => {
                            return (
                                <tr key={user.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td><img src={user.profileImg} alt="img"/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    }

    return (
        <div>
            {loading ? <Spinner style={{ width: '3rem', height: '3rem' }} color="dark" /> : renderUsers()}
        </div>
    );
}

export default UsersPage;