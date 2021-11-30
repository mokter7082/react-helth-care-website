import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="container">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo.proteusthemes.com/medicpress/wp-content/uploads/sites/48/2017/02/slider4-480x170.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo.proteusthemes.com/medicpress/wp-content/uploads/sites/48/2017/02/slider1-480x170.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo.proteusthemes.com/medicpress/wp-content/uploads/sites/48/2017/02/slider5-480x170.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
