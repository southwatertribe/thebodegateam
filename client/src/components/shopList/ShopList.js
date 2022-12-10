import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShopCard from '../shopcard/ShopCard';

function ShopList() {
    const [shops, setShops] = (useState([]));

    const getShops = async () => {
        const data  = await axios.get("http:localhost:3001/CFOShop/getShops");
        setShops(data);
      };

    useEffect(()=> {
        getShops();
    }, [])
    
    // //Create map of shopcards
    // const shopsList = shops.map((shop) => <ShopCard></ShopCard>)
  return (
    <div>ShopList</div>
  )
}

export default ShopList