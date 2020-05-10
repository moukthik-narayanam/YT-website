import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import { carouselItems } from '../../constants/CarouselItems';
import './Carousel.css';

export default function Carousel() {
    return (
        <BootstrapCarousel>
            {
                carouselItems.map((item) => {
                    return <BootstrapCarousel.Item key={item.id}>
                        <div className="d-block w-100 carousel-image" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/images/${item.imgSrc}`}}></div>
                        <BootstrapCarousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.subTitle}</p>
                        </BootstrapCarousel.Caption>
                    </BootstrapCarousel.Item>
                })
            }
        </BootstrapCarousel>
    )
}