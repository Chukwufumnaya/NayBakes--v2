import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const subTotal = cartItems.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
  const vat = subTotal * 0.10;
  const totalPrice = subTotal + vat;
  
  {/**Generates the time slots for pickup time selection */}
  const pickUpTimeSlots = () => {
    const minPrepTime = 15;
    const slotInterval = 5;

    const openingTimeHour = 0;
    const openingTimeMinute = 0;

    const closingTimeHour = 24;
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

  const [selectedTime, setSelectedTime] = useState("")

  const [isTicketGenerated, setisTicketGenerated] = useState(false);

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value)
  }

  const generateTicket = () => {
    if (!selectedTime) {
      console.error('Please select a valid pickup time first')
      return
    }
    setisTicketGenerated(true);
  };


  const handleTicketClose = () => {
    setisTicketGenerated(false);
    clearCart();
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  const orderSummary = cartItems.map(item => (
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
  ))



  return (
    <>
      <Header></Header>
      <section className="p-2 mt-5" >
        <h2 className="mb-4 text-4xl font-normal text-center">CHECKOUT</h2>
        <div className="text-center">
          <p className="sm:text-lg">Order Summary</p>
          <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-[70%] mx-auto sm:text-lg text-sm">
            {orderSummary}
          </div>
          <p className="sm:text-lg">Price BreakDown</p>
          <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[90%] md:w-[70%] mx-auto text-sm sm:text-lg">

            <p className="flex justify-between">Subtotal: <span>${subTotal.toFixed(2)}</span></p>

            <p className="flex justify-between">VAT: <span>${vat.toFixed(2)}</span></p>

            <p className="flex justify-between mt-4 text-lg font-medium text-amber-700">Total Amount to Pay at Pickup: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
          <div>
            <p className="sm:text-lg">Pickup Time</p>
            <div className="bg-[#f7f3e9] p-4 rounded-xl shadow mb-6 w-[100%] sm:w-2/3 mx-auto text-sm">
              <select
                name=""
                id=""
                value={selectedTime}
                onChange={handleTimeSelect}
                className="w-4/5 outline-none cursor-pointer">
                {timeSlotsSelector.length > 0 ? (
                  <>
                    <option value="" disabled>
                      Select your pickup time
                    </option>
                    {timeSlotsSelector.map((time, index) => (
                      <option
                        key={index}
                        value={time}
                      >
                        {time}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="" disabled>Sorry, we are currently closed or too busy</option>
                )}
              </select>
            </div>
          </div>
          <button
            onClick={generateTicket}
            disabled={!selectedTime}
            className={`${!selectedTime ? 'bg-[#d5c4a165]' : 'bg-[#D5C4A1] cursor-pointer'} p-2 py-3 rounded-3xl w-[270px] mb-4`}>Generate Order Ticket</button>
        </div>

        {isTicketGenerated &&
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center h-screen p-3 bg-black/50">
            <div className="relative overflow-y-auto">
              <button
                onClick={handleTicketClose}
                className="absolute top-0 right-0 z-10 p-2 m-3 text-xl font-bold rounded-full shadow-lg hover:bg-red-500 hover:text-white print:hidden"
              >
                &times;
              </button>

              <div id="printable-ticket" className=" w-[300px] bg-white text-center m-auto p-3">
                <div className="w-[280px] m-auto h-fit p-2 border-dashed border-2">
                  <h2 className="text-lg font-mont">NAYBAKES</h2>
                  <p className="text-xs">ORDER ID: NAY-{Date.now()}-BAKES</p>
                  <div>
                    {orderSummary}
                    <p className="mt-3 font-medium">VAT: ${vat.toFixed(2)}</p>
                  </div>
                  <p className="mt-4 text-2xl font-medium text-amber-700">Total Due:${totalPrice.toFixed(2)} </p>
                  <p className="mt-10 mb-6 text-2xl font-medium text-amber-700">Pickup Time: {selectedTime} </p>
                  <div className="text-xs font-medium">
                    <p>Please present this ticket at pickup.</p>
                    <p>You will be paying at pickup.</p>
                    <p>Please print this ticket immediately.</p>
                    <p>Thank you!</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center print:hidden">
                <button
                  onClick={handlePrint}
                  className="p-3 text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                >
                  Print Order Ticket
                </button>
              </div>
            </div>
          </div>

        }

      </section>

    </>
  )
}