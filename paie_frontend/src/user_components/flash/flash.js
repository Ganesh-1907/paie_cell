import axios from "axios";
import React, { useEffect, useState } from "react";
import image2 from '../../Assets/clg logo.png';
import Button from "react-bootstrap/esm/Button";

const Flash= () => {
    const[flash,setflash]=useState([]);

    useEffect(()=>{
        axios.post('http://localhost:8000/flashnews')
        .then((responce)=>
        {   
            setflash(responce.data);
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
                        <div className="flash">
                            <div className="flashbox">
                                <div className="flashmarq">
                                <div className="flashtext"><b>FLASH NEWS::</b></div>
                                <div className="marquee">
                                    <span >{item.flash}</span>
                                </div>
                                </div>
                                <div className="clg-logo">
                                    <Button href="/admin" style={{backgroundColor:'white',border:"none"}}><img src={image2} height="60px" width="200px" /></Button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
        </>
    );
}
export default Flash;