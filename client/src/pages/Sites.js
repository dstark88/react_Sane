import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
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
    city: "",
    facility: "", 
    // latitude,
    // longitude,
    // phone_1,
    web_address: "",
  };

  componentDidMount() {
    this.loadSites();
  }

  loadSites = () => {
    API.getSites()
      .then(res =>
        this.setState({ sites: res.data, city: "", facility: ""
        // , phone_1: "" 
    })
      )
      .catch(err => console.log(err));
  };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.city && this.state.facility) {
      API.saveSite({
        city: this.state.city,
        facility: this.state.facility,
        // phone_1: this.state.phone_1
      })
        .then(res => this.loadSites())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Site would you like to search for?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City (required)"
              />
              <Input
                value={this.state.facility}
                onChange={this.handleInputChange}
                name="facility"
                placeholder="Facility (Optional)"
              />
              <FormBtn
                disabled={!(this.state.facility && this.state.city)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Sites on my list</h1>
            </Jumbotron>
            {this.state.sites.length ? (
              <List>
                {this.state.sites.map(site => (
                  <ListItem key={site._id}>
                    <Link to={"/sites/" + site._id}>
                      <strong>
                        {site.facility} by {site.city}
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