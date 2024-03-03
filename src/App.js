// import logo from './logo.svg';
import "./App.css";
import React from "react";
import PropertyList from "./Components/Home/PropertyList";
//importing necessary components and function for routing
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";

import Main from "./Components/Home/Main"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      //defines a Route component that matches all paths "/" and renders the Main component
      //exact properties ensurethat the route matches exactly what you gave in path
      <Route path ="/" element={<Main/>} exact>
      <Route path="/" element={<PropertyList/>}exact/>
      </Route>

    )
  );
  return(
     <div className="App">
    {/* This ensures that the routing functionality is available throughout the application */}
    <RouterProvider router={router} />
  </div>
  );
}


export default App;
