import React, { useEffect, useState } from "react";
import axios from "axios";

const Events= () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/events')
        .then((responce)=>{   
            setData(responce.data.sort().reverse());
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        <h1>EVENTS</h1>
        {
            data.map((item)=>{
                return(
                    <>
                    <div className="event-container">
                          <div className="event-date">
                          <table >
                          <tr id="month">{item.month}</tr>
                            <tr id="day">{item.day}</tr>
                            
                            <tr>{item.event}</tr> 
                          </table>
                          </div>
                        </div>
                    </>
                )
            })
        }
        </>
    );
}
export default Events;