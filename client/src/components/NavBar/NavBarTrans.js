import React from "react";
import "./navBarTrans.css";
import { Navbar, Nav } from 'react-bootstrap'

const NavBarTrans = props => (
  <div className="navbar transparent navbar-inverse">
    <div className="navbar-inner">
      <Navbar expand="lg">
      <Navbar.Brand href="/">
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
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/stories">Stories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>
)

export default NavBarTrans;
