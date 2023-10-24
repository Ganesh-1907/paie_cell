import axios from "axios";
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Activity from "../activities/activities";
import Crousel from "../crousel/crousel";
import Footer from "../footer/footer";
import Header from "../header/header";
import Introduction from "../introduction/introduction";
import Programme from "../programmes/programme";
import Solution from "../solution/solution";
function Home()
{
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const inputRef=useRef();
    const btnRef=useRef();
    const Login=async()=>
    {
        mail===''?alert("mail required"):password===''?alert(""):
        await axios.post("http://localhost:8000/verify/"+mail)
        .then((res)=>
        {
            if(res.data)
            {
                if(password===res.data.Password)
                {
                    sessionStorage.studentmail=res.data.Gmail;
                    setShow(false);
                }
                else
                {
                    alert("Passwords Incorrect");
                }
            }
            else
            {
                alert("Gamil Not Found");
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <div className="main">
            <Header/>
            <Crousel/>
            <br/>
            <Programme/>
            <br/>
            <Introduction/>
            <br/>
            <br/>
            <Activity/>
            <br/>
            <Solution/>
            <Footer/>
        </div>
                {
                    !sessionStorage.studentmail?
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
                                    placeholder="Enter Gmail"
                                    onChange={(e)=>smail(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" ref={inputRef} onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>} onChange={(e)=>spassword(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        Otherwise Close This Alret Box
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={Login} ref={btnRef}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Modal>:<b/>
                }
        </>
    )
}
export default Home;