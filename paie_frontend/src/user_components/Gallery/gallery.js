import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Header from "../header/header";
import axios from "axios";
export const Gallery=()=>
{
    const [data,sdata]=useState([]);
    const[photo,sphoto]=useState([])
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
    const Openphoto=async(photo)=>
    {
        document.getElementById('fullphoto').style.display="block"
    }
    const Close=async()=>
    {
        document.getElementById('fullphoto').style.display="none"
    }
    return(
        <>
        <Header/>
        <div className="openphoto" id="fullphoto">
            <Button style={{backgroundColor:'orangered',position:'absolute'}} onClick={Close}>X</Button>
            <img src={photo} width={"100%"} height={"100%"}/>
        </div>
        <h1 style={{textAlign:'center'}}>Gallery</h1>
        <div >
           {
            data.map((val)=>
            (
                <>
                <h1 style={{textAlign:'center',fontSize:'60px',color:'blue'}}>{val.Theme}</h1>
                {
                    val.Photo.map((val1)=>
                    (
                        <img width={500} height={300} src={val1.Link} style={{margin:'0 0 3% 10%'}} onClick={Openphoto} onClickCapture={()=>sphoto(val1.Link)}/>
                    ))
                }
                </>
            ))
           }
        </div>
        </>
    )
}