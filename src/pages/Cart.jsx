import React from "react";
import Header from "../components/Header";
import { useCart } from "../components/CartContext"

export default function Cart() {
  const { cartItems, removeFromCart, addQuantity } = useCart();
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subTotal * 0.10;
  const totalPrice = subTotal + vat;


  return (
    <>
      <Header />
      <section className="mt-5" >
        <h2 className="mb-4 text-4xl font-normal text-center">CART</h2>
        {cartItems.length === 0 ? (
          <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 max-w-[90%] mx-auto">
            <p className="text-center">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="justify-center h-full md:flex">
              <div className="w-full">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-3/4 mx-auto flex items-center justify-between gap-2">
                    <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-sm" />

                    <div>
                      <div className="flex flex-wrap items-center justify-center gap-3 font-normal">
                        <p className="text-center">{item.name}</p>
                        <p>${item.price}</p>
                      </div>

                      {item.availableMods && item.availableMods.map(mod => (
                        <div key={`mod-${item.id}`} className="text-[10px] text-center sm:text-sm">
                          <span>({mod.category} : {mod.default})</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#D5C4A1] font-semibold text-xl cursor-pointer"
                        onClick={() => { removeFromCart(item.id) }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#D5C4A1] font-semibold text-xl cursor-pointer"
                        onClick={() => { addQuantity(item.id) }}
                      >
                        +
                      </button>

                    </div>

                  </div>
                ))
                }
              </div>
              <div className="relative flex flex-col w-full md:sticky">
                <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-3/4 mx-auto">
                  <h2 className="mt-4 text-xl font-semibold md:text-2xl">Order Summary</h2>
                  {cartItems.map(item => (
                    <div key={`summary-${item.id}`} className="flex justify-between mt-3 md:text-xl">
                      <p>{item.name} x {item.quantity}</p>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="mt-4 md:text-xl">
                    <div className="mb-2 border"></div>

                    <p className="flex justify-between">Subtotal: <span>${subTotal.toFixed(2)}</span></p>
                    <p className="flex justify-between mt-3">VAT(10%)<span>${vat.toFixed(2)}</span></p>
                    <div className="mt-1 border border-amber-700"></div>

                    <p className="flex justify-between mt-4 text-xl font-semibold md:text-2xl ">Total: <span>${totalPrice.toFixed(2)}</span></p>

                    <div className="border border-amber-700"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-[#D5C4A1] p-2 py-3 rounded-3xl w-[270px] mb-4 cursor-pointer">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </>
        )}

      </section >
    </>
  )
}