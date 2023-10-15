import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes,deleteObject } from "firebase/storage";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { v4 } from 'uuid';
import image from "../addingphotos/imageupload.jpeg";
import "../admin.css"
export const Photos=()=>
{
    const [load,sload]=useState(false);
    const [file, sfile] = useState([]);
    const [img,simg]=useState([]);
    const [theme,stheme]=useState([]);
    const [data,sdata]=useState([]);
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
        sload(true)
        const imgref=ref(imgdb,`coursel/${v4()}`);
        uploadBytes(imgref,file).then((val)=>
        {
            // console.log(imgref.name)
            getDownloadURL(val.ref).then(async(url)=>
            {
                imgname=theme
                name=imgref.name
                await axios.post("http://localhost:8000/addphotos",{imgname,name,url})
                .then((res)=>
                {
                    if(res.data)
                    {
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
    const Deletephoto=async()=>
    {
        const storage = getStorage();
        const desertRef=ref(storage,`coursel/${img}`)
        deleteObject(desertRef) && axios.post("http://localhost:8000/delphoto/"+img)
        .then(()=>
        {
            alert("Deleted");
        })
        .catch((e)=>
        {
            console.log(e);
        })
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/photos")
        .then((res)=>
        {
            sdata(res.data)
        })
    })
    return(
        <>
        <h1 style={{textAlign:'center'}}>Crousel Photos</h1>
        <div >
           {
            data.map((val)=>
            (
                <>
                <img width={200} height={200} src={val.Link} style={{marginLeft:'10%'}}/>
                <Button className='coruselbtn' onClick={Deletephoto} onClickCapture={()=>simg(val.imageCode)}>X</Button>
                </>
            ))
           }
        </div>
        <br/><br/>
        <div style={{display:'flex',justifyContent:'center'}}>
            <input type="text"  style={{width:'20%',height:'5vh'}} placeholder="Enter photo Theme" onChange={(e)=>{stheme(e.target.value)}}/>
            <label style={{
                        width: 70,
                        height: 50,
                        backgroundImage:`url(${image})`,
                        backgroundSize:'70px 50px',
                       
                    }}  for="photo"> <br/><br/><h5>select Photo</h5>

            </label>
                <input type="file" id="photo" style={{display:'none'}} onChange={(e)=>sfile(e.target.files[0])}/>
        </div>
        <div style={{justifyContent:'center',display:'flex',paddingBottom:'10%'}}>
        <Button onClick={Upload} >{load?"Uploading":"Upload"}</Button>
        </div>
        </>
    )
}