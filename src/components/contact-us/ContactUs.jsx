import React from 'react';
import { Modal, Container } from 'react-bootstrap';
import './ContactUs.css';
import { useHistory } from 'react-router-dom';

export default function ContactUs() {
    const history = useHistory();
    function handleFormClose() {
        history.push("/home");
    }
    return (
        <>
            <Container fluid className="contact-us-page-container"></Container>
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={handleFormClose}
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Contact us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="contact-us-form-container">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSchu0Wy7daqnIKjXXg0cEuVnD5OcMJ8tL_tYzxO_Y38Ri8pTg/viewform?embedded=true"
                            width="640"
                            height="1240"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="contact us form"
                        >
                            Loading…
                        </iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}