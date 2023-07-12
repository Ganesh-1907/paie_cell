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
                            <table>
                                <th>{item.month}</th>
                                <tr><h1>{item.day}</h1></tr>
                            </table>
                        </div>
                        <div className="event-event">
                            <h2>{item.event}</h2>
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