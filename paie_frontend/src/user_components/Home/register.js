import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Head } from "../../admin_components/head/head";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

export const Adminregister=()=>
{
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const[cpassword,scpassword]=useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Register=async()=>
    {
        await axios.post("https://paiecell.onrender.com/verifyadmin/"+mail)
        .then(async(res)=>
        {
            if(res.data)
            {
                // alert("Mail Already Existed")
                setErrorMessage("Email already existed!");
            }
            else
            {
                if(password===cpassword)
                {
                    await axios.post("https://paiecell.onrender.com/paieadmin/" + mail + "/" + password)
                    .then((res1) => {
                        if (res1.data) {
                            // alert("Sucessfully Createad Admin");
                            setSuccessMessage("Admin created successfully!");
                            window.location="admin";
                        }
                        else {
                            // alert("Try again");
                            setErrorMessage("Something went wrong! Try Again.");
                        }
                    })
                    .catch((e) => console.log(e));
                }
                else
                {
                    // alert("Passwords are not matched");
                    setErrorMessage("Password and Confirm Password fields do not match!");
                }
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Head/>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "720px", width: "100%" }}>
            <Alert
              variant="success"
              show={successMessage !== ""}
              onClose={() => setSuccessMessage("")}
              dismissible
              style={{ margin: "0 auto" }}
            >
              {successMessage}
            </Alert>
            <Alert
              variant="danger"
              show={errorMessage !== ""}
              onClose={() => setErrorMessage("")}
              dismissible
              style={{ margin: "0 auto" }}
            >
              {errorMessage}
            </Alert>
          </div>
        </div>
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