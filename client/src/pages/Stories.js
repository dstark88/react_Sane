import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Post from "../components/Post";


function Stories() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>This is where people can post stories</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Stories;