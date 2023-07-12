import React, { useEffect, useState } from "react";
import axios from "axios";

const Flash= () => {
    const[flash,setflash]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/flash-news')
        .then((responce)=>{   
            setflash(responce.data.sort().reverse());
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
        {
            flash.map((item)=>{
                return(
                    <>
                    <marquee >
                    <h1>{item.flash}</h1>
                    </marquee>
                    </>
                )
            })
        }
        </>
    );
}
export default Flash;