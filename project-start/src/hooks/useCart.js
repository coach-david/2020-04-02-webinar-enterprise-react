import {useContext} from "react";
import {set} from 'lodash';
import CartContext from "../context/CartContext";

const findCartItemIndex = (cart, id) => {
  return cart.findIndex(product => product.id === id);
};

const addOrUpdateCart = (cart, {id, url, format, amount}) => {
  const foundCartItemIndex = findCartItemIndex(cart, id);
  if (foundCartItemIndex === -1) return [...cart, {id, url, format, amount}];

  const updatedCartItem = {
    ...cart[foundCartItemIndex],
    amount: cart[foundCartItemIndex].amount + amount,
  };

  return set(cart, [foundCartItemIndex], updatedCartItem);
};

const useCart = () => {
  const {cart, setCart} = useContext(CartContext);

  function addToCart({id, url, format, amount}) {
    const updatedCart = addOrUpdateCart(cart, {id, url, format, amount});
    setCart(updatedCart);
  }
  console.log('cart', cart);
  return {
    total: cart.length,
    cart,
    addToCart
  }
};

export default useCart;
