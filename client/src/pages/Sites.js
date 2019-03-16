import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import SimpleMap from "../components/Map";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import '../components/Footer/footer.css';

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
    },
    sitesList: [],
  };

  componentDidMount() {
    this.loadSites();
    this.getLocation();
    API.getSites()
    .then(res => {
      console.log("load sites data", res);
      this.setState({ sites: res.data, city: "", county: "", facility: "" })
    })
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
    this.setState({ userLocation: { lat: position.coords.latitude, lng: position.coords.longitude } })
    console.log(this.state);
  }

  loadSites = () => {
    API.getSites()
      .then(res => {
        console.log("load sites data", res);
        this.setState({ sitesList: res.data, city: "", county: "", facility: "" })
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
    if (this.state.city || this.state.county || this.state.facility) {
      API.findSites({
        city: this.state.city,
        county: this.state.county,
        facility: this.state.facility,
      })
<<<<<<< HEAD
        .then(res => {
          let newCenter = {
            lat: res.data[0].Latitude,
            lng: res.data[0].Longitude
          }
          this.setState({ sites: res.data, userLocation: newCenter })
        })
=======
        .then(res => this.setState({ sites: res.data, county: "", city: "", facility: ""}))
>>>>>>> b9885b4c5f70218b6541fa67c6d0ee5f0b0907e9
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <center>
              <h1>SANE Locations Nearby</h1>
            </center>
            <SimpleMap
              center={this.state.userLocation}
              lat={this.state.userLocation.lat}
              lng={this.state.userLocation.lng}
              sites={this.state.sites}
            />
            <br>
            </br>
            <center>
              <h1>Search using one of the options below:</h1>
            </center>
            <form>
              <Input
                list="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (Optional)"
              />
              <datalist id="city">
                {this.state.sitesList.map(site => <option key={site._id}>{site.City}</option>)}
              </datalist>
              <Input
                list="county"
                value={this.state.county}
                onChange={this.handleInputChange}
                name="county"
                placeholder="County (Optional)"
              />
              <datalist id="county">
                {this.state.sitesList.map(site => <option key={site._id}>{site.County}</option>)}
              </datalist>
              <Input
                list="facility"
                value={this.state.facility}
                onChange={this.handleInputChange}
                name="facility"
                placeholder="Facility (Optional)"
              />
              <datalist id="facility">
                {this.state.sitesList.map(site => <option key={site._id}>{site.Facility}</option>)}
              </datalist>
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <center>
              <h1>All SANE Locations</h1>
            </center>
            {this.state.sites.length ? (
              <List>
                {this.state.sites.map(site => (
                  <ListItem key={site._id}>
                    <Link to={"/sites/" + site._id}>
                      <span id="siteText">
                        <strong>{site.Facility}</strong> by {site.City} in {site.County} County
                      </span>
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