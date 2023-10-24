import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
function Admin_flash(){

    const[flash,setflash]=useState();
    const[data,sdata]=useState([]);
    const inputRef=useRef();
    const btnRef=useRef();
    const Flash=async()=>
    {
        if(!flash)
        {
            alert("")
        }
        else
        {
            try {
                const responce = await axios.post("http://localhost:8000/flashnews/" + flash);
                if (responce.data) {
                    alert("flash news update successfully")
                    window.location.reload(2);
                }
                else {
                    alert("failed")
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