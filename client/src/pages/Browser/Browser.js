import React, { useState, useEffect } from "react";
import "../pages.css";
import Axios from "axios";
//sShop Card
import ShopCard from "../../components/shopcard/ShopCard";

function Browser() {
  const [cfoList, setCFOlist2] = useState([]);
  const getCFOdata = () => {
    Axios.get("http://localhost:3001/CreateCFOShop/GetCFOShop").then(
      (response) => {
        setCFOlist2(response.data);
      }
    );
  };
  const shopItems = cfoList.map((shop) => 
      <ShopCard {...shop}></ShopCard>
  );
  // Return statemnt should retur cards of CFO so the User can browse
  return (
    <ul>{shopItems}</ul>
  ); //end
} //end Browser Page

export default Browser;
