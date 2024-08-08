import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const product = cart.find((i) => i.id === item.id);
      product.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    const itemsIn = cart.filter((item) => item.id !== id);
    setCart([...itemsIn]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const totalProducts = () =>{
    return cart.reduce((acumulador, item) => acumulador += item.quantity, 0);
  };

  const sumProducts = () =>{
    return cart.reduce((acumulador, item) => acumulador += item.quantity * item.precio, 0); //calculo la cant de productos del mismo item, multiplicado por su precio
  };


  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalProducts, sumProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
