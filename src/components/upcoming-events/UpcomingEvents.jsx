import React from 'react';
import { Container, Col, Card, Button, Row } from 'react-bootstrap';
import './UpcomingEvents.css';
import { useHistory } from 'react-router-dom';
// import { eventsList } from './eventsList';

export default function UpcomingEvents() {
    const history = useHistory();
    function handleMoreEvents() {
        history.push("/more-events");
    }
    const eventsList = [{ id: "1", name: "even title", descrption: "event description" }, { id: "2", name: "even title", descrption: "event description" }, { id: "3", name: "even title", descrption: "event description" }, { id: "4", name: "even title", descrption: "event description" }, { id: "5", name: "even title", descrption: "event description" }, { id: "6", name: "even title", descrption: "event description" }, { id: "7", name: "even title", descrption: "event description" }];
    // const activeList = 
    const goToEventBookingPage = (e) => {
        history.push(`${e.target.id}/eventBooking`);
    }
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
                    eventsList.map((event) => {
                        return <Col key={event.id} className="px-2">
                            <Card style={{ width: '18rem' }} className="mt-3">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/logo-light.png'} />
                                <Card.Body>
                                    <Card.Title>{event.name}</Card.Title>
                                    <Card.Text>
                                        {event.descrption}
                                    </Card.Text>
                                    <Button onClick={goToEventBookingPage} id={event.id} variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                }
            </Row>
            <Row className="justify-content-md-center mb-4">
                <Col md={4} className="text-center">
                    <Button className="text-secondary" variant="link" onClick={handleMoreEvents}>For more events >></Button>
                </Col>
            </Row>
        </Container>
    )
}
