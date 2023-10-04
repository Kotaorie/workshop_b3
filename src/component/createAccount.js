import React, { useState } from 'react';
import "../css/home.css";

function CreateAccount(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegister = () => {}
return (
    <div>
        <h2>Inscription</h2>
        <form>
        <fieldset>
            <div>
                <label>
                    Nom d'utilisateur
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
                </label>
            </div>
            <div>
                <label>
                    E-mail:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Télephone
                    <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
            </div>
            <div>
            <label>
              Mot de passe:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Confirmez le mot de passe:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
          </div>
          <p>Déjà inscrit ? Connectez-vous.</p>
        <button type="button" onClick={handleRegister}>
          Créer un compte
        </button>
        </fieldset>
        </form>
    </div>
    );
}

export default CreateAccount;