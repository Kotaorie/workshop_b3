import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Garden from "./component/garden";
import Help from "./component/help";
import Profil from "./component/profil";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />  
          <Route path="help" element={<Help />} />
          <Route path="garden" element={<Garden />} />
          <Route path="profil" element={<Profil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
