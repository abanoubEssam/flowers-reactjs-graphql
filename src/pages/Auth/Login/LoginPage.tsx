// import { useLazyQuery } from '@apollo/react-hooks';
// import { useLazyQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import React, { FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { LOGIN_QUERY } from '../../../Apollo/Queries/Auth/LoginQuery';
import classes from './LoginPage.module.css';

export interface LoginPageProps {

}

const LoginPage: React.SFC<LoginPageProps> = () => {

    const history = useHistory();
    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)
    const client = useApolloClient();


    const onSubmitHandler = async (event: FormEvent): Promise<any> => {
        event.preventDefault()
        const { data, loading } = await client.query({ query: LOGIN_QUERY, variables: { input: { email: refEmailEl.current?.value, password: refPasswordEl.current?.value } } })
        
        console.log("login data", data)
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