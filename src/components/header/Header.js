import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/image/soprano_logo.PNG";
import "../../assets/css/header.css";
//compont
import Navbar from "../navbar/Navbar"

class Header extends Component {
  render() {
    return (
        <header className="app-header">
          <Container>
            <Row>
              <Col sm={6}>
                <img src={logo} className="app-logo" alt="logo" />
              </Col>
              <Col sm={6}>
                <Navbar />
              </Col>
            </Row>
          </Container>
        </header>
    );
  }
}

export default Header;
