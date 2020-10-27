import { useMutation } from '@apollo/client';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CREATE_USER } from '../../../Apollo/Mutations/Auth/SignUp.mutation';
import classes from './SignUpPage.module.css';

export interface SignUpPageProps {

}

type IFormInputs = {
    email: string,
    password: string,
    name: string,
    profileImg: string,
};

const SignUpPage: React.FC<SignUpPageProps> = () => {
    const [fileValue, setFileValue] = useState<any>()
    const [SignUp] = useMutation(CREATE_USER);
    const { register, handleSubmit, errors } = useForm<IFormInputs>();
    const history = useHistory();
    const refProfileImg = useRef()

    const onSubmitSignUpForm = async (result: IFormInputs) => {
        console.log("onSubmitSignUpForm -> result", result)
        const email = result.email;
        const password = result.password;
        const name = result.name;
        const profileImg = fileValue;
        console.log("onSubmitSignUpForm -> profileImg", profileImg)
        console.log(fileValue)
        await SignUp({ variables:  { email, password, name , profileImg } });
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        console.log("handleFileChange -> file", file)
        if (file) {
            setFileValue(file)
        }
    }

    return (
        <div className="container">
            <div className="container-fluid">
                <Form className={classes.authForm} onSubmit={handleSubmit(onSubmitSignUpForm)} >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" innerRef={register({ required: true })} autoComplete="off" />
                        {(errors as any).name && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" innerRef={register({ required: true })} autoComplete="off" />
                        {(errors as any).email && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={register({ required: true })} />
                        {(errors as any).password && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="profileImg">ProfileImage</Label>
                        <input type="file" name="profileImg" id="profileImg" ref={register} onChange={handleFileChange} />
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