import React from 'react';
import { Container } from 'react-bootstrap';
import ShowListing from '../../components/show-listing/ShowListing';
import { PlaybackShowsList } from '../../constants/PlaybackShowsList';

export default function PlaybackShowsView() {
    return (
        <Container fluid className="p-4 page-container " >
            <ShowListing shows={PlaybackShowsList} />
        </Container>
    )
}