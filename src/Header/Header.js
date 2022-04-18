import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand className='text-white' href="#home">PhotoGraphy With AB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='text-white' href="#home">Home</Nav.Link>
        <Nav.Link className='text-white' href="#link">Services</Nav.Link>
        <Nav.Link className='text-white' href="#link">Blog</Nav.Link>
        <Nav.Link className='text-white' href="#link">About</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link className='text-white' href="#home">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;