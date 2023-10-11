import "image-upload-react/dist/index.css";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import image from "../addingphotos/imageupload.jpeg"
export const Photos=()=>
{
    const[name,sname]=useState([]);
    const[upimage,supimage]=useState([]);
    return(
        <>
        <h1 style={{textAlign:'center'}}>Crousel Photos</h1>
        <div style={{display:'grid',justifyContent:'center'}}>
            <div>Hello <Button style={{backgroundColor:'black',border:'none'}}>X</Button></div>
        </div>
        <br/><br/>
        <div style={{display:'flex',justifyContent:'center',paddingBottom:'10%'}}>
            <input type="text"  style={{width:'20%',height:'5vh'}} placeholder="Enter photo name" defaultValue={upimage.name}/>
            <label style={{
                        width: 70,
                        height: 50,
                        backgroundImage:`url(${image})`,
                        backgroundSize:'70px 50px',
                       
                    }}  for="photo"> <br/><br/><h5>select Photo</h5>

            </label>
                <input type="file" id="photo" style={{display:'none'}} onChange={(e)=>supimage(e.target.files[0])}/>
                <Button>upload</Button>
        </div>
        </>
    )
}