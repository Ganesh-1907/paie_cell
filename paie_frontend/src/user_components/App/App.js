import React from "react";
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Admin from '../../admin_components/admin/admin';
function App(){
    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}
export default App