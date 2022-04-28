import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import "../Slider/Slider.css";

import banner1 from '../../../images/slider/banner-1.jpg';
import banner2 from '../../../images/slider/banner-2.jpg';
import banner3 from '../../../images/slider/banner-3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='caption'>
                    <h3>Fashion and outdoor</h3>
                    <p>Stylish and fashionable Premimum quality photography.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='caption'>
                    <h3>Birthday/kids/Party center</h3>
                    <p>Birthday/kids/New Borns Premimum quality photography.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='caption'>
                    <h3>Wedding/Engagement/Holud</h3>
                    <p>
                    Wedding/Engagement/Holud Premimum quality photography.Some capture printed copy handover If you  need.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;