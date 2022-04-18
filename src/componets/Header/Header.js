import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
  <Container>
    <Navbar.Brand className='text-white' href="#home">PhotoGraphy With AB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='link'>
          <Link className='text-white text-decoration-none' to="/"> Home </Link>
        </Nav.Link>
        <Nav.Link className='text-white'>Services</Nav.Link>
        <Nav.Link className='text-white'>
        <Link className='text-white text-decoration-none' to="/blog"> Blog </Link>
        </Nav.Link>
        <Nav.Link className='text-white'>
        <Link className='text-white text-decoration-none' to="/about"> About </Link>
        </Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link className='text-white'>
      <Link className='text-white text-decoration-none' to="/signup"> SignUp </Link>
         </Nav.Link>
      <Nav.Link className='text-white'>
      <Link className='text-white text-decoration-none' to="/login"> Login </Link>
         </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;