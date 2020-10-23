import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import classes from './SignUpPage.module.css';
import { useHistory } from 'react-router-dom';

export interface SignUpPageProps {

}

const SignUpPage: React.SFC<SignUpPageProps> = () => {

    const history = useHistory();

    const refEmailEl = useRef<HTMLInputElement>(null)
    const refPasswordEl = useRef<HTMLInputElement>(null)
    const refNameEl = useRef<HTMLInputElement>(null)
    const refProfileImgEl = useRef<HTMLInputElement>(null)

    const onSubmitHandler = () => {

    }

    return (
        <div className="container">
            <div className="container-fluid">
                <Form className={classes.authForm} onSubmit={onSubmitHandler}>
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
                        <Input type="file" name="profileImg" id="profileImg"  innerRef={refProfileImgEl} />
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