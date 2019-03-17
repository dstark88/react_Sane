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
            <h1>If you are injured or need immediate assitance dial 9-1-1.</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Call;