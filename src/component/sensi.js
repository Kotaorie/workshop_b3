import React from "react";
import carImage from "../icone/car.png";
import "../css/sensi.css";

function Sensi() {
    return (
        <div>
            <div className="imageSensi">
                <img src={carImage} className="image-car" alt="carImage"/>
            </div>
           <div className="headerSensi">
            <h1>
                Combien de kilomètre réalisé vous par jour ?
            </h1>
           </div>
           <div className="searchBar">
            <input type="text" placeholder="Nombre de kilomètre..." pattern="[+-]?([0-9]*[.])?[0-9]+" required/>
           </div>
        </div>
    );
}

export default Sensi;