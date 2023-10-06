import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/home';
import Garden from './component/garden';
import Help from './component/help';
import Sensi from './component/sensi';
import Profil from './component/profil';
import CreateAccount from './component/createAccount';
import CreateMission from './component/createMission';
import LogIn from './component/logIn';
import PrivateRoute from './routes/privateRoute'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} /> 
        {/*  <Route index element={<Co_missions />} />  */}
          <Route path="help" element={<Help />} />
          <Route path="garden" element={<Garden />} />
          <Route path="sensi" element={<Sensi />} />
          <Route path="profil" element={<Profil />} />
          {/* Utilisez PrivateRoute pour protéger ces routes */}
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="createMission" element={<CreateMission />} />
          {/* La page de connexion n'a pas besoin de protection */}
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
