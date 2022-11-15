import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

import './App.css';
//Pages
import Browser from "./pages/Browser/Browser";
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import YourShop from "./pages/Individual Shop/IndividualShop";
import Header from "./components/header/Header";
import Footer from "./components/botHeader/botHeader";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <>
      <Header/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Welcome/>} /> {}
        <Route path="/browser" element={<Browser/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/yourshop" element={<YourShop/>}/>
      </Routes>
    </>
  );
}

export default App;


// <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         {!data ? "loading..." : data} 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Header/>
//     </div>