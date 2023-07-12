import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../../user_components/header/header";
function Admin(){

    const[date,setdate]=useState();
    const[event,setevent]=useState();
    const[flash,setflash]=useState();

    const Event=async()=>{
        const responce = await axios.post("http://localhost:8000/admin-event/"+date+"/"+event);
        console.log(responce.data)
        if(responce.data){
            alert("update successfully")
        }
        else{
            alert("failed")
        }
    }

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
         <div>
         <Header/>
         <div className="admin-event-container">

            <h1>FLASH NEWS UPDATE</h1>
            <input type="text" placeholder="update flash news here....."  onChange={(e)=>setflash(e.target.value)}/>
            <br/>
            <br/>
            <button type="button" onClick={Flash}>SUBMIT</button>
            
            <h1>UPDATE EVENTS </h1>
            <input type="date" name="event-date" onChange={(e)=>setdate(e.target.value)} />
            <br/>
            <br/>
            <input name="event-name" placeholder="enter the event name....." onChange={(e)=>setevent(e.target.value)} />
            <br/>
            <br/>
            <button type="button" onClick={Event}>UPDATE</button>
         </div>
         </div>
        </>
    )
}
export default Admin;