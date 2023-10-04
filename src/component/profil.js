import React from "react";
import { Link } from "react-router-dom";
import "../css/profil.css";
import Footer from "./footer";

function Profil(){
    return (    
        <div className="b1">
            <div className="b2">
                <div className="grid1"><h1>Welcome</h1></div>
                <div className="grid2"><Link to="/createAccount"><button>Create account</button></Link></div>
                <div className="grid3"><Link to="/logIn"><button>Log in</button></Link></div>
            </div>
            <Footer />
        </div>
    );
    
}

export default Profil;