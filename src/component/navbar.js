import React from "react";
import "../css/navbar.css";
import IconeProfil from "../icone/profil.png";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navdiv">
        <div>
          <img src="/images/logo.png" alt="test" />
        </div>
        <ul>
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/garden" className="navbar-link">
              Co'Garden
            </NavLink>
          </li>
          <li>
            <NavLink to="/sensi" className="navbar-link">
              Co'Sensi
            </NavLink>
          </li>
          <li>
            <NavLink to="/createMission" className="navbar-link">
              Co'Mission
            </NavLink>
          </li>
          <li>
            <NavLink to="/don" className="navbar-link">
              Co'Dons
            </NavLink>
          </li>
          <li>
            <NavLink to="/profil" className="navbar-link profil">
              <img src={IconeProfil} className="image-profil" alt="IconeProfil" />
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;