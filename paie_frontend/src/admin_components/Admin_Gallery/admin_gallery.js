import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
import image from "../addingphotos/imageupload.jpeg";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
export const AddGallery=()=>
{
    const[data,sdata]=useState([]);
    const[theme,stheme]=useState([]);
    const[file,sfile]=useState([]);
    const[load,sload]=useState(false);
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
        for(var i=0;i<file.length;i++)
        {
            sload(true)
            const imgref = ref(imgdb, `paiecell/Galery/${v4()}`);
            uploadBytes(imgref, file[i]).then((val) => {
                getDownloadURL(val.ref).then(async (url) => {
                    // name=imgref.name
                    await axios.post("http://localhost:8000/addgallery", { theme, url })
                        .then((res) => {
                            if (res.data) {
                                sload(false)
                                sfile([]);
                                stheme('')
                            }
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                })
            })
        }
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/showgallery")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log(e));
    })
    return(
        <>
        <Head/>
        {/* <div>
            <input type="text"/>
        </div> */}
        <div style={{display:'flex',justifyContent:'center',margin:'10% 0 0% 0%'}}>
                <select style={{width:'20%',height:'5vh',margin:'0% 2% 0% 0%'}} onChange={(e)=>{stheme(e.target.value)}}>
                <option>Select Theme</option>
                    {
                        data.map((val)=>
                        (
                            <option>{val.Theme}</option>
                        ))
                    }
                </select>
            OR 
            <input type="text"  style={{width:'20%',height:'5vh',margin:'0% 0% 0% 2%'}} placeholder="Enter photo Theme" onChange={(e)=>{stheme(e.target.value)}}/>
            <label style={{
                        width: 70,
                        height: 50,
                        backgroundImage:`url(${image})`,
                        backgroundSize:'70px 50px',
                       
                    }}  for="photo"> <br/><br/><h5>select</h5>

            </label><label>{file.name}</label>
                <input type="file" id="photo" style={{display:'none'}} multiple onChange={(e)=>sfile(e.target.files)}/>
        </div>
        <br/>
        <br/>
            <p style={{textAlign:'center',fontWeight:'bold',color:'red'}}>If you can create the theme then you can select only one file, else select from dropdown you can select multiple files</p>
        <div style={{justifyContent:'center',display:'flex',padding:'1%'}}>
        <Button onClick={Upload} >{load?"Uploading":"Upload"}</Button>
        </div>
        <div >
           {
            data.map((val)=>
            (
               <>
               <h1 style={{textAlign:'center',color:'blue'}}>{val.Theme}</h1>
               {
                 val.Photo.map((val1)=>
                 (
                     <>
                         <img width={150} height={150} src={val1} style={{ margin: '0 0 3% 10%' }} />
                         <Button className='coruselbtn'>X</Button>
                    </>
                 ))
               }
               </>
            ))
           }
        </div>
        </>
    )
}