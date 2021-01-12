import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//component
import Button from "../../button/Button";
//Constant
import { BUTTON } from "../../../constants/button";
//css
import "../../../assets/css/newsletter.css";

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter primary">
        <Container>
          <Row>
            <Col sm={6}>
              <h3 className="newsletter-header">Subscribe our newsletter</h3>
              <p className="newsletter-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit{" "}
                <span>sed eiusmod tempor incididunt labore dolore</span>
              </p>
            </Col>
            <Col sm={6} className="newsletter-email-section">
              <div className="newsletter-email">
                <input
                  className="newsletter-input"
                  placeholder="Email Address"
                />
                <Button
                  font={"font-primary"}
                  bg={"secondary"}
                  text={BUTTON.GET_ACCESS}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Newsletter;
