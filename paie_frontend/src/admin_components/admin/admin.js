import axios from "axios";
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Head } from "../head/head";
function Admin()
{
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const[aollink,saollink]=useState('');
    const[sslink,ssslink]=useState('');
    const inputRef1=useRef();
    const inputRef=useRef();
    const btnRef=useRef();
    const adminmail=sessionStorage.adminmail;
    const Login=async()=>
    {
        mail===''?alert("mail required"):
        await axios.post("http://localhost:8000/verifyadmin/"+mail)
        .then((res)=>
        {
            if(res.data)
            {
                if(password===res.data.Password)
                {
                    sessionStorage.adminmail=res.data.Gmail;
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
    const AOLLink=async()=>
    {
        adminmail===''?alert(""):aollink===''?alert(""):
        await axios.post("http://localhost:8000/aollink",{adminmail,aollink})
        .then((res)=>
        {
            if(res.data)
            {
                alert("Link Added")
            }
            else
            {
                alert("Try agian")
            }
        })
        .catch((e)=>console.log(e))
    }
    const ScreenShotLink=async()=>
    {
        adminmail===''?alert(""):sslink===''?alert(""):
        await axios.post("http://localhost:8000/sslink",{adminmail,sslink})
        .then((res)=>
        {
            if(res.data)
            {
                alert("Link Added")
            }
            else
            {
                alert("Try agian")
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Head/>
         <div>
         <div className="btns">
          <Button href="/addflash">Add Flash News</Button>
          <Button href="/addevent">Add Events</Button>
          <Button href="/courselphoto">Add Crousel</Button>
          <Button href="/addactivity">Add Activities</Button>
          <Button href="/addgallery">Gallery</Button>
         </div>
         <div className="btns">
          <Button href="/register">YES+ Registrations</Button>
          <Button href="/uploadphoto">Upload photo</Button>
          <Button href="/confirmation">Registeration Confirmation</Button>
          <Button href="/finallist">Final List</Button>
          {/* <Button href="/courselphoto">Add Crousel</Button>
          <Button href="/addflash">Add Activities</Button> */}
         </div>

         <div className="aollink">
            <input type="text" placeholder="Please Enter AOL YES+ Link Here..... if it change other wise leave it" onChange={(e)=>saollink(e.target.value)} ref={inputRef}
            onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>}/>
            {
                sessionStorage.adminmail?<Button onClick={AOLLink} ref={btnRef}>Submit</Button>:<b/>
            }
         </div>
         <div className="aollink">
            <input type="text" placeholder="Please Enter Screen Short Upload Link Here..... if it change other wise leave it" onChange={(e)=>ssslink(e.target.value)}
            onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>}/>
            {
                sessionStorage.adminmail?<Button onClick={ScreenShotLink}>Submit</Button>:<b/>
            }
         </div>
         </div>
         {
            !sessionStorage.adminmail?
            <Modal  show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you Admin.... Please login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Gmail"
                                    ref={inputRef1}
                                    onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>}
                                    onChange={(e)=>smail(e.target.value)}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" ref={inputRef} onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>} onChange={(e)=>spassword(e.target.value)} />
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
export default Admin;