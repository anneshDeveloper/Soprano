import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../../button/Button";
//constant
import { BUTTON } from "../../../constants/button";
//css
import "../../../assets/css/workspaces.css";

class Workspaces extends Component {
  render() {
    return (
      <div className="workspaces-section">
        <Container>
          <Row>
            <Col sm={12}>
              <h3 className="ws-header">
                Essential Mobile App Landing for Workspaces
              </h3>
              <p className="ws-para">
                A mobile app landing page is important and essential for right
                amount of information<span className='line-break'>about your product. Start increasing your
                user base upon the launch of your product</span> 
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className="ws-button-section">
              <Button
                font={"font-white"}
                bg={"primary"}
                text={BUTTON.EXPLORE_DEMOS}
                icon={true}
                iconName={'fa fa-arrow-right'}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Workspaces;
