import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export const Navigation = () => (
    <Navbar classname="nav" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
            <NavDropdown title="Research" id="basic-nav-dropdown">
              <NavDropdown.Item href="/research-area">Research Areas</NavDropdown.Item>
              <NavDropdown.Item href="/research-project">Research Projects</NavDropdown.Item>
              <NavDropdown.Item href="/publications">Publications</NavDropdown.Item>
              <NavDropdown.Item href="/call-for-paper">Call for Papers</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/News">News</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/work-with-us">Work with Us</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
);