import React from "react";

import Button from "react-bootstrap/esm/Button";
import { Head } from "../head/head";
function Admin(){
    return(
        <>
        <Head/>
         <div>
         <div className="btns">
          <Button href="/addflash">Add Flash News</Button>
          <Button href="/addevent">Add Events</Button>
          <Button href="/courselphoto">Add Crousel</Button>
          <Button href="/addactivity">Add Activities</Button>
         </div>
         <div className="btns">
          <Button href="/addflash">Gallery</Button>
          {/* <Button href="/addevent">Add Events</Button>
          <Button href="/courselphoto">Add Crousel</Button>
          <Button href="/addflash">Add Activities</Button> */}
         </div>
         </div>
        </>
    )
}
export default Admin;