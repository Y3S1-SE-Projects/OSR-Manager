import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import ToastMsg from "./components/toastMsg";

const App = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route path={"/"} element={<ToastMsg/>}/>

            </Routes>

            <ToastContainer style={{ width: "400px" }}/>
        </BrowserRouter>
    );
};

export default App;