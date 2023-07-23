import React from "react";
import Header from "../header/header";
import image1 from "../../Assets/happiness-club-1.jpg";
import image2 from "../../Assets/survey-pic.png";
import images1 from "../../Assets/survey/survey-1.png";
import images2 from "../../Assets/survey/survey-2.png";
import images3 from "../../Assets/survey/survey-3.png";
import images4 from "../../Assets/survey/survey-4.png";
import images5 from "../../Assets/survey/survey-5.png";
import images6 from "../../Assets/survey/survey-6.png";
import images7 from "../../Assets/survey/survey-7.png";
import images8 from "../../Assets/survey/survey-8.png";
function HappinessClub() {
    return (
        <>
            <Header />
            <h1 className="club-title">HAPPINESS CLUB</h1>
            <div className="club-container">
                <div className="club-image">
                    <img  src={image1} />
                    </div>
                    <br/><br/>
                <div className="writin">
                    <h2 style={{color : "orangered" }}>About Happiness Club</h2>
                    <p> Happiness Club was recently inaugurated in our college with the aim of promoting 
                        positivity, well-being, and mental health among students. The club will organise various 
                        activities and events such as meditation sessions, group discussions, and motivational 
                        talks to help students cope with stress and anxiety. The inauguration ceremony was attended 
                        by the college authorities, faculty members, and students who showed great enthusiasm and 
                        support for the initiative. The club is expected to create a positive and supportive 
                        environment on campus and contribute to the overall well-being of the students.</p>
                        <p>In order to create awareness on mind to make it able for 
                            shaping the young people careers, a session was planned by PAIE cell in association 
                            with the department of engineering chemistry</p>
                            <h2 style={{color : "orangered"}}>FEEDBACK</h2>
                        <p>The creation of a happiness club can be a great initiative for promoting positivity, mental 
                            health, and overall well-being among the students. It can also provide a platform for students to 
                            connect with each other and participate in activities that promote happiness and positivity. 
                            Inaugurating the club is a great step towards creating awareness and generating interest among
                             the student community. It is important to maintain the momentum and ensure that the club 
                             remains active and engaging over time.
                           The club  also encourage students to engage in community service or volunteering activities, 
                           which can help build a sense of purpose and satisfaction.</p>
                           <hr/>
                           <h1 className="club-survey">HAPPINESS SURVEY</h1>
                           <h3 className="club-survey-p">Survey conducted by Happiness Club to measure people's level of Happiness and Well-Being</h3>
                           <br/>
                           <div className="one">
                           <div>
                           <p>On International Happiness Day, a happiness survey was conducted on a college campus, which was a great success.</p>
                           <p>The survey aimed to gauge the level of happiness and satisfaction among the students and faculty members. 
                            The survey included questions about various aspects of life, such as mental well-being, level of happiness, 
                            botherations in life etc.A significant number of participants took part in the survey, reflecting a positive
                             response from the college community. The results of the survey showed that the majority of the 
                             participants reported feeling happy and content with their lives.HAPPINESS CLUB aims to shape the perceptive of a 
                             students life to experience Inner Peace and to express Outer Dynamism! . The HAPPINESS CLUB kick started it’s 
                             first program “YES!+, Youth Empowerment Skills workshop” which attracted 150+ participants to take a step towards a 
                             healthier and happier lifestyle.</p>  
                             </div>
                             <div><img src={image2}  /></div>
                             </div>
                             <hr/>
                             <br/>
                             <h1 className="club-survey">RESULT OF HAPPINESS SURVEY</h1>
                             <div className="result-cont">
                                <div><img src={images1} /> </div>
                                <div><img src={images2} /> </div>
                                <div><img src={images3} /> </div>
                                <div><img src={images4} /> </div>
                                <div><img src={images5} /> </div>
                                <div><img src={images8} /> </div>
                                <div><img src={images6} /> </div>
                                <div><img src={images7} /> </div>
                             </div>
                </div>
            </div>
        </>
    )
}
export default HappinessClub;