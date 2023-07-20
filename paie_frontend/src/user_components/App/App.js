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
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Admin from '../../admin_components/admin/admin';
import Login from "../Login/Login";
import Flash from "../flash/flash";
import Events from "../events/events";
import '../about/about_srkr/about_srkr.css';
import '../about/about_aol/about_aol.css';
import '../about/about_paie/about_paie.css';
import Aboutsrkr from "../about/about_srkr/about_srkr";
import Aboutpaie from "../about/about_paie/about_paie";
import Aboutaol from "../about/about_aol/about_aol";
function App(){
    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/flash" element={<Flash/>}></Route>
        <Route path="/event" element={<Events/>}></Route>
        <Route path="/aboutsrkr" element={<Aboutsrkr/>}></Route>
        <Route path="/aboutpaie" element={<Aboutpaie/>}></Route>
        <Route path="/aboutaol" element={<Aboutaol/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
    )
}
export default App