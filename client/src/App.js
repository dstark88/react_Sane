import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wiz from "./pages/Wiz";
import Sites from "./pages/Sites";
import Detail from "./pages/Detail";
// import Users from "./pages/Users";
import NoMatch from "./pages/NoMatch";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./components/NavBar";
import NavBarTrans from "./components/NavBar/NavBarTrans";
import UserCard from "./components/UserCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
// import Footer from "./components/Footer";
// import Search from "./components/Search";
// import Form from "./components/Form";  
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
              <Route exact path="/sites/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </Router>

          <UserCard>
       
          </UserCard>
        </Wrapper>
        {/* <Footer /> */}
          
      </div>
    );
  }
}

export default App;
