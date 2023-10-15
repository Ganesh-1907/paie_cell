import axios from "axios";
import React, { useEffect, useState } from "react";
import image2 from '../../Assets/clg logo.png';

const Flash= () => {
    const[flash,setflash]=useState([]);

    useEffect(()=>{
        axios.post('http://localhost:8000/flashnews')
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
                        <div class="flash">
                            <div class="flashbox">
                                <div class="flashtext"><b>FLASH NEWS::</b></div>
                                <div class="marquee">
                                    <span >{item.flash}</span>
                                </div>
                                <div className="clg-logo"><img src={image2} height="60px" width="200px" /></div>
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