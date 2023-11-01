import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
import Alert from "react-bootstrap/Alert";

function Admin_flash(){

    const[flash,setflash]=useState();
    const[data,sdata]=useState([]);
    const inputRef=useRef();
    const btnRef=useRef();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const Flash=async()=>
    {
        if(!flash)
        {
            // alert("")
            setErrorMessage("Provide some fresh news.")
        }
        else
        {
            try {
                const responce = await axios.post("http://localhost:8000/flashnews/" + flash);
                if (responce.data) {
                    // alert("flash news update successfully")
                    setSuccessMessage("Flash news update successfully")
                    window.location.reload(2);
                }
                else {
                    // alert("failed")
                    setErrorMessage("Failed to update the flash news")
                }
            }
            catch
            {
                console.log("Ok cool");
            }
        }
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/flashnews")
        .then((res)=>
        {
            sdata(res.data)
            console.log(res.data)
        })
        .catch((e)=>console.log("ok cool"))
    })
    return(
        <>
        <Head/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '720px', width: '100%' }}>
          <Alert variant="success" show={successMessage !== ''} onClose={() => setSuccessMessage('')} dismissible style={{ margin: '0 auto' }}>
            {successMessage}
          </Alert>
          <Alert variant="danger" show={errorMessage !== ''} onClose={() => setErrorMessage('')} dismissible style={{ margin: '0 auto' }}>
            {errorMessage}
          </Alert>
        </div>
      </div>
        <h1>{data.flash}</h1>
            <h1 style={{textAlign:'center'}}>FLASH NEWS UPDATE</h1>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>
            {
                data.map((val)=>
                (
                    <textarea type="text" style={{width:'50%'}} defaultValue={val.flash} placeholder="update flash news here....."
            ref={inputRef} onKeyDown={(e)=>e.key='Enter'?btnRef.current.click():<b/>}  onChange={(e)=>setflash(e.target.value)}/>
                ))
            }
            <br/>
            <br/>
            <Button ref={btnRef} onClick={Flash}>SUBMIT</Button>
           </div>
            
        </>
    )
}
export default Admin_flash;