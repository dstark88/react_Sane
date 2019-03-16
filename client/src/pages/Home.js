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
            <h1 id="mainHeader">Project S.A.N.E.</h1>
            <p id="mainInfo">Cat ipsum dolor sit amet, slap kitten brother with paw but run at 3am. Meow loudly just to annoy owners. Eats owners hair then claws head. Bleghbleghvomit my furball really tie the room together prance along on top of the garden fence, annoy the neighbor's dog and make it bark.</p>
            <button><Link className="nav-link" to="/Wiz">SANE Locator</Link></button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;