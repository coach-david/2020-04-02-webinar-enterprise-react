import React, {useEffect, useState} from "react";
import CartContext from './CartContext';

const STORAGE_KEY = 'CART';

const CartProvider = ({ children }) => {
  const cartFromStorage = localStorage.getItem(STORAGE_KEY);
  const [cart, setCart] = useState(cartFromStorage ? JSON.parse(cartFromStorage) : []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart]);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

export default CartProvider;
