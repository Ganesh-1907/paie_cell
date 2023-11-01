import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { v4 } from 'uuid';
import image from "../../admin_components/addingphotos/imageupload.jpeg";
import Header from "../header/header";
import Alert from "react-bootstrap/Alert";

export const Uploadphoto=()=>
{
    const[mail,smail]=useState();
    const[data,sdata]=useState(null);
    const inputRef=useRef();
    const btnRef=useRef();
    const [load,sload]=useState(false);
    const [file, sfile] = useState('');
    const [photo,sphoto]=useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const firebaseConfig = {
        apiKey: "AIzaSyBq36iHg3MK2o3acO9CEcK7FZkxaO3N490",
        authDomain: "paie-cell.firebaseapp.com",
        projectId: "paie-cell",
        storageBucket: "paie-cell.appspot.com",
        messagingSenderId: "616259866547",
        appId: "1:616259866547:web:85fdf8b0349cb2601e85c6",
        measurementId: "G-CNVYPEY493"
    };
    const app = initializeApp(firebaseConfig);
    const imgdb = getStorage(app);
    const Verify=async()=>
    {
        await axios.post("http://localhost:8000/verify/"+mail)
        .then((res)=>
        {
            if(res.data)
            {
                sdata(res.data)
            }
            else
            {
                // alert("Try again");
                setErrorMessage("Try again")
            }
        })
        .catch((e)=>console.log(e))
    }
    const Submit=async()=>
    {
        if(!mail||typeof(file)==='string')
        {
            // alert("")
            setErrorMessage("All fields are required")
        }
        else
        {
            sload(true)
        const imgref=ref(imgdb,`paiecell/Screenshorts/${v4()}`);
        uploadBytes(imgref,file).then((val)=>
        {
            getDownloadURL(val.ref).then(async(url)=>
            {
                await axios.post("http://localhost:8000/uploadscrnsrt",{mail,url})
                .then((res)=>
                {
                    if(res.data)
                    {
                        // alert("Submited")
                        setSuccessMessage("Submitted Successfully")
                        sload(false)
                    }
                })
                .catch((e)=>
                {
                    console.log(e)
                })
            })
        })
        }
    }
    const Takephoto=async(e)=>
    {
        const filedata=e.target.files[0];
        sfile(filedata)
        if(filedata)
        {
            const reader=new FileReader();
            reader.onload=(e)=>
            {
                const photodata=e.target.result
                sphoto(photodata)
            }
            reader.readAsDataURL(filedata);
        }
    }
    console.log(photo)
    return(
        <>
            <Header /><br/>
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
      <br/>
            <Card style={{ width: '60%' ,marginLeft:'20%'}}>
                <label for="photo" style={{ height: '40vh',backgroundImage:`url(${file.name?photo:image})`,backgroundSize:'100% 40vh'}}>
                <p style={{color:'green'}}>Upload your payment Screen short</p><p style={{color:'blue'}}>Click Here.....</p>
                </label>
                <input type="file" id="photo" accept=".jpg, .jpeg, .png, .gif" style={{display:'none'}} onChange={Takephoto} />
                {/* <img src={photo}/> */}
                <Card.Body>
                    <Card.Title></Card.Title>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Gmail</InputGroup.Text>
                        <Form.Control
                            placeholder="Please Enter which Email was given"
                            aria-label="Usermail"
                            aria-describedby="basic-addon1"
                            ref={inputRef}
                            onKeyDown={(e)=>e.key==='Enter'?btnRef.current.click():<b></b>}
                            onChange={(e)=>smail(e.target.value)}
                        />
                    </InputGroup>
                    {
                        data===null?<Button variant="secondary" ref={btnRef} onClick={Verify}>Verify</Button>:
                        <>
                        <h6>{data.Name}</h6>
                        <h6>{data.Phonenumber}</h6>
                        <h6>{data.Registernumber}</h6>
                        <h6>{data.Branch}</h6>
                        <h6>{data.Section}</h6>
                        </>
                    }
                    <br/>
                    <Button variant="primary" onClick={Submit}>{load?'Submitting..':"Submit"}</Button>
                </Card.Body>
            </Card>
        </>
    )
}