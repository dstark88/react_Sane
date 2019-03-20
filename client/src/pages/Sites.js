import React, { Component } from "react";
import MultipleSitesMap from "../components/Map";
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
    phone: "",
    web_address: "",
    userLocation: {
      lat: null,
      lng: null,
    },
    sitesList: [],
    cityList: [],
    countyList: [],
    facilityList: [],
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
        var city= [];
        var county= [];
        var facility= [];
        res.data.filter(function(soloSite) {
          if (!city.includes(soloSite.city)) {
            return city.push(soloSite.city)
          }
        })
        res.data.filter(function(soloSite) {
        if (!county.includes(soloSite.county)) {
          return county.push(soloSite.county)
        }
        })
        res.data.filter(function(soloSite) {
        if (!facility.includes(soloSite.facility)) {
          return facility.push(soloSite.facility)
        }
        })
        this.setState({ sitesList: res.data, cityList: [...city], countyList: [...county], facilityList: [...facility] })
        console.log("state arrays", this.state.city, this.state.county, this.state.facility);
        
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
        .then(res => {
          let newCenter = {
            lat: res.data[0].latitude,
            lng: res.data[0].longitude
          }
          this.setState({ sites: res.data, userLocation: newCenter, county: "", city: "", facility: "" })
        })
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
            <MultipleSitesMap
              center={this.state.userLocation}
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
                {this.state.cityList.map(site => <option key={site}>{site}</option>)}
              </datalist>
              <Input
                list="county"
                value={this.state.county}
                onChange={this.handleInputChange}
                name="county"
                placeholder="County (Optional)"
              />
              <datalist id="county">
                {this.state.countyList.map(site => <option key={site}>{site}</option>)}
              </datalist>
              <Input
                list="facility"
                value={this.state.facility}
                onChange={this.handleInputChange}
                name="facility"
                placeholder="Facility (Optional)"
              />
              <datalist id="facility">
                {this.state.facilityList.map(site => <option key={site}>{site}</option>)}
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
                        <strong>{site.facility}</strong> in {site.city} in {site.county} County
                        <br></br>
                      </span>
                    </Link>
                    <div>
                    <a href={"tel:" + site.phone_1}><span id="siteText">Phone Number: {site.phone_1}</span></a>
                    <br></br>
                    <a href={"" + site.web_address} target="blank">
                      <span id="siteText">
                        Web Site {site.web_address}
                      </span>
                    </a>
                    </div>
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