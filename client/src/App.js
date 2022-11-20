import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//Pages
import Browser from "./pages/Browser";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Header from "./components/header/Header";
import CreateCFOShop from "./pages/CreateCFOShop";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="Initial page">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} /> {}
        <Route path="/browser" element={<Browser />} />
        <Route path="/about" element={<About />} />
        <Route path="/CreateCFOShop" element={<CreateCFOShop />} />
      </Routes>
    </div>
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
