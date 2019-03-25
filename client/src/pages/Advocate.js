import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function SaneP() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <center>
            <h1>Local Advocates</h1>
            <p id="mainInfo">
              A trained sexual assault advocate can help with navigating options and planning next steps. They can also help walk someone through the process of reporting, accompany them to the hospital, find a counselor, and more. Many organizations have 24/7 hotlines available as a resource.
            </p>
          </center>
        </Col>
      </Row>
      <Row>
        {/* <Col size="md-1"></Col> */}
        <Col size="md-4">
          <div className="story">
            <p><a id="mainInfo" href="https://www.rainn.org/" target="blank">RAINN/National Sexual Assault Telephone Hotline:</a></p>
            <a id="mainInfo" href="tel: 800-656-4673">800-656-4673(HOPE)</a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="story">
            <p><a id="mainInfo" href="https://thebluebench.org/" target="blank">In Metro Denver: The Blue Bench:</a></p>
            <a id="mainInfo" href="tel: 303-322-7273">303-322-7273</a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="story">
            <p><a href="http://www.ccasa.org/" target="blank" id="mainInfo">Colorado Coalition Against Sexual Assault:</a></p>
            <a id="mainInfo" href="tel: 303-839-9999">303-839-9999</a>
          </div>
        </Col>
        {/* <Col size="md-1"></Col> */}
      </Row>
      <Row>
        <Col size="md-2"></Col>
        <Col size="md-4">
          <div className="story">
            <p><a id="mainInfo" href="https://www.ucasa.org" target="blank">Utah Coalition Against Sexual Assault</a></p>
            <a id="mainInfo" href="tel: 1-888-421-1100">1-888-421-1100</a>
          </div>
        </Col>
        <Col size="md-4">
          <div className="story">
            <p><a id="mainInfo" href="http://www.rapecrisiscnm.org/" target="blank">Rape Crisis Center of Central New Mexico</a></p>
            <a id="mainInfo" href="tel:505-266-7711">505-266-7711</a>
          </div>
        </Col>
        <Col size="md-2"></Col>
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

export default SaneP;