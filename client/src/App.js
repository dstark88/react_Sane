import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Search from "./components/Search";
// import Form from "./components/Form";
import ReactDOM from 'react-dom';
import { Wizard, Steps } from 'react-albus';
import { StepOne } from './components/Wizard/StepOne';
import { StepTwo } from './components/Wizard/StepTwo';
import { StepThree } from './components/Wizard/StepThree';
import { Navigation } from './components/Wizard/Navigation';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Title />
          <Search />
          <Wizard>
            <Steps>
              <StepOne id="safe" />
              <StepTwo id="age" />
              <StepThree id="locations" />
            </Steps>
            <Navigation />
          </Wizard>
          <UserCard>
       
          </UserCard>
        </Wrapper>
        <Footer />
          
      </div>
    );
  }
}

export default App;
