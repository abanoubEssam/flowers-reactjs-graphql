import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useMutation } from '@apollo/client';
import { CREATE_FLOWER } from '../../../Apollo/Mutations/Flower/CreateFlower.mutation';



export interface CreateFlowerProps {
    modal: boolean,
    toggleVisible: any
}

type IFormInputs = {
    name: string
    price: number
    imgs: [string]
};

const CreateFlower: React.FC<CreateFlowerProps> = (props: CreateFlowerProps) => {
    const { modal, toggleVisible } = props;
    const [visibleModal , setVisibleModal] = useState(false)
    const { register, handleSubmit, watch, errors } = useForm<IFormInputs>();
    const [fileValue, setFileValue] = useState<any>()
    const [CreateFlower] = useMutation(CREATE_FLOWER)


    useEffect(() => {
        setVisibleModal(modal)
    }, [modal])

    const handleFileChange = (event: any) => {
        const file = event.target.files[0]
        console.log("handleFileChange -> file", file)
        if (file) {
            setFileValue(file)
        }
    }

    const onSubmitCreateFlowerForm = async (result: IFormInputs) => {
        console.log("onSubmitCreateFlowerForm -> result", result)
        const name = result.name;
        const price = +result.price;
        const imgs = result.imgs;
        console.log("FILE VAL => ", fileValue)
        console.log("IMGS => ", imgs)
        const { data, errors } = await CreateFlower({ variables: { name, price, imgs } })
        console.log("onSubmitCreateFlowerForm -> data", data)
        console.log("onSubmitCreateFlowerForm -> errors", errors)
        if (!errors) {
            setVisibleModal(false)
        }

    };


    return (
        <div>
            <Modal isOpen={visibleModal} toggle={toggleVisible}>
                <ModalHeader toggle={toggleVisible}>Create Flower</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmitCreateFlowerForm)} >
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" innerRef={register({ required: true })} autoComplete="off" />
                            {(errors as any).name && <span>This field is required</span>}

                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePrice">Price</Label>
                            <Input type="number" name="price" id="examplePrice" placeholder="Price" innerRef={register({ required: true })} autoComplete="off" />
                            {(errors as any).price && <span>This field is required</span>}

                        </FormGroup>

                        <FormGroup>
                            <Label for="imgs">Images</Label>
                            <input type="file" name="imgs" id="imgs" ref={register} onChange={handleFileChange} multiple />
                        </FormGroup>

                        <FormGroup className='form-row'>
                            <div className='form-group col-12'>
                                <Button color='primary' type='submit'>Submit</Button>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>

            </Modal>
        </div>
    );
}

export default CreateFlower;