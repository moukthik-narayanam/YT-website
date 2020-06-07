import React from 'react';
import { Container, Media, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import './EventBooking.css';
import { useReducer } from 'react';

export default function EventBooking() {
    const [state, dispatch] = useReducer(reducer, { count: 1 });

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                if (state.count > 0) return { count: state.count - 1 }
                return { count: 0 }
            default:
                throw new Error();
        }
    }

    const updatePax = (e) => {
        dispatch({ type: e.currentTarget.id })
    }

    const event = {
        id: "1",
        name: "Basic theater workshop - weekend",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra hendrerit laoreet. Suspendisse rutrum neque sapien, ut fermentum justo tempus vitae. Mauris quis vulputate turpis, quis sagittis mauris. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent nunc neque, consequat quis fringilla eget, porta a lorem. Sed at libero non felis porta fermentum sit amet non lacus. Praesent sit amet nisi eget mi molestie ultrices blandit quis risus. Curabitur sed aliquam velit, sed molestie erat. Quisque mauris leo, vulputate nec mi nec, malesuada faucibus tortor. Nullam maximus libero quam, id sodales mi ullamcorper id. Fusce luctus erat at erat tincidunt, at lobortis justo gravida. Nulla a lobortis velit.",
        dateTime: "23/06/2020 - 18/06/2020",
        location: "Yours Truly Theater Interactive Space",
        entryCost: "6000"
    }
    return (
        <>
            <Container fluid className="py-5 page-container d-flex flex-column justify-content-center" >
                <Container>
                    <Media key={event.id} className="jagged-border mx-auto p-0">
                        <Row className="m-0 p-2 w-100">
                            <div className="px-2 mx-auto">
                                <img
                                    width={256}
                                    height={256}
                                    className="img-fluid"
                                    src={`${process.env.PUBLIC_URL}/images/${'Event1.jpg'}`}
                                    alt={event.name}
                                />
                            </div>
                            <div className="ticket d-flex flex-fill px-2">
                                <Media.Body className="d-flex flex-column justify-content-around">
                                    <div className="border p-2">
                                        <h5 className="heading-border">{event.name}</h5>
                                        <p className="d-flex mt-4"><i className="material-icons pr-3">{"event"}</i><span>{event.dateTime}</span></p>
                                        <p className="d-flex"><i className="material-icons pr-3">{"place"}</i><span>{event.location}</span></p>
                                        <p className="d-flex">
                                            <img
                                                width={16}
                                                height={24}
                                                className="ml-1 mr-3"
                                                src={process.env.PUBLIC_URL + '/images/rupee-icon.svg'}
                                                alt="cost"
                                            />
                                            <span className="entry-cost">{event.entryCost}</span>
                                        </p>
                                    </div>
                                    <div className="seperator-line my-2"></div>
                                    <div className="border p-2">
                                        <div className="justify-content-between d-flex pt-2">
                                            <Col md="auto" className="px-1">
                                                No of Persons
                                        </Col>
                                            <Col md="auto" className="px-1">
                                                <Button variant="link" id="increment" onClick={updatePax} className="p-0">
                                                    <i className="material-icons">{"add"}</i>
                                                </Button>
                                                <span className="px-2">
                                                    {state.count}
                                                </span>
                                                <Button variant="link" id="decrement" onClick={updatePax} className="p-0">
                                                    <i className="material-icons">
                                                        {"remove"}
                                                    </i>
                                                </Button>
                                            </Col>
                                            <Col md="auto" className="px-1">
                                                x {event.entryCost}
                                            </Col>
                                            <Col md="auto" className="px-1">
                                                Total : Rs {parseInt(event.entryCost) * state.count}
                                            </Col>
                                        </div>
                                        <Row className="justify-content-center mt-4 pb-2 row">
                                            <Button variant="secondary">Book now</Button>
                                        </Row>
                                    </div>
                                </Media.Body>
                            </div>
                        </Row>
                    </Media>
                    <Jumbotron className="mx-auto p-3 mt-4 mb-0 event-details">
                        <h5 className="heading-border">Details</h5>
                        <p>
                            {event.description}
                        </p>
                    </Jumbotron>
                </Container>
            </Container>
        </>
    )
}