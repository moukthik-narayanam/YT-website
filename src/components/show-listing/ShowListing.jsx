import React from 'react';
import { Tab, Row, Col, Nav, Card } from 'react-bootstrap';
export default function ShowListing(props) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={props.shows[0].id}>
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {props.shows.map((item) => {
                            return (
                                <Nav.Item>
                                    <Nav.Link eventKey={item.id}>{item.title}</Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        {props.shows.map((show) => {
                            return (
                                <Tab.Pane eventKey={show.id}>
                                    <Card>
                                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${show.img}`} />
                                        <Card.Body>
                                            <Card.Title>{show.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{show.Subtitle}</Card.Subtitle>
                                            <Card.Text>
                                                {show.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            )
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}