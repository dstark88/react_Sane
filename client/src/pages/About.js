import React from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function About() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>About Project SANE</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            <Col size="md-1"></Col>
            <Col size="md-5">
                <h3>
                We are a team of graduates from the University of Denver's Women's
                Full Stack Web Development Bootcamp. We are passionate about coding and advocating. Our goal
                with this project is to improve our development skills while providing a platform for important
                information and tools for sexual assault victims and advocates. 
                </h3>
            </Col>
            <Col size="md-3">
                <h4><strong>View Our Portfolios:</strong></h4>
                  <a href="https://dstark88.github.io/portfolio/" target="blank"><h4>Denise Stark</h4></a>
                  <a href="https://tinali91.github.io/portfolio/" target="blank"><h4>Tina Li</h4></a>
                  <a href="https://brookj1.github.io/jbrooksportfolio/" target="blank"><h4>Jamie Brooks</h4></a>
                  <a href="https://gingerkrc.github.io/updated-portfolio/" target="blank"><h4>Ginger Conly</h4></a>
            </Col>
            <Col size="md-3">
                <h4><strong>Connect on LinkedIn:</strong></h4>
                  <a href="https://www.linkedin.com/in/denise-stark-a9387516a/" target="blank"><h4>Denise Stark</h4></a>
                  <a href="https://www.linkedin.com/in/tinacli/" target="blank"><h4>Tina Li</h4></a>
                  <a href="https://www.linkedin.com/in/jamie-brooks-00172321/" target="blank"><h4>Jamie Brooks</h4></a>
                  <a href="https://www.linkedin.com/in/ginger-conly/" target="blank"><h4>Ginger Conly</h4></a>
            </Col>
        </Row>
      </Container>
    );
  }
  
  export default About;

//                 <li><a id="mainText" href="https://www.linkedin.com/in/jamie-brooks-00172321/">Jamie Brooks</a></li>
//                 <li><a id="mainText" href="https://www.linkedin.com/in/ginger-conly/">Ginger Conly</a></li>
//                 <li><a id="mainText" href="https://www.linkedin.com/in/tinacli/">Tina Li</a></li>
//                 <li><a id="mainText" href="https://www.linkedin.com/in/denise-stark-a9387516a/">Denise Stark</a></li>