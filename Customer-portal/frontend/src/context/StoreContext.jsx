import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000"
  const [token, setToken] = useState("");

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }

  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  },[])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    url,
    token, 
    setToken,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );

}

export default StoreContextProvider;