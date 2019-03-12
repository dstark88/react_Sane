import React from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Call() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>This is our Call 911 when not in a safe place page</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Call;