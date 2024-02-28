import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const Header = () => {
return (
    <>
        <nav className="header row sticky-top">
        <img src="/assets/logo.png" alt="logo" className="logo"/>
        


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
