import React, { createContext } from "react";
import { all_product } from '../assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={{all_product}}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;