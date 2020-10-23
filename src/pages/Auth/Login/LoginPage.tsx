import React, { FormEvent, useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import classes from './LoginPage.module.css';
import { useHistory } from 'react-router-dom';
// import { useLazyQuery } from '@apollo/react-hooks';
import { GET_USERS, LOGIN_QUERY } from '../../../Apollo/Queries/Auth/LoginQuery';
import { useLazyQuery } from '@apollo/react-hooks';
// import { useLazyQuery, useQuery } from '@apollo/client';

export interface LoginPageProps {

}

const LoginPage: React.SFC<LoginPageProps> = () => {

    const history = useHistory();

    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)

    const [Login, { loading: loginLoading, client, data: userLogin }] = useLazyQuery(LOGIN_QUERY);
    const [GetUsers, { loading: usersLoading, data: users }] = useLazyQuery(GET_USERS);
    
    const onSubmitHandler = async (event: FormEvent) => {
        await Login({ variables: {input :  {email: refEmailEl.current?.value, password: refPasswordEl.current?.value} } })
        // await GetUsers()

        console.log("userLogin", userLogin)
        // const { getUsers } = users
        // console.log("onSubmitHandler -> users", users)
        // console.log("onSubmitHandler -> getUsers", getUsers)
        // console.log("onSubmitHandler -> user", user)
        event.preventDefault()
    }

    return (
        <div className="container">
            <div className="container-fluid">
                <Form className={classes.authForm} onSubmit={(event: FormEvent) => onSubmitHandler(event)}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" innerRef={refEmailEl} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={refPasswordEl} />
                    </FormGroup>
                    <FormGroup className='form-row'>
                        <div className='form-group col-12'>
                            <Button color='primary' type='submit'>Submit</Button>
                        </div>
                        <div className='form-group col-12'>
                            <Button onClick={() => history.push('/auth/sign-up')}>
                                Switch To Sign Up
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;