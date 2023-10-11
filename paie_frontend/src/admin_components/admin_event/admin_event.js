import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
    
function Admin_event(){

    const[day,setday]=useState();
    const[month,setmonth]=useState();
    const[year,setyear]=useState();
    const[event,setevent]=useState();
    const[details,setdetails] = useState();

const Event=async()=>{
    const responce = await axios.post("http://localhost:8000/admin-event/"+day+"/"+month+"/"+year+"/"+event+"/"+details);
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
     <h1 style={{textAlign:'center'}}>UPDATE EVENTS </h1>
            <div  style={{display:'grid',justifyContent:'center'}}>
            <input type="number" pattern="\d+" name="event-day" placeholder="event-day...." onChange={(e)=>setday(e.target.value)} />
            <br/>
            <input type="text" name="event-month" placeholder="event-month....." onChange={(e)=>setmonth(e.target.value)} />
            <br/>
            <input type="number" name="event-year" placeholder="event-year...." onChange={(e)=>setyear(e.target.value)} />
            <br/>
            <input name="event-name" style={{width:'150%'}} placeholder="enter the event name....." onChange={(e)=>setevent(e.target.value)} />
            <br/>
            <textarea type="text" style={{width:'150%'}} className="event-details" name="event-details" placeholder="event-details shortly" onChange={(e)=>setdetails(e.target.value)}/>
            <br/>
            <br/>
            <Button type="button" onClick={Event}>UPDATE</Button>
            </div>
    </>
)
}
export default Admin_event;
