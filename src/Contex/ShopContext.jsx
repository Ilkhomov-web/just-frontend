import React, { createContext, useState, useEffect } from "react";
import { BACKEND_API } from '../config';

export const ShopContext = createContext(null);

const getDefaultCard = () => {
  let card = {};
  for(let index = 0; index < 300 + 1; index++){
    card[index] = 0;
  }
  return card;
}

const ShopContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [all_product, setAll_Product] = useState([]);
  const [cardItems, setCardItems] = useState(getDefaultCard());

  useEffect(()=>{
    setLoading(true);
    fetch(`${BACKEND_API}/products`)
    .then((response) => response.json())
    .then((data) => setAll_Product(data))
    .then(() => setLoading(false));

    if(localStorage.getItem('auth-token')){
      fetch(`${BACKEND_API}/products/getcard`, {
        method: 'GET',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => setCardItems(data));
    }
  },[]);

  const addToCard = (itemId, selectedSize) => {
    setCardItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    if(localStorage.getItem('auth-token')){
      fetch(`${BACKEND_API}/products/add-card`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId})
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  }

  const removeFromCard = (itemId) => {
    setCardItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    if(localStorage.getItem('auth-token')){
      fetch(`${BACKEND_API}/products/delete-card`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId})
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  }

  const getTotalCardAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems) {
        if (cardItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cardItems[item];
        }
    }

    let totalAmountStr = totalAmount.toString();
    const len = totalAmountStr.length;

    if (len === 5) {
        totalAmountStr = totalAmountStr.slice(0, 2) + '.' + totalAmountStr.slice(2);
    } else if (len === 6) {
        totalAmountStr = totalAmountStr.slice(0, 3) + '.' + totalAmountStr.slice(3);
    } else if (len === 7) {
        totalAmountStr = totalAmountStr.slice(0, 4) + '.' + totalAmountStr.slice(4);
    }

    return totalAmountStr;
};

  
  const getTotalCardItems = () => {
    let totalItem = 0;
    for(const item in cardItems){
      if(cardItems[item] > 0){
        totalItem += cardItems[item];
      }
    }
    return totalItem;
  }

  const clearCardItems = () => {
    setCardItems(getDefaultCard());
  };

  const contextValue = { getTotalCardItems, getTotalCardAmount, loading, all_product, cardItems, addToCard, removeFromCard, clearCardItems };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
