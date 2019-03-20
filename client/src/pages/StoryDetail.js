import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class StoryDetail extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res => this.setState({ post: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <center>
              <h1>
               {this.state.post.title},
               <br></br>
               by {this.state.post.author} 
              </h1>
            </center>
          </Col>
        </Row>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
              <p id="mainInfo" className="story">
                {this.state.post.story}
              </p>      
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col size="md-2">
            <button>
              <Link to="/stories">Back to Stories</Link>
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StoryDetail;