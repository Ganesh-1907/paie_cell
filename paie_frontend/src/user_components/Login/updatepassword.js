import axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import Header from "../header/header";
import Alert from "react-bootstrap/Alert";

export const Update=()=>
{
    const[mail,smail]=useState('');
    const[password,spassword]=useState('');
    const[cpassword,scpassword]=useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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
                            // alert("Sucessfully Updated");
                            setSuccessMessage("Password updated successfully!");
                            window.location="/";
                        }
                        else
                        {
                            // alert("Please Pay Amount")
                            setErrorMessage("You need to pay amount first.");
                        }
                    })
                    .catch((e) => console.log(e));
                }
                else
                {
                    // alert("Passwords are not matched");
                    setErrorMessage("Passwords do not match.")
                }
            }
            else
            {
                // alert("Mail Not Exist");
                setErrorMessage("Email does not exist!")
            }
        })
        .catch((e)=>console.log(e))
    }
    return(
        <>
        <Header/>
        <br/>
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
            <Button onClick={Update}>Update</Button>
            </div>
        </>
    )
}