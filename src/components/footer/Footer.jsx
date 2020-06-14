import React, { useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Media } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
    const currentDate = new Date();
    const footerRef = useRef();
    const { location } = useHistory();

    useLayoutEffect(() => {
        if (location.pathname === "/contact-us") {
            footerRef.current && footerRef.current.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <Container ref={footerRef} fluid className="footer-container px-5 pt-5 pb-2">
            <div id="mc_embed_signup">
                <form action={`https://yourstruly-theatre.us4.list-manage.com/subscribe/post?u=cdefc42822bf4c0e9675b4469&amp;id=109a75400e`} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <label for="mce-EMAIL">Subscribe to get latest event updates.</label>
                        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email address" required />
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input type="text" name="b_cdefc42822bf4c0e9675b4469_109a75400e" tabindex="-1" value="" />
                        </div>
                        <div class="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="seperator-line w-100 mt-5 mb-2"></div>
            <Row className="justify-content-md-center">
                <Col md={3} className="mt-1">
                    <ListGroup>
                        <ListGroup.Item>
                            Follow us
                        </ListGroup.Item>
                        <ListGroup.Item action href="https://www.facebook.com/yourstrulytheatre/">
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
                        <ListGroup.Item action href="https://www.linkedin.com/in/yours-truly-theatre-09742214/">
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
                        <ListGroup.Item action href="https://www.instagram.com/yourstruly_theatre/">
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