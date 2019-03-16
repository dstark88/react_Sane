import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SiteDetails extends Component {
  state = {
    site: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.findSite(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({ site: res.data })})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.site.City} by {this.state.site.Facility} {this.state.site.County}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Details</h1>
              <p>
                {this.state.site["Additional Information"]}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/sites">← Back to Locations</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SiteDetails;