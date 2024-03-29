import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";


class Posts extends Component {
  state = {
    posts: [],
    title: "",
    author: "",
    story: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res => {
        console.log(res, "res in loadpost");
        this.setState({ posts: res.data, title: "", author: "", story: "" })}
      )
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
    if (this.state.title && this.state.author && this.state.story) {
      API.savePost({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      })
        .then(res => {
        this.loadPosts({ posts: res.data })})
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            <button>
                {!!this.state.loggedInUser || !!this.state.session ? (<a onClick={this.signOutClick}></a>)
                : null}
                <Link to="/Login">Sign Out</Link>
            </button>
          </Col>
          <Col size="md-9">          
            <center>
              <h1 id="mainHeader">Share your story</h1>
              <p id="mainInfo">Your identity will remain anonymous unless you choose to reveal it.</p>
            </center>
          </Col>
        </Row>
        <Row>
          <Col size="md-1"></Col>
          <Col size="md-10">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.story}
                onChange={this.handleInputChange}
                name="story"
                placeholder="Story (required)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                <Link to="/Stories">Submit</Link>
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Posts;