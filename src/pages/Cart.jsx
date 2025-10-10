import React from "react";
import Header from "../components/Header";
import { useCart } from "../components/CartContext"

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum * item.price, 1);
  
  const cartDisplay = (
    <section className="mt-5">
      <h2 className="mb-4 text-4xl font-normal text-center">CART</h2>
      <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 max-w-4/5 mx-auto ">

        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex items-center justify-around mb-3">
              <p>Items</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <ul>
              {cartItems.map(item => (
                <div key={item.id}>
                  <li className="flex items-center justify-between mb-2">
                    <div className="flex flex-col items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-[200px] h-[200px] object-cover rounded-full" />
                      <span>{item.name}</span>
                    </div>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                    <span>{totalPrice}</span>
                    <button
                      className="px-2 py-1 ml-2 bg-red-300 rounded hover:bg-red-400"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                  <div className="w-full m-auto mb-2 border border-b-black"></div>
                </div>

              ))}
            </ul>
          </>

        )}
      </div>
    </section>
  )
  return (
    <>
      <Header />
      <section>
        {cartDisplay}
      </section>
    </>
  )
}