import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div>
                <div class="flash">
                    <div class="flashbox">
                        <div class="flashtext"><b>FLASH NEWS::</b></div>
                        <div class="flas"><marquee scrollamount="4">New updates about paie cell are scrolling in this region </marquee></div>
                    </div>
                </div>
            </div>
            <div class="border">
                <div class="bone">
                    
                    <Link className="bone-item" to= "/" >Home</Link>
                    <Link className="bone-item"  to= "/" >course</Link>
                    <Link className="bone-item"  to= "/" >about</Link>
                    <Link className="bone-item"  to= "/" >contact</Link>
                    

                </div>
            </div>
            
                </>
                )
}
                export default Header;