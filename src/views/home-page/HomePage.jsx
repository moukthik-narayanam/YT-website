import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./HomePage.css";
import UpcomingEvents from "../../components/upcoming-events/UpcomingEvents";
import { Jumbotron } from "react-bootstrap";

export default function HomePage() {
    return (
        <>
            <Carousel />
            <div className="animated-border-quote">
                <blockquote>
                    <p>The theater is so endlessely fascinating because it's so accidental. It's so much like life</p>
                    <cite>Aurther Miller</cite>
                </blockquote>
            </div>
            <Jumbotron fluid className="px-5">
                <h1 className="text-center">Yours Truly Theater</h1>
                <br /><h6>Presents</h6>
                <br/>A whole new theatre experience where you as an audience will not just be a mere spectator but will be participating along with us with themes ranging from social issues to those of national importance.
                <br />
                <br />Our productions are high on Entertainment, Asthetics, and Artistic quotient.
                <br />
                <br />Working towards experimental pieces which are groundbreaking in their originality and styles, not only gives us a high during performance but also during creation.
                <br />
                <br />We believe in taking theatre to the people, right from the auditoriums to offices to campuses to apartment terraces to resorts to old age homes to hospices with an aim to reach out to not only the common man but also to people who don't have opportunity to watch plays.
            </Jumbotron>
            <UpcomingEvents />
            
        </>
    )
}

