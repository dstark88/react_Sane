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
            <h1>This is our SANE P page for ppl under 18</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default SaneP;