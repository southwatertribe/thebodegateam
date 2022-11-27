import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ShopList() {
    const [shops, setShops] = (useState([]));

    const getShops = async () => {
        const { data } = await axios.get("http:localhost:3001/CFOShop/getShops");
        setShops(data);
      };

    useEffect(()=> {
        getShops();
    }, [])

  return (
    <div>ShopList</div>
  )
}

export default ShopList