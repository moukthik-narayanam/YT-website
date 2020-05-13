import React, { useState, useEffect } from 'react';
import { Container, Media, Accordion, Card, Row, Col, Button } from 'react-bootstrap';
import './YTMembers.css';

export default function YTMembers() {
    const [membersList, setMembersList] = useState([]);
    const [openId, setOpenId] = useState("0");
    const [showMoreId, setShowMoreId] = useState("");

    useEffect(() => {
        fetch("/members")
            .then(res => res.json())
            .then(data => { setMembersList(data); });
    }, []);

    function handleSelect(clickedId) {
        setOpenId(prevOpenId => {
            const newOpenId = prevOpenId === clickedId ? '' : clickedId;
            return newOpenId;
        })
    };
    
    useEffect(() => {
        setShowMoreId("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openId])
    
    function handleShowMore(e) {
        setShowMoreId(e.currentTarget.id);
    }

    function handleShowLess() {
        setShowMoreId("");
    }

    return (
        <Container className="py-4 px-1 mt-2">
            <Accordion defaultActiveKey="0" onSelect={handleSelect} className="accordion-container">
                {membersList.map((group, index) => {
                    const icon = openId === `${index}` ? 'remove' : 'add';
                    const titleClass = openId === `${index}` ? 'text-danger' : '';
                    return <Card key={group.groupTitle}>
                        <Accordion.Toggle as={Card.Header} eventKey={`${index}`} >
                            <Row className="justify-content-between">
                                <div className={`group-titles ${titleClass} pl-3`}>{group.groupTitle}</div>
                                <i className="material-icons pr-3">{icon}</i>
                            </Row>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={`${index}`}>
                            <>
                                {group.members.map((member, memberIndex) => {
                                    return <Media key={member.name + memberIndex} className="p-4">
                                        <Row>
                                            <Col md={"auto"} className="mt-1">
                                                <img
                                                    width={256}
                                                    height={256}
                                                    className="mr-3"
                                                    src={`${process.env.PUBLIC_URL}/images/${member.img}`}
                                                    alt={member.name}
                                                />
                                            </Col>
                                            <Col className="mt-1">
                                                <Media.Body>
                                                    <h4>{member.name}</h4>
                                                    <p className="text-secondary"><i>{member.title}</i></p>
                                                    <p>{member.description}</p>
                                                    {showMoreId !== `${memberIndex}` && <Button onClick={handleShowMore} id={`${memberIndex}`} variant="link" className="p-0 text-secondary">Show more</Button>}
                                                    {showMoreId === `${memberIndex}` &&
                                                        <>
                                                            <p>{member.extendedDescription}</p>
                                                            <Button onClick={handleShowLess} variant="link" className="p-0 text-secondary">Show less</Button>
                                                        </>
                                                    }
                                                </Media.Body>
                                            </Col>
                                        </Row>
                                    </Media>
                                })
                                }
                            </>
                        </Accordion.Collapse>
                    </Card>
                })
                }
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={`${membersList.length + 1}`} >
                        <Row className="justify-content-between">
                            <div className={`group-titles ${openId === `${membersList.length + 1}` ? 'text-danger' : ''} px-3`}>External Faculties</div>
                            <div>
                                <i className="material-icons px-3">{openId === `${membersList.length + 1}` ? 'remove' : 'add'}</i>
                            </div>
                        </Row>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey={`${membersList.length + 1}`}>
                        <Container className="p-4">
                            <p>Learning at Yours Truly Theatre never stops. Every actor needs constant updation of skills, we at Yours Truly invite renowned personalities to conduct workshops on various skill sets and theatre formats on a need basis. These workshops are exclusively for Yours Truly Members only. Workshops range from 1 to 2-days. These workshops typically may not culminate in a performance as they are completely exploratory in nature.</p>
                            <p>Some of the workshops are meant to make an actor look deep within, some are meant to create an awareness on other theatre forms and formats.</p>
                            <h6>External Faculties:</h6>
                            <ul>
                                <li>Supriya Aziz, UN</li>
                                <li>Madhu Shukla, NSD</li>
                                <li>Sujay Saple, The Company Theatre</li>
                                <li>Jeff Goodchild, Australia</li>
                                <li>Ross Elliot, Australia</li>
                                <li>Adam Dow, Seattle, USA</li>
                                <li>Veena Basavarajiah, Contemprorary Dance</li>
                                <li>Astrid, Germany</li>
                            </ul>
                        </Container>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container >
    )
}