import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import SingleSiteMap from "../components/SingleSiteMap";

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
          lat: res.data.latitude,
          lng: res.data.longitude
        }
        console.log(siteCenter)
        this.setState({ site: res.data, center: siteCenter })})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <center>
              <h2>
                SANE Site Map
              </h2>
            </center>
              <SingleSiteMap 
                center={this.state.center}
                sites={this.state.site}
              />
          </Col>
          <Col size="md-6">
            <center>
              <h2>{this.state.site.facility}</h2>
            </center>
            <Row>
              <Col size="md-12">
                <p id="mainInfo" class="siteInfo">
                  {this.state.site.address}, {""}
                  {this.state.site.city}, {""}
                  {this.state.site.state} {""}
                  {this.state.site.zip}
                  
                  <br></br>
                  in {this.state.site.county} county
                  <br></br>
                  Call: <a id="mainInfo" class="siteInfo" href={"tel:" + this.state.site.phone_1}>{this.state.site.phone_1}</a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p id="mainInfo" class="siteInfo">
                  <a href={"https://www.google.com/maps/dir/?api=1&destination=" + this.state.site.latitude + "," + this.state.site.longitude} target="blank">
                    <h3>Get Directions</h3>
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p id="mainInfo" class="siteInfo">
                  <a href={"" + this.state.site.web_address} target="blank">
                    <center>
                    <h3>Web Site:</h3>
                    </center>
                    {this.state.site.web_address}
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <p id="mainInfo" class="siteInfo">
                  <h3>Additional Information:</h3>
                  {this.state.site.additional_info}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <button>
              <Link to="/sites">Back to Locations</Link>
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SiteDetails;
