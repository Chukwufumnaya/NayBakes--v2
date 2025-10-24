import React from "react";
import Header from "../components/Header";
import { useCart } from "../components/CartContext"
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, addQuantity, clearCart } = useCart();
  const subTotal = cartItems.reduce((sum, item) => sum + item.finalPrice * item.quantity, 0);
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
            <div className="justify-center h-full lg:flex">
              <div className="w-full text-center">
                <span className="underline cursor-pointer hover:text-amber-700"
                  onClick={() => clearCart()}>CLEAR CART</span>
                {cartItems.map(item => (
                  <div key={item.cartItemId} className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-3/4 mx-auto flex items-center justify-between gap-2">
                    <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-sm" />

                    <div>
                      <div className="flex flex-wrap items-center justify-center gap-3 font-normal">
                        <p className="text-center">{item.name}</p>
                        <p>${Number(item.finalPrice).toFixed(2)}</p>
                      </div>

                      {item.selectedMods && Object.entries(item.selectedMods).map(([category, mods]) => (
                        <div key={`${item.cartItemId}-${category}`} className="text-[10px] text-center text-neutral-500">
                          <strong>{category}: </strong>

                          {Array.isArray(mods)
                            ? mods.map(m => m.option).join(', ')
                            : mods.option
                          }
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#D5C4A1] font-semibold text-xl cursor-pointer"
                        onClick={() => { removeFromCart(item.cartItemId) }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-[#D5C4A1] font-semibold text-xl cursor-pointer"
                        onClick={() => { addQuantity(item.cartItemId) }}
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
                  <h2 className="mt-4 text-lg font-semibold md:text-xl">Order Summary</h2>


                  {cartItems.map(item => (
                    <div key={`summary-${item.cartItemId}`} className="flex justify-between mt-3 text-sm md:text-sm">

                      <div className="flex flex-wrap items-center gap-1">
                        <p>{item.name} x {item.quantity}</p>
                        {item.selectedMods && Object.entries(item.selectedMods).map(([category, mods]) => (
                          <div key={`${item.cartItemId}-${category}`} className="text-[10px] sm:text-xs text-neutral-500">
                            <span>({category}:{Array.isArray(mods)
                              ? mods.map(m => m.option).join(', ')
                              : mods.option
                            })</span>
                          </div>
                        ))}
                      </div>

                      <span>${(Number(item.finalPrice) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <div className="mt-4 text-sm md:text-lg">
                    <div className="mb-2 border"></div>

                    <p className="flex justify-between">Subtotal: <span>${subTotal.toFixed(2)}</span></p>
                    <p className="flex justify-between mt-3">VAT(10%)<span>${vat.toFixed(2)}</span></p>
                    <div className="mt-1 border border-amber-700"></div>

                    <p className="flex justify-between mt-4 text-lg font-semibold md:text-xl ">Total: <span>${totalPrice.toFixed(2)}</span></p>

                    <div className="border border-amber-700"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Link to="/checkout">
                    <button className="bg-[#D5C4A1] p-2 py-3 rounded-3xl w-[270px] mb-4 cursor-pointer">Proceed to Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

      </section >
    </>
  )
}