import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../assets/kini-logo.png';

function Header() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home</Nav.Link>
            <Nav.Link as={Link} to="/indonesia" active={location.pathname === "/indonesia"}>Indonesia</Nav.Link>
            <Nav.Link as={Link} to="/programming" active={location.pathname === "/programming"}>Programming</Nav.Link>
            <Nav.Link as={Link} to="/saved" active={location.pathname === "/saved"}>Saved</Nav.Link>
          </Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
