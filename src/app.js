import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Garden from "./component/garden";
import Help from "./component/help";
import Sensi from "./component/sensi";
import Profil from "./component/profil";
import CreateAccount from "./component/createAccount";
import LogIn from "./component/logIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />  
          <Route path="help" element={<Help />} />
          <Route path="garden" element={<Garden />} />
          <Route path="sensi" element={<Sensi />} />
          <Route path="profil" element={<Profil />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="logIn" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
