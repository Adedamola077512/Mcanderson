import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './NavigationBar.css';
import logo1 from '../assets/logo1.png'; // Import your logo image
function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 scalloped">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand className="" data-aos="fade-right">
          <Link to="/"><img src={logo1} alt="Logo" className="logo" /></Link>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            {/* Navigation Links */}
            <Link to="/" className="home" id="line">Why McAderson?</Link>
            <Link to="/Learningpaths" className="home">Learning paths</Link>
            <Link to="/Keyfeatures" className="home">Key features</Link>
            <Link to="/FAQ" className="home">FAQ</Link>
          </Nav>

          {/* Sign-Up Button */}
          <Button variant="primary" className="btn btn-primary btn-rounded" data-aos="fade-left">
            Coming soon <AiOutlineLoading3Quarters />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
