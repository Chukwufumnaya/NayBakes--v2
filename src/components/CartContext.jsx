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
    const uniqueCartId = Date.now() + Math.random();

    setCartItems(prevCartItems => {
      const isCustomized = productToAdd.selectedMods && Object.keys(productToAdd.selectedMods).length > 0;

      let existingItem = null;

      if (!isCustomized) {
       existingItem = prevCartItems.find(item => item.id === productToAdd.id && !item.selectedMods);
      }

      if (existingItem) {
        return prevCartItems.map(item =>
          item.cartItemid === existingItem.cartItemid
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...productToAdd, quantity: 1, cartItemId: uniqueCartId }];
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

  const removeFromCart = useCallback((cartItemId) => {
    setCartItems(prevCartItems => {
      const itemToRemove = prevCartItems.find(item => item.cartItem.id === cartItemId)

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          return prevCartItems.map(item =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCartItems.filter(item => item.cartItemId !== cartItemId)
        }
      }
      return prevCartItems;
    }
    );
  }, []);

  const addQuantity = useCallback((cartItemId) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.cartItemId === cartItemId
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