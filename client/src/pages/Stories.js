import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
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

  // deletePost = id => {
  //   API.deletePost(id)
  //     .then(res => this.loadPosts())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit hit");
    if (this.state.title && this.state.author && this.state.story) {
      API.savePost({
        title: this.state.title,
        author: this.state.author,
        story: this.state.story
      })
        .then(res => {
          console.log(res, "res in handle");
        this.loadPosts({ posts: res.data })})
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add your story</h1>
            </Jumbotron>
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
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Stories</h1>
            </Jumbotron>
            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} by {post.author} 
                      </strong>
                      <br></br>
                      <strong>
                        {post.story}
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



// import React from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

// // import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";

// // import Post from "../components/Post";


// function Stories() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>This is where people can post stories</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.city}
//                 onChange={this.handleInputChange}
//                 name="city"
//                 placeholder="City (Optional)"
//               />
//               <Input
//                 value={this.state.county}
//                 onChange={this.handleInputChange}
//                 name="county"
//                 placeholder="County (Optional)"
//               />
//               <FormBtn
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit
//               </FormBtn>
//             </form>
//           </Col>
          
//         </Row>
//       </Container>
//     );
//   }
  
//   export default Stories;