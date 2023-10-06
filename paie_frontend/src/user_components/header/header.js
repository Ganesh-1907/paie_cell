import React from "react";
import NavBar from "./navbar";
function Header() {
    return (
        <>
            <div className="border">
                <div className="bone1"></div>
                <div className="bone2">
                    <NavBar/>
                </div>
                <div className="title">PEOPLE ASSOCIATION FOR INNER ENGINEERING</div>
                <div className="subtitle"><text>IN ASSOCIATION WITH</text>
                <text className="foundation"> THE ART OF LIVING FOUNDATION</text></div>
            </div>
        </>
    )
}
export default Header;