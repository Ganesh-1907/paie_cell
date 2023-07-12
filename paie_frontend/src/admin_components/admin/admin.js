import React from "react";

import Header from "../../user_components/header/header";
import Admin_event from "../admin_event/admin_event";
import Admin_flash from "../admin_flash/admin_flash";
function Admin(){
    return(
        <>
         <div>
         <Header/>
         <div className="admin-event-container">

           <Admin_flash/>
           <br/>
           <br/>
           <Admin_event/>
         </div>
         </div>
        </>
    )
}
export default Admin;