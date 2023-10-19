import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Header from "../header/header";
import axios from "axios";
export const Gallery=()=>
{
    const [data,sdata]=useState([]);
    useEffect(()=>
    {
        axios.post("http://localhost:8000/showgallery")
        .then((res)=>
        {
            sdata(res.data)
            // console.log(res.data)
        })
        .catch((e)=>console.log(e));
    })
    return(
        <>
        <Header/>
        <h1 style={{textAlign:'center'}}>Gallery</h1>
        <div >
           {
            data.map((val,index)=>
            (
                <>
                <h1 style={{textAlign:'center',fontSize:'60px',color:'blue'}}>{val.Theme}</h1>
                {
                    val.Photo.map((val1)=>
                    (
                        <img width={500} height={300} src={val1} style={{margin:'0 0 3% 10%'}}/>
                    ))
                }
                </>
            ))
           }
        </div>
        </>
    )
}