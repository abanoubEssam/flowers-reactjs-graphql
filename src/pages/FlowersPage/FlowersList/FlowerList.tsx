import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { UPDATE_FLOWER } from '../../../Apollo/Mutations/Flower/UpdateFlower.mutation';

export interface FlowerListProps {
    flowers: any
}

type IFormInputs = {
    id: string
    name: string
    price: number
    imgs: [string]
};


const FlowerList: React.FC<FlowerListProps> = (props) => {
    console.log("props", props.flowers[3])

    const [UpdateFlower] = useMutation(UPDATE_FLOWER)
    const refInputFile = useRef<any>(null)
    console.log("refInputFile", refInputFile.current)
    const [inputFileValue, setInputFileValue] = useState<any>()
    console.log("inputFileValue", inputFileValue)

    useEffect(() => {
        console.log("inputFileValue use eff" , inputFileValue)
        const flower = props.flowers[3]
        // flower.splice(flower.indexOf(item), 1);
        console.log("flower", flower)
        // if (inputFileValue) {
        //     flower['imgs']
        //     UpdateFlower({variables: {id: flower.id , }})
        // }

    }, [inputFileValue]);


    return (
        <div>
            <input ref={refInputFile} type="file" onChange={event => { setInputFileValue(event.target.files) }} />
        </div>
    );
}

export default FlowerList;