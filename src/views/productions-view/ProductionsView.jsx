import React from 'react';
import { Container } from 'react-bootstrap';
import ShowListing from '../../components/show-listing/ShowListing';
import { ProductionsList } from '../../constants/ProductionsList';

export default function ProductionsView(){
    return(
        <Container fluid className="p-4 page-container " >
            <ShowListing shows={ProductionsList} />
        </Container>
    )
}