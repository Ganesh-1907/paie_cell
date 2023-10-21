import React from "react";
import Header from "../header/header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import image from "../../admin_components/addingphotos/imageupload.jpeg";
export const Uploadphoto=()=>
{
    return(
        <>
            <Header />
            <Card style={{ width: '60%' ,marginLeft:'20%'}}>
                <label src={image} for="photo" style={{ height: '40vh',backgroundImage:`url(${image})`,backgroundSize:'100% 40vh'}}>
                <p style={{color:'green'}}>Upload your payment Screen short</p><p style={{color:'blue'}}>Click Here.....</p>
                </label>
                <input type="file" id="photo" style={{display:'none'}}/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Gmail</InputGroup.Text>
                        <Form.Control
                            placeholder="Usermail"
                            aria-label="Usermail"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Register Number</InputGroup.Text>
                        <Form.Control
                            placeholder="Register number"
                            aria-label="Register number"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant="primary">Submit</Button>
                </Card.Body>
            </Card>
        </>
    )
}