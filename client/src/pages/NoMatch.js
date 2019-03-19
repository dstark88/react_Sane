import React from "react";
import { Col, Row, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <center>
            <h1 id="mainHeader">404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
