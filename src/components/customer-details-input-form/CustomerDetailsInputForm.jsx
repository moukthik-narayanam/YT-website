import React, { useState, useContext } from 'react';
import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import './CustomerDetailsInputForm.css';
import { AppContext } from '../../App';

const defaultInput = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: ""
}

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const MOBILE_REGEX = /^([0]{0,1}|[+91]{3}|[91]{2})?[0-9]{10}$/;

export default function CustomerDetailsInputForm(props) {
    const [customerDetails, setCustomerDetails] = useState(defaultInput);
    const appContext = useContext(AppContext);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setCustomerDetails({ ...customerDetails, [key]: value });
    }

    function handleProceed() {
        const isValid = customerDetails.firstName && EMAIL_REGEX.test(customerDetails.email) && MOBILE_REGEX.test(customerDetails.mobile);
        appContext.setToast({ message: "Please fill the required fields correctly", open: !isValid, class: "text-danger" });
        if (isValid) {
            props.onProceed(customerDetails);
        }
    }

    return (
        <Container fluid className="p-4">
            <div className=" d-flex flex-wrap justify-content-center">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label className="required">First Name</Form.Label>
                            <Form.Control value={customerDetails.firstName} onChange={handleChange} id="firstName" type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={customerDetails.lastName} onChange={handleChange} id="lastName" type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group >
                        <Form.Label className="required">Email</Form.Label>
                        <Form.Control value={customerDetails.email} onChange={handleChange} id="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="required">Mobile No</Form.Label>
                        <Form.Control value={customerDetails.mobile} onChange={handleChange} id="mobile" type="text" placeholder="Enter mobile no" />
                    </Form.Group>


                </Form>
            </div>
            <Row className="m-2 justify-content-end">
                <Button variant="dark" onClick={handleProceed}>
                    {`Confirm & Proceed`}
                </Button>
            </Row>
        </Container>
    )
}; 
