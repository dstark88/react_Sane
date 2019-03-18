import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
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
            <Jumbotron>
              <h1>
                SANE Site Map
              </h1>
            </Jumbotron>
              <SingleSiteMap 
                center={this.state.center}
                sites={this.state.site}
              />
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>{this.state.site.facility}</h1>
            </Jumbotron>
              <h3>
                <center>

                {this.state.site.address}
                <br></br>
                {this.state.site.city}, {""}
                {this.state.site.state} {""}
                {this.state.site.zip}
                <br></br>
                in {this.state.site.county} county
                <br></br>
                {this.state.site.phone_1}
                <br></br>
                <br></br>
                <div>
                    <a href={"https://www.google.com/maps/dir/?api=1&destination=" + this.state.site.latitude + "," + this.state.site.longitude} target="blank">
                      <h3>
                        Get Directions
                      </h3>
                    </a>
                </div>
                <div>
                    <a href={"" + this.state.site.web_address} target="blank">
                        <h3>
                        Web Site:
                        <br></br>
                        {this.state.site.web_address}
                        </h3>
                    </a>
                </div>
                  Additional Information:
                  <br></br>
                  {this.state.site.additional_info}
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
