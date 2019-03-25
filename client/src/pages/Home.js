import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <center>
            <h1 id="mainHeader">Project S.A.N.E.</h1>
            <p id="mainInfo">Search for a Sexual Assault Nurse Examiner (S.A.N.E.) in the Rocky Mountain Region.</p>
            <button><Link className="nav-link" to="/Wiz">SANE Locator</Link></button>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;