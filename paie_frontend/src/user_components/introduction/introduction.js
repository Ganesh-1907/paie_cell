import React from "react";
import image1 from "../../Assets/paie-logo.jpg";
function Introduction(){
    return(
       <>
       <div className="introduction-container">
        <h1>WHAT IS PAIE : </h1>
        <br/>
        <div id="rajupic">
        <img src={image1} height="260px" width="200px" />
        </div>
        <div className="writin">
            <h3>People Association For Inner Engineering</h3>
            <li>Physical,Emotional , Social and Spiritual well being of Students Faculty and in and around People of Bhimavaram.
                To Serve Humanity as to get Balance in day to day life
            </li>
            <br/>
            <h3>Objectives</h3>
            <li>To Energise the inner Capabilities of the students in various aspects like fear over their Studies,
                Stage fear, Control over emotions,Developing intrapersonal Skills..etc.
            </li>
            <li>Empowering the youth through various Social Activities which relate to our Surroundings</li>
            <li>To conduct stress free,relaxation,meditation programs in our college to both Students and Staff</li>

        </div>
       </div>
       </>
    )
}
export default Introduction;