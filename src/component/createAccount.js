import React, { useState } from 'react';
import "../css/home.css";
import "../css/createAccount.css";
import Footer from './footer';
import axios from 'axios';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Créez un objet contenant les données du formulaire
    const userData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    // Envoyez une requête POST au serveur avec les données du formulaire
    axios.post('http://90.29.100.248:4000/api/users/register', userData)
      .then(response => {
        // La requête Axios a réussi, vous pouvez traiter la réponse ici
        console.log('Inscription réussie !', response);
        
      })
      .catch(error => {
        // Gérez les erreurs de la requête ici
        console.error('Erreur lors de l\'inscription :', error,'validations des données :',name, email, phone, password );
      });
  };
return (
    <div className='mission'>
        
        <form>
        <fieldset>
            <h2>Inscription</h2>
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
          <p>Déjà inscrit ? Connectez-vous.</p>
        <button type="button" onClick={handleRegister}>
          Créer un compte
        </button>
        </fieldset>
        </form>
        <Footer />
    </div>
    );
}

export default CreateAccount;