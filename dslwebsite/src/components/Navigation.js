import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Navigation = () => (
    <Navbar classname="nav" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link id="nav-home" href="/">Home</Nav.Link>
            <Nav.Link id="nav-members" href="/members">Members</Nav.Link>
            <NavDropdown title="Research" id="basic-nav-dropdown">
              <NavDropdown.Item href="/research-area">Research Areas</NavDropdown.Item>
              <NavDropdown.Item href="/research-project">Research Projects</NavDropdown.Item>
              <NavDropdown.Item href="/publications">Publications</NavDropdown.Item>
              <NavDropdown.Item href="/call-for-paper">Call for Papers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="nav-news" href="/News">News</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/work-with-us">Work with Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
);