import React from "react";
import MenuBar from "../components/menu-bar/MenuBar";
import Carousel from "../components/carousel/Carousel";
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
            <MenuBar />
            <Carousel />
            <div class="animated-border-quote">
                <blockquote>
                    <p>The theater is so endlessely fascinating because it's so accidental. It's so much like life</p>
                    <cite>Aurther Miller</cite>
                </blockquote>
            </div>
        </>
    )
}

