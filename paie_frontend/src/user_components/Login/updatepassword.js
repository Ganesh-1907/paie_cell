import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Header from "../header/header";
export const Update=()=>
{
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const[cpassword,scpassword]=useState('');
    const Update=async()=>
    {
        await axios.post("http://localhost:8000/verify/"+mail)
        .then(async(res)=>
        {
            if(res.data)
            {
                if(password===cpassword)
                {
                    await axios.post("http://localhost:8000/updatepassword/" + mail + "/" + password)
                    .then((res1) => 
                    {
                        if (res.data.Confirm || res1.data.value)
                        {
                            alert("Sucessfully Updated");
                            window.location="/";
                        }
                        else
                        {
                            alert("Please Pay Amount")
                        }
                    })
                    .catch((e) => console.log(e));
                }
                else
                {
                    alert("Passwords are not matched");
                }
            }
            else
            {
                alert("Mail Not Exist");
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Header/>
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
            <Button onClick={Update}>Update</Button>
            </div>
        </>
    )
}