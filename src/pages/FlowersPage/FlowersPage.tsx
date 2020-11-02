import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import CreateFlower from './CreateFlower/CreateFlower';
import { GET_FLOWERS } from '../../Apollo/Queries/Flower/Flower.Query';
import FlowerList from './FlowersList/FlowerList';

export interface FlowersPageProps {

}

const FlowersPage: React.FC<FlowersPageProps> = () => {
    const [openModal, setOpenModal] = useState(false);
    const { data, loading, error } = useQuery(GET_FLOWERS)

    const toggleVisible = () => setOpenModal(!openModal);

    console.log("data", data)
    console.log("error", error)



    return (
        <div className="container">
            <div className="container-fluid">
                <Button color="success" onClick={toggleVisible}>Create Flower</Button>
            </div>
            <CreateFlower modal={openModal} toggleVisible={toggleVisible} />
            <div>
                {data ? <FlowerList flowers={data.flowers} /> : null}
            </div>
        </div>
    );
}

export default FlowersPage;