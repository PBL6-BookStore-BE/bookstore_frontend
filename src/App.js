import React from "react";
import { Route, Routes } from "react-router-dom";
import Audiobooks from "./pages/Audiobooks";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Magazine from "./pages/Magazine";
import Recommended from "./pages/Recommended";
import Sale from "./pages/Sale";
import Textbooks from "./pages/Textbooks";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/audiobooks" element={<Audiobooks />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </div>
  );
}

export default App;
