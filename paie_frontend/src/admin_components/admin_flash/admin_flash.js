import React from "react";
import { useState } from "react";
import axios from "axios";
function Admin_flash(){

    const[flash,setflash]=useState();
 
    const Flash=async()=>{
        const responce = await axios.post("http://localhost:8000/flash-news/"+flash);
        console.log(responce.data)
        if(responce.data){
            alert("flash news update successfully")
        }
        else{
            alert("failed")
        }
    }
    return(
        <>
              <h1>FLASH NEWS UPDATE</h1>
            <input type="text" placeholder="update flash news here....."  onChange={(e)=>setflash(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" onClick={Flash}>SUBMIT</button>
            
        </>
    )
}
export default Admin_flash;