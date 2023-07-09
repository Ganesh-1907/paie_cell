import React from "react";
import Flash from "../flash/flash";
import Header from "../header/header";
import Crousel from "../crousel/crousel";
import Introduction from "../introduction/introduction";
import Events from "../events/events";
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
            <Events/>
        </div>
        
        </>
    )
}
export default Home;