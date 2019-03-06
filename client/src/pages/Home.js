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
            <h1>This is our home page</h1>
            <button><Link className="nav-link" to="/Wiz">SANE Locator</Link></button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;