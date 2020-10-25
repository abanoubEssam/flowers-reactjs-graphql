// import { useLazyQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';
import React, { FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { LOGIN_QUERY } from '../../../Apollo/Queries/Auth/LoginQuery';
import { ToastComponent } from '../../../components/Toast/Toast';
import { AUTH_TOKEN_LOCAL_STORAGE } from '../../../constants';
import { LoginResponse } from '../../Users/getUsers.interface';
import classes from './LoginPage.module.css';

export interface LoginPageProps {

}

const LoginPage: React.SFC<LoginPageProps> = () => {

    const history = useHistory();
    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)
    // const [loginData, setLoginData] = useState<LoginResponse>()
    // const [loginError, setLoginError] = useState('')
    const [login, { loading, error }] = useLazyQuery(LOGIN_QUERY, {
        onCompleted: (data: LoginResponse) => {
            console.log("data", data)
            localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE, data.login.token)
            history.push('/')
            window.location.reload()
        },
        onError: (error) => {
            console.log("error", error)
            toast(error.message)
        }
    });

    const onSubmitHandler = async (event: FormEvent) => {
        event.preventDefault();
        const email = refEmailEl.current?.value;
        const password = refPasswordEl.current?.value;
        login({ variables: { input: { email, password } } });
    }

    return (
        <div className="container">
            <div className="container-fluid">
                <ToastComponent />
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
                            {loading ? <Spinner color="primary" /> : <Button color='primary' type='submit'>Submit</Button>}
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