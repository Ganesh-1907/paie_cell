import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { Head } from '../head/head';
import Form from 'react-bootstrap/Form';
export const Register=()=>
{
    const[name,sname]=useState()
    const[gmail,sgmail]=useState()
    const[phone,sphone]=useState()
    const[branch,sbranch]=useState()
    const[sec,ssec]=useState()
    const[reg,sreg]=useState()
    const [atnd,satnd]=useState([]);
    const [code,scode]=useState(0);
    const [otp,sotp]=useState([]);
    const min=Math.pow(10,3);
    const[shows,sshow]=useState(false);
    const max=Math.pow(10,4)-1;
    const[data,sdata]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const Registers=async()=>
    {
        if(!name||!gmail||!phone||!branch||!sec||!reg)
        {
            alert("")
        }
        else
        {
            await axios.post("http://localhost:8000/register/" + name + "/" + gmail + "/" + phone + "/" + branch + "/" + sec + "/" + reg)
                    .then((res) => {
                        if (res.data) {
                            alert('register sucessfully');
                            let ebody=`
        <p>This <b>Mail</b> from <h1>PAIE CELL</h1></p>
        <p>
        <b>Name::<b> ${name}
        <br/>
        <b>Gmail::<b> ${gmail}
        <br>
        <p>You've received an email from the "PAIE CELL" with an invitation to join the ART OF LIVING course. To register, please click on the provided link for payment.  </p>
        <h3>Click Here:: ${data.YesLink}</h3><h4></h4>
        <p>Once you've made the payment, you can upload a screenshot using the link below, and you will receive your login credentials.</p>
        <h4>Click Here:: ${data.photoLink}</h4>
        <p>
        `
                            window.Email.send({
                                SecureToken: "3c068e1e-2b17-48d8-b96f-2fa30f12bb6f",
                                To: gmail,
                                From: "aolsrkr2002@gmail.com",
                                Subject: "YES+ Registrations",
                                Body: ebody
                            }).then(
                                message => message === "OK" ? window.location.reload(3) : alert(message)
                            )
                        }
                        else {
                            alert("Try again");
                        }
                    })
                    .catch((e) => console.log(e))
        }
    }
    const Emailverify=async()=>
    {
        if (gmail)
        {
            await axios.post("http://localhost:8000/verify/" + gmail)
                .then((res1) => {
                    if (res1.data) {
                        alert("");
                    }
                    else {
                        let OTP = Math.floor(Math.random() * (max - min + 1)) + min;
                        scode(OTP);
                        let ebody = `
        <p>This <b>code</b> came from ${"AST"}</p>
        <p>
        <b>Name::<b>${name}
        <br/>
        <b>Gmail::<b>${gmail}
        <br>
        <b>Code::<b>${OTP}
        <p>
        `
                        window.Email.send({
                            SecureToken: "3c068e1e-2b17-48d8-b96f-2fa30f12bb6f",
                            To: gmail,
                            From: "aolsrkr2002@gmail.com",
                            Subject: "YES+ Registrations"
                        }).then(
                            message => message === "OK" ? setShow(true) : alert(message)
                        )
                    }
                })
        }
        else
        {
            alert("")
        }
    }
    const Verify=async()=>
    {
        if(parseInt(otp)===code)
        {
            setShow(false)
            sshow(true)
        }
        else
        {
            setShow(true)
            satnd("Incorrect OTP")
        }
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/verifyadmin/" + sessionStorage.adminmail)
        .then((res)=>
        {
            if(res.data)
            {
                sdata(res.data)
            }
        })
    })
    return(
        <>
        <Head/>
        <Modal  show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Enter OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>OTP</Form.Label>
                                <Form.Control type="text" placeholder="Enter OTP" onChange={(e)=>sotp(e.target.value)} autoFocus/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <h5 style={{color:'red'}}>{atnd}</h5>
                        <Button variant="primary" onClick={Verify} >Enter</Button>
                    </Modal.Footer>
                </Modal>
        <div style={{marginTop:'5%',textAlign:'center'}}>
            <h1 style={{fontSize:'50px',color:'green'}}>Register Form</h1>
        </div>
            <table className='registerform'>
                <tr>
                    <td>
                    <label>Full Name :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Name' onChange={(e)=>sname(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Gmail :</label>
                    </td>
                    <td>
                    <input type='email' placeholder='Enter Mail' onChange={(e)=>sgmail(e.target.value.toLowerCase())}/>
                    </td>
                    <td>
                        <Button variant='secondary' onClick={Emailverify}>verify</Button>
                    </td>
                </tr>
                <br/>
                {
                    shows?
                    <>
                    <tr>
                    <td>
                        <label>Phone Number :</label>
                    </td>
                    <td>
                    <input type='number' placeholder='Enter Phone Number' onChange={(e)=>sphone(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Branch :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Branch' onChange={(e)=>sbranch(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Section :</label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Section' onChange={(e)=>ssec(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td>
                        <label>Register Number : </label>
                    </td>
                    <td>
                    <input type='text' placeholder='Enter Register Number' onChange={(e)=>sreg(e.target.value.toUpperCase())}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td colSpan={2} style={{float:'right'}}>
                        <Button onClick={Registers}>Register</Button>
                    </td>
                </tr>
                    </>:<b/>
                }
            </table>
        </>
    )
}