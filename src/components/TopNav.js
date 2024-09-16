import React, { useState } from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import DoctorList from './DoctorList';
import AddDoctor from './AddDoctor';
import logo from './../logo.png';
import './../App.css';

function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About</Nav.Link>
          <NavDropdown title="Our Staff" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/DoctorList">Our Doctors</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/AddDoctor">Add Doctor</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Appointments</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNav;