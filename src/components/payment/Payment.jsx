import React, { useMemo } from 'react';
import { Button, Container } from 'react-bootstrap';

function formatDate(date) {
    const dtf = { day: '2-digit', month: 'short', year: 'numeric' };
    return Intl.DateTimeFormat('en-US', dtf).format(date);
}

export default function Payment(props) {
    const slots = props.slotDetails.time && props.slotDetails.time;
    const slotsArray = useMemo(() => {
        if (!slots) return []
        const temp = []
        slots.forEach((slot) => { temp.push(slot) });
        return temp;
    }, [slots]);


    return (
        <Container fluid className="p-4">
            <div className="rental-booking-details col-md-4 d-flex flex-column mx-auto">
                <h3 className="heading-border p-2">Booking details</h3>
                <div className="p-2 m-2">
                    <p>Booking for : {`${props.customerDetails.firstName} ${props.customerDetails.lastName}`}</p>
                    <p>Email: {props.customerDetails.email}</p>
                    <p>Mobile: {props.customerDetails.mobile}</p>
                    <p><span>Date : {formatDate(props.slotDetails.date)}</span></p>
                    <p><span>Time : {slotsArray.map((slot) => slot.timeRange)}</span></p>
                </div>
                <Button variant="dark">{'Confirm & Book'}</Button>
            </div>
        </Container>
    )
};
