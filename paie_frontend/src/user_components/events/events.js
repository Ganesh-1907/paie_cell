import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
const Events= () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.post('http://localhost:8000/events')
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
        <div className="event">
        <h1 className="events">EVENTS</h1>
        {
             data.map((item)=>{
                return(
                    <>
                        <div className="box-event">
                            <div className="box-event-left">
                                <table>
                                    
                                    <tr><h2>{item.day}</h2></tr>
                                    <tr><h5>{item.month}</h5></tr>
                                    <tr><h5>{item.year}</h5></tr>
                                </table>
                            </div>
                            <div className="box-event-right">
                                <table>
                                    <tr><h5>{item.event}</h5></tr>
                                    <tr><p>{item.details}</p></tr>
                                </table>
                            </div>
                        </div>
                    </>
                )
            })
        }
        <br/>
        <br/>
        </div>
        <Footer/>
        </>
    );
}
export default Events;