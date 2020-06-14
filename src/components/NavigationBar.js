import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">coronacare.ai</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* Search Bar */}
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link as={Link} to="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link as={Link} to="/about">About the Product</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={Link} to="/contact">Contact Us</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)