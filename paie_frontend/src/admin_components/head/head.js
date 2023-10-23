import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Head=()=>
{
    const Logout=async()=>
    {
        sessionStorage.removeItem('adminmail');
    }
    // console.log(sessionStorage.gmail)

    return(
        <>
            <div className="border">
                <div className="bone1"></div>
                <div className="bone2">
                    <div className='Navbar-container'>
                        <div className='logo-content'><a href='/'><img src={"paie_lg.jpg"} ></img></a></div>
                        <Navbar expand="lg" className="navbar">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-left" />
                                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/admin" style={{ color: 'white' }}>Home</Nav.Link>
                                        {
                                            sessionStorage.adminmail?<Nav.Link href="/admin" style={{ color: 'red' }}  onClick={Logout}>Log Out</Nav.Link>:
                                            <Nav.Link href="/admin" style={{ color: 'white' }}>Login</Nav.Link>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>
        </>
    )
}