import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Audiobooks from "./pages/Audiobooks";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Recommended from "./pages/Recommended";
import Sale from "./pages/Sale";
import Textbooks from "./pages/Textbooks";
import Checkout from "./pages/Checkout";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Logout from "./pages/auth/Logout";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<Books />} />
        <Route path="/magazine/*" element={<Magazine />} />
        <Route path="/textbooks/*" element={<Textbooks />} />
        <Route path="/audiobooks/*" element={<Audiobooks />} />
        <Route path="/recommended/*" element={<Recommended />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sale/*" element={<Sale />} />
      </Routes>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={3000}
        icon
      />
    </div>
  );
}

export default App;
