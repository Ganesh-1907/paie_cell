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
        {
            data.map((item)=>{
                return(
                    <>
                    <h1>{item.date}</h1>
                    <h1>{item.event}</h1>
                    </>
                )
            })
        }
        </>
    );
}

export default Events;