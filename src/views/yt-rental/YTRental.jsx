import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Nav } from 'react-bootstrap';
import SlotBooking from '../../components/slot-booking/SlotBooking';
import CustomerDetailsInputForm from '../../components/customer-details-input-form/CustomerDetailsInputForm';
import Payment from '../../components/payment/Payment';
import './YTRental.css';

export default function YTRental() {
    const [isDetailsTabEnabled, setIsDetailsTabEnabled] = useState(true);
    const [isPaymentTabEnabled, setIsPaymentTabEnabled] = useState(true);

    const [isDetailsTabCompleted, setIsDetailsTabCompleted] = useState(false);
    const [isPaymentTabCompleted, setIsPaymentTabCompleted] = useState(false);
    const [isSlotBookingTabCompleted, setIsSlotBookingTabCompleted] = useState(false);

    const [activeTab, setActiveTab] = useState("bookSlot")

    function handleSlotsBookingTab() {
        setIsDetailsTabEnabled(true);
        setIsSlotBookingTabCompleted(true);
        setActiveTab("cutomerDetails");
    }

    function handleDetailsTab() {
        setIsPaymentTabEnabled(true);
        setIsDetailsTabCompleted(true);
        setActiveTab("payment");
    }

    return (
        <Container fluid className="p-4 page-container " >
            <Tab.Container id="yt-rental-tabs-container" defaultActiveKey="bookSlot" activeKey={activeTab}>
                <Nav variant="tabs" className="justify-content-center border-info" onSelect={setActiveTab}>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="bookSlot" className="rental-tab-links">
                            <span className={`p-2 book-slot-text ${activeTab === "bookSlot" ? "active" : ""} ${isSlotBookingTabCompleted ? "done" : ""}`}>
                                Book Your Slot
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="cutomerDetails" disabled={isDetailsTabEnabled}>
                            <span className={`p-2 cutomer-details ${activeTab === "cutomerDetails" ? "active" : ""} ${isDetailsTabCompleted ? "done" : ""}`}>
                                Your Details
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="payment" disabled={isPaymentTabEnabled}>
                            <span className={`p-2 payment ${activeTab === "payment" ? "active" : ""} ${isPaymentTabCompleted ? "done" : ""}`}>
                                Payment
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className="yt-rental-tabe-content-container">
                    <Row className="mt-4 justify-content-center ">

                        <Tab.Pane eventKey="bookSlot" >
                            <SlotBooking onProceed={handleSlotsBookingTab} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="cutomerDetails" >
                            <CustomerDetailsInputForm onProceed={handleDetailsTab} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="payment"  >
                            <Payment />
                        </Tab.Pane>

                    </Row>
                </Tab.Content>
            </Tab.Container>
        </Container >
    )
}