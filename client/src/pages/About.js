import React from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

function About() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>This is our about page</h1>
          </Jumbotron>
        </Col>
      </Row>
      <section id="about" class="about-section text center">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <p id="mainInfo"> We're a group of women learning to code through University of Denver's Women's Full Stack Coding Bootcamp. We're passionate about learning, coding, and advocating. </p>
              <p id="mainInfo">Jamie needs to add links and things here.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}

export default About;