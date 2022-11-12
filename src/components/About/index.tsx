import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from './SliderComponent';

const About: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        <SliderComponent />
        <SliderComponent />
        <SliderComponent />
      </Slider>
    </>
  );
};

export default About;
