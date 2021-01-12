import React from "react";
import { Carousel } from "react-responsive-carousel";
import { IMG } from "../../constants/carousel";

import '../../assets/css/carousel.css'

export default () => (
  <Carousel autoPlay>
    {IMG.map((ele) => (
      <div>
        <img alt="" src={ele} className='c-image' />
      </div>
    ))}
  </Carousel>
);
