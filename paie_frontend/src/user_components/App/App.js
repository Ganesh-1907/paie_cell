import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddGallery } from "../../admin_components/Admin_Gallery/admin_gallery";
import { Activites } from "../../admin_components/activities/activites";
import { Photos } from "../../admin_components/addingphotos/photo";
import Admin from '../../admin_components/admin/admin';
import Admin_event from "../../admin_components/admin_event/admin_event";
import Admin_flash from "../../admin_components/admin_flash/admin_flash";
import { FinalList } from "../../admin_components/finallist/finallist";
import { Confirmregister } from "../../admin_components/registrations/confirmregisteration";
import { Register } from "../../admin_components/registrations/registrations";
import '../../user_components/footer/footer.css';
import '../../user_components/happinessclub/happinessclub.css';
import '../../user_components/programmes/programme.css';
import '../../user_components/solution/solution.css';
import { Gallery } from "../Gallery/gallery";
import Home from "../Home/Home";
import '../Login/Login.css';
import { Uploadphoto } from "../Login/uploadphoto";
import Aboutaol from "../about/about_aol/about_aol";
import Aboutpaiecell from "../about/about_paie/about_paie";
import '../about/about_paie/about_paie.css';
import Aboutsrkr from "../about/about_srkr/about_srkr";
import '../activities/activities.css';
import Commitee from "../commitee/commitee";
import Courses from "../courses/courses";
import '../crousel/crousel.css';
import '../events/event.css';
import Events from "../events/events";
import Flash from "../flash/flash";
import '../flash/flash.css';
import HappinessClub from "../happinessclub/happinessclub";
import '../header/header.css';
import '../introduction/introduction.css';
import './App.css';
import { Adminregister } from "../Home/register";
import { Update } from "../Login/updatepassword";
function App(){
    return(
    <>
    <Flash/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/paiecell" element={<Adminregister/>}/>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/addflash" element={sessionStorage.adminmail?<Admin_flash/>:<Admin/>}/>
        <Route path="/addevent" element={sessionStorage.adminmail?<Admin_event/>:<Admin/>}/>
        <Route path="/courselphoto" element={sessionStorage.adminmail?<Photos/>:<Admin/>}/>
        <Route path="/addactivity" element={sessionStorage.adminmail?<Activites/>:<Admin/>}/>
        <Route path="/addgallery" element={sessionStorage.adminmail?<AddGallery/>:<Admin/>}/>
        <Route path="/register" element={sessionStorage.adminmail?<Register/>:<Admin/>}/>
        <Route path="/confirmation" element={sessionStorage.adminmail?<Confirmregister/>:<Admin/>}/>
        <Route path="/uploadphoto" element={<Uploadphoto/>}/>
        <Route path="/finallist" element={sessionStorage.adminmail?<FinalList/>:<Admin/>}/>
        <Route path="/updatepassword" element={<Update/>}/>
        <Route path="/flash" element={<Flash/>}></Route>
        <Route path="/event" element={<Events/>}></Route>
        <Route path="/gallery" element={sessionStorage.studentmail?<Gallery/>:<Home/>}/>
        <Route path="/aboutsrkr" element={<Aboutsrkr/>}></Route>
        <Route path="/aboutpaiecell" element={<Aboutpaiecell/>}></Route>
        <Route path="/aboutaol" element={<Aboutaol/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/commitee" element={<Commitee/>}></Route>
        <Route path="/happinessclub" element={<HappinessClub/>}></Route>
        <Route path="/login" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default App