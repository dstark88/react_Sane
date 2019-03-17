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
      <div class="container">
        <div class="row">
          <div class="col l8 s12">
            <p id="mainInfo">RAINN/National Sexual Assault Telephone Hotline:</p>
            <p id="mainInfo">800-656-4673</p>
          </div>
          <div class="col l2 s12">
            <p id="mainInfo">In Metro Denver: The Blue Bench:</p>
            <p id="mainInfo">303-322-7273</p>
          </div>
          <div class="col l2 s12">
            <p id="mainInfo">Colorado Coalition Against Sexual Assault:</p>
            <p id="mainInfo">303-839-9999</p>
          </div>
        </div>
      </div>
    </Container>


  );
}

export default SaneP;