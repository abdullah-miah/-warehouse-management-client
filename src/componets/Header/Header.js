import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Header.css";


const Header = () => {
  const [user]= useAuthState(auth);
  const hadleSignOut =()=>{
    signOut(auth);
  }
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
      {
        user?<button className='btn btn-link text-white text-decoration-none' onClick={hadleSignOut}>SignOut</button>
        :
        <Nav.Link className='text-white'>
      <Link className='text-white text-decoration-none' to="/login"> Login </Link>
         </Nav.Link>}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;