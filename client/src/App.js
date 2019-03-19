import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Wiz from "./pages/Wiz";
import Sites from "./pages/Sites";
import SiteDetail from "./pages/SiteDetail";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Call from "./pages/Call";
import Advocate from "./pages/Advocate";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Login from "./pages/Login";
import AddStories from "./pages/AddStories";

import NavBarTrans from "./components/NavBar/NavBarTrans";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div class="main-container">
        <NavBarTrans />
        <Wrapper> 
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/wiz" component={Wiz} />
              <Route exact path="/sites" component={Sites} />
              <Route exact path="/sites/:id" component={SiteDetail} />
              <Route exact path="/about" component={About} />
              <Route exact path="/call" component={Call} />
              <Route exact path="/advocate" component={Advocate} />
              <Route exact path="/stories" component={Stories} />
              <Route exact path="/posts/:id" component={StoryDetail} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/addStories" component={AddStories} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Wrapper>
        <Footer />         
      </div>
    );
  }
}

export default App;
