import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import classes from './LoginPage.module.css';
import { useHistory } from 'react-router-dom';

export interface LoginPageProps {

}

const LoginPage: React.SFC<LoginPageProps> = () => {

    const history = useHistory();

    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)

    const onSubmitHandler = () => {

    }

    return (
        <div className="container">
            <div className="container-fluid">
                <Form className={classes.authForm} onSubmit={onSubmitHandler}>
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