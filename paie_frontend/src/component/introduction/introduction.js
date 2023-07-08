import React from "react";
import image3 from "../../Assets/founder.jpg"
function Introduction(){
    return(
        <>
        <div className="intro-container">
            <div className="intro-left">
                <h1>ABOUT SRKR</h1>
                
                <img className="founder" src={image3} height="230px" width="160px" />
            </div>
            
            <div className="intro-middle">
                <div className="intro-mid-left">
                    <p>Sagi Rama Krishnam Raju Engineering College, established in 1980, is one of the earliest self-financing Engineering Colleges in the state of Andhra Pradesh. Established with a noble cause to empower rural students through technical education, the institution today has evolved as one of the pioneering</p>
                </div>
                <div className="intro-mid-right"></div>
            </div>
            <div className="intro-right">
                <h1>EVENTS</h1>
            </div>
            
        </div>
        </>
    )
}
export default Introduction;