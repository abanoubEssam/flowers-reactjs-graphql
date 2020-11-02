import { useMutation } from '@apollo/client';
import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import classes from './AuthorPage.module.css';
import { CREATE_AUTHOR } from '../../Apollo/Mutations/Author/CreateAuthor.mutation';

export interface AuthorPageProps {

}

type IFormInputs = {
    name: string,
    age: string,
    breed: string,
    profileImg: string,
};

const AuthorPage: React.FC<AuthorPageProps> = () => {
    const [fileValue, setFileValue] = useState<any>()
    const [CreateAuthor] = useMutation(CREATE_AUTHOR);
    const { register, handleSubmit, watch, errors } = useForm<IFormInputs>();
    const history = useHistory();

    const onSubmitSignUpForm = async (result: IFormInputs) => {
        console.log("onSubmitSignUpForm -> result", result)
        const name = result.name;
        const age = +result.age;
        const breed = result.breed;
        const profileImg = fileValue;
        console.log("onSubmitSignUpForm -> profileImg", profileImg)
        console.log("fileValue", fileValue)
        await CreateAuthor({ variables: { name, age, breed, profileImg } });
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
                        <Label for="exampleAge">Age</Label>
                        <Input type="number" name="age" id="exampleAge" placeholder="Age" innerRef={register({ required: true })} autoComplete="off" />
                        {(errors as any).age && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleBreed">breed</Label>
                        <Input type="text" name="breed" id="exampleBreed" placeholder="breed" innerRef={register({ required: true })} />
                        {(errors as any).breed && <span>This field is required</span>}

                    </FormGroup>
                    <FormGroup>
                        <Label for="profileImg">ProfileImage</Label>
                        <input type="file" name="profileImg" id="profileImg" ref={register} onChange={handleFileChange} />
                    </FormGroup>

                    <FormGroup className='form-row'>
                        <div className='form-group col-12'>
                            <Button color='primary' type='submit'>Submit</Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default AuthorPage;