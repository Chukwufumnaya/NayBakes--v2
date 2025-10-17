import React, { useState, useCallback, createContext, useContext } from "react";


const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [clickedItemId, setClickedItemId] = useState(null);
  const [clickTimeout, setClickTimeout] = useState(null);

  const addToCart = useCallback((productToAdd) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return prevCartItems.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...productToAdd, quantity: 1 }];
      }
    });


    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }

    setClickedItemId(productToAdd.id);

    const timer = setTimeout(() => {
      setClickedItemId(null);
      setClickTimeout(null);
    }, 1000);

    setClickTimeout(timer);

  }, [clickTimeout]);

  const removeFromCart = useCallback((productId) => {
    setCartItems(prevCartItems => {
      const itemToRemove = prevCartItems.find(item => item.id === productId)

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          return prevCartItems.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCartItems.filter(item => item.id !== productId)
        }
      }
      return prevCartItems;
    }
    );
  }, []);

  const addQuantity = useCallback((productId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clickedItemId,
    addQuantity
  };
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}