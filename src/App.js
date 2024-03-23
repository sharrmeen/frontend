import Main from "./Components/Home/Main"
import PropertyList from "./Components/Home/PropertyList";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      //defines a Route component that matches all paths "/" and renders the Main component
      //exact properties ensurethat the route matches exactly what you gave in path
      <Route path ="/" element={<Main/>} id="main" exact>
      <Route id="home" index element={<PropertyList/>}exact/>
      <Route
          element={<PropertyDetails />}
          id='PropertyDetails'
          path='propertylist/:id'
          exact
        />
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
