// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
// import './App.css';
import Album from "./Components/Album";
import BasicMap from "./Components/BasicMap";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
// import { auth } from "./Firebase";
// import {Auth} from './Context/api';
// import { useContext } from 'react';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Album />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
      
          <Route path="/map/:type" element={<BasicMap />} />
        
      </Routes>
    </div>
  );
}

export default App;
