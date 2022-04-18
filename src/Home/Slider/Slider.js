import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/slider/banner-1.jpg';
import banner2 from '../../images/slider/banner-2.jpg';
import banner3 from '../../images/slider/banner-3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                  className="d-block w-100 h-75"
                src={banner1}
                ></img>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block  w-100 h-75"
                src={banner2}
                ></img>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                
            <img
              className="d-block  w-100 h-75"
                src={banner3}
                ></img>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;