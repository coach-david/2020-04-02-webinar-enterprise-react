import {useContext} from "react";
import {set} from 'lodash';
import CartContext from "../context/CartContext";

const findCartItemIndex = (cart, id) => {
  return cart.findIndex(product => product.id === id);
};

const addOrUpdateCart = (cart, {id, url, format, quantity}) => {
  const foundCartItemIndex = findCartItemIndex(cart, id);
  if (foundCartItemIndex === -1) return [...cart, {id, url, format, quantity}];

  const updatedCartItem = {
    ...cart[foundCartItemIndex],
    quantity: cart[foundCartItemIndex].quantity + quantity,
  };

  return set(cart, [foundCartItemIndex], updatedCartItem);
};

const useCart = () => {
  const {cart, setCart} = useContext(CartContext);

  function addToCart({id, url, format, quantity}) {
    const updatedCart = addOrUpdateCart(cart, {id, url, format, quantity});
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
