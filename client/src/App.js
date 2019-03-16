import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wiz from "./pages/Wiz";
import Sites from "./pages/Sites";
import SiteDetail from "./pages/SiteDetail";
// import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Call from "./pages/Call";
import SaneP from "./pages/SaneP";
import Stories from "./pages/Stories";
import Login from "./pages/Login";
import AddStories from "./pages/AddStories";

// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarTrans from "./components/NavBar/NavBarTrans";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Footer from "./components/Footer";
// import Form from "./components/Form";  




class App extends Component {
  render() {
    return (
      <div>
        <NavBarTrans />
        <Wrapper> 
          {/* <Title /> */}

          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/wiz" component={Wiz} />
              <Route exact path="/sites" component={Sites} />
              <Route exact path="/sites/:id" component={SiteDetail} />
              <Route exact path="/about" component={About} />
              <Route exact path="/call" component={Call} />
              <Route exact path="/sanep" component={SaneP} />
              <Route exact path="/stories" component={Stories} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/addStories" component={AddStories} />
              <Route component={NoMatch} />
            </Switch>
          </Router>

          <UserCard>
       
          </UserCard>

        </Wrapper>
        <Footer />
          
      </div>
    );
  }
}

export default App;
