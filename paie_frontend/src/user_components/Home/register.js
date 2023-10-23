import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Head } from "../../admin_components/head/head";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
export const Adminregister=()=>
{
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const[cpassword,scpassword]=useState('');
    const Register=async()=>
    {
        await axios.post("http://localhost:8000/verifyadmin/"+mail)
        .then(async(res)=>
        {
            if(res.data)
            {
                alert("Mail Already Existed")
            }
            else
            {
                if(password===cpassword)
                {
                    await axios.post("http://localhost:8000/paieadmin/" + mail + "/" + password)
                    .then((res1) => {
                        if (res1.data) {
                            alert("Sucessfully Createad Admin");
                            window.location="admin";
                        }
                        else {
                            alert("Try again");
                        }
                    })
                    .catch((e) => console.log(e));
                }
                else
                {
                    alert("Passwords are not matched");
                }
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Head/>
            <div style={{marginTop:'7%',display:'grid',justifyContent:'center'}}>
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
                    <Form.Control type="password" placeholder="Enter password" onChange={(e)=>spassword(e.target.value)}/>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password Again" onChange={(e)=>scpassword(e.target.value)}/>
                </Form.Group>
            </Form>
            <Button onClick={Register}>Register</Button>
            </div>
        </>
    )
}