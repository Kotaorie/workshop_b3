import React from "react";
import "../css/navbar.css";
import {NavLink, Outlet} from "react-router-dom";

function Navbar(){
    return (
        <div>
            <div className="navdiv">
            <ul>
                <li>
                    <NavLink to="/" className="navbar-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/help" className="navbar-link">Help</NavLink>
                </li>
                <li>
                    <NavLink to="/garden" className="navbar-link">Garden</NavLink>
                </li>
                <li>    
                    <NavLink to="/profil" className="navbar-link">Profil</NavLink>
                </li>
            </ul>
            </div>
            <Outlet/>
        </div>
        
    );
    
}

export default Navbar;