import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
import Table from "react-bootstrap/esm/Table";
    
function Admin_event(){

    const[day,setday]=useState();
    const[month,setmonth]=useState();
    const[year,setyear]=useState();
    const[event,setevent]=useState();
    const[details,setdetails] = useState();
    const inputRef=useRef();
    const btnRef=useRef();
    const[data,sdata]=useState([])
    console.log(!day)
    const Event = async () =>
    {
        if(!day || !month || !year || !event || !details)    
        {
            alert("")
        }
        else
        {
            const responce = await axios.post("http://localhost:8000/admin-event/" + day + "/" + month + "/" + year + "/" + event + "/" + details);
            if (responce.data) {
                alert("update successfully")
            }
            else {
                alert("failed")
            }
        }
    }
    const Deletevent=async()=>
    {
        await axios.post("http://localhost:8000/delete-event/"+event)
        .then((res)=>
        {
            if(res.data)
            {
                alert("deleted");
            }
            else
            {
                alert("Try again");
            }
        })
        .catch((e)=>console.log(e));
    }
    useEffect(()=>
    {
        axios.post("http://localhost:8000/events/")
        .then((res)=>
        {
            sdata(res.data)
            console.log(data)
        })
    })
return(
    <>
    <Head/>
        <div>
            <Table bordered responsive hover variant="lightblue">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>Event</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, index) =>
                        (
                            <>
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.event}</td>
                                <td>
                                    <Button style={{backgroundColor:'red'}} onClick={Deletevent} onClickCapture={()=>setevent(val.event)}>Delete</Button>
                                </td>
                            </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        </div>
     <h1 style={{textAlign:'center'}}>UPDATE EVENTS </h1>
            <div  style={{display:'grid',justifyContent:'center'}}>
            <input type="number" pattern="\d+" name="event-day" placeholder="event-day...." onChange={(e)=>setday(e.target.value)}/>
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
            <Button type="button" onClick={Event} ref={btnRef}>UPDATE</Button>
            </div>
    </>
)
}
export default Admin_event;
