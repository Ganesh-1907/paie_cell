import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavBar() {
  return (
    <>
    
    <div className='Navbar-container'>
    <div className='logo-content'><img src={"paie_lg.jpg"} ></img></div>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-right" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: 'yellow' }}>Home</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'yellow' }}>About</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'yellow' }}>Courses</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'yellow' }}>Registrations</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'yellow' }}>Events</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'yellow' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


   
    </>
  );
}

export default NavBar;
