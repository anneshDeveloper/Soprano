import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import img from "../assets/image/aboutus.jpg";

import "../assets/css/about-us.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              <img src={img} className="about-us-img" />
            </Col>
            <Col sm={6} className="ab-details">
              <div>
                <h3>Soprano AI</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  eiusmod tempor incididunt labore dolore features that Lorem
                  ipsum dolor sit amet consectetur.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
