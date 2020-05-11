import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';
import './ContactUs.css';
import { useHistory } from 'react-router-dom';

export default function ContactUs() {
    const [popupWidth, setPopupWidth] = useState(0);
    const history = useHistory();
    function handleFormClose() {
        history.push("/home");
    }

    useEffect(() => {
        function handleResize() {
            const confirmPopoup = document.getElementById("contactUsPopup");
            const width = confirmPopoup ? confirmPopoup.scrollWidth : "0";
            setPopupWidth(width);
        }

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }

    }, []);

    useLayoutEffect(() => {
        const confirmPopoup = document.getElementById("contactUsPopup");
        const width = confirmPopoup ? confirmPopoup.scrollWidth : "0";
        setPopupWidth(width)
    }, [])

    return (
        <>
            <Container fluid className="contact-us-page-container"></Container>
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                onHide={handleFormClose}
                scrollable
                id="contactUsPopup"
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
                            width={popupWidth}
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