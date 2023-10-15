import React from "react";
import './App.css';
import '../Login/Login.css';
import '../flash/flash.css';
import '../header/header.css';
import '../crousel/crousel.css';
import '../events/event.css';
import '../introduction/introduction.css';
import '../activities/activities.css';
import '../../user_components/programmes/programme.css';
import '../../user_components/solution/solution.css';
import '../../user_components/footer/footer.css';
import '../about/about_paie/about_paie.css';
import '../../user_components/happinessclub/happinessclub.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Admin from '../../admin_components/admin/admin';
import Login from "../Login/Login";
import Flash from "../flash/flash";
import Events from "../events/events";
import Admin_flash from "../../admin_components/admin_flash/admin_flash";
import Admin_event from "../../admin_components/admin_event/admin_event";
import { Photos } from "../../admin_components/addingphotos/photo";
import Aboutsrkr from "../about/about_srkr/about_srkr";
import Aboutaol from "../about/about_aol/about_aol";
import Aboutpaiecell from "../about/about_paie/about_paie";
import Commitee from "../commitee/commitee";
import Courses from "../courses/courses";
import HappinessClub from "../happinessclub/happinessclub";
import { Activites } from "../../admin_components/activities/activites";
function App(){
    return(
    <>
    <Flash/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/flash" element={<Flash/>}></Route>
        <Route path="/event" element={<Events/>}></Route>
        <Route path="/aboutsrkr" element={<Aboutsrkr/>}></Route>
        <Route path="/aboutpaiecell" element={<Aboutpaiecell/>}></Route>
        <Route path="/aboutaol" element={<Aboutaol/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/commitee" element={<Commitee/>}></Route>
        <Route path="/happinessclub" element={<HappinessClub/>}></Route>
        <Route path="/addflash" element={<Admin_flash/>}/>
        <Route path="/addevent" element={<Admin_event/>}/>
        <Route path="/courselphoto" element={<Photos/>}/>
        <Route path="/addactivity" element={<Activites/>}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default App