// select rafce - used for genrating react functional components quickly

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
 
//Arrow function
const Main = () => {
  return (
    <div>
        {/* Rendering the header component */}
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
};

export default Main;