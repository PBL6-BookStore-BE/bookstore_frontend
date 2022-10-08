import React from "react";
import { Route, Routes } from "react-router-dom";
import Audiobooks from "./pages/Audiobooks";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Recommended from "./pages/Recommended";
import Sale from "./pages/Sale";
import Textbooks from "./pages/Textbooks";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<Books />} />
        <Route path="/magazine/*" element={<Magazine />} />
        <Route path="/textbooks/*" element={<Textbooks />} />
        <Route path="/audiobooks/*" element={<Audiobooks />} />
        <Route path="/recommended/*" element={<Recommended />} />
        <Route path="/sale/*" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
