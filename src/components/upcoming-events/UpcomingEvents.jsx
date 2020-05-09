import React from 'react';
import { Container, Col, Card, Button, Row } from 'react-bootstrap';
import './UpcomingEvents.css';
// import { eventsList } from './eventsList';

export default function UpcomingEvents() {
    const eventsList = [1, 2, 3];
    // const activeList = 
    return (
        <Container fluid>
            <Row className="justify-content-md-center mb-4">
                <Col md={"auto"}>
                    <h3 className="events-container-heading px-2 pb-1">
                        Upcoming Events
                    </h3>
                </Col>
            </Row>
            <Row className="justify-content-md-center mx-5 mb-4">
                {
                    eventsList.map((index) => {
                        return <Col className="px-2">
                            <Card style={{ width: '18rem' }} className="mt-3">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/logo-light.png'} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
            <Row className="justify-content-md-center mb-4">
                <Col md={4} className="text-center">
                    <Button className="text-secondary" variant="link" href="more-events">For more events >></Button>
                </Col>
            </Row>
        </Container>
    )
}
