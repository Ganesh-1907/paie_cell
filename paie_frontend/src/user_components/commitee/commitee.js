import React from "react";
import Header from "../header/header";
import image1 from '../../Assets/guruji.jpg';
function Commitee(){
    return(
        <>
        <Header/>
        <div className="commitee-container">
            <img src={image1}  height="250px" width="200px"/>
        </div>
        </>
    )
}
export default Commitee;