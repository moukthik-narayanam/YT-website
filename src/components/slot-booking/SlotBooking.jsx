import React, { useState, useEffect } from 'react';
import { Container, InputGroup, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './SlotBooking.css';

const emptyArray = new Array(12).fill(true);

const startTime = new Date("May 13, 2020 09:00:00")

function formatTime(date) {
  const dtf = { hour: 'numeric', minute: 'numeric', hour12: true };
  return Intl.DateTimeFormat('en-US', dtf).format(date);
}

const createTimeSlotsPerDayArray = emptyArray.map((i, index) => {
  return {
    id: `slot${index}`,
    timeRange: `${formatTime(new Date(startTime.setHours(startTime.getHours())))} - ${formatTime(new Date(startTime.setHours(startTime.getHours() + 1)))}`
  }
});

const timeSlotsPerDayMap = new Map(createTimeSlotsPerDayArray.map((it) => [it.id, it]));

export default function SlotBooking(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState(new Map());
  const minDate = new Date();

  // useEffect(() => {
  // }, [selectedDate]);

  function onChange(e) {
    const changedId = e.target.id;
    const isChecked = e.target.checked;
    const updatedSlots = new Map(selectedSlots);
    if (isChecked) {
      updatedSlots.set(changedId, timeSlotsPerDayMap.get(changedId));
    } else {
      updatedSlots.delete(changedId);
    }
    setSelectedSlots(updatedSlots)
  };

  function handleProceed() {
    props.onProceed();
  }

  return (
    <Container fluid className="p-4">
      <div className=" d-flex flex-wrap justify-content-center">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          minDate={minDate}
        />
      </div>
      <Row className="mt-4 justify-content-center">
        {createTimeSlotsPerDayArray.map((slot) => {
          return <Col key={slot.id} lg="4" md="6" className="m-2">
            <InputGroup bsPrefix="time-slots" className="d-flex">
              <InputGroup.Prepend>
                <InputGroup.Checkbox onChange={onChange} value={selectedSlots.get(slot.id)} id={slot.id} aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
              <div className="time-range px-3 py-1">{slot.timeRange}</div>
            </InputGroup>
          </Col>
        })}
      </Row>
      <Row className="m-2 justify-content-end">
        <Button variant="dark" onClick={handleProceed}>{`Confirm & proceed`}</Button>
      </Row>
    </Container>
  )
};