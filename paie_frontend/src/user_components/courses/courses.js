import React from "react";
import '../courses/courses.css';
import Header from "../header/header";
import gurupic from '../../../src/Assets/guruji_1.jpg';
import Footer from "../footer/footer";
const Courses = ({ course }) => {

    return(
        <>
        <Header/>
        <div className="courses-body"> 
        <h2>Youth Empoverment  Skills(YES+) </h2>
        <div className="odddiv">
          <div id="oddpic">
            <img src={gurupic} />
          </div>
          <p>
            <li>Be More Attentive</li>
            <li>Have Better Self-Control</li>
            <li>De-stress and Relax</li>
            <li>Be more Self-Aware</li>
            <li>Discover Breathing Tools for better life</li>
            <li>Relieve Stress & feel Happier in 60 minutes</li>
          </p>
        </div>
        <h2>Advanced Meditation  Programme</h2>
        <div className="evendiv">
          <p>
             <li>Experience deep Meditations</li>
            <li>Explore Meaningful Silence</li>
            <li>Relieve Emotional Stress</li>
            <li>Enhance Immunity</li>
            <li>Unlock Creativity</li>
            <li>Experience Higher Level of Energy</li>
          </p>
          <div id="evenpic">
          <img src={gurupic} />
          </div>
        </div>

        <h2>Happieness Programme</h2>
        <div className="odddiv">
          <div id="oddpic">
          <img src={gurupic} />
          </div>
          <p>
            <li>Boost Immunity and Health</li>
            <li>Ability to Manage Mind</li>
            <li>Relieve Stress,Anxiety & Depression</li>
            <li>Live with Joy and Purpose</li>
            <li>Increase Stamina</li>
            <li>Experience the evidence based breathing meditation</li>
          </p>
        </div>
        <h2>Dynamism For Self And Nation</h2>  
        <div className="evendiv">
          <p>
             <li>Break your Barriers</li>
            <li>Overcome your Fears</li>
            <li>Experience Limitless  Possibilities of  Your Mind</li>
            <li>Expand your Capabilities</li>
            <li>Access the Power with You</li>
            <li>Explore the role that You could play in creating a positive change in society</li>
          </p>
          <div id="evenpic">
          <img src={gurupic} />
          </div>
        </div>

        <h2>Intution Programme</h2>
        <div className="odddiv">
          <div id="oddpic">
          <img src={gurupic} />
          </div>
          <p>
            <li>Think creatively and innovate</li>
            <li>Take better decisions intuitively</li>
            <li>Have a relaxed yet dynamic frame of mind</li>
            <li>Develop an Intuition which guides them in every aspect of their life</li>
            <li>Interest in Academics</li>
            <li>Hyper Activity</li>
          </p>
        </div>
        <h2>Sahaj Samadi Course</h2>
        <div className="evendiv">
          <p>
             <li>Unlock Intuitive Skills</li>
            <li>Enhance Peace of Mind</li>
            <li>Improve Physical Health</li>
            <li>Boost Mental Clarity</li>
            <li>Meditation Technique Based on Personal Mantra</li>
            <li>Key Principles of Meditation</li>
          </p>
          <div id="evenpic">
          <img src={gurupic} />
          </div>
        </div>
      </div>
      <Footer/>
        </>
    )







}
export default Courses;