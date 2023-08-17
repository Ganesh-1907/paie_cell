import React from "react";

import yes from '../../Documents/footer-courses/yes+.pdf';
import dsn from '../../Documents/footer-courses/DSN.pdf';
import amc from '../../Documents/footer-courses/AMC.pdf';
import intution from '../../Documents/footer-courses/Intution.pdf';
import happiness from '../../Documents/footer-courses/Happiness.pdf';
import sahajsamadhi from '../../Documents/footer-courses/Sahaj Samadhi.pdf';
import artexcel from '../../Documents/footer-courses/ART Excel.pdf';

import happinesssurvey from '../../Documents/footer-sp-activities/Happiness survey.pdf';
import yogaforhumanity from "../../Documents/footer-sp-activities/YOGA FOR HUMANITY.pdf";
import Rudrapuja from "../../Documents/footer-sp-activities/Rudra Pooja.pdf";
import Yogadance from "../../Documents/footer-sp-activities/Yoga Dance.pdf";
import darapalli from "../../Documents/footer-sp-activities/Visit to Darapalle.pdf";
import yesday from "../../Documents/footer-sp-activities/yes+ day 2022.pdf";
import gurujivisit from "../../Documents/footer-sp-activities/Visit of sri sri.pdf";

import knowyourmind from "../../Documents/footer-courses/KNOW YOUR MIND.pdf";
import projectpavitra from "../../Documents/Activities/Project pavithra.pdf";

import fitindia from "../../Documents/achievements/FIT INDIA CHALLENGE.pdf";
import certificate from "../../Documents/achievements/fit-certificate.jpg";

function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="footer-activity"> 
                <h3 >Special Activities</h3>
                <hr/>
                <h6><a href={yogaforhumanity} >Yoga for Humanity</a></h6>
                <h6><a href={Yogadance} >Yoga Dance</a></h6>
                <h6><a href={yesday}>YES+ Day</a></h6>
                <h6><a href={Rudrapuja} >Rudra puja</a></h6>
                <h6><a href={happinesssurvey} >Happiness Survey</a></h6>
                <h6><a href={darapalli} >Visit to Darapalli</a></h6>
                <h6><a href={gurujivisit}>Visit Of Guruji ( sri sri )</a></h6>
            </div>
            <div className="footer-document">
                <h3>Documents</h3>
                <hr/>
                <h6><a href={happiness} >Happiness Course</a></h6>
                <h6><a href={yes} >YES+ Course</a></h6>
                <h6><a href={sahajsamadhi} >Sahaj Samadi Course </a></h6>
                <h6><a href={intution} >Intution Course</a></h6>
                <h6><a href={dsn} >DSN Course</a></h6>  
                <h6><a href={artexcel} >Art Excel Course</a></h6>
                <h6><a href={amc} >AMC Course</a></h6> 
            </div>
            <div className="footer-document">
                <h3>workshops</h3>
                <hr/>
                <h6><a href={knowyourmind}>Know your mind</a></h6>
                <h6><a href={projectpavitra}>Project Pavitra</a></h6>
                <br/>
                <h3>Achievements</h3>
                <hr/>
                <h6><a href={fitindia}>Fit India</a></h6>
                <h6><a href={certificate}>Fit India Certificate</a></h6>
            </div>
            <div className="contact">
                <h3>Contact us</h3>
                <hr/>
                <p >
                    SRKR ENGINEERING COLLEGE<br/>
                    (Autonomous)<br/><br/>
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