import React from 'react';
import { Container, Media, Col, Row, Jumbotron, Button } from 'react-bootstrap';
import './EventBooking.css';
import { useReducer } from 'react';
import { eventsList } from '../../constants/EventsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PageLoading from '../../components/page-loading/PageLoading';

export default function EventBooking() {
    const [state, dispatch] = useReducer(reducer, { count: 1 });
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { params } = useRouteMatch();

    useEffect(() => {
        setSelectedEvent(eventsList.find(ev => ev.id === params.eventId));
    }, [params])

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
    return (
        <>
            {!selectedEvent && <PageLoading />}
            {selectedEvent && <Container fluid className="py-5 page-container d-flex flex-column justify-content-center" >
                <Container>
                    <Media key={selectedEvent.id} className="jagged-border mx-auto p-0">
                        <Row className="m-0 p-2 w-100">
                            <div className="px-2 mx-auto">
                                <img
                                    width={256}
                                    height={256}
                                    className="img-fluid"
                                    src={`${process.env.PUBLIC_URL}/images/${selectedEvent.poster}`}
                                    alt={selectedEvent.name}
                                />
                            </div>
                            <div className="ticket d-flex flex-fill px-2">
                                <Media.Body className="d-flex flex-column justify-content-around">
                                    <div className="border p-2">
                                        <h5 className="heading-border">{selectedEvent.name}</h5>
                                        <p className="d-flex mt-4"><i className="material-icons pr-3">{"event"}</i><span>{`${selectedEvent.date}, ${selectedEvent.time}`}</span></p>
                                        <p className="d-flex"><i className="material-icons pr-3">{"place"}</i><span>{selectedEvent.location}</span></p>
                                        <p className="d-flex">
                                            <img
                                                width={16}
                                                height={24}
                                                className="ml-1 mr-3"
                                                src={process.env.PUBLIC_URL + '/images/rupee-icon.svg'}
                                                alt="cost"
                                            />
                                            <span className="entry-cost">{selectedEvent.entryCost}</span>
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
                                                x {selectedEvent.entryCost}
                                            </Col>
                                            <Col md="auto" className="px-1">
                                                Total : Rs {parseInt(selectedEvent.entryCost) * state.count}
                                            </Col>
                                        </div>
                                        <Row className="justify-content-center mt-4 pb-2 row">
                                            <Button variant="secondary" href={selectedEvent.link}>Book now</Button>
                                        </Row>
                                    </div>
                                </Media.Body>
                            </div>
                        </Row>
                    </Media>
                    <Jumbotron className="mx-auto p-3 mt-4 mb-0 event-details">
                        <h5 className="heading-border">Details</h5>
                        <p>
                            {/* {selectedEvent.description.map((para) => {
                                return <p>{para}</p>
                            })} */}
                            <p>
                                Yours truly theatre is happy to announce the next Basic Acting and Theatre workshop. This workshop is designed to help participants overcome stage fright, inhibitions, push physical, mental and creative boundaries. It is an attempt to discover self and understand working in teams, leader and follower techniques. The workshop is a process of letting participants have ‘fun with art’ through experiential learning and non-judgmental environment.
                            </p>
                            <p>
                                This workshop process helps participant to:
                            </p>
                            <ul>
                                <li>Fun-based activities</li>
                                <li>Breaking habitual-bound thinking</li>
                                <li>Understanding the language of expressions</li>
                                <li>Working with rhythms and patterns</li>
                                <li>Exploring transformations</li>
                                <li>Understanding and exploring improvisations and characterizations</li>
                                <li>Exploring theatre-based presentation</li>
                            </ul>
                        </p>
                    </Jumbotron>
                </Container>
            </Container>
            }
        </>
    )
}