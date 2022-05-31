<<<<<<< HEAD
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
=======
import React,{useContext} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535

import { Context } from "./context/Context";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
<<<<<<< HEAD

const App = () => {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        {/*<Route path={"/"} element={<ToastMsg/>}/>*/}

        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>

      <ToastContainer style={{ width: "400px" }} />
    </Router>
  );
};

export default App;
=======
import CreateGroup from "../src/pages/CreateGroup/CreateGroup"
import ViewGroup from "../src/pages/ViewGroup/ViewGroup"
import Copyright from "./components/Copyright";

const App = () => {
    const { user } = useContext(Context);

    return (
        <BrowserRouter>
            <TopBar />
            <Routes>

                {/*<Route path={"/"} element={<ToastMsg/>}/>*/}

                    <Route exact path="/" element={<Home />} />
                    <Route path="/register" element={user ? <Home /> : <Register />} />
                    <Route path="/login" element={user ? <Home /> : <Login />} />
                    <Route path="/write" element={user ? <Write /> : <Login />} />
                    <Route path="/settings" element={user ? <Settings /> : <Register />} />
                    <Route path="/post/:postId" element={<Single />}/>
                    <Route path="/create_group" element={<CreateGroup />}/>
                    <Route path="/groups" element={<ViewGroup />}/>
            </Routes>

            <ToastContainer style={{ width: "400px" }}/>
            <Copyright/>
        </BrowserRouter>
    );
};

export default App;
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
