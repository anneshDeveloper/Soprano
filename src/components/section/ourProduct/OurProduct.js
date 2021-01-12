import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "../../card/Card";
import { CLIENT } from "../../../constants/ourProduct";
//css
import "../../../assets/css/our-product.css";

class Button extends Component {
  render() {
    return (
      <div className="op-section">
        <Container>
          <Row>
            <Col sm={12}>
              <h3 className="op-header">What Clients say about our product</h3>
            </Col>
          </Row>
          <Row>
            <div className="op-icon-group">
              {CLIENT.map((ele) => (
                <Col sm={6}>
                  <Card />
                </Col>
              ))}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Button;
