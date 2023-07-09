import React from "react";
import image2 from '../../Assets/clg logo.png';
function Flash(){
    return(
        <>
        <div class="flash">
            <div class="flashbox">
                <div class="flashtext"><b>FLASH NEWS::</b></div>
                <div class="marquee">

                     <span>First Text is visible firest in the region of space</span>
                    <span>Second Text</span>
                    <span>Third Text</span>

                </div>
                <div className="clg-logo"><img src={image2} height="50px" width="200px" /></div>
            </div>
        </div>
        </>
    )
}
export default Flash;