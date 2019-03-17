import React from "react";

import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function About() {
  return (
    <div class="container">
    <div class="row">
        <div class="col l8 s12">
            <h5 id="mainInfo">Project Bio</h5>
            <p id="mainText">We are a team of students in the University of Denver's Women's
                Full Stack Web Development Bootcamp. We are passionate about coding and advocating. Our goal
                with
                this project is to improve our development skills while providing a platform for important
                information
                and tools for sexual assault victims and advocates. </p>
        </div>
        <div class="col l2 s12">
            <h5 id="mainInfo">View Our Portfolios:</h5>
            <ul>
                <li><a id="mainText" href="https://brookj1.github.io/jbrooksportfolio/">Jamie Brooks</a></li>
                <li><a id="mainText" href="https://gingerkrc.github.io/updated-portfolio/">Ginger Conly</a></li>
                <li><a id="mainText" href="https://tinali91.github.io/portfolio/">Tina Li</a></li>
                <li><a id="mainText" href="https://dstark88.github.io/Portfolio/">Denise Stark</a></li>
            </ul>
        </div>
        <div class="col l2 s12">
            <h5 id="mainInfo">Connect on LinkedIn:</h5>
            <ul>
                <li><a id="mainText" href="https://www.linkedin.com/in/jamie-brooks-00172321/">Jamie Brooks</a></li>
                <li><a id="mainText" href="https://www.linkedin.com/in/ginger-conly/">Ginger Conly</a></li>
                <li><a id="mainText" href="https://www.linkedin.com/in/tinacli/">Tina Li</a></li>
                <li><a id="mainText" href="https://www.linkedin.com/in/denise-stark-a9387516a/">Denise Stark</a></li>
            </ul>
        </div>
    </div>
</div>

  );
}

export default About;

// <Container fluid>
// <Row>
//   <Col size="md-12">
//     <Jumbotron>
//       <h1>This is our about page</h1>
//     </Jumbotron>
//   </Col>
// </Row>
// <section id="about" class="about-section text center">
//   <div class="container">
//     <div class="row">
//       <div class="col-lg-8 mx-auto">
//         <p id="mainInfo"> We're a group of women learning to code through University of Denver's Women's Full Stack Coding Bootcamp. We're passionate about learning, coding, and advocating. </p>
//         <p id="mainInfo">Jamie needs to add links and things here.</p>
//       </div>
//     </div>
//   </div>
// </section>
// </Container>