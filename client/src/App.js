import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//Pages
import Browser from "./pages/Browser";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Header from "./components/header/Header";
import CreateCFOProfile from "./pages/CreateCFOShop";

function App() {
  return (
    <div className="Initial page">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} /> {}
        <Route path="/browser" element={<Browser />} />
        <Route path="/about" element={<About />} />
        <Route path="/CreateCFOShop" element={<CreateCFOProfile />} />
      </Routes>
    </div>
  );
}

export default App;
