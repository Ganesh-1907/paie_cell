import React from "react";
import fitindia from "../../Documents/FIT INDIA CHALLENGE.pdf";
import yogaforhumanity from "../../Documents/YOGA FOR HUMANITY.pdf";
import Rudrapuja from "../../Documents/Rudra Pooja.pdf";
import Yogadance from "../../Documents/Yoga Dance.pdf";
import darapalli from "../../Documents/Visit to Darapalle.pdf";
import yesday from "../../Documents/yes+ day 2022.pdf";

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div >
                <h2>COURSES</h2>
                <p>yes+</p>
                <p>DSN</p>
                <p>AMC</p>
                <p>Intution</p>
                <p>Happiness</p>
                <p>sahaj samadi</p>
            </div>
            <div className="footer-activity"> 
                <h2 >Activities</h2>
                <p><a href={fitindia} >Fit India</a></p>
                <p><a href={yogaforhumanity} >Yoga for Humanity</a></p>
                <p><a href={Rudrapuja} >Rudra puja</a></p>
                <p><a href={Yogadance} >Yoga Dance</a></p>
                <p><a href={darapalli} >Visit to Darapalli</a></p>
                <p><a href={yesday}>YES+ Day</a></p>
            </div>
            <div>
                <h2>sreeja</h2>
            </div>
            <div className="contact">
                <h2>contact us</h2>
                <p >
                    SRKR ENGINEERING COLLEGE<br/>
                    SRKR marg , chinnaamiram
                    Bhimavaram,A.P,India -534204<br/>
                    <span>phone :</span>  +91701113599,<br/>
                    +91 9989927666 <br/>
                    <span>Email :</span> paieactivities2002@gmail.com
                </p>
            </div>
        </div>
        </>
    )
}
export default Footer;