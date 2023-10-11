import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
function Admin_flash(){

    const[flash,setflash]=useState([]);
    const[data,sdata]=useState([]);
    const Flash=async()=>{
        try
        {
            const responce = await axios.post("http://localhost:8000/flashnews/"+flash);
        if(responce.data){
            alert("flash news update successfully")
            window.location.reload(2);
        }
        else{
            alert("failed")
        }
        }
        catch
        {
            console.log("Ok cool");
        }
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/flashnews")
        .then((res)=>
        {
            sdata(res.data)
        })
        .catch((e)=>console.log("ok cool"))
    })
    return(
        <>
            <h1 style={{textAlign:'center'}}>FLASH NEWS UPDATE</h1>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <textarea type="text" style={{width:'50%'}} defaultValue={data.flash} placeholder="update flash news here....."  onChange={(e)=>setflash(e.target.value)}/>
            <br/>
            <br/>
            <Button onClick={Flash}>SUBMIT</Button>
           </div>
            
        </>
    )
}
export default Admin_flash;