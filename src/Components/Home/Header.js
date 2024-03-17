import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { propertyAction } from "../../Store/Property/property-slice";
import { getAllProperties } from "../../Store/Property/property-action";
import { UseDispatch, useDispatch } from "react-redux";

const Header = () => {

const dispatch = useDispatch();
const allproperties=()=>{
    dispatch(propertyAction.updateSearchParams({}));
    dispatch(getAllProperties())
}
return (
    <>
        <nav className="header row sticky-top">
        <Link to="/">
            <img src="/assets/logo.png" alt="logo" className="logo" onClick={allproperties}/>
        </Link>
        


        <div className="search_filter">
            <Search/>
            <Filter/>
        </div>
        
        
        <span class="material-symbols-outlined">
            account_circle
        </span>
   </nav>
   
    </>
    );
};

export default Header;
