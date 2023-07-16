import React from "react";
import Flash from "../flash/flash";
import Header from "../header/header";
import Crousel from "../crousel/crousel";
import Introduction from "../introduction/introduction";
import Events from "../events/events";
import Activity from "../activities/activities";
import Programme from "../programmes/programme";
function Home(){
    return(
        <>
        <div className="main">
            <Flash/>
            <Header/>
            <Crousel/>
            <br/>
            <Introduction/>
            <br/>
            <br/>
            <br/>
            <Programme/>
            <Events/>
            <br/>
            <br/>
            <br/>
            <Activity/>
            
        </div>
        
        </>
    )
}
export default Home;