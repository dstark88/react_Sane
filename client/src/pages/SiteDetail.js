import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SimpleMap from "../components/Map";

class SiteDetails extends Component {
  state = {
    site: {},
    center: {}
  };

  componentDidMount() {
    API.findSite(this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        let siteCenter = {
          lat: res.data.Latitude,
          lng: res.data.Longitude
        }
        this.setState({ site: res.data, center: siteCenter })})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                SANE Site Map
              </h1>
            </Jumbotron>
              <SimpleMap 
                center={this.state.center}
                sites={this.state.site}
              />
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>{this.state.site.Facility}</h1>
            </Jumbotron>
              <h3>
                <center>

                {this.state.site.Address}
                <br></br>
                {this.state.site.City}, {""}
                {this.state.site.State} {""}
                {this.state.site.Zip}
                <br></br>
                in {this.state.site.County} County
                <br></br>
                {this.state.site["Phone 1"]}
                <br></br>
                <br></br>
                <div>
                    <a href={"" + this.state.site.Address} target="blank">
                      <h3>
                        Get Directions
                      </h3>
                    </a>
                </div>
                <div>
                    <a href={"" + this.state.site["Web Address"]} target="blank">
                        <h3>
                        Web Site:
                        <br></br>
                        {this.state.site["Web Address"]}
                        </h3>
                    </a>
                </div>
                  Additional Information:
                  <br></br>
                  {this.state.site["Additional Information"]}
                  </center>
              </h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <button>
            <Link to="/sites">← Back to Locations</Link>
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SiteDetails;
