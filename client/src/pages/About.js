import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

function About() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <center>
                        <h1 id="mainHeader">About Project SANE</h1>
                    </center>
                </Col>
            </Row>
            <Row>
                {/* <Col size="md-1"></Col> */}
                <Col size="md-9">
                    <p id="mainInfo" className="story">
                        Project S.A.N.E. is a tool designed for locating sexual assault nurse examiners (SANE) throughout the Rocky Mountain Region.
                        The lack of education and awareness about SANE nurses drove the design for both this and Project 2. Project 2, CO SANE, focused heavily on providers and gathering and maintaining their information. Project 3, Project S.A.N.E., focuses on resources and support for individuals.
                    <br></br>
                        <br></br>
                        There have been no improvements in the information available regarding what a SANE does, or how to find one, since our last project.
                        <br></br>
                        <br></br>
                        Our goal remains much the same as it has always been: drive awareness about SANEs, and provide people with an easy way to access SANE care in times of need.
                        <br></br>
                        <br></br>
                        We are a team of graduates from the University of Denver's Women's
                        Full Stack Web Development Bootcamp. We are passionate about coding and advocating. Our goal
                        with this project is to improve our development skills while providing a platform for important
                        information and tools for sexual assault victims and advocates.
                    </p>
                </Col>
                <Col size="md-3">
                    <Row>
                        <Col size="md-12">
                            <div className="story">
                                <h3><strong>View Our Portfolios:</strong></h3>
                                <br></br>
                                <a href="https://dstark88.github.io/portfolio/" target="blank"><h4>Denise Stark</h4></a>
                                <a href="https://tinali91.github.io/updatedPortfolio/" target="blank"><h4>Tina Li</h4></a>
                                <a href="https://brookj1.github.io/jbrooksportfolio/" target="blank"><h4>Jamie Brooks</h4></a>
                                {/* <a href="https://gingerkrc.github.io/updated-portfolio/" target="blank"><h4>Ginger Conly</h4></a> */}
                            </div>
                        </Col>
                        <Col size="md-12">
                            <div className="story">
                                <h3><strong>Connect on LinkedIn:</strong></h3>
                                <br></br>
                                <a href="https://www.linkedin.com/in/denise-stark-a9387516a/" target="blank"><h4>Denise Stark</h4></a>
                                <a href="https://www.linkedin.com/in/tinacli/" target="blank"><h4>Tina Li</h4></a>
                                <a href="https://www.linkedin.com/in/jamie-brooks-00172321/" target="blank"><h4>Jamie Brooks</h4></a>
                                {/* <a href="https://www.linkedin.com/in/ginger-conly/" target="blank"><h4>Ginger Conly</h4></a> */}
                            </div>
                        </Col>
                    </Row>
                </Col>
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

export default About;
