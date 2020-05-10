import React from 'react';
import { Container } from 'react-bootstrap';
import './YTDetails.css';

export default function YTDetails() {
    return (
        <Container fluid className="p-5 yt-details-container">
            <p className="details-opening-line">Started in the year 2003 Yours Truly Theatre is celebrating 15 years of no stop theatre.</p>
            <p>It has evolved a unique theatre language and is at the forefront of movement of Interactive & Improvizational theatre in India, the group was started with a vision to use the power of applied improvizational theatre for change and exploring theatre that is spontaneous, intutive & beyond script.</p>
            <p>With over 500 plus interactive theatre performances, having trained more than 2000 newcomers in basic theatre training leading to a strogn team of around 100 members , 9 Advisory Board members and 7 international mentors, Yours Truly is reaching out to a diverse audiences and venues.</p>
            <p>We perform more than 50 show in a year on an average and reach out to more than 10,000 audiences beyond the boundaries of age, financial and social status.</p>
            <p>Our experiments in theatre have received overwhelming responses from theatre lovers and critics alike. This Journey has been possible because of our team who have been as passionate as we are.</p>
            <p>Yours Truly Theatre is a registered (Government of Karnataka) as Non profit Organisation</p>
            <h6 className="text-secondary mt-5">Our Mantra:</h6>
            Creativity is part of our DNA and is a true mirror of our work.
        </Container>
    )
}