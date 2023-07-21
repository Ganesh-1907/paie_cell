import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/header";
const Events= () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/events')
        .then((responce)=>{   
            setData(responce.data.sort());
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        <Header/>
        <h1 className="events">EVENTS</h1>
        {
             data.map((item)=>{
                return(
                    <>
                        <div className="event-display">
                            <table>
                                <tr>
                                    <td className="table1">
                                        <th>{item.month}</th>
                                        <tr><h1>{item.day}</h1></tr>
                                        <th>{item.year}</th>
                                    </td>
                                    <td>
                                    <th className="table-event">{item.event}</th>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </>
                )
            })
        }
        </>
    );
}
export default Events;