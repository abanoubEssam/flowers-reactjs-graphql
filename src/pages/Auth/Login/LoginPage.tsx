// import { useLazyQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { LOGIN_QUERY } from '../../../Apollo/Queries/Auth/LoginQuery';
import { ToastComponent } from '../../../components/Toast/Toast';
import { AUTH_TOKEN_LOCAL_STORAGE } from '../../../utils/constants';
import { LoginResponse } from '../../Users/getUsers.interface';
import classes from './LoginPage.module.css';


type IFormInputs = {
    email: string,
    password: string,
};

export interface LoginPageProps {

}

const LoginPage: React.FC<LoginPageProps> = () => {
    const { register, handleSubmit, watch, errors } = useForm<IFormInputs>();

    const history = useHistory();

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

    const onSubmit = async (result: IFormInputs) => {
        const email = result.email;
        const password = result.password;
        login({ variables: { input: { email, password } } });        
    };


    return (
        <div className="container">
            <div className="container-fluid">
                <ToastComponent />
                <Form className={classes.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>

                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" innerRef={register({ required: true })} />
                        {(errors as any).email && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>

                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={register({ required: true })} />
                        {(errors as any).password && <span>This field is required</span>}

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