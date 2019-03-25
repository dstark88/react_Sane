import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Call() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <center>
            <h2>If you are injured or need immediate assitance dial 9-1-1</h2>
          </center>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <button>
            <Link to="/">Back to Home</Link>
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Call;