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
                <Col size="md-7">
                    <p id="mainInfo">
                        Project S.A.N.E. is a tool designed for locating sexual assault nurse examiners (SANE) throughout the Rocky Mountain Region.
                        The lack of education and awareness about SANE nurses drove the design for both this and Project 2. Project 2, CO SANE, focused heavily on providers and gathering and maintaining their information. Project 3, Project S.A.N.E., focuses on resources and support for individuals.
                    </p>
                    <p id="mainInfo">
                        There have been no improvements in the information available regarding what a SANE does, or how to find one, since our last project.
                    </p>
                    <p id="mainInfo">
                        Our goal remains much the same as it has always been: drive awareness about SANEs, and provide people with an easy way to access SANE care in times of need.
                    </p>
                    <p id="mainInfo">
                        We are a team of graduates from the University of Denver's Women's
                        Full Stack Web Development Bootcamp. We are passionate about coding and advocating. Our goal
                        with this project is to improve our development skills while providing a platform for important
                        information and tools for sexual assault victims and advocates.
                    </p>
                </Col>
                <Col size="md-4">
                    <Row>
                        <Col size="md-12">
                            <h2><strong>View Our Portfolios:</strong></h2>
                            <a href="https://dstark88.github.io/portfolio/" target="blank"><h4>Denise Stark</h4></a>
                            <a href="https://tinali91.github.io/portfolio/" target="blank"><h4>Tina Li</h4></a>
                            <a href="https://brookj1.github.io/jbrooksportfolio/" target="blank"><h4>Jamie Brooks</h4></a>
                            <a href="https://gingerkrc.github.io/updated-portfolio/" target="blank"><h4>Ginger Conly</h4></a>
                        </Col>
                        <Col size="md-12">
                            <br></br>
                            <br></br>
                            <h2><strong>Connect on LinkedIn:</strong></h2>
                            <a href="https://www.linkedin.com/in/denise-stark-a9387516a/" target="blank"><h4>Denise Stark</h4></a>
                            <a href="https://www.linkedin.com/in/tinacli/" target="blank"><h4>Tina Li</h4></a>
                            <a href="https://www.linkedin.com/in/jamie-brooks-00172321/" target="blank"><h4>Jamie Brooks</h4></a>
                            <a href="https://www.linkedin.com/in/ginger-conly/" target="blank"><h4>Ginger Conly</h4></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
