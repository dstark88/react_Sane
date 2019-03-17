import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

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
        this.setState({ posts: res.data, title: "", author: "", story: "" })
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <center>
              <h1 id="mainHeader">Stories</h1>
              <h3>Please share your story with others. Your identity will remain anonymous unless you choose to share it.</h3>
            </center>
            <center>
              <button><Link className="nav-link" to="/Login">Add Your Story</Link></button>
            </center>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong id="storyText">
                        {post.title}, written by {post.author}
                      </strong>
                      <br></br>
                      <strong id="storyText">
                        {post.story.slice(0,250)}...read more
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

export default Posts;
