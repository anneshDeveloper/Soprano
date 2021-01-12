import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DemoCard from "../../demoCard/DemoCard";
//constant
import { CARD_DATA } from "../../../constants/demoCard";
//css
import "../../../assets/css/card-carousel.css";

class Demos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      },
    };
  }

  render() {
    return (
      <div className="card-carousel-section">
        <Row>
          <Col sm={12}>
            <h3 className="demo-header">Explore our demos</h3>
            <p className="demo-para">
              Explore our landing Page demos on different kind of topics. More
              Demos are coming soon.
            </p>
          </Col>
        </Row>
        <Carousel
          swipeable={true}
          responsive={this.state.responsive}
          ssr={true}
          itemClass="carousel-item-padding-40-px"
        >
          {CARD_DATA.map((ele) => (
            <DemoCard image={ele.image} name={ele.imageName} />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Demos;
