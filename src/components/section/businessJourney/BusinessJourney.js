import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../../button/Button";
//constant
import { BUTTON } from "../../../constants/button";
import { TEXT } from "../../../constants/businessJourney";
//css
import "../../../assets/css/business-journey.css";

class BusinessJourney extends Component {
  render() {
    return (
      <div className="bj-section">
        <Container>
          <Row>
            <Col sm={12}>
              <h3 className="bj-header">
                Start your business journey with Soprano
              </h3>
              <p className="bj-para">
                Try Shopify for free, and explore all the tools and services you
                need to start, run, and grow your business.
              </p>
            </Col>
          </Row>
          <Row className='small-screen'>
            <div className="bj-icon-group">
              {TEXT.map((ele) => (
                <Col sm={4}>
                  <div className="bj-icon-section">
                    <i className={`fa ${ele.icon} bj-icon`}></i>
                  </div>
                  <div className="bj-icon-group-text">
                    <h6 className="bj-subheader">{ele.header}</h6>
                    <p className="bj-subpara">{ele.para}</p>
                  </div>
                </Col>
              ))}
            </div>
          </Row>
          <Row>
            <Col sm={12} className="bj-button-section">
              <Button
                font={"font-white"}
                bg={"primary"}
                text={BUTTON.START_FREE_TRAIL}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BusinessJourney;
