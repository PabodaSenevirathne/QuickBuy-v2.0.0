import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Carousel.css'; 
import image1 from '../images/c-4.jpg';
import image2 from '../images/c-5.jpg';
import image3 from '../images/c-6.jpg';

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>Our Shop</h3> */}
          <p>Save up to 60% on clearance styles. *Prices as marked.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>NEW SNEAKER ARRIVALS</h3> */}
          <p>Sign Up For Email & Get 50 Points!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Wedding Shoes</h3> */}
          <p>Become a Shoe VIP & get free shipping, 5% back in rewards for every purchase, exclusive offers and more
</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
