import React from "react";
import image2 from '../../Assets/clg logo.png';
function Flash(){
    return(
        <>
        <div class="flash">
            <div class="flashbox">
                <div class="flashtext"><b>FLASH NEWS::</b></div>
                <div class="flas"><marquee scrollamount="4">New updates about paie cell are scrolling in this region </marquee></div>
                <div className="clg-logo"><img src={image2} height="50px" width="200px" /></div>
            </div>
        </div>
        </>
    )
}
export default Flash;