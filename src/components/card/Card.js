import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import avatar1 from "../../assets/image/avatar1.jpg";
//css
import "../../assets/css/card.css";

class Card extends Component {
  render() {
    return (
      <div className="app-card">
        <Row>
          <Col sm={4}>
            <img src={avatar1} className="avater" alt="avter" />
          </Col>
          <Col sm={8} className="client-name-holder">
            <h2 className="client-name">Allen Jones</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <p className="client-details">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
              tempor incididunt labore dolore features that Lorem ipsum dolor
              sit amet consectetur.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Card;
