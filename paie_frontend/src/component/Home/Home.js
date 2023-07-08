import React from "react";
import Flash from "../flash/flash";
import Header from "../header/header";
import Crousel from "../crousel/crousel";
import Introduction from "../introduction/introduction";
function Home(){
    return(
        <>
        <div className="main">
            <Flash/>
            <Header/>
            <Crousel/>
            <br/>
            <Introduction/>
        </div>
        
        </>
    )
}
export default Home;