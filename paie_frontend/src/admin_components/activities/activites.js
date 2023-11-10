import axios from "axios";
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { v4 } from 'uuid';
import Header from "../../user_components/header/header";
import image from "../addingphotos/imageupload.jpeg";
import { Head } from "../head/head";
import Alert from "react-bootstrap/Alert";

export const Activites=()=>
{
    const [load,sload]=useState(false);
    const [file, sfile] = useState('');
    const [img,simg]=useState([]);
    const [theme,stheme]=useState();
    const [data,sdata]=useState([]);
    const [desc,sdesc]=useState();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const inputref=useRef(null);
    let imgname;
    let name;
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
    const Upload=async()=>
    {
        if(!theme || !desc || typeof(file)==='string')
        {
            // alert("")
            setErrorMessage("All fields are required");
        }
        else
        {
            sload(true)
        const imgref=ref(imgdb,`paiecell/Activities/${v4()}`);
        uploadBytes(imgref,file).then((val)=>
        {
            // console.log(imgref.name)
            getDownloadURL(val.ref).then(async(url)=>
            {
                name=imgref.name
                await axios.post("https://paiecell.onrender.com/addactivity",{theme,desc,name,url})
                .then((res)=>
                {
                    if(res.data)
                    {
                        sload(false)
                        inputref.current.value='';
                        stheme('');
                        sfile('')
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
    const Deletephoto=async()=>
    {
        const storage = getStorage();
        const desertRef=ref(storage,`paiecell/Activities/${img}`)
        deleteObject(desertRef) && axios.post("https://paiecell.onrender.com/delactiphoto/"+img)
        .then(()=>
        {
            // alert("Deleted");
            setSuccessMessage("Activity deleted successfully");
        })
        .catch((e)=>
        {
            console.log(e);
        })
    }
    useEffect(()=>
    {
        axios.post("https://paiecell.onrender.com/actiphotos")
        .then((res)=>
        {
            sdata(res.data)
        })
    })
    return(
        <>
        <Head/>
       
        <h1 style={{textAlign:'center'}}>Activites Photos</h1>
        <div >
           {
            data.map((val)=>
            (
                <>
                <img width={150} height={150} src={val.Link} style={{margin:'0 0 3% 10%'}}/>
                <Button className='coruselbtn' onClick={Deletephoto} onClickCapture={()=>simg(val.imageCode)}>X</Button>
                </>
            ))
           }
        </div>
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
        <br/><br/>
        <div style={{display:'flex',justifyContent:'center'}}>
            <input value={theme} style={{width:'20%',height:'5vh',border:'solid blue'}} placeholder="Enter photo Theme" onChange={(e)=>{stheme(e.target.value)}} />
            <label style={{
                        width: 70,
                        height: 50,
                        backgroundImage:`url(${image})`,
                        backgroundSize:'70px 50px',
                       
                    }}  for="photo"> <br/><br/><h5>select Photo</h5>

            </label><label>{file.name}</label>
                <input type="file" id="photo" accept=".jpg, .jpeg, .png, .gif" style={{display:'none'}} onChange={(e)=>sfile(e.target.files[0])}/>
        </div>
        <div style={{justifyContent:'center',display:'flex',padding:'5% 0 5% 0'}}>
            <textarea style={{width:'30%',height:'20vh',border:'solid black'}} placeholder="Enter Description" onChange={(e)=>sdesc(e.target.value)} ref={inputref}/>
        </div>
        <div style={{justifyContent:'center',display:'flex',paddingBottom:'10%'}}>
        <Button onClick={Upload} >{load?"Uploading":"Upload"}</Button>
        </div>
        </>
    )
}