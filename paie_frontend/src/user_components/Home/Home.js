import React from "react";
import Flash from "../flash/flash";
import Header from "../header/header";
import Crousel from "../crousel/crousel";
import Introduction from "../introduction/introduction";
import Events from "../events/events";
import Activity from "../activities/activities";
import Programme from "../programmes/programme";
import Solution from "../solution/solution";
import Footer from "../footer/footer";
function Home(){
    return(
        <>
        <div className="main">
            <Flash/>
            <Header/>
            <Crousel/>
            <br/>
            <Programme/>
            <br/>
            <Introduction/>
            <br/>
            <br/>
            <Activity/>
            <br/>
            <Solution/>
            <Footer/>
        </div>
        
        </>
    )
}
export default Home;