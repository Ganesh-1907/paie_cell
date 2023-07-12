import React from "react";
import './App.css';
import '../Login/Login.css';
import '../flash/flash.css';
import '../header/header.css';
import '../crousel/crousel.css';
import '../events/event.css';
import '../introduction/introduction.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Admin from '../../admin_components/admin/admin';
import Login from "../Login/Login";
import Flash from "../flash/flash";
import Events from "../events/events";
import Aboutsrkr from "../about/about_srkr/about_srkr";
import Aboutaol from "../about/about_paie/about_paie";
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
        <Route path="/aboutaol" element={<Aboutaol/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default App