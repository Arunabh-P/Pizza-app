import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../Images/b1.jpg';
import banner2 from '../Images/b2.jpg';
import banner3 from '../Images/b3.jpg';

const Banner = () => {
  return (
    <>
      <Carousel className="mt-2">
        <Carousel.Item interval={1000}>
          <img
            className="d-block rounded-3 w-100"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500} className="rounded">
          <img
            className="d-block rounded-3 w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="rounded">
          <img
            className="d-block rounded-3 w-100"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
