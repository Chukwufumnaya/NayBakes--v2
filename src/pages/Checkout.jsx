import React, { useState } from "react";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";

export default function Checkout() {
  const { cartItems } = useCart();
  const subTotal = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);
  const vat = subTotal * 0.10;
  const totalPrice = subTotal + vat;
  const [selectedTime, setSelectedTime] = useState("")

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value)
  }

  const pickUpTimeSlots = () => {
    const minPrepTime = 15;
    const slotInterval = 5;
    const openingTimeHour = 8;
    const openingTimeMinute = 0;
    const closingTimeHour = 19;
    const closingTimeMinute = 0;
    const maxSlots = 12;

    const timeSlots = [];
    const now = new Date();

    const openingTime = new Date(now);
    openingTime.setHours(openingTimeHour, openingTimeMinute, 0, 0);

    const closingTime = new Date(now);
    closingTime.setHours(closingTimeHour, closingTimeMinute, 0, 0);

    if (now.getTime() >= closingTime.getTime() || now.getTime() < openingTime.getTime()) {
      return [];
    }

    let prepStartTime = new Date(now.getTime() + minPrepTime * 60000);

    const minutes = prepStartTime.getMinutes();
    const minutesToNextSlot = slotInterval - (minutes % slotInterval);

    prepStartTime = new Date(prepStartTime.getTime() + minutesToNextSlot * 60000);

    for (let i = 0; i < maxSlots; i++) {
      const nextSlotTime = new Date(prepStartTime.getTime() + i * slotInterval * 60000);

      if (nextSlotTime.getTime() >= closingTime.getTime()) {
        break;
      }

      const timeString = nextSlotTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
      timeSlots.push(timeString);
    }
    return timeSlots;
  };
  const timeSlotsSelector = pickUpTimeSlots();

  const generateTicket = () => (
    <>
      <div>
        <div className=" w-[600px] bg-white text-center h-[420px] border-dashed border-2 m-auto">
          <div className="w-[500px] bg-amber-300 m-auto h-[415px]">
            <h2>NAYBAKES</h2>
            <h2>PICKUP TICKET</h2>
            <p>NAY-{Date.now()}-BAKES</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Header></Header>
      <section className="p-2 mt-5" >
        <h2 className="mb-4 text-4xl font-normal text-center">CHECKOUT</h2>
        <div className="text-center">
          <p className="sm:text-lg">Order Summary</p>
          <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-[70%] mx-auto sm:text-lg text-sm">
            {cartItems.map(item => (
              <div key={`summary-${item.cartItemId}`} className="flex justify-between mt-3">

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
          </div>
          <p className="sm:text-lg">Price BreakDown</p>
          <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-[70%] mx-auto text-sm sm:text-lg">
            <p className="flex justify-between">Subtotal: <span>${subTotal.toFixed(2)}</span></p>
            <p className="flex justify-between">VAT: <span>${vat.toFixed(2)}</span></p>
            <p className="flex justify-between mt-4 font-semibold text-amber-700">Total Amount to Pay at Pickup: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
          <div>
            <p className="sm:text-lg">Pickup Time</p>
            <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[100%] sm:w-2/3 mx-auto text-xs sm:text-sm">
              <select name="" id="" className="w-4/5 outline-none cursor-pointer">
                {timeSlotsSelector.length > 0 ? (
                  <>
                    <option value="" disabled selected>
                      Select your pickup time
                    </option>
                    {timeSlotsSelector.map((time, index) => (
                      <option
                        key={index}
                        value={time}
                        onChange={handleTimeSelect}
                      >
                        {time}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="" disabled selected>Sorry, we are currently closed or too busy</option>
                )}
              </select>
            </div>
          </div>
          <button
            disabled={!selectedTime} className="bg-[#D5C4A1] p-2 py-3 rounded-3xl w-[270px] mb-4 cursor-pointer">Generate Order Ticket</button>
        </div>
      </section>

    </>
  )
}