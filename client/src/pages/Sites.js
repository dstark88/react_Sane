import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import SimpleMap from "../components/Map";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Sites extends Component {
  state = {
    sites: [],
    country: "",
    state: "",
    county: "",
    city: "",
    facility: "", 
    lat: null,
    lng: null,
    // phone_1,
    web_address: "",
    userLocation: {
      lat: null,
      lng: null,
    }
  };

  componentDidMount() {
    this.loadSites();
    this.getLocation();
    API.getSites()
    .then(res => console.log(res.data, "res.data")
      // this.setState({ sites: res.data })
    )
    .catch(err => console.log(err));
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleUserLocation);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  handleUserLocation = (position) => {
    console.log(position)
    this.setState({ userLocation: {lat: position.coords.latitude, lng: position.coords.longitude} })
    console.log(this.state);
  }

  loadSites = () => {
    API.getSites()
      .then(res => {
        console.log("load sites data", res);
        this.setState({ sites: res.data, city: "", county: "" })
      })
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit hit");
    if (this.state.city || this.state.county) {
      API.findSites({
        city: this.state.city,
        county: this.state.county,
      })
        .then(res => this.setState({ sites: res.data }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            
              <h1>Locations nearby</h1>
            
            <SimpleMap 
              center={this.state.userLocation}
              lat={this.state.userLocation.lat}
              lng={this.state.userLocation.lng}
              sites={this.state.sites}
            />
            <br>
            </br>
            <h1>Search for a site</h1>
            <form>
              <Input
                list= "city"
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (Optional)"
              />
              <datalist id="city">
                {this.state.sites.map(site => <option key={site._id}>{site.City}</option>)}
              </datalist>
              <Input
                value={this.state.county}
                onChange={this.handleInputChange}
                name="county"
                placeholder="County (Optional)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            
              <h1>All SANE Locations</h1>
            
            {this.state.sites.length ? (
              <List>
                {this.state.sites.map(site => (
                  <ListItem key={site._id}>
                    <Link to={"/sites/" + site._id}>
                      <strong id="siteText">
                        {site.Facility} by {site.City} in {site.County} County
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sites;