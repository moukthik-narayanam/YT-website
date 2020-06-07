import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Nav } from 'react-bootstrap';
import SlotBooking from '../../components/slot-booking/SlotBooking';
import CustomerDetailsInputForm from '../../components/customer-details-input-form/CustomerDetailsInputForm';
import Payment from '../../components/payment/Payment';
import './YTRental.css';

export default function YTRental() {
    const [isDetailsTabEnabled, setIsDetailsTabEnabled] = useState(false);
    const [isPaymentTabEnabled, setIsPaymentTabEnabled] = useState(false);

    const [isSlotBookingTabCompleted, setIsSlotBookingTabCompleted] = useState(false);
    const [isDetailsTabCompleted, setIsDetailsTabCompleted] = useState(false);
    const [isPaymentTabCompleted, setIsPaymentTabCompleted] = useState(false);

    const [slotDetails, setSlotDetails] = useState({});
    const [customerDetails, setCustomerDetails] = useState({});

    const [activeTab, setActiveTab] = useState("bookSlot");

    function handleTabNaviGation(tabId) {
        setActiveTab(tabId);
    }

    function handleSlotsBookingTab(slotDetails) {
        setIsDetailsTabEnabled(true);
        setIsSlotBookingTabCompleted(true);
        setActiveTab("cutomerDetails");
        setSlotDetails(slotDetails);
    }

    function handleDetailsTab(customerDetails) {
        setIsPaymentTabEnabled(true);
        setIsDetailsTabCompleted(true);
        setActiveTab("payment");
        setCustomerDetails(customerDetails);
    }

    return (
        <Container fluid className="p-4 page-container " >
            <Tab.Container id="yt-rental-tabs-container" defaultActiveKey="bookSlot" activeKey={activeTab}>
                <Nav variant="tabs" className="justify-content-center border-info" onSelect={handleTabNaviGation}>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="bookSlot" className="rental-tab-links">
                            <span className={`p-2 book-slot-text ${activeTab === "bookSlot" ? "active" : ""} ${isSlotBookingTabCompleted ? "done" : ""}`}>
                                Book Your Slot
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="cutomerDetails" disabled={!isDetailsTabEnabled} className="rental-tab-links">
                            <span className={`p-2 cutomer-details ${activeTab === "cutomerDetails" ? "active" : ""} ${isDetailsTabCompleted ? "done" : ""}`}>
                                Your Details
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="col-md-4 text-center">
                        <Nav.Link eventKey="payment" disabled={!isPaymentTabEnabled} className="rental-tab-links">
                            <span className={`p-2 payment ${activeTab === "payment" ? "active" : ""} ${isPaymentTabCompleted ? "done" : ""}`}>
                                Payment
                            </span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Row className="mt-4 justify-content-center ">
                    <Tab.Content className="yt-rental-tabe-content-container w-100">
                        <Tab.Pane eventKey="bookSlot" >
                            <SlotBooking onProceed={handleSlotsBookingTab} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="cutomerDetails">
                            <CustomerDetailsInputForm onProceed={handleDetailsTab} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="payment">
                            <Payment slotDetails={slotDetails} customerDetails={customerDetails} />
                        </Tab.Pane>
                    </Tab.Content>
                </Row>
            </Tab.Container>
        </Container >
    )
}