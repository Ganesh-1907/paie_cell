import React from "react";
import image1 from '../../Assets/paie.png';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div class="border">
                <div class="bone1"></div>
                <div className="bone2">
                    <div className="bone2-left">
                        <div class="title-box">
                            <div className="logo"><img src={image1} width="65px" height="65px" /></div>
                            <div > PAIE CELL</div>
                        </div>
                    </div>
                    <div className="bone2-right">
                        <Link className="bone2-right-menu" to="/" >Home</Link>
                        <Link className="bone2-right-menu"  to="" >About</Link>
                        <Link className="bone2-right-menu" to="/" >Courses</Link>
                        <Link className="bone2-right-menu" to="/" >Registrations</Link>
                        <Link className="bone2-right-menu" to="" >Events</Link>
                        <Link className="bone2-right-menu" to="" >Body</Link>
                        <Link className="bone2-right-menu" to="" >Contact</Link>
                    </div>
                </div>
                <div class="bone3"></div>
                <div className="title">PEOPLE ASSOCIATION FOR INNER ENGINEERING</div>
            </div>
        </>
    )
}
export default Header;