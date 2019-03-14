import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function SaneP() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>This is our page for an advocate listing</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default SaneP;