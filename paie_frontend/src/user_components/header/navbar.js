import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavBar() {
  return (
    <>
    
    <div className='Navbar-container'>
    <div className='logo-content'><img src={"paie_lg.jpg"} ></img></div>
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-left" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
            <NavDropdown id="nav-dropdown-light-example" title="About"  >
              <NavDropdown.Item href="aboutsrkr">SRKR</NavDropdown.Item>
              <NavDropdown.Item href="aboutpaiecell">  PAIE CELL</NavDropdown.Item>
              <NavDropdown.Item href="aboutaol">ART OF LIVING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" style={{ color: 'white' }}>Courses</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Registrations</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Events</Nav.Link>
            <Nav.Link href="#link" style={{ color: 'white' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


   
    </>
  );
}

export default NavBar;
