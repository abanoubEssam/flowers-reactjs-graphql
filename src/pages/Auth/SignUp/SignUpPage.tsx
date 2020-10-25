import { useMutation } from '@apollo/client';
import React, { FormEvent, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CREATE_USER } from '../../../Apollo/Mutations/Auth/SignUp.mutation';
import classes from './SignUpPage.module.css';

export interface SignUpPageProps {

}

const SignUpPage: React.SFC<SignUpPageProps> = () => {
    const [SignUp] = useMutation(CREATE_USER);

    const history = useHistory();

    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)
    const refNameEl = useRef<HTMLInputElement>(null)
    const refProfileImgEl = useRef<HTMLInputElement>(null)



    const onSubmitSignUpHandler = async (event: FormEvent) => {
        event.preventDefault()
        const { data: signUp, errors , context} = await SignUp({
            variables: {
                input: {
                    email: refEmailEl.current?.value,
                    name: refNameEl.current?.value,
                    password: refPasswordEl.current?.value
                }
            }
        });
        console.log("errors", errors)
        console.log("onSubmitSignUpHandler -> signUpData", signUp)
        console.log("onSubmitSignUpHandler -> context", context)


    }

    return (
        <div className="container">
            <div className="container-fluid">
                <Form className={classes.authForm} onSubmit={onSubmitSignUpHandler}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" innerRef={refNameEl} autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" innerRef={refEmailEl} autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={refPasswordEl} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profileImg">ProfileImage</Label>
                        <Input type="file" name="profileImg" id="profileImg" innerRef={refProfileImgEl} />
                    </FormGroup>
                    <FormGroup className='form-row'>
                        <div className='form-group col-12'>
                            <Button color='primary' type='submit'>Submit</Button>
                        </div>
                        <div className='form-group col-12'>
                            <Button onClick={() => history.push('/auth/login')}>
                                Switch To Login
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default SignUpPage;