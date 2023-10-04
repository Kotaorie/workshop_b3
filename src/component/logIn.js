import React, { useState } from 'react';
import "../css/home.css";


function LogIn(){
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = () => {}
    return (
        <div>
            <h2>Connexion</h2>
            <form>
            <fieldset>
                <div>
                <label>
                    E-mail
                    <input type="email" v alue={email} onChange={(e) =>setEmail(e.target.value)} />
                </label>
                </div>
                <div>
                <label>
                    Mot de passe type
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                </label>
                </div>
                <p>Mot de passe oublié ?</p>
                <button type="button" onClick={handleLogin}>
                    Connexion
                </button>
                <p>Pas encore de compte ? Inscrivez-vous</p>
            </fieldset>
            </form>
        </div>
    )
}

export default LogIn;