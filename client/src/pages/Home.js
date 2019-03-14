import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Project S.A.N.E.</h1>
            <p>vnaiovnaoinva qacenai aoinciuvb o  aoinsdopi a a uibvpiob aio aknvcai aoib iopvb a aob a aosi.</p>
            <button><Link className="nav-link" to="/Wiz">SANE Locator</Link></button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;