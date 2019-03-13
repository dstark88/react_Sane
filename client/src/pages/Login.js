import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Users extends Component {
  state = {
    Users: [],
    username: "",
    password: "",
  };

//   componentDidMount() {
//     this.loadUsers();
//   }

//   loadUsers = () => {
//     API.getUsers()
//       .then(res => {
//         console.log(res, "res in loadUser");
//         this.setState({ users: res.data, username: "", password: ""})}
//       )
//       .catch(err => console.log(err));
//   };


// // save user to database
// testUser.save(function(err) {
//     if (err) throw err;

//     // attempt to authenticate user
//     User.getAuthenticated('das777', 'Password123', function(err, user, reason) {
//         if (err) throw err;

//         // login was successful if we have a user
//         if (user) {
//             // handle login success
//             console.log('login success');
//             return;
//         }

//         // otherwise we can determine why we failed
//         var reasons = User.failedLogin;
//         switch (reason) {
//             case reasons.NOT_FOUND:
//             case reasons.PASSWORD_INCORRECT:
//                 // note: these cases are usually treated the same - don't tell
//                 // the user *why* the login failed, only that it did
//                 break;
//             case reasons.MAX_ATTEMPTS:
//                 // send email or otherwise notify user that account is
//                 // temporarily locked
//                 break;
//         }
//     });
// });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit in login");
    if (this.state.username && this.state.password) {
      API.createUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => {
          console.log(res.data, "res.data in handleForm in login");
        // this.loadUsers({ users: res.data })
    })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-4" />
          <Col size="sm-4">
            <center>
              <h1>Create An Account</h1>
            </center>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Users;