import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//Pages
import Browser from "./pages/Browser/Browser";
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import YourShop from "./pages/Individual Shop/IndividualShop";
import Header from "./components/header/Header";
import Footer from "./components/botHeader/botHeader";
import CreateCFOShop from "./pages/CreateCFOShop";
import CreateCustomer from "./pages/CreateCustomer";
import Support from "./pages/Support/support";

//COMMENT TO SEE IF I FIXED MY GITHUB ISSUE

function App() {
  return (
    <div className="Initial page">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} /> {}
        <Route path="/browser" element={<Browser />} />
        <Route path="/about" element={<About />} />
        <Route path="/CreateCFOShop" element={<CreateCFOShop />} />
        <Route path="/CreateCustomer" element={<CreateCustomer />} />
        <Route path="/yourshop" element={<YourShop />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
    
  );
}

export default App;
