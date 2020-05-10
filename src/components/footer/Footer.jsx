import React from 'react';
import { Container, Row, Form, Col, Button, ListGroup, Media } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    const currentDate = new Date();
    return (
        <Container fluid className="footer-container px-5 pt-5 pb-2">
            <Row className=" justify-content-md-center mb-2 subscribe-text">
                <Col md="auto">
                    Subscribe to get latest event updates.
                </Col>
            </Row>
            <Form >
                <Form.Row className="justify-content-md-center">
                    <Col md="auto" className="my-1">
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                            </Form.Control.Feedback>
                    </Col >
                    <Col md={"auto"} className="mt-1">
                        <Button variant="info" type="submit">Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
            <div className="seperator-line w-100 mt-5 mb-2"></div>
            <Row className="justify-content-md-center">
                <Col md={3} className="mt-1">
                    <ListGroup>
                        <ListGroup.Item>
                            Follow us
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <Media>
                                <img
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                    src={process.env.PUBLIC_URL + '/images/facebook-logo.png'}
                                    alt="facebook"
                                />
                                <Media.Body>
                                    Facebook
                                </Media.Body>
                            </Media>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <Media>
                                <img
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                    src={process.env.PUBLIC_URL + '/images/linkedin-logo.png'}
                                    alt="linkedin"
                                />
                                <Media.Body>
                                    Linkedin
                                </Media.Body>
                            </Media>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <Media>
                                <img
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                    src={process.env.PUBLIC_URL + '/images/insta-logo.png'}
                                    alt="instagram"
                                />
                                <Media.Body>
                                    Instagram
                                </Media.Body>
                            </Media>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} className="mt-1">
                    <ListGroup>
                        <ListGroup.Item>
                            Locate us
                        </ListGroup.Item>
                        <ListGroup.Item>
                            No 1, 17th F cross, CMH road, Indirangar <br /> Bengaluru, Karnataka 560075 <br /> Landmark - After Shanti sagar Hotel on CMH Road
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} className="mt-1">
                    <ListGroup>
                        <ListGroup.Item>
                            Contact us
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Mobile: 9620888196 / 9845853093
                            <br /> Email: yourstrulytheatre@gmail.com
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="justify-content-md-center disclaimer mt-3">
                {`All of the Content in this website is copyright © Yours Truly Theatre ${currentDate.getUTCFullYear()} and can not be reproduced without permission,
                including all text, images and other online content that comprise the website.`}
            </Row>
        </Container>
    )
}