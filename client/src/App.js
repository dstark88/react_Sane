import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
// import Form from "./components/Form";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Title />
          <UserCard>
       
          </UserCard>
        </Wrapper>
        <Footer />
          
      </div>
    );
  }
}

export default App;
