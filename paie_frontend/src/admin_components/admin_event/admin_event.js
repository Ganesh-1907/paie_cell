import React from "react";
import { useState } from "react";
import axios from "axios";
    
function Admin_event(){

    const[day,setday]=useState();
    const[month,setmonth]=useState();
    const[year,setyear]=useState();
    const[event,setevent]=useState();

const Event=async()=>{
    const responce = await axios.post("http://localhost:8000/admin-event/"+day+"/"+month+"/"+year+"/"+event);
    console.log(responce.data)
    if(responce.data){
        alert("update successfully")
    }
    else{
        alert("failed")
    }
}
return(
    <>
     <h1>UPDATE EVENTS </h1>
            <input type="number" name="event-day" placeholder="event-day...." onChange={(e)=>setday(e.target.value)} />
            <input type="text" name="event-month" placeholder="event-month....." onChange={(e)=>setmonth(e.target.value)} />
            <input type="number" name="event-year" placeholder="event-year...." onChange={(e)=>setyear(e.target.value)} />
            <br/>
            <br/>
            <input name="event-name" placeholder="enter the event name....." onChange={(e)=>setevent(e.target.value)} />
            <br/>
            <br/>
            <button type="button" onClick={Event}>UPDATE</button>
    </>
)
}
export default Admin_event;
