import React from "react";
import image3 from "../../Assets/founder.jpg";
import image1 from "../../Assets/paie-logo.jpg";
import image2 from "../../Assets/guruji.jpg";
function Introduction(){
    return(
        <>
        <div className="intro-container">
            <div className="intro-left">
                <div><h2>ABOUT SRKR</h2></div>
                <div className="block-division">
                    <div className="intro-left-left">
                        <img className="founder" src={image3} height="220px" width="160px" />
                    </div>
                    <div className="intro-left-right">
                        <h5>Welcome to SRKREC !</h5>
                        <p> Sagi Rama Krishnam Raju Engineering College, established in 1980,
                            is one of the earliest self-financing Engineering Colleges in the state
                            of Andhra Pradesh. Established in Bhimavarm WestGodavari District.</p>
                    </div>
                </div>
                <div>
                    <p>Spreading over 30 acres of green land, the institution has set in state-of-the-art 
                        facilities for science and technology and created a conducive environment for 
                        inclusive and culturally responsive teaching-learning process.Alongside education 
                        and research, it established a history of work ethos that supports students in 
                        developing a creative, confident and logical approach to nation building, making 
                        them highly valued graduates and opening doors to a wide range of exciting careers.
                        Sri S. Prasad Raju, the President of the institution, carries forward the vision of
                        his father Late Sri Sagi Rama Krishnam Raju, a philanthropist, driving the institution 
                        on the academic path of excellence.   <a href="">Read More..</a></p>

                </div>  
            </div>
            
            <div className="intro-left">
                <div><h2>ABOUT PAIE CELL</h2></div>
                <div className="block-division">
                    <div className="intro-left-left">
                        <img className="founder" src={image1} height="220px" width="160px" />
                    </div>
                    <div className="intro-left-right">
                        <h5>Welcome to PAIE CELL !</h5>
                        <p></p>
                    </div>
                </div>
                <div>
                    <p></p>    
                </div>  
            </div>


            <div className="intro-left">
                <div><h3>ABOUT ART OF LIVING</h3></div>
                <div className="block-division">
                    <div className="intro-left-left">
                        <img className="founder" src={image2} height="220px" width="160px" />
                    </div>
                    <div className="intro-left-right">
                        <h5>Jai Gurudev !</h5>
                        <p> The Art of Living Foundation is a volunteer-based, humanitarian and educational 
                            non-governmental organization (NGO).It was founded in 1981 by Ravi Shankar. 
                            The Art of Living Foundation has its centers in 180 countries.</p>
                    </div>
                </div>
                <div>
                    <p>The majority of the officers of the organization, along with most of its teachers and staff, 
                       are volunteers.Many of its programs are conducted through, or in conjunction with a partner 
                       organization, the International Association for Human Values (IAHV). It's programs draw on 
                       Advaita Vedanta tradition and practices.The Foundation operates as a charitable or a non-profit 
                       organization with chapters in many parts of the world.Its stress-elimination and self-development 
                       programs are based on the breathing technique Sudarshan Kriya, meditation and yoga.This technique 
                       is a major part of Art of Living courses.These courses have been conducted for students and faculty,
                       government officials,firemen,ex-militants,and prisoners.  <a href="">Read More..</a></p>    
                </div>  
            </div>
        </div>
        </>
    )
}
export default Introduction;