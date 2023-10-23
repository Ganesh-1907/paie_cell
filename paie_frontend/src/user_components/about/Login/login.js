import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Header from "../../header/header";
export const Login=()=>
{
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    return(
        <>
        <Header/>
        <Modal  show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you done YES+.... Please login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@gmail.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" autoFocus />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        Otherwise Close This Alret Box
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}