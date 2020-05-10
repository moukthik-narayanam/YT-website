import React from 'react';
import YTDetails from '../../components/yt-details/YTDetails';
import YTMembers from '../../components/yt-members/YTMembers';
import { Tabs, Tab, Container } from 'react-bootstrap';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <Container fluid className="p-4 about-us-container" >
            <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
                <Tab eventKey="details" title="Details">
                    <YTDetails />
                </Tab>
                <Tab eventKey="members" title="Members">
                    <YTMembers />
                </Tab>
            </Tabs>
        </Container>
    )
}