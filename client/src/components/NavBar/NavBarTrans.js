import React from "react";
import "./navBarTrans.css";
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

const NavBarTrans = props => (

  <div className="navbar transparent navbar-inverse">
    <div className="navbar-inner">
      <Navbar expand="lg">
      <Navbar.Brand href="#home">
      <img
        src="/assets/images/pslogo.jpg"
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="Project SANE logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sites">Search</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/stories">Stories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>

)

export default NavBarTrans;

// {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// </NavDropdown> */}

// {/* <Form inline>
// <FormControl type="text" placeholder="Search" className="mr-sm-2" />
// <Button variant="outline-success">Search</Button>
// </Form> */}