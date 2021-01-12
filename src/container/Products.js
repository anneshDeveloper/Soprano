import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Products extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={12}>
              <h1 className="unused-container">Products</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;
