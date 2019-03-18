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
            <h1>Advocates</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-3">
          <p id="mainInfo">RAINN/National Sexual Assault Telephone Hotline:</p>
          <p id="mainInfo">800-656-4673</p>
        </Col>
        <Col size="md-3">
          <p id="mainInfo">In Metro Denver: The Blue Bench:</p>
          <p id="mainInfo">303-322-7273</p>
        </Col>
        <Col size="md-3">
          <p id="mainInfo">Colorado Coalition Against Sexual Assault:</p>
          <p id="mainInfo">303-839-9999</p>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </Container>
  );
}

export default SaneP;