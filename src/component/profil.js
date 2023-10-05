import React from "react";
import { Link } from "react-router-dom";
import "../css/profil.css";
import Footer from "./footer";

function Profil(){
    return (    
        <div className="b1">
            <div className="b2">
                <div className="grid1"><h1>Bienvenue</h1></div>
                <div className="grid2"><Link to="/createAccount"><button>Creation de compte</button></Link></div>
                <div className="grid3"><Link to="/logIn"><button>Connexion</button></Link></div>
            </div>
            <Footer className="profile"/>
        </div>
    );
    
}

export default Profil;