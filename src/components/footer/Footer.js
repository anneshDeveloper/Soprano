import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//image
import logo from "../../assets/image/soprano_logo.PNG";
//css
import "../../assets/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col sm={4} className='f-logo'>
              <img src={logo} className="app-logo" alt="logo" />
            </Col>
            <Col sm={4} className="social-media">
              <i className="fa fa-twitter"></i>
              <i className="fa fa-facebook-official"></i>
              <i className="fa fa-stack ">
                <i className="fa fa-square fa-stack-1x outline"></i>
                <i className="fa fa-instagram fa-stack-1x fa-inverse main-icon"></i>
              </i>
            </Col>
            <Col sm={4} className="copywrite">
              <p>Copywrite 2020 Soprano.ai</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
