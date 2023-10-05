import React, { useState } from 'react';

import "../css/createMission.css";
import Footer from './footer';

function CreateMission(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categorieSelect, setCategorieSelect] = useState("");
    const [points, setPoints] = useState(0);

    const categories = [
        { id:1, nom: "Jardinage"},
        { id:2, nom: "Menuiserie"},
        { id:3, nom: "Plomberie"},
        { id:4, nom: "Cuisine"}
    ];

    const handleCreateMission = () =>{

    }
    return (
        <div className='mission'>
            <form className='create'>
            <div>
                <h2>  Ajouter une mission</h2>
            </div>
                <fieldset>
                    <div className='formInput'>
                        <label htmlFor="">
                            Titre de la mission :
                            <input type="text" value={title} onChange={ (e)=>setTitle(e.target.value) } />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Description de la mission :
                            <textarea value={description} onChange={ (e)=>setDescription(e.target.value) } name="description" cols="20" rows="7"></textarea>
                        </label>
                    </div>         
                    <div>
                        <label htmlFor="">
                            Ajouter vos images
                            <input type="file" />
                        </label>
                    </div>

                    <div >
                        <label htmlFor="category"> Sélectionner votre catégorie </label>
                        <select className='selection' id="category" value={categorieSelect} onChange={e=>setCategorieSelect(e.target.value)} >
                            {categories.map((categorie)=> {
                                return <option id={categorie.id} name={categorie.nom}> {categorie.nom} </option> 
                            }

                            )}
                        </select>
                    </div>

                    <div >
                        <label > Points de la mission</label>
                        <input id='lesPoints' type="range" min={0} max={10000} value={points} onChange={e=>setPoints(e.target.value)} step={10}/>
                        <h2> {points} </h2>
                    </div>
                    <div>
                        <button type= "button" onClick={handleCreateMission}> Créer la mission </button>
                    </div>

                </fieldset>
            </form>
            <Footer />
        </div>
    )
}

export default CreateMission;